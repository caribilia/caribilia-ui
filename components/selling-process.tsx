import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, PresentationIcon as PresentationChart, Users, Key } from "lucide-react"

export function SellingProcess() {
  const steps = [
    {
      icon: Camera,
      title: "Prepara tu Casa",
      description: "Fotografía profesional, consejos de staging y mejoras del hogar para maximizar el atractivo.",
      timeline: "Semana 1-2",
      tasks: ["Fotos profesionales", "Staging del hogar", "Reparaciones menores", "Atractivo exterior"],
    },
    {
      icon: PresentationChart,
      title: "Precio y Mercadeo",
      description:
        "Establece el precio correcto basado en análisis de mercado y crea materiales de listado atractivos.",
      timeline: "Semana 2-3",
      tasks: ["Análisis de mercado", "Estrategia de precios", "Listado MLS", "Plan de mercadeo"],
    },
    {
      icon: Users,
      title: "Mostrar y Negociar",
      description: "Organiza visitas, revisa ofertas y negocia los mejores términos para tu venta.",
      timeline: "Semana 3-6",
      tasks: ["Programar visitas", "Revisar ofertas", "Negociar términos", "Aceptar oferta"],
    },
    {
      icon: Key,
      title: "Cerrar la Venta",
      description: "Maneja inspecciones, tasaciones y papeleo final para completar tu venta.",
      timeline: "Semana 6-10",
      tasks: ["Inspección del hogar", "Tasación", "Recorrido final", "Día de cierre"],
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Tu Proceso de Venta, Paso a Paso
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Te guiaremos a través de cada etapa de vender tu casa, desde la preparación hasta el día de cierre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="font-serif text-xl">{step.title}</CardTitle>
                  <div className="text-sm text-orange-600 font-semibold">{step.timeline}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm">{step.description}</p>
                  <div className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center text-xs text-slate-500">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                        {task}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8 mr-4">
              Comenzar Proceso de Venta
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              Descargar Guía de Venta
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
