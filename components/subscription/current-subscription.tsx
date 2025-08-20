"use client"

import { useAuth } from "@/lib/auth-context"
import { useSubscription } from "@/lib/subscription-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Calendar, CreditCard, Building2, TrendingUp } from "lucide-react"

export function CurrentSubscription() {
  const { user } = useAuth()
  const { plans, userSubscription } = useSubscription()

  if (!user || !userSubscription) return null

  const currentPlan = plans.find((plan) => plan.id === userSubscription.planId)
  if (!currentPlan) return null

  const usagePercentage = (user.propertiesCount / user.maxProperties) * 100
  const daysUntilRenewal = Math.ceil(
    (new Date(userSubscription.currentPeriodEnd).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
  )

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Plan Actual
            </CardTitle>
            <Badge className={currentPlan.color}>{currentPlan.displayName}</Badge>
          </div>
          <CardDescription>Tu suscripción activa</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${currentPlan.price}</span>
            <span className="text-muted-foreground">por mes</span>
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Próxima renovación:
              </span>
              <span className="font-medium">{new Date(userSubscription.currentPeriodEnd).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Estado:</span>
              <Badge variant={userSubscription.status === "active" ? "default" : "destructive"}>
                {userSubscription.status === "active" ? "Activa" : "Inactiva"}
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Días restantes:</span>
              <span className="font-medium">{daysUntilRenewal} días</span>
            </div>
          </div>

          {currentPlan.id !== "premium" && <Button className="w-full mt-4">Actualizar Plan</Button>}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Uso del Plan
          </CardTitle>
          <CardDescription>Límites y uso actual</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Propiedades:
              </span>
              <span className="font-medium">
                {user.propertiesCount}/{user.maxProperties}
              </span>
            </div>
            <Progress value={usagePercentage} className="w-full" />
            <p className="text-xs text-muted-foreground">{usagePercentage.toFixed(0)}% utilizado</p>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Características incluidas:</h4>
            <div className="space-y-1">
              {currentPlan.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </div>
              ))}
              {currentPlan.features.length > 4 && (
                <p className="text-xs text-muted-foreground">+{currentPlan.features.length - 4} más...</p>
              )}
            </div>
          </div>

          {usagePercentage > 80 && (
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                Estás cerca del límite de propiedades. Considera actualizar tu plan.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
