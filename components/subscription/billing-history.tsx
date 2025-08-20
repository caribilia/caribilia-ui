"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Receipt, Download, Calendar, CreditCard } from "lucide-react"

// Mock billing history data
const billingHistory = [
  {
    id: "inv_001",
    date: "2024-01-01",
    amount: 79,
    plan: "Premium",
    status: "paid",
    period: "Ene 2024 - Feb 2024",
  },
  {
    id: "inv_002",
    date: "2023-12-01",
    amount: 79,
    plan: "Premium",
    status: "paid",
    period: "Dic 2023 - Ene 2024",
  },
  {
    id: "inv_003",
    date: "2023-11-01",
    amount: 29,
    plan: "Básico",
    status: "paid",
    period: "Nov 2023 - Dic 2023",
  },
  {
    id: "inv_004",
    date: "2023-10-01",
    amount: 29,
    plan: "Básico",
    status: "paid",
    period: "Oct 2023 - Nov 2023",
  },
]

export function BillingHistory() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "paid":
        return "Pagado"
      case "pending":
        return "Pendiente"
      case "failed":
        return "Fallido"
      default:
        return status
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Receipt className="h-5 w-5" />
          Historial de Facturación
        </CardTitle>
        <CardDescription>Tus facturas y pagos recientes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {billingHistory.map((invoice, index) => (
            <div key={invoice.id}>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Plan {invoice.plan}</p>
                      <Badge className={getStatusColor(invoice.status)}>{getStatusText(invoice.status)}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(invoice.date).toLocaleDateString()}
                      </span>
                      <span>{invoice.period}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold">${invoice.amount}</p>
                    <p className="text-sm text-muted-foreground">USD</p>
                  </div>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                </div>
              </div>
              {index < billingHistory.length - 1 && <Separator />}
            </div>
          ))}
        </div>

        {billingHistory.length === 0 && (
          <div className="text-center py-8">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Receipt className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No hay historial de facturación</h3>
            <p className="text-muted-foreground">Tus facturas aparecerán aquí una vez que realices tu primer pago.</p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">¿Necesitas ayuda con tu facturación?</span>
            <Button variant="outline" size="sm" className="bg-transparent">
              Contactar Soporte
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
