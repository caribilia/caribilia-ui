"use client";

import { useState } from "react";
import { mockAgents, type Agent } from "@/lib/mock-agents";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Star,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Shield,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { AgentContactModal } from "./agent-contact-modal";

export function AgentsGrid() {
  const [agents] = useState<Agent[]>(mockAgents);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Nuestros Agentes Verificados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce a los profesionales que te ayudarán a encontrar la propiedad
            perfecta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <Card
              key={agent.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header with photo and verification badge */}
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover border-4 border-background shadow-lg"
                  />
                </div>
                {agent.verified && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-2 rounded-full">
                    <Shield className="h-4 w-4" />
                  </div>
                )}
              </div>

              {/* Agent Info */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {agent.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {renderStars(agent.rating)}
                    <span className="text-sm text-muted-foreground ml-2">
                      {agent.rating} ({agent.reviewCount} reseñas)
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {agent.location}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Idiomas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.languages.map((language) => (
                      <Badge
                        key={language}
                        variant="secondary"
                        className="text-xs"
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Especialidades:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty) => (
                      <Badge
                        key={specialty}
                        variant="outline"
                        className="text-xs"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {agent.properties}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Propiedades
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {agent.experience}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Experiencia
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {agent.description}
                </p>

                {/* Contact Actions */}
                <div className="space-y-3">
                  <Button
                    className="w-full"
                    size="sm"
                    onClick={() => {
                      setSelectedAgent(agent);
                      setIsContactModalOpen(true);
                    }}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contactar
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(`tel:${agent.contact.phone}`)}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() =>
                        window.open(`mailto:${agent.contact.email}`)
                      }
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver más agentes
          </Button>
        </div>
      </div>

      {/* Contact Modal */}
      {selectedAgent && (
        <AgentContactModal
          agent={selectedAgent}
          isOpen={isContactModalOpen}
          onClose={() => {
            setIsContactModalOpen(false);
            setSelectedAgent(null);
          }}
        />
      )}
    </section>
  );
}
