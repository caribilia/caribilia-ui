"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Car,
  Wifi,
  Shield,
  TreePine,
  Building2,
  Phone,
  Mail,
  Share2,
  ArrowLeft,
} from "lucide-react";
import { mockProperties } from "@/lib/mock-properties";
import { PropertyMap } from "@/components/property-map";
import Image from "next/image";
import Link from "next/link";

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = params.id as string;

  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Find the property by ID
  const property = mockProperties.find((p) => p.id === propertyId);

  if (!property) {
    notFound();
  }

  // Generate additional images for the gallery (using the same image for demo)
  const propertyImages = [
    property.image,
    property.image, // In a real app, these would be different images
    property.image,
    property.image,
    property.image,
  ];

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

  const amenities = [
    { icon: Car, label: "Estacionamiento", available: true },
    { icon: Wifi, label: "WiFi", available: true },
    {
      icon: Shield,
      label: "Seguridad 24/7",
      available:
        property.title.toLowerCase().includes("penthouse") ||
        property.title.toLowerCase().includes("luxury"),
    },
    {
      icon: TreePine,
      label: "Jardín",
      available:
        property.title.toLowerCase().includes("casa") ||
        property.title.toLowerCase().includes("villa"),
    },
    {
      icon: Building2,
      label: "Ascensor",
      available:
        property.title.toLowerCase().includes("apartamento") ||
        property.title.toLowerCase().includes("penthouse"),
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/properties"
            className="inline-flex items-center text-slate-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Propiedades
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Property Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                {getOperationTypeBadge(property.type)}
                {getPropertyTypeBadge(property.title)}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-slate-600 text-lg">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property.address}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFavorite(!isFavorite)}
                className={`${isFavorite ? "text-red-600 border-red-200" : ""}`}
              >
                <Heart
                  className={`h-4 w-4 mr-2 ${isFavorite ? "fill-current" : ""}`}
                />
                {isFavorite ? "Guardado" : "Guardar"}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>

          <div className="text-3xl font-bold text-emerald-700">
            {property.price}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                    <Image
                      src={propertyImages[activeImageIndex]}
                      alt={property.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Image Navigation */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      {propertyImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === activeImageIndex
                              ? "bg-white scale-125"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {propertyImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg border-2 transition-all ${
                          index === activeImageIndex
                            ? "border-emerald-500"
                            : "border-transparent hover:border-slate-300"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${property.title} - Imagen ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Detalles de la Propiedad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <Bed className="h-6 w-6 text-slate-600 mr-3" />
                    <div>
                      <div className="text-sm text-slate-500">Habitaciones</div>
                      <div className="font-semibold text-lg">
                        {property.beds}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-6 w-6 text-slate-600 mr-3" />
                    <div>
                      <div className="text-sm text-slate-500">Baños</div>
                      <div className="font-semibold text-lg">
                        {property.baths}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-6 w-6 text-slate-600 mr-3" />
                    <div>
                      <div className="text-sm text-slate-500">
                        Metros Cuadrados
                      </div>
                      <div className="font-semibold text-lg">
                        {property.sqft}
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-3">Descripción</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Esta hermosa propiedad ubicada en {property.address} ofrece
                    una excelente oportunidad para{" "}
                    {property.type === "rent"
                      ? "alquilar"
                      : property.type === "sale"
                      ? "comprar"
                      : "disfrutar como vacacional"}
                    . Con {property.beds} habitaciones y {property.baths} baños,
                    esta propiedad se adapta perfectamente a las necesidades de
                    familias y profesionales. La ubicación estratégica
                    proporciona fácil acceso a servicios, transporte público y
                    áreas comerciales.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-3">Amenities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <amenity.icon
                          className={`h-5 w-5 mr-3 ${
                            amenity.available
                              ? "text-emerald-600"
                              : "text-slate-400"
                          }`}
                        />
                        <span
                          className={`${
                            amenity.available
                              ? "text-slate-700"
                              : "text-slate-400 line-through"
                          }`}
                        >
                          {amenity.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <PropertyMap
                  lat={property.lat}
                  lng={property.lng}
                  title={property.title}
                  address={property.address}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Contactar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-emerald-700 hover:bg-emerald-800 h-12 text-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Llamar Ahora
                </Button>
                <Button variant="outline" className="w-full h-12 text-lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </Button>

                <Separator />

                <div className="text-center">
                  <div className="text-sm text-slate-500 mb-2">
                    ¿Te interesa esta propiedad?
                  </div>
                  <Button variant="outline" className="w-full">
                    Agendar Visita
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Property Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Características Destacadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Tipo de Operación</span>
                  <span className="font-semibold">
                    {property.type === "rent"
                      ? "Alquiler"
                      : property.type === "sale"
                      ? "Venta"
                      : "Vacacional"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Precio</span>
                  <span className="font-semibold text-emerald-700">
                    {property.price}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Habitaciones</span>
                  <span className="font-semibold">{property.beds}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Baños</span>
                  <span className="font-semibold">{property.baths}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Metros Cuadrados</span>
                  <span className="font-semibold">{property.sqft}</span>
                </div>
                {property.type === "rent" && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Disponibilidad</span>
                    <span className="font-semibold text-green-600">
                      Inmediata
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
