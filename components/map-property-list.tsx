"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Bed, Bath, Square } from "lucide-react"
import Image from "next/image"

interface Property {
  id: string
  title: string
  price: string
  address: string
  beds: number
  baths: number
  sqft: string
  image: string
  lat: number
  lng: number
  type: "sale" | "rent"
}

interface MapPropertyListProps {
  properties: Property[]
  selectedProperty?: string
  onPropertySelect?: (propertyId: string) => void
  onPropertyHover?: (propertyId: string | null) => void
}

export function MapPropertyList({
  properties,
  selectedProperty,
  onPropertySelect,
  onPropertyHover,
}: MapPropertyListProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4 border-b bg-white sticky top-0 z-10">
        <h2 className="text-lg font-semibold text-gray-900">{properties.length} Properties Found</h2>
      </div>

      <div className="p-4 space-y-4">
        {properties.map((property) => (
          <Card
            key={property.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedProperty === property.id ? "ring-2 ring-cyan-500 shadow-md" : ""
            }`}
            onClick={() => onPropertySelect?.(property.id)}
            onMouseEnter={() => onPropertyHover?.(property.id)}
            onMouseLeave={() => onPropertyHover?.(null)}
          >
            <div className="relative">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Button variant="ghost" size="sm" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                <Heart className="h-4 w-4" />
              </Button>
              <Badge variant="secondary" className="absolute bottom-2 left-2 bg-white/90">
                {property.type === "sale" ? "For Sale" : "For Rent"}
              </Badge>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{property.price}</h3>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span>{property.beds} beds</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  <span>{property.baths} baths</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="h-4 w-4" />
                  <span>{property.sqft}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600">{property.address}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
