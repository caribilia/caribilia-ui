"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  DollarSign,
  MapIcon,
  BarChart3,
} from "lucide-react";
import { MapLayout } from "./map-layout";

// Mock recent sales data for the map
const recentSales = [
  {
    id: "sale1",
    title: "Recientemente Vendida",
    price: "$780,000",
    address: "456 Calle Olmo, Santo Domingo Este, RD",
    beds: 3,
    baths: 2,
    sqft: "1,800 m²",
    image: "/placeholder.svg?height=300&width=400&text=Recently+Sold+Home",
    lat: 18.4861,
    lng: -69.9312,
    type: "sale" as const,
  },
  {
    id: "sale2",
    title: "Recientemente Vendida",
    price: "$850,000",
    address: "789 Avenida Roble, Santo Domingo Oeste, RD",
    beds: 4,
    baths: 3,
    sqft: "2,200 m²",
    image: "/placeholder.svg?height=300&width=400&text=Recently+Sold+Home",
    lat: 18.4961,
    lng: -69.9212,
    type: "sale" as const,
  },
  {
    id: "sale3",
    title: "Recientemente Vendida",
    price: "$920,000",
    address: "321 Calle Pino, Santo Domingo Norte, RD",
    beds: 4,
    baths: 2.5,
    sqft: "2,400 m²",
    image: "/placeholder.svg?height=300&width=400&text=Recently+Sold+Home",
    lat: 18.4761,
    lng: -69.9412,
    type: "sale" as const,
  },
];

export function MarketInsights() {
  const [showMap, setShowMap] = useState(false);

  const marketData = [
    {
      metric: "Precio Medio de Venta",
      value: "$825,000",
      change: "+8.2%",
      trend: "up",
      period: "vs año pasado",
    },
    {
      metric: "Días en el Mercado",
      value: "18 días",
      change: "-5 días",
      trend: "down",
      period: "vs año pasado",
    },
    {
      metric: "Ratio Venta-Lista",
      value: "102.1%",
      change: "+1.8%",
      trend: "up",
      period: "vs año pasado",
    },
    {
      metric: "Nivel de Inventario",
      value: "1.2 meses",
      change: "-0.3 meses",
      trend: "down",
      period: "vs año pasado",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Perspectivas del Mercado
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Mantente informado con las últimas tendencias y datos del mercado
              en tu área.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketData.map((data, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-slate-700">
                    {data.metric}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-3xl font-bold text-slate-900">
                    {data.value}
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    {data.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    )}
                    <Badge
                      variant="secondary"
                      className={
                        data.trend === "up"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }
                    >
                      {data.change}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500">{data.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-serif text-2xl text-slate-900">
                    Ventas Recientes en tu Área
                  </CardTitle>
                  <p className="text-slate-600 mt-2">
                    Ve qué casas se han vendido recientemente para entender las
                    tendencias del mercado
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={!showMap ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowMap(false)}
                    className="flex items-center gap-2"
                  >
                    <BarChart3 className="h-4 w-4" />
                    Estadísticas
                  </Button>
                  <Button
                    variant={showMap ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowMap(true)}
                    className="flex items-center gap-2"
                  >
                    <MapIcon className="h-4 w-4" />
                    Map
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {showMap ? (
                <div className="h-[400px] rounded-lg border overflow-hidden">
                  <MapLayout properties={recentSales} />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentSales.map((sale) => (
                    <Card
                      key={sale.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Recientemente Vendida
                        </span>
                      </div>
                      <CardContent className="p-4">
                        <div className="font-bold text-lg text-slate-900 mb-1">
                          {sale.price}
                        </div>
                        <div className="text-sm text-slate-600 mb-2">
                          {sale.beds} hab. • {sale.baths} baños • {sale.sqft}
                        </div>
                        <div className="text-sm text-slate-500">
                          {sale.address}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Market Summary */}
          <Card className="bg-gradient-to-r from-orange-50 to-slate-50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                    Es un Excelente Momento para Vender en Santo Domingo
                  </h3>
                  <div className="space-y-3 text-slate-600">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-orange-600 mr-2" />
                      <span>
                        Los valores de las casas han aumentado 8.2% año tras año
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                      <span>
                        Las casas se venden 5 días más rápido que el año pasado
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-orange-600 mr-2" />
                      <span>
                        Los vendedores obtienen 102% de su precio de venta en
                        promedio
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    95%
                  </div>
                  <div className="text-slate-600">
                    de las casas se venden en 30 días
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mt-4">
                    $825K
                  </div>
                  <div className="text-slate-600">precio medio de venta</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
