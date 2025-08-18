import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  DollarSign,
  PawPrint,
} from "lucide-react";

const rentals = [
  {
    id: 1,
    image: "/apartamento-bella-vista.png",
    rent: "RD$45,000/mes",
    deposit: "RD$45,000",
    address: "Bella Vista, Santo Domingo, República Dominicana",
    beds: 2,
    baths: 2,
    sqft: "85",
    available: "Disponible Ahora",
    leaseTerms: "12 meses",
    petFriendly: true,
    type: "Apartamento",
  },
  {
    id: 2,
    image: "/casa-colonial-zona.png",
    rent: "RD$65,000/mes",
    deposit: "RD$65,000",
    address: "Zona Colonial, Santo Domingo, República Dominicana",
    beds: 3,
    baths: 2.5,
    sqft: "120",
    available: "1 de Diciembre",
    leaseTerms: "12 meses",
    petFriendly: false,
    type: "Casa Colonial",
  },
  {
    id: 3,
    image: "/estudio-naco.png",
    rent: "RD$35,000/mes",
    deposit: "RD$35,000",
    address: "Naco, Santo Domingo, República Dominicana",
    beds: 0,
    baths: 1,
    sqft: "45",
    available: "Disponible Ahora",
    leaseTerms: "6-12 meses",
    petFriendly: true,
    type: "Estudio",
  },
  {
    id: 4,
    image: "/villa-punta-cana.png",
    rent: "RD$120,000/mes",
    deposit: "RD$120,000",
    address: "Punta Cana, República Dominicana",
    beds: 3,
    baths: 3,
    sqft: "180",
    available: "15 de Enero",
    leaseTerms: "12 meses",
    petFriendly: true,
    type: "Villa",
  },
  {
    id: 5,
    image: "/penthouse-piantini.png",
    rent: "RD$85,000/mes",
    deposit: "RD$85,000",
    address: "Piantini, Santo Domingo, República Dominicana",
    beds: 1,
    baths: 1,
    sqft: "65",
    available: "Disponible Ahora",
    leaseTerms: "6-12 meses",
    petFriendly: false,
    type: "Penthouse",
  },
  {
    id: 6,
    image: "/casa-las-terrenas.png",
    rent: "RD$95,000/mes",
    deposit: "RD$95,000",
    address: "Las Terrenas, Samaná, República Dominicana",
    beds: 4,
    baths: 3,
    sqft: "200",
    available: "1 de Febrero",
    leaseTerms: "12 meses",
    petFriendly: true,
    type: "Casa",
  },
];

export function RentPropertyGrid() {
  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-serif text-2xl font-bold text-slate-900">
            Alquileres disponibles
          </h2>
          <p className="text-slate-600">
            892 propiedades en República Dominicana
          </p>
        </div>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Ordenar: Reciente" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="reciente">Ordenar: Reciente</SelectItem>
            <SelectItem value="precio-bajo">Precio: Bajo a Alto</SelectItem>
            <SelectItem value="precio-alto">Precio: Alto a Bajo</SelectItem>
            <SelectItem value="fecha">Fecha disponible</SelectItem>
            <SelectItem value="metros">Metros cuadrados</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {rentals.map((rental) => (
          <Card
            key={rental.id}
            className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={rental.image || "/placeholder.svg"}
                alt={rental.address}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
                <Heart className="h-5 w-5 text-slate-600 hover:text-red-500" />
              </button>
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge
                  variant="default"
                  className={
                    rental.available === "Disponible Ahora"
                      ? "bg-green-600"
                      : "bg-blue-600"
                  }
                >
                  {rental.available}
                </Badge>
                {rental.petFriendly && (
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-800"
                  >
                    <PawPrint className="h-3 w-3 mr-1" />
                    Acepta Mascotas
                  </Badge>
                )}
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    {rental.rent}
                  </h3>
                  <div className="flex items-center text-slate-600 mt-1">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="text-sm">Depósito: {rental.deposit}</span>
                  </div>
                  <div className="flex items-center text-slate-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{rental.address}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span className="text-sm">
                        {rental.beds === 0
                          ? "Estudio"
                          : `${rental.beds} dormitorios`}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="text-sm">{rental.baths} baños</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span className="text-sm">{rental.sqft} m²</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Plazo: {rental.leaseTerms}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {rental.type}
                  </Badge>
                </div>

                <Button className="w-full bg-emerald-700 hover:bg-emerald-800">
                  Contactar Propiedad
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="px-8 bg-transparent">
          Cargar más propiedades
        </Button>
      </div>
    </div>
  );
}
