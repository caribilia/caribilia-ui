import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/caribilia-isotipo.jpg" alt="Caribilia" width={32} height={32} className="rounded-sm" />
            <span className="text-2xl font-serif font-bold text-primary">Caribilia</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/alquilar" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Alquilar
            </Link>
            <Link href="/vender" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Vender
            </Link>
            <a href="#" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Agentes
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Iniciar Sesión
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Comenzar</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
