"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import { Building2, DollarSign, TrendingUp, Plus, Eye, Edit, BarChart3 } from "lucide-react"
import Link from "next/link"
import { PropertyStatsChart } from "@/components/dashboard/property-stats-chart"
import { RecentActivity } from "@/components/dashboard/recent-activity"

export function DashboardOverview() {
  const { user } = useAuth()

  if (!user) return null

  // Mock data - replace with real data from API
  const stats = {
    totalProperties: user.propertiesCount,
    activeListings: 2,
    totalRevenue: 15750,
    occupancyRate: 85,
    monthlyGrowth: 12.5,
  }

  const usagePercentage = (user.propertiesCount / user.maxProperties) * 100

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">¡Bienvenido, {user.name}!</h1>
          <p className="text-muted-foreground mt-1">Aquí tienes un resumen de tu actividad inmobiliaria</p>
        </div>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/dashboard/properties/new">
            <Plus className="mr-2 h-4 w-4" />
            Agregar Propiedad
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Propiedades</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.totalProperties}</div>
            <p className="text-xs text-muted-foreground">{user.maxProperties - user.propertiesCount} disponibles</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Listados Activos</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{stats.activeListings}</div>
            <p className="text-xs text-muted-foreground">+{stats.monthlyGrowth}% este mes</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-4">${stats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+{stats.monthlyGrowth}% vs mes anterior</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa de Ocupación</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{stats.occupancyRate}%</div>
            <p className="text-xs text-muted-foreground">Excelente rendimiento</p>
          </CardContent>
        </Card>
      </div>

      {/* Usage and Subscription */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Uso de Propiedades
            </CardTitle>
            <CardDescription>
              Estás usando {user.propertiesCount} de {user.maxProperties} propiedades disponibles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={usagePercentage} className="w-full" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {user.propertiesCount}/{user.maxProperties} propiedades
              </span>
              <Badge variant={usagePercentage > 80 ? "destructive" : "secondary"}>
                {usagePercentage.toFixed(0)}% usado
              </Badge>
            </div>
            {usagePercentage > 80 && (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/subscription">Actualizar Plan</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Plan Actual</span>
              <Badge
                className={
                  user.subscription === "premium"
                    ? "bg-primary"
                    : user.subscription === "basic"
                      ? "bg-secondary"
                      : "bg-muted"
                }
              >
                {user.subscription.toUpperCase()}
              </Badge>
            </CardTitle>
            <CardDescription>
              {user.subscription === "premium"
                ? "Acceso completo a todas las funciones"
                : user.subscription === "basic"
                  ? "Funciones básicas disponibles"
                  : "Plan gratuito con funciones limitadas"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Propiedades máximas:</span>
                <span className="font-medium">{user.maxProperties}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Analíticas avanzadas:</span>
                <span className="font-medium">{user.subscription !== "free" ? "✓ Incluido" : "✗ No disponible"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Soporte prioritario:</span>
                <span className="font-medium">
                  {user.subscription === "premium" ? "✓ Incluido" : "✗ No disponible"}
                </span>
              </div>
            </div>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/dashboard/subscription">Ver Detalles del Plan</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        <PropertyStatsChart />
        <RecentActivity />
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
          <CardDescription>Gestiona tus propiedades de manera eficiente</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            <Button variant="outline" className="justify-start gap-2 bg-transparent" asChild>
              <Link href="/dashboard/properties/new">
                <Plus className="h-4 w-4" />
                Agregar Propiedad
              </Link>
            </Button>
            <Button variant="outline" className="justify-start gap-2 bg-transparent" asChild>
              <Link href="/dashboard/properties">
                <Edit className="h-4 w-4" />
                Editar Propiedades
              </Link>
            </Button>
            <Button variant="outline" className="justify-start gap-2 bg-transparent" asChild>
              <Link href="/dashboard/analytics">
                <BarChart3 className="h-4 w-4" />
                Ver Analíticas
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
