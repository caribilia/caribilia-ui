"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Stepper } from "@/components/ui/step";
import {
  Upload,
  MapPin,
  DollarSign,
  Home,
  Car,
  Wifi,
  Dumbbell,
  Shield,
  Snowflake,
  Camera,
  X,
  Save,
  Eye,
  Navigation,
} from "lucide-react";

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

  // Media
  images: File[];

  // Contact
  contactName: string;
  contactPhone: string;
  contactEmail: string;

  // Additional Details
  availableFrom: string;
  leaseTerms?: string[];
  petFriendly: boolean;
  furnished: boolean;
}

const initialFormData: PropertyFormData = {
  title: "",
  description: "",
  propertyType: "sale",
  propertyCategory: "casa",
  province: "",
  city: "",
  address: "",
  zipCode: "",
  coordinates: {
    lat: 18.4861,
    lng: -69.9312,
  },
  price: "",
  priceType: "total",
  bedrooms: 1,
  bathrooms: 1,
  squareMeters: "",
  parkingSpaces: 0,
  amenities: [],
  images: [],
  contactName: "",
  contactPhone: "",
  contactEmail: "",
  availableFrom: "",
  leaseTerms: [],
  petFriendly: false,
  furnished: false,
};

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
  { id: "estacionamiento", label: "Estacionamiento", icon: Car },
  { id: "wifi", label: "WiFi", icon: Wifi },
  { id: "piscina", label: "Piscina", icon: Home },
  { id: "gimnasio", label: "Gimnasio", icon: Dumbbell },
  { id: "seguridad", label: "Seguridad 24/7", icon: Shield },
  { id: "aire-acondicionado", label: "Aire Acondicionado", icon: Snowflake },
];

const leaseTerms = ["Mes a Mes", "6 Meses", "12 Meses", "24+ Meses"];

