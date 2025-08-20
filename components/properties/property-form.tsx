"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProperties, type Property } from "@/lib/properties-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Loader2,
  X,
  Upload,
  Home,
  MapPin,
  DollarSign,
  Camera,
  Car,
  Wifi,
  Dumbbell,
  Shield,
  Snowflake,
  Building2,
  Bed,
  Bath,
  Ruler,
  Car as CarIcon,
} from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface PropertyFormProps {
  property?: Property;
}

type PropertyType = "sale" | "rent" | "vacation";
type PropertyCategory =
  | "apartamento"
  | "casa"
  | "villa"
  | "penthouse"
  | "estudio"
  | "alquiler-vacacional";

interface PropertyFormData {
  // Basic Information
  title: string;
  description: string;
  propertyType: PropertyType;
  propertyCategory: PropertyCategory;

  // Location
  province: string;
  city: string;
  address: string;
  zipCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };

  // Pricing
  price: string;
  priceType: "monthly" | "total" | "per-night";

  // Property Details
  bedrooms: number;
  bathrooms: number;
  squareMeters: string;
  parkingSpaces: number;

  // Features
  amenities: string[];
  leaseTerms: string[];
  petFriendly: boolean;
  furnished: boolean;

  // Media
  images: File[];

  // Contact
  contactName: string;
  contactPhone: string;
  contactEmail: string;

  // Additional Details
  availableFrom: Date | undefined;
}

const provinces = [
  "Santo Domingo",
  "Punta Cana",
  "Samaná",
  "Puerto Plata",
  "La Romana",
  "Santiago",
  "Cap Cana",
  "Bávaro",
  "Jarabacoa",
  "Constanza",
  "Las Terrenas",
  "Cabarete",
];

const amenities = [
  { id: "estacionamiento", label: "Estacionamiento", icon: CarIcon },
  { id: "wifi", label: "WiFi", icon: Wifi },
  { id: "piscina", label: "Piscina", icon: Home },
  { id: "gimnasio", label: "Gimnasio", icon: Dumbbell },
  { id: "seguridad", label: "Seguridad 24/7", icon: Shield },
  { id: "aire-acondicionado", label: "Aire Acondicionado", icon: Snowflake },
  { id: "cocina-equipada", label: "Cocina Equipada", icon: Building2 },
  { id: "lavadora", label: "Lavadora", icon: Building2 },
  { id: "secadora", label: "Secadora", icon: Building2 },
  { id: "jardin", label: "Jardín", icon: Home },
  { id: "garaje", label: "Garaje", icon: CarIcon },
  { id: "terraza", label: "Terraza", icon: Home },
  { id: "balcon", label: "Balcón", icon: Home },
  { id: "elevador", label: "Elevador", icon: Building2 },
  { id: "internet-fibra", label: "Internet Fibra", icon: Wifi },
  { id: "area-social", label: "Área Social", icon: Building2 },
];

const leaseTerms = ["Mes a Mes", "6 Meses", "12 Meses", "24+ Meses"];

