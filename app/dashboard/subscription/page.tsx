"use client"

import { useAuth } from "@/lib/auth-context"
import { useSubscription } from "@/lib/subscription-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { CurrentSubscription } from "@/components/subscription/current-subscription"
import { BillingHistory } from "@/components/subscription/billing-history"
import { Button } from "@/components/ui/button"
import { CreditCard, ArrowRight } from "lucide-react"

export default function SubscriptionPage() {
  const { user, isLoading: authLoading } = useAuth()
  const { isLoading: subscriptionLoading } = useSubscription()
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Mi Suscripción</h1>
              <p className="text-muted-foreground mt-1">Información de tu plan actual y facturación</p>
            </div>
            <Button onClick={() => router.push("/dashboard/subscription/plans")} className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Ver Planes
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <CurrentSubscription />
          <BillingHistory />
        </main>
      </div>
    </div>
  )
}
