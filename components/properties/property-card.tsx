"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useProperties, type Property } from "@/lib/properties-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { MoreVertical, Edit, Trash2, Eye, MapPin, Bed, Bath, Square } from "lucide-react"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { deleteProperty } = useProperties()
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "rented":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "maintenance":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "Disponible"
      case "rented":
        return "Alquilada"
      case "maintenance":
        return "Mantenimiento"
      default:
        return status
    }
  }

  const getTypeText = (type: string) => {
    switch (type) {
      case "apartment":
        return "Apartamento"
      case "house":
        return "Casa"
      case "condo":
        return "Condominio"
      case "commercial":
        return "Comercial"
      default:
        return type
    }
  }

  const handleDelete = () => {
    deleteProperty(property.id)
    setShowDeleteDialog(false)
  }

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
        <div className="relative">
          <Image
            src={property.images[0] || "/placeholder.svg?height=200&width=300"}
            alt={property.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2">
            <Badge className={getStatusColor(property.status)}>{getStatusText(property.status)}</Badge>
          </div>
          <div className="absolute top-2 right-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="sm" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/properties/${property.id}`} className="cursor-pointer">
                    <Eye className="mr-2 h-4 w-4" />
                    Ver Detalles
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/properties/${property.id}/edit`} className="cursor-pointer">
                    <Edit className="mr-2 h-4 w-4" />
                    Editar
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setShowDeleteDialog(true)}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Eliminar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg line-clamp-1">{property.title}</CardTitle>
              <CardDescription className="flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3" />
                {property.address}, {property.city}
              </CardDescription>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">${property.price.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">por mes</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <Badge variant="outline">{getTypeText(property.type)}</Badge>
              <span className="text-muted-foreground">{property.area} m²</span>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {property.bedrooms > 0 && (
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  {property.bedrooms}
                </div>
              )}
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                {property.bathrooms}
              </div>
              <div className="flex items-center gap-1">
                <Square className="h-4 w-4" />
                {property.area}m²
              </div>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">{property.description}</p>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                <Link href={`/dashboard/properties/${property.id}`}>Ver Detalles</Link>
              </Button>
              <Button variant="default" size="sm" className="flex-1" asChild>
                <Link href={`/dashboard/properties/${property.id}/edit`}>Editar</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Se eliminará permanentemente la propiedad "{property.title}" de tu
              cuenta.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
