"use client";

import { Button } from "@/components/ui/button";
import { Search, Star, Shield, Users } from "lucide-react";

export function AgentsHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Agentes Verificados
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Encuentra tu Agente
            <span className="block text-primary">Inmobiliario Ideal</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Conectamos con los mejores agentes verificados de República
            Dominicana. Experiencia, confianza y resultados garantizados en cada
            transacción.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar agentes por nombre, ubicación o especialidad..."
                className="w-full pl-12 pr-4 py-4 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Buscar
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">150+</h3>
              <p className="text-muted-foreground">Agentes Verificados</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">4.8</h3>
              <p className="text-muted-foreground">Puntuación Promedio</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">100%</h3>
              <p className="text-muted-foreground">Verificados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
