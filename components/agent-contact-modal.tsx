"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  X,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";
import type { Agent } from "@/lib/mock-agents";

interface AgentContactModalProps {
  agent: Agent;
  isOpen: boolean;
  onClose: () => void;
}

export function AgentContactModal({
  agent,
  isOpen,
  onClose,
}: AgentContactModalProps) {
  const [contactMethod, setContactMethod] = useState<
    "phone" | "email" | "whatsapp"
  >("phone");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyType: "",
    budget: "",
    timeline: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se enviaría la información del formulario
    console.log("Contact form submitted:", { agent: agent.name, ...formData });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-bold text-foreground">
              Contactar a {agent.name}
            </h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Agent Info */}
          <div className="flex items-center gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
            <Image
              src={agent.photo}
              alt={agent.name}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {agent.name}
              </h3>
              <div className="flex items-center gap-1 mb-1">
                {renderStars(agent.rating)}
                <span className="text-sm text-muted-foreground ml-2">
                  {agent.rating} ({agent.reviewCount} reseñas)
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {agent.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {agent.experience}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Método de contacto
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <Button
                variant={contactMethod === "phone" ? "default" : "outline"}
                onClick={() => setContactMethod("phone")}
                className="flex flex-col items-center gap-2 h-auto py-3"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm">Llamada</span>
              </Button>
              <Button
                variant={contactMethod === "email" ? "default" : "outline"}
                onClick={() => setContactMethod("email")}
                className="flex flex-col items-center gap-2 h-auto py-3"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">Email</span>
              </Button>
              <Button
                variant={contactMethod === "whatsapp" ? "default" : "outline"}
                onClick={() => setContactMethod("whatsapp")}
                className="flex flex-col items-center gap-2 h-auto py-3"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Teléfono
              </label>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 (809) 555-0123"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de propiedad
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) =>
                    handleInputChange("propertyType", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Seleccionar</option>
                  <option value="casa">Casa</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="villa">Villa</option>
                  <option value="terreno">Terreno</option>
                  <option value="comercial">Comercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Presupuesto
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Seleccionar</option>
                  <option value="100k-300k">US$100K - US$300K</option>
                  <option value="300k-500k">US$300K - US$500K</option>
                  <option value="500k-1m">US$500K - US$1M</option>
                  <option value="1m+">US$1M+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    handleInputChange("timeline", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Seleccionar</option>
                  <option value="inmediato">Inmediato</option>
                  <option value="3-meses">3 meses</option>
                  <option value="6-meses">6 meses</option>
                  <option value="1-ano">1 año</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Mensaje *
              </label>
              <Textarea
                required
                value={formData.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handleInputChange("message", e.target.value)
                }
                placeholder="Cuéntanos sobre lo que buscas..."
                rows={4}
                className="min-h-[80px] focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Contact Info */}
            <div className="p-4 bg-primary/5 rounded-lg">
              <h5 className="font-medium text-foreground mb-2">
                Información de contacto directo:
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{agent.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{agent.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span>{agent.contact.whatsapp}</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Enviar mensaje
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}
