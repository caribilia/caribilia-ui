"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, List, MapIcon } from "lucide-react"

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

interface PropertyMapProps {
  properties: Property[]
  selectedProperty?: string
  onPropertySelect?: (propertyId: string) => void
  showListView?: boolean
  onToggleView?: () => void
}

export function PropertyMap({
  properties,
  selectedProperty,
  onPropertySelect,
  showListView = false,
  onToggleView,
}: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    const loadMap = async () => {
      if (typeof window === "undefined") return

      const L = (await import("leaflet")).default

      // Import CSS
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      document.head.appendChild(link)

      if (mapRef.current && !mapInstanceRef.current) {
        // Initialize map
        mapInstanceRef.current = L.map(mapRef.current).setView([40.7128, -74.006], 10)

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(mapInstanceRef.current)

        setIsLoaded(true)
      }
    }

    loadMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!isLoaded || !mapInstanceRef.current) return

    const loadMarkersAndBounds = async () => {
      const L = (await import("leaflet")).default

      // Clear existing markers
      markersRef.current.forEach((marker) => marker.remove())
      markersRef.current = []

      if (properties.length === 0) return

      // Create custom icon
      const createCustomIcon = (price: string, isSelected: boolean) => {
        return L.divIcon({
          html: `
            <div class="property-marker ${isSelected ? "selected" : ""}" style="
              background: ${isSelected ? "#0891b2" : "#dc2626"};
              color: white;
              padding: 4px 8px;
              border-radius: 16px;
              font-size: 12px;
              font-weight: 600;
              border: 2px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              white-space: nowrap;
              transform: translate(-50%, -100%);
            ">
              ${price}
            </div>
          `,
          className: "custom-marker",
          iconSize: [0, 0],
          iconAnchor: [0, 0],
        })
      }

      // Add markers for each property
      const bounds = L.latLngBounds([])

      properties.forEach((property) => {
        const marker = L.marker([property.lat, property.lng], {
          icon: createCustomIcon(property.price, selectedProperty === property.id),
        }).addTo(mapInstanceRef.current)

        marker.on("click", () => {
          onPropertySelect?.(property.id)
        })

        // Add popup
        marker.bindPopup(`
          <div style="min-width: 200px;">
            <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px; margin-bottom: 8px;" />
            <h3 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 600;">${property.price}</h3>
            <p style="margin: 0 0 4px 0; font-size: 14px; color: #666;">${property.beds} beds • ${property.baths} baths • ${property.sqft}</p>
            <p style="margin: 0; font-size: 12px; color: #888;">${property.address}</p>
          </div>
        `)

        markersRef.current.push(marker)
        bounds.extend([property.lat, property.lng])
      })

      // Fit map to show all markers
      if (properties.length > 0) {
        mapInstanceRef.current.fitBounds(bounds, { padding: [20, 20] })
      }
    }

    loadMarkersAndBounds()
  }, [properties, selectedProperty, isLoaded, onPropertySelect])

  return (
    <div className="relative h-full">
      <div ref={mapRef} className="h-full w-full rounded-lg" />

      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
        {onToggleView && (
          <Button variant="outline" size="sm" onClick={onToggleView} className="bg-white shadow-md">
            {showListView ? <MapIcon className="h-4 w-4" /> : <List className="h-4 w-4" />}
            {showListView ? "Map" : "List"}
          </Button>
        )}
      </div>

      {/* Property Count */}
      <div className="absolute bottom-4 left-4 z-[1000]">
        <Card className="px-3 py-2 bg-white shadow-md">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-cyan-600" />
            <span className="font-medium">{properties.length} properties</span>
          </div>
        </Card>
      </div>
    </div>
  )
}
