import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Bed, Bath, Square, Calendar } from "lucide-react";
import { mockProperties } from "@/lib/mock-properties";
import Image from "next/image";
import Link from "next/link";

interface PropertiesListProps {
  properties: typeof import("@/lib/mock-properties").mockProperties;
}

export function PropertiesList({ properties }: PropertiesListProps) {
  const getOperationTypeBadge = (type: string) => {
    switch (type) {
      case "rent":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            Alquiler
          </Badge>
        );
      case "sale":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            Compra
          </Badge>
        );
      case "vacation":
        return (
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
            Vacacional
          </Badge>
        );
      default:
        return <Badge variant="secondary">{type}</Badge>;
    }
  };

  const getPropertyTypeBadge = (title: string) => {
    if (
      title.toLowerCase().includes("apartamento") ||
      title.toLowerCase().includes("apartment")
    ) {
      return (
        <Badge className="bg-slate-100 text-slate-700 border-slate-200">
          Apartamento
        </Badge>
      );
    } else if (title.toLowerCase().includes("casa")) {
      return <Badge variant="outline">Casa</Badge>;
    } else if (title.toLowerCase().includes("villa")) {
      return (
        <Badge className="bg-slate-100 text-slate-700 border-slate-200">
          Villa
        </Badge>
      );
    } else if (title.toLowerCase().includes("penthouse")) {
      return (
        <Badge className="bg-slate-100 text-slate-700 border-slate-200">
          Penthouse
        </Badge>
      );
    } else if (title.toLowerCase().includes("estudio")) {
      return (
        <Badge className="bg-slate-100 text-slate-700 border-slate-200">
          Estudio
        </Badge>
      );
    }
    return (
      <Badge className="bg-slate-100 text-slate-700 border-slate-200">
        Propiedad
      </Badge>
    );
  };

  return (
    <div className="space-y-4">
      {properties.map((property) => (
        <Card
          key={property.id}
          className="group hover:shadow-lg transition-all duration-300"
        >
          <CardContent className="p-6">
            <div className="flex gap-6">
              {/* Image */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-32 overflow-hidden rounded-lg">
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={192}
                    height={128}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Operation Type Badge */}
                <div className="absolute top-2 left-2">
                  {getOperationTypeBadge(property.type)}
                </div>

                {/* Property Type Badge */}
                <div className="absolute top-2 right-2">
                  {getPropertyTypeBadge(property.title)}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-xl text-slate-900 mb-2 line-clamp-1">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-slate-600 text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span className="line-clamp-1">{property.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-6 text-sm text-slate-600 mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.beds} habitaciones</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths} baños</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.sqft}</span>
                  </div>
                  {property.type === "rent" && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Disponible ahora</span>
                    </div>
                  )}
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-emerald-700">
                    {property.price}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Contactar
                    </Button>
                    <Button
                      asChild
                      className="bg-emerald-700 hover:bg-emerald-800"
                    >
                      <Link href={`/properties/${property.id}`}>
                        Ver Detalles
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
