"use client";

import { useState, useMemo, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PropertiesHeroSection } from "@/components/properties-hero-section";
import { PropertiesFilters } from "@/components/properties-filters";
import { PropertiesGrid } from "@/components/properties-grid";
import { PropertiesList } from "@/components/properties-list";
import { Pagination } from "@/components/pagination";
import { MapLayout } from "@/components/map-layout";
import { Button } from "@/components/ui/button";
import { MapIcon, Grid3X3, List } from "lucide-react";
import { mockProperties } from "@/lib/mock-properties";

type ViewMode = "grid" | "map" | "list";

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isClient, setIsClient] = useState(false);

  const allProperties = mockProperties;

  // Check if component is hydrated on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(allProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = allProperties.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  return (
    <main className="min-h-screen">
      <Header />
      <PropertiesHeroSection />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {allProperties.length} Propiedades Disponibles
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

        {viewMode === "map" && isClient ? (
          <div className="h-[600px] rounded-lg border overflow-hidden">
            <MapLayout properties={allProperties} />
          </div>
        ) : viewMode === "map" ? (
          <div className="h-[600px] rounded-lg border overflow-hidden flex items-center justify-center">
            <div className="text-gray-500">Cargando mapa...</div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4">
              <PropertiesFilters />
            </aside>
            <div className="lg:w-3/4">
              {viewMode === "grid" ? (
                <PropertiesGrid properties={currentProperties} />
              ) : (
                <PropertiesList properties={currentProperties} />
              )}

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalItems={allProperties.length}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={handleItemsPerPageChange}
              />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
