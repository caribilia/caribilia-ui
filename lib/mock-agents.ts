export interface Agent {
  id: string;
  name: string;
  photo: string;
  rating: number;
  reviewCount: number;
  languages: string[];
  properties: number;
  specialties: string[];
  experience: string;
  location: string;
  verified: boolean;
  description: string;
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
}

export const mockAgents: Agent[] = [
  {
    id: "1",
    name: "María González",
    photo: "/placeholder-user.jpg",
    rating: 4.9,
    reviewCount: 127,
    languages: ["Español", "Inglés", "Francés"],
    properties: 23,
    specialties: ["Lujo", "Playa", "Inversión"],
    experience: "8 años",
    location: "Punta Cana",
    verified: true,
    description:
      "Especialista en propiedades de lujo en Punta Cana y Cap Cana. Experiencia en ventas internacionales y asesoría de inversión.",
    contact: {
      phone: "+1 (809) 555-0123",
      email: "maria.gonzalez@caribilia.com",
      whatsapp: "+1 (809) 555-0123",
    },
  },
  {
    id: "2",
    name: "Carlos Rodríguez",
    photo: "/placeholder-user.jpg",
    rating: 4.8,
    reviewCount: 89,
    languages: ["Español", "Inglés"],
    properties: 18,
    specialties: ["Residencial", "Comercial", "Terrenos"],
    experience: "12 años",
    location: "Santo Domingo",
    verified: true,
    description:
      "Experto en el mercado inmobiliario de Santo Domingo. Especializado en propiedades residenciales y comerciales en zonas premium.",
    contact: {
      phone: "+1 (809) 555-0456",
      email: "carlos.rodriguez@caribilia.com",
      whatsapp: "+1 (809) 555-0456",
    },
  },
  {
    id: "3",
    name: "Ana Martínez",
    photo: "/placeholder-user.jpg",
    rating: 4.7,
    reviewCount: 156,
    languages: ["Español", "Inglés", "Italiano"],
    properties: 31,
    specialties: ["Alquiler", "Vacacional", "Familiar"],
    experience: "6 años",
    location: "Samaná",
    verified: true,
    description:
      "Especialista en propiedades vacacionales y alquileres en Samaná. Conocimiento profundo del mercado turístico local.",
    contact: {
      phone: "+1 (809) 555-0789",
      email: "ana.martinez@caribilia.com",
      whatsapp: "+1 (809) 555-0789",
    },
  },
  {
    id: "4",
    name: "Roberto Sánchez",
    photo: "/placeholder-user.jpg",
    rating: 4.9,
    reviewCount: 203,
    languages: ["Español", "Inglés", "Alemán"],
    properties: 42,
    specialties: ["Lujo", "Penthouse", "Inversión"],
    experience: "15 años",
    location: "Santo Domingo",
    verified: true,
    description:
      "Líder en ventas de propiedades de lujo en Santo Domingo. Experiencia en transacciones de alto valor y clientes internacionales.",
    contact: {
      phone: "+1 (809) 555-0321",
      email: "roberto.sanchez@caribilia.com",
      whatsapp: "+1 (809) 555-0321",
    },
  },
  {
    id: "5",
    name: "Isabella Torres",
    photo: "/placeholder-user.jpg",
    rating: 4.6,
    reviewCount: 78,
    languages: ["Español", "Inglés", "Portugués"],
    properties: 15,
    specialties: ["Playa", "Vacacional", "Lujo"],
    experience: "5 años",
    location: "Puerto Plata",
    verified: true,
    description:
      "Especialista en propiedades frente al mar en Puerto Plata. Enfoque en el mercado turístico y de retiro.",
    contact: {
      phone: "+1 (809) 555-0654",
      email: "isabella.torres@caribilia.com",
      whatsapp: "+1 (809) 555-0654",
    },
  },
  {
    id: "6",
    name: "Miguel Fernández",
    photo: "/placeholder-user.jpg",
    rating: 4.8,
    reviewCount: 134,
    languages: ["Español", "Inglés", "Francés"],
    properties: 27,
    specialties: ["Residencial", "Familiar", "Inversión"],
    experience: "10 años",
    location: "Santiago",
    verified: true,
    description:
      "Experto en el mercado residencial de Santiago. Especializado en propiedades familiares y oportunidades de inversión.",
    contact: {
      phone: "+1 (809) 555-0987",
      email: "miguel.fernandez@caribilia.com",
      whatsapp: "+1 (809) 555-0987",
    },
  },
];
