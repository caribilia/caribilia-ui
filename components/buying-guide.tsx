import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, FileText, Home, Users } from "lucide-react"

export function BuyingGuide() {
  const steps = [
    {
      icon: Calculator,
      title: "Obtén Pre-Aprobación",
      description:
        "Conoce tu presupuesto y demuestra a los vendedores que eres serio con una pre-aprobación hipotecaria.",
      action: "Calcular Capacidad",
    },
    {
      icon: Home,
      title: "Encuentra tu Hogar",
      description: "Busca propiedades, programa visitas y trabaja con nuestros agentes expertos.",
      action: "Ver Propiedades",
    },
    {
      icon: FileText,
      title: "Haz una Oferta",
      description: "Presenta ofertas competitivas con la guía de profesionales experimentados.",
      action: "Aprende sobre Ofertas",
    },
    {
      icon: Users,
      title: "Cierra el Trato",
      description: "Completa las inspecciones, finaliza el financiamiento y obtén tus llaves.",
      action: "Encuentra un Agente",
    },
  ]

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Tu Proceso de Compra</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Te guiaremos a través de cada paso del proceso de compra, desde la pre-aprobación hasta el cierre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-cyan-800" />
                </div>
                <CardTitle className="font-serif text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{step.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  {step.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-cyan-800 hover:bg-cyan-900 px-8">
            Comenzar Hoy
          </Button>
        </div>
      </div>
    </section>
  )
}
