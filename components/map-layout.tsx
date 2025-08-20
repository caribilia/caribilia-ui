"use client";

import { useState } from "react";
import MapComponent from "./properties-map-component";
import { MapPropertyList } from "./map-property-list";
import { Property } from "@/lib/types";

interface MapLayoutProps {
  properties: Property[];
  defaultView?: "map" | "list";
}

export function MapLayout({ properties, defaultView = "map" }: MapLayoutProps) {
  const [selectedProperty, setSelectedProperty] = useState<string>();
  const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);
  const [showListView, setShowListView] = useState(defaultView === "list");

  const handlePropertySelect = (propertyId: string) => {
    setSelectedProperty(propertyId);
  };

  const handlePropertyHover = (propertyId: string | null) => {
    setHoveredProperty(propertyId);
  };

  const toggleView = () => {
    console.log("toggleView");
    setShowListView(!showListView);
  };

  if (showListView) {
    return (
      <div className="h-full">
        <MapPropertyList
          properties={properties}
          selectedProperty={selectedProperty}
          onPropertySelect={handlePropertySelect}
          onPropertyHover={handlePropertyHover}
        />
      </div>
    );
  }

  return (
    <div className="h-full flex">
      {/* Map View */}
      <div className="flex-1">
        <MapComponent
          properties={properties}
          selectedProperty={selectedProperty || hoveredProperty || undefined}
          onPropertySelect={handlePropertySelect}
          showListView={showListView}
          onToggleView={toggleView}
        />
      </div>

      {/* Property List Sidebar */}
      <div className="w-96 border-l bg-gray-50">
        <MapPropertyList
          properties={properties}
          selectedProperty={selectedProperty}
          onPropertySelect={handlePropertySelect}
          onPropertyHover={handlePropertyHover}
        />
      </div>
    </div>
  );
}
