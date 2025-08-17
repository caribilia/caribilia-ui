import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Calculator, TrendingUp, Heart } from "lucide-react"

const affordableHomes = [
  {
    id: 1,
    price: "US$650,000",
    beds: 2,
    baths: 2,
    sqft: "1,200",
    address: "Santiago, República Dominicana",
    image: "/cozy-modern-townhouse.png",
    monthlyPayment: "US$3,200",
  },
  {
    id: 2,
    price: "US$725,000",
    beds: 3,
    baths: 2,
    sqft: "1,450",
    address: "La Romana, República Dominicana",
    image: "/contemporary-condo.png",
    monthlyPayment: "US$3,650",
  },
  {
    id: 3,
    price: "US$580,000",
    beds: 2,
    baths: 1.5,
    sqft: "1,100",
    address: "San Pedro de Macorís, República Dominicana",
    image: "/modern-apartment-complex.png",
    monthlyPayment: "US$2,900",
  },
]

export function BuyabilitySection() {
  return (
    <section className="py-16 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-800 mb-4">
            Encuentra casas que puedas costear con ComprAbilidad™
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Navega por tu presupuesto mensual. Destacaremos las casas que se ajusten a tu rango de precios y te
            ayudaremos a entender tu poder de compra.
          </p>
        </div>

        {/* Budget Selector */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-cyan-800 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-800 mb-1">Presupuesto</h3>
              <p className="text-2xl font-bold text-cyan-800">US$3,500</p>
              <p className="text-sm text-slate-600">Pago mensual</p>
            </div>
            <div className="text-center">
              <Calculator className="h-8 w-8 text-cyan-800 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-800 mb-1">Inicial</h3>
              <p className="text-2xl font-bold text-cyan-800">10%</p>
              <p className="text-sm text-slate-600">Del precio de la casa</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-cyan-800 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-800 mb-1">Tasa de Interés</h3>
              <p className="text-2xl font-bold text-cyan-800">6.8%</p>
              <p className="text-sm text-slate-600">30 años fijo</p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 text-cyan-800 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-800 mb-1">Precio Máximo</h3>
              <p className="text-2xl font-bold text-cyan-800">US$750K</p>
              <p className="text-sm text-slate-600">Valor de la casa</p>
            </div>
          </div>
        </div>

        {/* Affordable Homes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {affordableHomes.map((home) => (
            <Card
              key={home.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-cyan-200"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={home.image || "/placeholder.svg"}
                  alt={home.address}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-green-600 text-white">Dentro del Presupuesto</Badge>
              </div>

              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{home.price}</h3>
                  <p className="text-cyan-800 font-semibold">{home.monthlyPayment}/mes</p>
                  <div className="flex items-center gap-3 text-sm text-slate-600 mt-2">
                    <span>{home.beds} hab</span>
                    <span>{home.baths} baños</span>
                    <span>{home.sqft} m²</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{home.address}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-cyan-800 hover:bg-cyan-900 text-white px-8 py-3 text-lg">Comencemos</Button>
          <p className="text-sm text-slate-600 mt-4">Obtén pre-aprobación y ve más casas dentro de tu presupuesto</p>
        </div>
      </div>
    </section>
  )
}
