"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BuyHeroSection } from "@/components/buy-hero-section";
import { PropertyFilters } from "@/components/property-filters";
import { BuyPropertyGrid } from "@/components/buy-property-grid";
import { BuyingGuide } from "@/components/buying-guide";
import { MapLayout } from "@/components/map-layout";
import { Button } from "@/components/ui/button";
import { MapIcon, Grid3X3, List } from "lucide-react";
import { mockProperties } from "@/lib/mock-properties";

type ViewMode = "grid" | "map" | "list";

export default function BuyPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  // Filter properties for sale
  const saleProperties = mockProperties.filter(
    (property) => property.type === "sale"
  );

  return (
    <main className="min-h-screen">
      <Header />
      <BuyHeroSection />

      <div className="container mx-auto px-4 py-8">
        {/* View Toggle Controls */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {saleProperties.length} Propiedades en Venta
          </h1>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="flex items-center gap-2"
            >
              <Grid3X3 className="h-4 w-4" />
              Cuadrícula
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="flex items-center gap-2"
            >
              <List className="h-4 w-4" />
              Lista
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("map")}
              className="flex items-center gap-2"
            >
              <MapIcon className="h-4 w-4" />
              Mapa
            </Button>
          </div>
        </div>

        {/* Content based on view mode */}
        {viewMode === "map" ? (
          <div className="h-[600px] rounded-lg border overflow-hidden">
            <MapLayout properties={saleProperties} />
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4">
              <PropertyFilters />
            </aside>
            <div className="lg:w-3/4">
              <BuyPropertyGrid />
            </div>
          </div>
        )}
      </div>

      <BuyingGuide />
      <Footer />
    </main>
  );
}
