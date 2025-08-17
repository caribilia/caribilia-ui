import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Bed, Bath, Square, ChevronLeft, ChevronRight } from "lucide-react"

const properties = [
  {
    id: 1,
    price: "US$650,000",
    beds: 3,
    baths: 2,
    sqft: "150",
    address: "Los Cacicazgos, Santo Domingo, Distrito Nacional",
    image: "/casa-cacicazgos.png",
    status: "En Venta",
    isNew: true,
  },
  {
    id: 2,
    price: "US$1,200,000",
    beds: 4,
    baths: 3,
    sqft: "220",
    address: "Playa Dorada, Puerto Plata",
    image: "/villa-puerto-plata.png",
    status: "En Venta",
    isNew: false,
  },
  {
    id: 3,
    price: "US$890,000",
    beds: 3,
    baths: 2.5,
    sqft: "180",
    address: "Las Terrenas, Samaná",
    image: "/casa-las-terrenas.png",
    status: "En Venta",
    isNew: true,
  },
  {
    id: 4,
    price: "US$2,100,000",
    beds: 5,
    baths: 4,
    sqft: "350",
    address: "Casa de Campo, La Romana",
    image: "/mansion-casa-campo.png",
    status: "En Venta",
    isNew: false,
  },
]

export function PropertyListings() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-800 mb-2">
              Descubre propiedades en tu área
            </h2>
            <p className="text-lg text-slate-600">Propiedades destacadas en República Dominicana</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-cyan-200"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.address}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {property.isNew && <Badge className="bg-cyan-800 text-white">Nuevo</Badge>}
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    {property.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-white/90 hover:bg-white">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">{property.price}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.beds} hab</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.baths} baños</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>{property.sqft} m²</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{property.address}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-cyan-800 hover:bg-cyan-900 text-white px-8 py-3 text-lg">Comenzar búsqueda</Button>
        </div>
      </div>
    </section>
  )
}