export function PropertyCreationForm() {
  const [formData, setFormData] = useState<PropertyFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 4;

  const handleInputChange = (field: keyof PropertyFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAmenityToggle = (amenityId: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter((id) => id !== amenityId)
        : [...prev.amenities, amenityId],
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

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Property data:", formData);
    setIsSubmitting(false);

    // Show success message or redirect
    alert("¡Propiedad creada exitosamente!");
  };

  const steps = [
    {
      step: 1,
      title: "Información Básica",
      description: "Título, tipo y precio",
    },
    {
      step: 2,
      title: "Ubicación",
      description: "Dirección y coordenadas",
    },
    {
      step: 3,
      title: "Detalles",
      description: "Características y comodidades",
    },
    {
      step: 4,
      title: "Finalizar",
      description: "Fotos y contacto",
    },
  ];

  const renderStepIndicator = () => (
    <div className="mb-8">
      <Stepper steps={steps} currentStep={currentStep} />
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="w-5 h-5 text-emerald-600" />
            Información Básica de la Propiedad
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Título de la Propiedad *
              </label>
              <Input
                placeholder="Ej: Villa moderna con vista al mar"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                required
                className="transition-all duration-200 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Tipo de Transacción *
              </label>
              <Select
                value={formData.propertyType}
                onValueChange={(value: PropertyType) =>
                  handleInputChange("propertyType", value)
                }
              >
                <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-emerald-500/20">
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

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Categoría de Propiedad *
            </label>
            <Select
              value={formData.propertyCategory}
              onValueChange={(value: PropertyCategory) =>
                handleInputChange("propertyCategory", value)
              }
            >
              <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-emerald-500/20">
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

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Descripción *
            </label>
            <Textarea
              placeholder="Describe tu propiedad en detalle..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={4}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-emerald-500/20 resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Cuenta la historia de tu propiedad para atraer a los compradores o
              inquilinos
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            Información de Precios
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Precio *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="number"
                  placeholder="0"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  className="pl-10 transition-all duration-200 focus:ring-2 focus:ring-emerald-500/20"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Tipo de Precio *
              </label>
              <Select
                value={formData.priceType}
                onValueChange={(value: "monthly" | "total" | "per-night") =>
                  handleInputChange("priceType", value)
                }
              >
                <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-emerald-500/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="total">Precio Total</SelectItem>
                  <SelectItem value="monthly">Precio Mensual</SelectItem>
                  <SelectItem value="per-night">Precio por Noche</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Disponible Desde
              </label>
              <Input
                type="date"
                value={formData.availableFrom}
                onChange={(e) =>
                  handleInputChange("availableFrom", e.target.value)
                }
                className="transition-all duration-200 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs text-blue-700">
              💡 <strong>Consejo:</strong> Un precio competitivo y una
              descripción atractiva aumentarán las posibilidades de vender o
              alquilar tu propiedad rápidamente.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-600" />
            Ubicación de la Propiedad
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Provincia *
              </label>
              <Select
                value={formData.province}
                onValueChange={(value) => handleInputChange("province", value)}
              >
                <SelectTrigger>
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

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Ciudad *
              </label>
              <Input
                placeholder="Ej: Santo Domingo"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Dirección Completa *
            </label>
            <Input
              placeholder="Ej: Calle Principal #123, Sector"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Código Postal
            </label>
            <Input
              placeholder="Ej: 10101"
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-emerald-600" />
            Coordenadas del Mapa
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-4">
              Las coordenadas se usarán para mostrar la ubicación exacta de tu
              propiedad en el mapa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Latitud
                </label>
                <Input
                  type="number"
                  step="any"
                  placeholder="18.4861"
                  value={formData.coordinates.lat}
                  onChange={(e) =>
                    handleInputChange("coordinates", {
                      ...formData.coordinates,
                      lat: parseFloat(e.target.value) || 0,
                    })
                  }
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Longitud
                </label>
                <Input
                  type="number"
                  step="any"
                  placeholder="-69.9312"
                  value={formData.coordinates.lng}
                  onChange={(e) =>
                    handleInputChange("coordinates", {
                      ...formData.coordinates,
                      lng: parseFloat(e.target.value) || 0,
                    })
                  }
                />
              </div>
            </div>
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-xs text-emerald-700">
                💡 <strong>Consejo:</strong> Puedes usar Google Maps para
                obtener las coordenadas exactas de tu propiedad.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep3 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Home className="w-5 h-5 text-emerald-600" />
          Detalles de la Propiedad
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Habitaciones *
            </label>
            <Select
              value={formData.bedrooms.toString()}
              onValueChange={(value) =>
                handleInputChange("bedrooms", parseInt(value))
              }
            >
              <SelectTrigger>
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

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Baños *
            </label>
            <Select
              value={formData.bathrooms.toString()}
              onValueChange={(value) =>
                handleInputChange("bathrooms", parseFloat(value))
              }
            >
              <SelectTrigger>
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

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Metros Cuadrados *
            </label>
            <Input
              type="number"
              placeholder="0"
              value={formData.squareMeters}
              onChange={(e) =>
                handleInputChange("squareMeters", e.target.value)
              }
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Espacios de Estacionamiento
            </label>
            <Input
              type="number"
              placeholder="0"
              value={formData.parkingSpaces}
              onChange={(e) =>
                handleInputChange("parkingSpaces", parseInt(e.target.value))
              }
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 mb-4 block">
            Comodidades y Características
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={amenity.id}
                  className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200"
                >
                  <Checkbox
                    id={amenity.id}
                    checked={formData.amenities.includes(amenity.id)}
                    onCheckedChange={() => handleAmenityToggle(amenity.id)}
                    className="data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                  />
                  <label
                    htmlFor={amenity.id}
                    className="text-sm text-gray-700 flex items-center gap-2 cursor-pointer font-medium"
                  >
                    <Icon className="w-4 h-4 text-emerald-600" />
                    {amenity.label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {formData.propertyType === "rent" && (
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block mb-4">
              Términos de Alquiler
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {leaseTerms.map((term) => (
                <div key={term} className="flex items-center space-x-2">
                  <Checkbox
                    id={term}
                    checked={formData.leaseTerms?.includes(term) || false}
                    onCheckedChange={(checked) => {
                      const currentTerms = formData.leaseTerms || [];
                      if (checked) {
                        handleInputChange("leaseTerms", [
                          ...currentTerms,
                          term,
                        ]);
                      } else {
                        handleInputChange(
                          "leaseTerms",
                          currentTerms.filter((t) => t !== term)
                        );
                      }
                    }}
                  />
                  <label htmlFor={term} className="text-sm text-gray-600">
                    {term}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="petFriendly"
              checked={formData.petFriendly}
              onCheckedChange={(checked) =>
                handleInputChange("petFriendly", checked)
              }
            />
            <label htmlFor="petFriendly" className="text-sm text-gray-600">
              Acepta Mascotas
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="furnished"
              checked={formData.furnished}
              onCheckedChange={(checked) =>
                handleInputChange("furnished", checked)
              }
            />
            <label htmlFor="furnished" className="text-sm text-gray-600">
              Amueblado
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-emerald-600" />
            Fotos de la Propiedad
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-400 hover:bg-emerald-50/50 transition-all duration-200">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2 font-medium">
              Arrastra y suelta las fotos aquí, o haz clic para seleccionar
            </p>
            <p className="text-sm text-gray-500 mb-4">
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
                className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200"
              >
                Seleccionar Fotos
              </Button>
            </label>
          </div>

          {formData.images.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">
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
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-600" />
            Información de Contacto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Nombre de Contacto *
              </label>
              <Input
                placeholder="Tu nombre completo"
                value={formData.contactName}
                onChange={(e) =>
                  handleInputChange("contactName", e.target.value)
                }
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Teléfono *
              </label>
              <Input
                placeholder="+1 (809) 123-4567"
                value={formData.contactPhone}
                onChange={(e) =>
                  handleInputChange("contactPhone", e.target.value)
                }
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Email *
            </label>
            <Input
              type="email"
              placeholder="tu@email.com"
              value={formData.contactEmail}
              onChange={(e) =>
                handleInputChange("contactEmail", e.target.value)
              }
              required
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resumen de la Propiedad</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Título:</span>
              <span className="font-semibold">
                {formData.title || "No especificado"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tipo:</span>
              <Badge variant="secondary">
                {formData.propertyType === "sale"
                  ? "Venta"
                  : formData.propertyType === "rent"
                  ? "Alquiler"
                  : "Vacacional"}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Precio:</span>
              <span className="font-semibold text-emerald-600">
                US${formData.price || "0"}
                {formData.priceType === "monthly"
                  ? "/mes"
                  : formData.priceType === "per-night"
                  ? "/noche"
                  : ""}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Ubicación:</span>
              <span className="font-semibold">
                {formData.city && formData.province
                  ? `${formData.city}, ${formData.province}`
                  : "No especificado"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Coordenadas:</span>
              <span className="font-semibold text-sm">
                {formData.coordinates.lat.toFixed(4)},{" "}
                {formData.coordinates.lng.toFixed(4)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Fotos:</span>
              <span className="font-semibold">
                {formData.images.length} fotos
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {renderStepIndicator()}

      <div className="transition-all duration-300 ease-in-out">
        {renderCurrentStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2 px-6 py-2 transition-all duration-200 hover:bg-gray-50"
        >
          ← Anterior
        </Button>

        <div className="flex gap-3">
          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              className="bg-emerald-600 hover:bg-emerald-700 px-8 py-2 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Siguiente →
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2 px-8 py-2 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creando...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Crear Propiedad
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Preview Button */}
      {currentStep === totalSteps && (
        <div className="text-center pt-4">
          <Button
            type="button"
            variant="outline"
            className="flex items-center gap-2 mx-auto px-6 py-2 transition-all duration-200 hover:bg-gray-50 hover:border-gray-400"
          >
            <Eye className="w-4 h-4" />
            Vista Previa
          </Button>
        </div>
      )}
    </form>
  );
}
