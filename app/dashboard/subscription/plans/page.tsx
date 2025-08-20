"use client"

import { useAuth } from "@/lib/auth-context"
import { useSubscription } from "@/lib/subscription-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { SubscriptionPlans } from "@/components/subscription/subscription-plans"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PlansPage() {
  const { user, isLoading: authLoading } = useAuth()
  const { subscription, isLoading: subscriptionLoading } = useSubscription()
  const router = useRouter()

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    }
  }, [user, authLoading, router])

  if (authLoading || subscriptionLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 space-y-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => router.push("/dashboard/subscription")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Planes de Suscripción</h1>
              <p className="text-muted-foreground mt-1">Elige el plan que mejor se adapte a tus necesidades</p>
            </div>
          </div>

          {/* Current plan indicator */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Plan Actual</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Actualmente tienes el plan{" "}
                <span className="font-semibold text-foreground capitalize">{subscription?.plan}</span>
                {subscription?.plan !== "free" && (
                  <span className="ml-2">
                    - Próxima facturación: {new Date(subscription?.nextBilling || "").toLocaleDateString("es-ES")}
                  </span>
                )}
              </CardDescription>
            </CardContent>
          </Card>

          <SubscriptionPlans />
        </main>
      </div>
    </div>
  )
}
