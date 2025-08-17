import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-50 to-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('/modern-suburban-homes.png')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-800 mb-6 leading-tight">
            Encuentra tu hogar ideal hoy
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed">
            Explora las mejores propiedades adaptadas a tus necesidades con recomendaciones personalizadas y orientación
            experta en cada paso del camino.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="Ingresa dirección, barrio, ciudad o código postal"
                  className="pl-12 h-14 text-lg border-gray-200 focus:border-cyan-800 focus:ring-cyan-800"
                />
              </div>
              <Button className="h-14 px-8 bg-cyan-800 hover:bg-cyan-900 text-white text-lg font-semibold">
                <Search className="h-5 w-5 mr-2" />
                Buscar
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/alquilar">
              <Button variant="outline" className="border-cyan-200 text-cyan-800 hover:bg-cyan-50 bg-transparent">
                Alquilar una Casa
              </Button>
            </Link>
            <Link href="/vender">
              <Button variant="outline" className="border-cyan-200 text-cyan-800 hover:bg-cyan-50 bg-transparent">
                Vender Tu Casa
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
