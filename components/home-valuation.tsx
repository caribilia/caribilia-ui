import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Home, MapPin } from "lucide-react";

export function HomeValuation() {
  const recentSales = [
    {
      address: "1234 Calle Roble, Santo Domingo Este, RD",
      soldPrice: "$825,000",
      listPrice: "$799,000",
      beds: 3,
      baths: 2,
      sqft: "1,650",
      daysOnMarket: 12,
      soldDate: "15 Nov, 2024",
      priceChange: "+3.3%",
    },
    {
      address: "5678 Avenida Pino, Santo Domingo Oeste, RD",
      soldPrice: "$950,000",
      listPrice: "$975,000",
      beds: 4,
      baths: 3,
      sqft: "2,100",
      daysOnMarket: 8,
      soldDate: "10 Nov, 2024",
      priceChange: "-2.6%",
    },
    {
      address: "9012 Calle Olmo, Santo Domingo Norte, RD",
      soldPrice: "$720,000",
      listPrice: "$720,000",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      daysOnMarket: 15,
      soldDate: "8 Nov, 2024",
      priceChange: "0%",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Conoce el Verdadero Valor de tu Casa
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Nuestro modelo de valuación avanzado utiliza ventas recientes,
              tendencias del mercado y detalles de la propiedad para darte una
              estimación precisa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Valuation Tool */}
            <Card className="bg-gradient-to-br from-orange-50 to-white border-orange-200">
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center">
                  <Home className="mr-3 h-6 w-6 text-orange-600" />
                  Estimación de tu Casa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    $785,000
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">
                      +5.2% desde el mes pasado
                    </span>
                  </div>
                  <p className="text-slate-600 mt-2">
                    1234 Tu Calle, Santo Domingo, RD
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-lg font-bold text-slate-900">
                      $750K
                    </div>
                    <div className="text-sm text-slate-600">
                      Estimación Baja
                    </div>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-4 border-2 border-orange-300">
                    <div className="text-lg font-bold text-orange-800">
                      $785K
                    </div>
                    <div className="text-sm text-orange-700">
                      Mejor Estimación
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-lg font-bold text-slate-900">
                      $820K
                    </div>
                    <div className="text-sm text-slate-600">
                      Estimación Alta
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Obtener Reporte Detallado
                </Button>
              </CardContent>
            </Card>

            {/* Market Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Ventas Recientes en tu Área
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentSales.map((sale, index) => (
                  <div
                    key={index}
                    className="border-b border-slate-100 pb-4 last:border-b-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center text-slate-600 text-sm mb-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {sale.address}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-slate-600">
                          <span>{sale.beds} hab.</span>
                          <span>{sale.baths} baños</span>
                          <span>{sale.sqft} m²</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">
                          {sale.soldPrice}
                        </div>
                        <Badge
                          variant={
                            sale.priceChange.startsWith("+")
                              ? "default"
                              : "secondary"
                          }
                          className={
                            sale.priceChange.startsWith("+")
                              ? "bg-green-100 text-green-800"
                              : sale.priceChange.startsWith("-")
                              ? "bg-red-100 text-red-800"
                              : "bg-slate-100 text-slate-800"
                          }
                        >
                          {sale.priceChange}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Vendida {sale.soldDate}</span>
                      <span>{sale.daysOnMarket} días en el mercado</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Todas las Ventas Recientes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
