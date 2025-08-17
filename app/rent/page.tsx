"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RentHeroSection } from "@/components/rent-hero-section"
import { RentalFilters } from "@/components/rental-filters"
import { RentPropertyGrid } from "@/components/rent-property-grid"
import { RentalGuide } from "@/components/rental-guide"
import { MapLayout } from "@/components/map-layout"
import { Button } from "@/components/ui/button"
import { MapIcon, Grid3X3, List } from "lucide-react"
import { mockProperties } from "@/lib/mock-properties"

type ViewMode = "grid" | "map" | "list"

export default function RentPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")

  const rentalProperties = mockProperties.filter((property) => property.type === "rent")

  return (
    <main className="min-h-screen">
      <Header />
      <RentHeroSection />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{rentalProperties.length} Rentals Available</h1>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="flex items-center gap-2"
            >
              <Grid3X3 className="h-4 w-4" />
              Grid
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="flex items-center gap-2"
            >
              <List className="h-4 w-4" />
              List
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("map")}
              className="flex items-center gap-2"
            >
              <MapIcon className="h-4 w-4" />
              Map
            </Button>
          </div>
        </div>

        {viewMode === "map" ? (
          <div className="h-[600px] rounded-lg border overflow-hidden">
            <MapLayout properties={rentalProperties} />
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4">
              <RentalFilters />
            </aside>
            <div className="lg:w-3/4">
              <RentPropertyGrid />
            </div>
          </div>
        )}
      </div>

      <RentalGuide />
      <Footer />
    </main>
  )
}
