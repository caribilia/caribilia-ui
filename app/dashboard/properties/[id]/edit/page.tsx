"use client"

import { useAuth } from "@/lib/auth-context"
import { useProperties } from "@/lib/properties-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { PropertyForm } from "@/components/properties/property-form"

interface EditPropertyPageProps {
  params: {
    id: string
  }
}

export default function EditPropertyPage({ params }: EditPropertyPageProps) {
  const { user, isLoading: authLoading } = useAuth()
  const { getProperty, isLoading: propertiesLoading } = useProperties()
  const router = useRouter()
  const property = getProperty(params.id)

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    }
  }, [user, authLoading, router])

  useEffect(() => {
    if (!propertiesLoading && !property) {
      router.push("/dashboard/properties")
    }
  }, [property, propertiesLoading, router])

  if (authLoading || propertiesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user || !property) return null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Editar Propiedad</h1>
              <p className="text-muted-foreground mt-1">Actualiza la información de "{property.title}"</p>
            </div>
            <PropertyForm property={property} />
          </div>
        </main>
      </div>
    </div>
  )
}