export function PropertyForm({ property }: PropertyFormProps) {
  const { addProperty, updateProperty } = useProperties();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<PropertyFormData>({
    title: property?.title || "",
    description: property?.description || "",
    propertyType: "sale",
    propertyCategory: "casa",
    province: "",
    city: property?.city || "",
    address: property?.address || "",
    zipCode: "",
    coordinates: {
      lat: 18.4861,
      lng: -69.9312,
    },
    price: property?.price?.toString() || "",
    priceType: "total",
    bedrooms: property?.bedrooms || 1,
    bathrooms: property?.bathrooms || 1,
    squareMeters: property?.area?.toString() || "",
    parkingSpaces: 0,
    amenities: property?.amenities || [],
    leaseTerms: [],
    petFriendly: false,
    furnished: false,
    images: [],
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    availableFrom: undefined,
  });

  const handleChange = (field: keyof PropertyFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAmenityToggle = (amenityId: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter((id) => id !== amenityId)
        : [...prev.amenities, amenityId],
    }));
  };

  const handleLeaseTermToggle = (term: string) => {
    setFormData((prev) => ({
      ...prev,
      leaseTerms: prev.leaseTerms.includes(term)
        ? prev.leaseTerms.filter((t) => t !== term)
        : [...prev.leaseTerms, term],
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    if (!formData.title.trim()) return "El título es requerido";
    if (!formData.description.trim()) return "La descripción es requerida";
    if (!formData.price || Number(formData.price) <= 0)
      return "El precio debe ser mayor a 0";
    if (!formData.squareMeters || Number(formData.squareMeters) <= 0)
      return "El área debe ser mayor a 0";
    if (!formData.address.trim()) return "La dirección es requerida";
    if (!formData.city.trim()) return "La ciudad es requerida";
    if (!formData.province) return "La provincia es requerida";
    if (!formData.contactName.trim())
      return "El nombre de contacto es requerido";
    if (!formData.contactPhone.trim())
      return "El teléfono de contacto es requerido";
    if (!formData.contactEmail.trim())
      return "El email de contacto es requerido";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const propertyData = {
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        type: formData.propertyCategory,
        status: "available",
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        area: Number(formData.squareMeters),
        address: formData.address,
        city: formData.city,
        images: formData.images.map(
          (_, index) =>
            `/placeholder.svg?height=300&width=400&query=property-${index}`
        ),
        amenities: formData.amenities,
      };

      if (property) {
        updateProperty(property.id, propertyData);
      } else {
        addProperty(propertyData);
      }

      router.push("/dashboard/properties");
    } catch (err) {
      setError("Error al guardar la propiedad. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <Card className="border-2 border-slate-100 shadow-sm">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Home className="w-5 h-5 text-slate-600" />
            Información Básica de la Propiedad
          </CardTitle>
          <CardDescription className="text-slate-600">
            Detalles principales y tipo de transacción
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-slate-700 font-medium">
                Título de la Propiedad *
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Ej: Villa moderna con vista al mar"
                className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="propertyType"
                className="text-slate-700 font-medium"
              >
                Tipo de Transacción *
              </Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value: PropertyType) =>
                  handleChange("propertyType", value)
                }
                disabled={isLoading}
              >
                <SelectTrigger className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sale">Venta</SelectItem>
                  <SelectItem value="rent">Alquiler</SelectItem>
                  <SelectItem value="vacation">Alquiler Vacacional</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="propertyCategory"
              className="text-slate-700 font-medium"
            >
              Categoría de Propiedad *
            </Label>
            <Select
              value={formData.propertyCategory}
              onValueChange={(value: PropertyCategory) =>
                handleChange("propertyCategory", value)
              }
              disabled={isLoading}
            >
              <SelectTrigger className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartamento">Apartamento</SelectItem>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="estudio">Estudio</SelectItem>
                <SelectItem value="alquiler-vacacional">
                  Alquiler Vacacional
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-slate-700 font-medium">
              Descripción *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Describe tu propiedad en detalle..."
              rows={4}
              className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20 resize-none"
              disabled={isLoading}
            />
            <p className="text-xs text-slate-500">
              Cuenta la historia de tu propiedad para atraer a los compradores o
              inquilinos
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Pricing Information */}
      <Card className="border-2 border-slate-100 shadow-sm">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <DollarSign className="w-5 h-5 text-slate-600" />
            Información de Precios
          </CardTitle>
          <CardDescription className="text-slate-600">
            Precio y términos de pago
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="price" className="text-slate-700 font-medium">
                Precio *
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                  placeholder="0"
                  className="pl-10 border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="priceType" className="text-slate-700 font-medium">
                Tipo de Precio *
              </Label>
              <Select
                value={formData.priceType}
                onValueChange={(value: "monthly" | "total" | "per-night") =>
                  handleChange("priceType", value)
                }
                disabled={isLoading}
              >
                <SelectTrigger className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="total">Precio Total</SelectItem>
                  <SelectItem value="monthly">Precio Mensual</SelectItem>
                  <SelectItem value="per-night">Precio por Noche</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">
                Disponible Desde
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-slate-200 focus:border-slate-400 focus:ring-slate-400/20",
                      !formData.availableFrom && "text-slate-500"
                    )}
                    disabled={isLoading}
                  >
                    {formData.availableFrom ? (
                      format(formData.availableFrom, "PPP", { locale: es })
                    ) : (
                      <span>Seleccionar fecha</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.availableFrom}
                    onSelect={(date) => handleChange("availableFrom", date)}
                    initialFocus
                    locale={es}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-xs text-slate-700">
              💡 <strong>Consejo:</strong> Un precio competitivo y una
              descripción atractiva aumentarán las posibilidades de vender o
              alquilar tu propiedad rápidamente.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Location Information */}
      <Card className="border-2 border-slate-100 shadow-sm">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <MapPin className="w-5 h-5 text-slate-600" />
            Ubicación de la Propiedad
          </CardTitle>
          <CardDescription className="text-slate-600">
            Dirección y coordenadas del mapa
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="province" className="text-slate-700 font-medium">
                Provincia *
              </Label>
              <Select
                value={formData.province}
                onValueChange={(value) => handleChange("province", value)}
                disabled={isLoading}
              >
                <SelectTrigger className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20">
                  <SelectValue placeholder="Seleccionar provincia" />
                </SelectTrigger>
                <SelectContent>
                  {provinces.map((province) => (
                    <SelectItem
                      key={province}
                      value={province.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {province}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="city" className="text-slate-700 font-medium">
                Ciudad *
              </Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="Ej: Santo Domingo"
                className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="address" className="text-slate-700 font-medium">
                Dirección Completa *
              </Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Ej: Calle Principal #123, Sector"
                className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode" className="text-slate-700 font-medium">
                Código Postal
              </Label>
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) => handleChange("zipCode", e.target.value)}
                placeholder="Ej: 10101"
                className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-700 font-medium">
              Coordenadas del Mapa
            </Label>
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-600 mb-4">
                Las coordenadas se usarán para mostrar la ubicación exacta de tu
                propiedad en el mapa.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="lat" className="text-sm text-slate-700">
                    Latitud
                  </Label>
                  <Input
                    id="lat"
                    type="number"
                    step="any"
                    placeholder="18.4861"
                    value={formData.coordinates.lat}
                    onChange={(e) =>
                      handleChange("coordinates", {
                        ...formData.coordinates,
                        lat: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <Label htmlFor="lng" className="text-sm text-slate-700">
                    Longitud
                  </Label>
                  <Input
                    id="lng"
                    type="number"
                    step="any"
                    placeholder="-69.9312"
                    value={formData.coordinates.lng}
                    onChange={(e) =>
                      handleChange("coordinates", {
                        ...formData.coordinates,
                        lng: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                    disabled={isLoading}
                  />
                </div>
              </div>
              <div className="mt-4 p-3 bg-slate-100 border border-slate-200 rounded-lg">
                <p className="text-xs text-slate-700">
                  💡 <strong>Consejo:</strong> Puedes usar Google Maps para
                  obtener las coordenadas exactas de tu propiedad.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Property Details */}
      <Card className="border-2 border-slate-100 shadow-sm">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Building2 className="w-5 h-5 text-slate-600" />
            Detalles de la Propiedad
          </CardTitle>
          <CardDescription className="text-slate-600">
            Especificaciones técnicas y características
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="bedrooms" className="text-slate-700 font-medium">
                Habitaciones
              </Label>
              <Select
                value={formData.bedrooms.toString()}
                onValueChange={(value) =>
                  handleChange("bedrooms", parseInt(value))
                }
                disabled={isLoading}
              >
                <SelectTrigger className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Estudio</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bathrooms" className="text-slate-700 font-medium">
                Baños *
              </Label>
              <Select
                value={formData.bathrooms.toString()}
                onValueChange={(value) =>
                  handleChange("bathrooms", parseFloat(value))
                }
                disabled={isLoading}
              >
                <SelectTrigger className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="1.5">1.5</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="2.5">2.5</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="squareMeters"
                className="text-slate-700 font-medium"
              >
                Metros Cuadrados *
              </Label>
              <Input
                id="squareMeters"
                type="number"
                value={formData.squareMeters}
                onChange={(e) => handleChange("squareMeters", e.target.value)}
                placeholder="85"
                className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="parkingSpaces"
                className="text-slate-700 font-medium"
              >
                Espacios de Estacionamiento
              </Label>
              <Input
                id="parkingSpaces"
                type="number"
                value={formData.parkingSpaces}
                onChange={(e) =>
                  handleChange("parkingSpaces", parseInt(e.target.value))
                }
                placeholder="0"
                className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                disabled={isLoading}
              />
            </div>
          </div>

          {formData.propertyType === "rent" && (
            <div className="space-y-4">
              <Label className="text-slate-700 font-medium">
                Términos de Alquiler
              </Label>
              <div className="grid gap-4 md:grid-cols-4">
                {leaseTerms.map((term) => (
                  <div key={term} className="flex items-center space-x-2">
                    <Checkbox
                      id={term}
                      checked={formData.leaseTerms.includes(term)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleLeaseTermToggle(term);
                        } else {
                          handleLeaseTermToggle(term);
                        }
                      }}
                      className="data-[state=checked]:bg-slate-600 data-[state=checked]:border-slate-600"
                      disabled={isLoading}
                    />
                    <Label
                      htmlFor={term}
                      className="text-sm text-slate-600 font-normal"
                    >
                      {term}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="petFriendly"
                checked={formData.petFriendly}
                onCheckedChange={(checked) =>
                  handleChange("petFriendly", checked)
                }
                className="data-[state=checked]:bg-slate-600 data-[state=checked]:border-slate-600"
                disabled={isLoading}
              />
              <Label
                htmlFor="petFriendly"
                className="text-sm text-slate-600 font-normal"
              >
                Acepta Mascotas
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="furnished"
                checked={formData.furnished}
                onCheckedChange={(checked) =>
                  handleChange("furnished", checked)
                }
                className="data-[state=checked]:bg-slate-600 data-[state=checked]:border-slate-600"
                disabled={isLoading}
              />
              <Label
                htmlFor="furnished"
                className="text-sm text-slate-600 font-normal"
              >
                Amueblado
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Amenities */}
      <Card className="border-2 border-slate-100 shadow-sm">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Home className="w-5 h-5 text-slate-600" />
            Comodidades y Características
          </CardTitle>
          <CardDescription className="text-slate-600">
            Selecciona las comodidades disponibles en tu propiedad
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={amenity.id}
                  className="flex items-center space-x-2 p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
                >
                  <Checkbox
                    id={amenity.id}
                    checked={formData.amenities.includes(amenity.id)}
                    onCheckedChange={() => handleAmenityToggle(amenity.id)}
                    className="data-[state=checked]:bg-slate-600 data-[state=checked]:border-slate-600"
                    disabled={isLoading}
                  />
                  <Label
                    htmlFor={amenity.id}
                    className="text-sm text-slate-700 flex items-center gap-2 cursor-pointer font-medium"
                  >
                    <Icon className="w-4 h-4 text-slate-600" />
                    {amenity.label}
                  </Label>
                </div>
              );
            })}
          </div>
          {formData.amenities.length > 0 && (
            <div className="mt-6">
              <p className="text-sm text-slate-600 mb-3">
                Comodidades seleccionadas:
              </p>
              <div className="flex flex-wrap gap-2">
                {formData.amenities.map((amenity) => (
                  <Badge
                    key={amenity}
                    variant="secondary"
                    className="bg-slate-100 text-slate-700 border-slate-200"
                  >
                    {amenities.find((a) => a.id === amenity)?.label || amenity}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Images */}
      <Card className="border-2 border-slate-100 shadow-sm">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Camera className="w-5 h-5 text-slate-600" />
            Fotos de la Propiedad
          </CardTitle>
          <CardDescription className="text-slate-600">
            Agrega fotos de alta calidad para mostrar tu propiedad
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-slate-400 hover:bg-slate-50/50 transition-all duration-200">
            <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600 mb-2 font-medium">
              Arrastra y suelta las fotos aquí, o haz clic para seleccionar
            </p>
            <p className="text-sm text-slate-500 mb-4">
              Formatos soportados: JPG, PNG, GIF. Máximo 10 fotos.
            </p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button
                variant="outline"
                className="cursor-pointer hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 border-slate-200"
                disabled={isLoading}
              >
                Seleccionar Fotos
              </Button>
            </label>
          </div>

          {formData.images.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-3">
                Fotos Seleccionadas ({formData.images.length})
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeImage(index)}
                      disabled={isLoading}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="border-2 border-slate-100 shadow-sm">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <MapPin className="w-5 h-5 text-slate-600" />
            Información de Contacto
          </CardTitle>
          <CardDescription className="text-slate-600">
            Datos para que los interesados puedan contactarte
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="contactName"
                className="text-slate-700 font-medium"
              >
                Nombre de Contacto *
              </Label>
              <Input
                id="contactName"
                value={formData.contactName}
                onChange={(e) => handleChange("contactName", e.target.value)}
                placeholder="Tu nombre completo"
                className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="contactPhone"
                className="text-slate-700 font-medium"
              >
                Teléfono *
              </Label>
              <Input
                id="contactPhone"
                value={formData.contactPhone}
                onChange={(e) => handleChange("contactPhone", e.target.value)}
                placeholder="+1 (809) 123-4567"
                className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="contactEmail"
              className="text-slate-700 font-medium"
            >
              Email *
            </Label>
            <Input
              id="contactEmail"
              type="email"
              value={formData.contactEmail}
              onChange={(e) => handleChange("contactEmail", e.target.value)}
              placeholder="tu@email.com"
              className="border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
              disabled={isLoading}
            />
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="border-red-200 bg-red-50">
          <AlertDescription className="text-red-700">{error}</AlertDescription>
        </Alert>
      )}

      {/* Actions */}
      <div className="flex gap-4 pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/dashboard/properties")}
          disabled={isLoading}
          className="bg-transparent border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-slate-800 hover:bg-slate-900 text-white shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {property ? "Actualizando..." : "Guardando..."}
            </>
          ) : (
            <>{property ? "Actualizar Propiedad" : "Crear Propiedad"}</>
          )}
        </Button>
      </div>
    </form>
  );
}
