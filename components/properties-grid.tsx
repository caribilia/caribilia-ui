import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Bed, Bath, Square } from "lucide-react";
import { mockProperties } from "@/lib/mock-properties";
import Image from "next/image";
import Link from "next/link";

interface PropertiesGridProps {
  properties: typeof import("@/lib/mock-properties").mockProperties;
}

export function PropertiesGrid({ properties }: PropertiesGridProps) {
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
      return (
        <Badge className="bg-slate-100 text-slate-700 border-slate-200">
          Casa
        </Badge>
      );
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Card
          key={property.id}
          className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Operation Type Badge */}
            <div className="absolute top-3 left-3">
              {getOperationTypeBadge(property.type)}
            </div>

            {/* Property Type Badge */}
            <div className="absolute top-3 right-3">
              {getPropertyTypeBadge(property.title)}
            </div>

            {/* Favorite Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-slate-900 mb-1 line-clamp-2">
                  {property.title}
                </h3>
                <div className="flex items-center text-slate-600 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="line-clamp-1">{property.address}</span>
                </div>
              </div>
            </div>

            <div className="text-2xl font-bold text-emerald-700">
              {property.price}
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{property.beds} hab.</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                <span>{property.baths} baños</span>
              </div>
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1" />
                <span>{property.sqft}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                asChild
                className="flex-1 bg-emerald-700 hover:bg-emerald-800"
              >
                <Link href={`/properties/${property.id}`}>Ver Detalles</Link>
              </Button>
              <Button variant="outline" size="sm">
                Contactar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
