"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Property } from "@/lib/types";

interface PropertiesMapComponentProps {
  properties: Property[];
  selectedProperty?: string;
  onPropertySelect?: (propertyId: string) => void;
  showListView?: boolean;
  onToggleView?: () => void;
}

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function PropertiesMapComponent({
  properties,
  selectedProperty,
  onPropertySelect,
  showListView = false,
  onToggleView,
}: PropertiesMapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  // Initialize map only once
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map with Santo Domingo as default center
    const map = L.map(mapRef.current).setView([18.4861, -69.9312], 10);
    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      markersRef.current = [];
    };
  }, []); // Only run once on mount

  // Add/update markers when properties change
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Add markers for each property
    const bounds = L.latLngBounds([]);

    properties.forEach((property) => {
      if (property.lat && property.lng && mapInstanceRef.current) {
        const customIcon = L.divIcon({
          className: "custom-marker",
          html: `
            <div style="
              background: ${
                selectedProperty === property.id ? "#0891b2" : "#dc2626"
              };
              color: white;
              padding: 8px 16px;
              border-radius: 24px;
              font-size: 14px;
              font-weight: 600;
              border: 3px solid white;
              box-shadow: 0 6px 12px rgba(0,0,0,0.4);
              white-space: nowrap;
              min-width: max-content;
              text-align: center;
            ">
              ${property.price}
            </div>
          `,
          iconSize: [140, 50],
          iconAnchor: [70, 50],
        });

        const marker = L.marker([property.lat, property.lng], {
          icon: customIcon,
        }).addTo(mapInstanceRef.current);

        marker.on("click", () => {
          onPropertySelect?.(property.id);
        });

        marker.bindPopup(`
          <div style="min-width: 200px;">
            <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px; margin-bottom: 8px;" />
            <h3 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 600;">${property.title}</h3>
            <p style="margin: 0 0 4px 0; font-size: 14px; color: #666;">${property.beds} beds • ${property.baths} baths • ${property.sqft}</p>
            <p style="margin: 0; font-size: 12px; color: #888;">${property.address}</p>
          </div>
        `);

        markersRef.current.push(marker);
        bounds.extend([property.lat, property.lng]);
      }
    });

    // Fit map to show all markers
    if (properties.length > 0 && bounds.isValid() && mapInstanceRef.current) {
      mapInstanceRef.current.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [properties]); // Only run when properties change

  // Update marker styles when selection changes (without recreating markers)
  useEffect(() => {
    if (!mapInstanceRef.current || markersRef.current.length === 0) return;

    markersRef.current.forEach((marker, index) => {
      const property = properties[index];
      if (property && property.lat && property.lng) {
        const customIcon = L.divIcon({
          className: "custom-marker",
          html: `
            <div style="
              background: ${
                selectedProperty === property.id ? "#0891b2" : "#dc2626"
              };
              color: white;
              padding: 8px 16px;
              border-radius: 24px;
              font-size: 14px;
              font-weight: 600;
              border: 3px solid white;
              box-shadow: 0 6px 12px rgba(0,0,0,0.4);
              white-space: nowrap;
              min-width: max-content;
              text-align: center;
            ">
              ${property.price}
            </div>
          `,
          iconSize: [140, 50],
          iconAnchor: [70, 50],
        });

        marker.setIcon(customIcon);
      }
    });
  }, [selectedProperty, properties]); // Run when selection or properties change

  return (
    <div className="relative h-full">
      <div ref={mapRef} className="h-full w-full rounded-lg" />

      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
        {onToggleView && (
          <button
            onClick={onToggleView}
            className="bg-white shadow-md rounded-lg p-2 hover:bg-gray-50 transition-colors"
          >
            {showListView ? "🗺️" : "📋"}
          </button>
        )}
      </div>

      {/* Property Count */}
      <div className="absolute bottom-4 left-4 z-[1000]">
        <div className="px-3 py-2 bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-cyan-600">📍</span>
            <span className="font-medium">{properties.length} properties</span>
          </div>
        </div>
      </div>
    </div>
  );
}
