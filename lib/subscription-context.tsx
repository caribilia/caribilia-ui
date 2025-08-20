"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import { useAuth } from "./auth-context"

export interface SubscriptionPlan {
  id: string
  name: string
  displayName: string
  price: number
  interval: "month" | "year"
  maxProperties: number
  features: string[]
  popular?: boolean
  color: string
}

export interface UserSubscription {
  planId: string
  status: "active" | "canceled" | "past_due"
  currentPeriodStart: string
  currentPeriodEnd: string
  cancelAtPeriodEnd: boolean
}

interface SubscriptionContextType {
  plans: SubscriptionPlan[]
  userSubscription: UserSubscription | null
  upgradePlan: (planId: string) => Promise<boolean>
  cancelSubscription: () => Promise<boolean>
  isLoading: boolean
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined)

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "free",
    name: "free",
    displayName: "Gratuito",
    price: 0,
    interval: "month",
    maxProperties: 3,
    features: ["Hasta 3 propiedades", "Gestión básica de propiedades", "Dashboard básico", "Soporte por email"],
    color: "bg-gray-100 text-gray-800",
  },
  {
    id: "basic",
    name: "basic",
    displayName: "Básico",
    price: 29,
    interval: "month",
    maxProperties: 15,
    features: [
      "Hasta 15 propiedades",
      "Gestión avanzada de propiedades",
      "Analíticas básicas",
      "Gestión de inquilinos",
      "Reportes mensuales",
      "Soporte prioritario",
    ],
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "premium",
    name: "premium",
    displayName: "Premium",
    price: 79,
    interval: "month",
    maxProperties: 50,
    features: [
      "Hasta 50 propiedades",
      "Gestión completa de propiedades",
      "Analíticas avanzadas",
      "Gestión de inquilinos",
      "Reportes personalizados",
      "Automatización de tareas",
      "API access",
      "Soporte 24/7",
      "Consultor dedicado",
    ],
    popular: true,
    color: "bg-primary text-primary-foreground",
  },
]

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  // Mock user subscription based on user data
  const userSubscription: UserSubscription | null = user
    ? {
        planId: user.subscription,
        status: "active",
        currentPeriodStart: "2024-01-01",
        currentPeriodEnd: "2024-02-01",
        cancelAtPeriodEnd: false,
      }
    : null

  const upgradePlan = async (planId: string): Promise<boolean> => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, this would update the user's subscription
      console.log(`Upgrading to plan: ${planId}`)

      setIsLoading(false)
      return true
    } catch (error) {
      setIsLoading(false)
      return false
    }
  }

  const cancelSubscription = async (): Promise<boolean> => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Subscription canceled")

      setIsLoading(false)
      return true
    } catch (error) {
      setIsLoading(false)
      return false
    }
  }

  return (
    <SubscriptionContext.Provider
      value={{
        plans: subscriptionPlans,
        userSubscription,
        upgradePlan,
        cancelSubscription,
        isLoading,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscription() {
  const context = useContext(SubscriptionContext)
  if (context === undefined) {
    throw new Error("useSubscription must be used within a SubscriptionProvider")
  }
  return context
}
