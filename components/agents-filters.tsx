"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter, X } from "lucide-react";

interface AgentsFiltersProps {
  onFiltersChange: (filters: any) => void;
}

export function AgentsFilters({ onFiltersChange }: AgentsFiltersProps) {
  const [filters, setFilters] = useState({
    location: "",
    languages: [] as string[],
    specialties: [] as string[],
    rating: "",
    experience: "",
    search: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const locations = [
    "Punta Cana",
    "Santo Domingo",
    "Samaná",
    "Puerto Plata",
    "Santiago",
  ];
  const languages = [
    "Español",
    "Inglés",
    "Francés",
    "Italiano",
    "Alemán",
    "Portugués",
  ];
  const specialties = [
    "Lujo",
    "Playa",
    "Inversión",
    "Residencial",
    "Comercial",
    "Vacacional",
    "Familiar",
    "Terrenos",
  ];
  const ratings = ["4.5+", "4.0+", "3.5+"];
  const experiences = ["5+ años", "10+ años", "15+ años"];

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const toggleLanguage = (language: string) => {
    const newLanguages = filters.languages.includes(language)
      ? filters.languages.filter((l) => l !== language)
      : [...filters.languages, language];
    handleFilterChange("languages", newLanguages);
  };

  const toggleSpecialty = (specialty: string) => {
    const newSpecialties = filters.specialties.includes(specialty)
      ? filters.specialties.filter((s) => s !== specialty)
      : [...filters.specialties, specialty];
    handleFilterChange("specialties", newSpecialties);
  };

  const clearFilters = () => {
    const clearedFilters = {
      location: "",
      languages: [],
      specialties: [],
      rating: "",
      experience: "",
      search: "",
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some((value) =>
    Array.isArray(value) ? value.length > 0 : value !== ""
  );

  return (
    <div className="bg-background border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Filtros</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Filter className="h-4 w-4 mr-2" />
            {isExpanded ? "Ocultar" : "Mostrar"}
          </Button>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4 mr-2" />
              Limpiar
            </Button>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar agentes por nombre..."
          value={filters.search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
          className="pl-10"
        />
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Ubicación
            </label>
            <Select
              value={filters.location}
              onValueChange={(value) => handleFilterChange("location", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar ubicación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas las ubicaciones</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Languages Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Idiomas
            </label>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <Badge
                  key={language}
                  variant={
                    filters.languages.includes(language) ? "default" : "outline"
                  }
                  className="cursor-pointer hover:bg-primary/10"
                  onClick={() => toggleLanguage(language)}
                >
                  {language}
                </Badge>
              ))}
            </div>
          </div>

          {/* Specialties Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Especialidades
            </label>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <Badge
                  key={specialty}
                  variant={
                    filters.specialties.includes(specialty)
                      ? "default"
                      : "outline"
                  }
                  className="cursor-pointer hover:bg-primary/10"
                  onClick={() => toggleSpecialty(specialty)}
                >
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Rating and Experience Filters */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Puntuación mínima
              </label>
              <Select
                value={filters.rating}
                onValueChange={(value) => handleFilterChange("rating", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Cualquier puntuación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Cualquier puntuación</SelectItem>
                  {ratings.map((rating) => (
                    <SelectItem key={rating} value={rating}>
                      {rating}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Experiencia mínima
              </label>
              <Select
                value={filters.experience}
                onValueChange={(value) =>
                  handleFilterChange("experience", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Cualquier experiencia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Cualquier experiencia</SelectItem>
                  {experiences.map((exp) => (
                    <SelectItem key={exp} value={exp}>
                      {exp}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {filters.location && (
              <Badge variant="secondary" className="gap-2">
                Ubicación: {filters.location}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => handleFilterChange("location", "")}
                />
              </Badge>
            )}
            {filters.languages.map((language) => (
              <Badge key={language} variant="secondary" className="gap-2">
                {language}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => toggleLanguage(language)}
                />
              </Badge>
            ))}
            {filters.specialties.map((specialty) => (
              <Badge key={specialty} variant="secondary" className="gap-2">
                {specialty}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => toggleSpecialty(specialty)}
                />
              </Badge>
            ))}
            {filters.rating && (
              <Badge variant="secondary" className="gap-2">
                {filters.rating}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => handleFilterChange("rating", "")}
                />
              </Badge>
            )}
            {filters.experience && (
              <Badge variant="secondary" className="gap-2">
                {filters.experience}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => handleFilterChange("experience", "")}
                />
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
