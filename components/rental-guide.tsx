import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, FileText, Key, Shield } from "lucide-react"

export function RentalGuide() {
  const steps = [
    {
      icon: Search,
      title: "Buscar y Filtrar",
      description:
        "Navega por los alquileres disponibles y usa filtros para encontrar propiedades que coincidan con tus necesidades.",
      action: "Comenzar Búsqueda",
    },
    {
      icon: FileText,
      title: "Aplicar en Línea",
      description: "Envía solicitudes de alquiler con los documentos requeridos y verificaciones de antecedentes.",
      action: "Sobre Aplicaciones",
    },
    {
      icon: Shield,
      title: "Obtener Aprobación",
      description: "Completa el proceso de aprobación incluyendo verificaciones de crédito y referencias.",
      action: "Ver Requisitos",
    },
    {
      icon: Key,
      title: "Mudarse",
      description: "Firma tu contrato, paga los depósitos y obtén las llaves de tu nuevo hogar.",
      action: "Lista de Mudanza",
    },
  ]

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Tu Proceso de Alquiler</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Desde buscar hasta firmar, hacemos que encontrar y asegurar tu próximo alquiler sea simple y sin estrés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-emerald-700" />
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

        <div className="text-center mt-12 space-y-4">
          <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 px-8 mr-4">
            Buscar Alquileres Ahora
          </Button>
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Recursos de Alquiler
          </Button>
        </div>
      </div>
    </section>
  )
}
