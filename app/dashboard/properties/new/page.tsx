"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Header } from "@/components/header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { PropertyForm } from "@/components/properties/property-form";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Plus,
  Home,
  Building2,
  MapPin,
  DollarSign,
  Camera,
} from "lucide-react";
import Link from "next/link";

export default function NewPropertyPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1">
          {/* Simplified Header Section */}
          <div className="bg-white border-b border-slate-200 px-6 py-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <Link
                  href="/dashboard/properties"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-700 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver a Propiedades
                </Link>
                <div className="flex items-center gap-2 text-slate-500">
                  <Home className="w-4 h-4" />
                  <span className="text-sm">Dashboard</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-800">
                    Nueva Propiedad
                  </h1>
                  <p className="text-slate-600">
                    Completa la información para listar tu propiedad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6">
            <div className="max-w-4xl mx-auto">
              <PropertyForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
