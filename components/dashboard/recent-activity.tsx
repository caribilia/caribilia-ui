"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, DollarSign, Users, FileText } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "property",
    title: "Nueva propiedad agregada",
    description: "Apartamento en Zona Colonial",
    time: "Hace 2 horas",
    icon: Building2,
    color: "bg-primary",
  },
  {
    id: 2,
    type: "payment",
    title: "Pago recibido",
    description: "$1,200 - Apartamento Centro",
    time: "Hace 1 día",
    icon: DollarSign,
    color: "bg-chart-4",
  },
  {
    id: 3,
    type: "tenant",
    title: "Nuevo inquilino",
    description: "María González - Casa Bella Vista",
    time: "Hace 2 días",
    icon: Users,
    color: "bg-secondary",
  },
  {
    id: 4,
    type: "report",
    title: "Reporte generado",
    description: "Informe mensual de ingresos",
    time: "Hace 3 días",
    icon: FileText,
    color: "bg-chart-3",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
        <CardDescription>Últimas acciones en tu cuenta</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
            <div className={`p-2 rounded-full ${activity.color}`}>
              <activity.icon className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{activity.title}</p>
              <p className="text-xs text-muted-foreground truncate">{activity.description}</p>
            </div>
            <Badge variant="secondary" className="text-xs">
              {activity.time}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
