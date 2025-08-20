"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useAuth } from "./auth-context"

export interface Property {
  id: string
  title: string
  description: string
  price: number
  type: "apartment" | "house" | "condo" | "commercial"
  status: "available" | "rented" | "maintenance"
  bedrooms: number
  bathrooms: number
  area: number
  address: string
  city: string
  images: string[]
  amenities: string[]
  createdAt: string
  updatedAt: string
  userId: string
}

interface PropertiesContextType {
  properties: Property[]
  addProperty: (property: Omit<Property, "id" | "createdAt" | "updatedAt" | "userId">) => void
  updateProperty: (id: string, property: Partial<Property>) => void
  deleteProperty: (id: string) => void
  getProperty: (id: string) => Property | undefined
  isLoading: boolean
}

const PropertiesContext = createContext<PropertiesContextType | undefined>(undefined)

// Mock properties data
const mockProperties: Property[] = [
  {
    id: "1",
    title: "Apartamento Moderno en Zona Colonial",
    description: "Hermoso apartamento completamente renovado en el corazón de la Zona Colonial",
    price: 1200,
    type: "apartment",
    status: "rented",
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    address: "Calle Mercedes #123",
    city: "Santo Domingo",
    images: ["/modern-apartment-living.png"],
    amenities: ["WiFi", "Aire Acondicionado", "Cocina Equipada", "Seguridad 24/7"],
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15",
    userId: "1",
  },
  {
    id: "2",
    title: "Casa Familiar en Bella Vista",
    description: "Espaciosa casa familiar con jardín y piscina en exclusivo sector",
    price: 2500,
    type: "house",
    status: "available",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    address: "Av. Sarasota #456",
    city: "Santo Domingo",
    images: ["/family-house-with-pool.png"],
    amenities: ["Piscina", "Jardín", "Garaje", "Terraza", "Cocina Equipada"],
    createdAt: "2024-02-01",
    updatedAt: "2024-02-01",
    userId: "1",
  },
  {
    id: "3",
    title: "Oficina Comercial en Piantini",
    description: "Moderna oficina en torre comercial con excelente ubicación",
    price: 1800,
    type: "commercial",
    status: "maintenance",
    bedrooms: 0,
    bathrooms: 2,
    area: 120,
    address: "Torre Empresarial, Piso 8",
    city: "Santo Domingo",
    images: ["/modern-office.png"],
    amenities: ["Internet Fibra", "Aire Acondicionado", "Seguridad", "Elevador", "Estacionamiento"],
    createdAt: "2024-01-20",
    updatedAt: "2024-02-10",
    userId: "1",
  },
]

export function PropertiesProvider({ children }: { children: React.ReactNode }) {
  const [properties, setProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    // Simulate loading user's properties
    if (user) {
      const userProperties = mockProperties.filter((p) => p.userId === user.id)
      setProperties(userProperties)
    }
    setIsLoading(false)
  }, [user])

  const addProperty = (propertyData: Omit<Property, "id" | "createdAt" | "updatedAt" | "userId">) => {
    if (!user) return

    const newProperty: Property = {
      ...propertyData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
      userId: user.id,
    }

    setProperties((prev) => [...prev, newProperty])
    mockProperties.push(newProperty)
  }

  const updateProperty = (id: string, updates: Partial<Property>) => {
    setProperties((prev) =>
      prev.map((property) =>
        property.id === id ? { ...property, ...updates, updatedAt: new Date().toISOString().split("T")[0] } : property,
      ),
    )

    const index = mockProperties.findIndex((p) => p.id === id)
    if (index !== -1) {
      mockProperties[index] = { ...mockProperties[index], ...updates }
    }
  }

  const deleteProperty = (id: string) => {
    setProperties((prev) => prev.filter((property) => property.id !== id))
    const index = mockProperties.findIndex((p) => p.id === id)
    if (index !== -1) {
      mockProperties.splice(index, 1)
    }
  }

  const getProperty = (id: string) => {
    return properties.find((property) => property.id === id)
  }

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        addProperty,
        updateProperty,
        deleteProperty,
        getProperty,
        isLoading,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  )
}

export function useProperties() {
  const context = useContext(PropertiesContext)
  if (context === undefined) {
    throw new Error("useProperties must be used within a PropertiesProvider")
  }
  return context
}
