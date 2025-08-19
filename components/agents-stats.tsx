"use client";

import { CheckCircle, Award, Clock, MapPin } from "lucide-react";

export function AgentsStats() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            ¿Por qué elegir nuestros agentes?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestros agentes verificados cuentan con las credenciales y
            experiencia necesarias para garantizar transacciones exitosas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Verificación Completa
            </h3>
            <p className="text-muted-foreground">
              Todos nuestros agentes pasan por un riguroso proceso de
              verificación de identidad y credenciales.
            </p>
          </div>

          <div className="text-center p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Experiencia Comprobada
            </h3>
            <p className="text-muted-foreground">
              Mínimo 5 años de experiencia en el mercado inmobiliario
              dominicano.
            </p>
          </div>

          <div className="text-center p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Respuesta Rápida
            </h3>
            <p className="text-muted-foreground">
              Respuesta garantizada en menos de 24 horas para todas las
              consultas.
            </p>
          </div>

          <div className="text-center p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Cobertura Nacional
            </h3>
            <p className="text-muted-foreground">
              Agentes en todas las principales ciudades y destinos turísticos
              del país.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
