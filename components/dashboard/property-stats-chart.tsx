"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { month: "Ene", ingresos: 2400, ocupacion: 85 },
  { month: "Feb", ingresos: 2800, ocupacion: 88 },
  { month: "Mar", ingresos: 3200, ocupacion: 92 },
  { month: "Abr", ingresos: 2900, ocupacion: 87 },
  { month: "May", ingresos: 3400, ocupacion: 95 },
  { month: "Jun", ingresos: 3100, ocupacion: 90 },
]

const chartConfig = {
  ingresos: {
    label: "Ingresos ($)",
    color: "hsl(var(--chart-1))",
  },
  ocupacion: {
    label: "Ocupación (%)",
    color: "hsl(var(--chart-2))",
  },
}

export function PropertyStatsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rendimiento Mensual</CardTitle>
        <CardDescription>Ingresos y tasa de ocupación de los últimos 6 meses</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="ingresos" fill="var(--color-chart-1)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
