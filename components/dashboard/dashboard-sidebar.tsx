"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import {
  Home,
  Building2,
  BarChart3,
  Settings,
  CreditCard,
  Plus,
  Users,
  FileText,
  Bell,
  ChevronLeft,
  ChevronRight,
  Crown,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Mis Propiedades", href: "/dashboard/properties", icon: Building2 },
  { name: "Agregar Propiedad", href: "/dashboard/properties/new", icon: Plus },
  { name: "Analíticas", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Inquilinos", href: "/dashboard/tenants", icon: Users },
  { name: "Reportes", href: "/dashboard/reports", icon: FileText },
  { name: "Suscripción", href: "/dashboard/subscription", icon: CreditCard },
  { name: "Ver Planes", href: "/dashboard/subscription/plans", icon: Crown },
  { name: "Notificaciones", href: "/dashboard/notifications", icon: Bell },
  { name: "Configuración", href: "/dashboard/settings", icon: Settings },
]

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()
  const { user } = useAuth()

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription) {
      case "premium":
        return "bg-primary text-primary-foreground"
      case "basic":
        return "bg-secondary text-secondary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div
      className={cn(
        "bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-full flex-col">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-sidebar-foreground">Panel de Control</p>
                <Badge className={cn("text-xs", getSubscriptionColor(user?.subscription || "free"))}>
                  {user?.subscription?.toUpperCase() || "FREE"}
                </Badge>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="h-8 w-8 p-0 hover:bg-sidebar-accent"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-10",
                    collapsed && "justify-center px-2",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                      : "hover:bg-sidebar-accent text-sidebar-foreground",
                  )}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  {!collapsed && <span className="truncate">{item.name}</span>}
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* User Info */}
        {!collapsed && user && (
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-sm font-semibold text-primary-foreground">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {user.propertiesCount}/{user.maxProperties} propiedades
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
