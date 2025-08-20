"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useSubscription } from "@/lib/subscription-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Check, Star, Loader2 } from "lucide-react"

export function SubscriptionPlans() {
  const { user } = useAuth()
  const { plans, upgradePlan, isLoading } = useSubscription()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleUpgrade = async (planId: string) => {
    if (!user || planId === user.subscription) return

    setSelectedPlan(planId)
    const result = await upgradePlan(planId)

    if (result) {
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    }
    setSelectedPlan(null)
  }

  const isCurrentPlan = (planId: string) => user?.subscription === planId
  const isUpgrade = (planId: string) => {
    const planOrder = { free: 0, basic: 1, premium: 2 }
    const currentOrder = planOrder[user?.subscription as keyof typeof planOrder] || 0
    const targetOrder = planOrder[planId as keyof typeof planOrder] || 0
    return targetOrder > currentOrder
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">Planes de Suscripción</h2>
        <p className="text-muted-foreground mt-2">Elige el plan que mejor se adapte a tus necesidades</p>
      </div>

      {success && (
        <Alert className="bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            ¡Plan actualizado exitosamente! Los cambios se aplicarán en tu próximo ciclo de facturación.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative overflow-hidden transition-all duration-200 ${
              plan.popular ? "ring-2 ring-primary shadow-lg scale-105" : "hover:shadow-md"
            } ${isCurrentPlan(plan.id) ? "bg-muted/30" : ""}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                <Star className="inline h-4 w-4 mr-1" />
                Más Popular
              </div>
            )}

            <CardHeader className={plan.popular ? "pt-12" : ""}>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{plan.displayName}</CardTitle>
                {isCurrentPlan(plan.id) && <Badge variant="secondary">Actual</Badge>}
              </div>
              <CardDescription>
                <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground">/{plan.interval === "month" ? "mes" : "año"}</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Hasta {plan.maxProperties} propiedades</p>
                <Separator />
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Características incluidas:</h4>
                <div className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                {isCurrentPlan(plan.id) ? (
                  <Button variant="outline" className="w-full bg-transparent" disabled>
                    Plan Actual
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    variant={isUpgrade(plan.id) ? "default" : "outline"}
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={isLoading}
                  >
                    {isLoading && selectedPlan === plan.id ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Procesando...
                      </>
                    ) : isUpgrade(plan.id) ? (
                      "Actualizar Plan"
                    ) : (
                      "Cambiar Plan"
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>Todos los planes incluyen soporte técnico y actualizaciones gratuitas.</p>
        <p>Puedes cambiar o cancelar tu suscripción en cualquier momento.</p>
      </div>
    </div>
  )
}
