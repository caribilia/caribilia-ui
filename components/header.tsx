import { Button } from "@/components/ui/button"
import { Home, Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-8 w-8 text-cyan-800" />
            <span className="text-2xl font-serif font-bold text-cyan-800">ModernEstate</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/buy" className="text-slate-600 hover:text-cyan-800 font-medium transition-colors">
              Buy
            </Link>
            <Link href="/rent" className="text-slate-600 hover:text-cyan-800 font-medium transition-colors">
              Rent
            </Link>
            <Link href="/sell" className="text-slate-600 hover:text-cyan-800 font-medium transition-colors">
              Sell
            </Link>
            <a href="#" className="text-slate-600 hover:text-cyan-800 font-medium transition-colors">
              Agents
            </a>
            <a href="#" className="text-slate-600 hover:text-cyan-800 font-medium transition-colors">
              Loans
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-cyan-800 hover:bg-cyan-900 text-white">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
