"use client";

import { useState } from "react";
import { mockProperties } from "@/lib/mock-properties";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, DollarSign, Eye } from "lucide-react";
import Image from "next/image";

interface AgentPropertiesProps {
  agentId: string;
  agentName: string;
}

export function AgentProperties({ agentId, agentName }: AgentPropertiesProps) {
  const [showAllProperties, setShowAllProperties] = useState(false);

  // Simular que cada agente tiene algunas propiedades específicas
  const agentProperties = mockProperties.slice(0, showAllProperties ? 6 : 3);

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Propiedades de {agentName}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre las mejores propiedades que {agentName} tiene para
            ofrecerte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentProperties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <Image
                  src={property.image}
                  alt={property.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <Badge
                  variant="secondary"
                  className="absolute top-3 left-3 bg-background/90 text-foreground"
                >
                  {property.type === "sale" ? "Venta" : "Alquiler"}
                </Badge>
                <Badge
                  variant="default"
                  className="absolute top-3 right-3 bg-primary text-primary-foreground"
                >
                  {property.price}
                </Badge>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                  {property.title}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{property.address}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      {property.baths}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{property.sqft}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalles
                  </Button>
                  <Button size="sm" className="flex-1">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Contactar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAllProperties(!showAllProperties)}
          >
            {showAllProperties
              ? "Ver menos propiedades"
              : "Ver todas las propiedades"}
          </Button>
        </div>
      </div>
    </section>
  );
}
