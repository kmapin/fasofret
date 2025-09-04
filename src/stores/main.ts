import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface QuoteData {
  origin: string
  destination: string
  weight: number
  dimensions: {
    length: number
    width: number
    height: number
  }
  transportType: 'air' | 'ground' | 'sea'
  priority: 'standard' | 'express' | 'urgent'
  packageType: string
}

export interface TrackingData {
  trackingNumber: string
  status: string
  location: string
  estimatedDelivery: string
  timeline: Array<{
    date: string
    status: string
    location: string
    description: string
  }>
}

export interface User {
  email: string
  name: string
  company: string
  role: 'client' | 'manager'
}

export const useMainStore = defineStore('main', () => {
  const currentQuote = ref<QuoteData | null>(null)
  const trackingData = ref<TrackingData | null>(null)
  const user = ref<User | null>(null)
  const loading = ref(false)
  const testimonials = ref([
    {
      id: 1,
      name: 'Sophie Martin',
      company: 'Tech Solutions SARL',
      rating: 5,
      comment: 'Service exceptionnel ! Livraison rapide et sécurisée de nos équipements informatiques. Je recommande vivement.',
      service: 'Fret Aérien'
    },
    {
      id: 2,
      name: 'Jean-Luc Durand',
      company: 'Import Export Global',
      rating: 5,
      comment: 'Professionnalisme et réactivité au top. Nos marchandises arrivent toujours en parfait état.',
      service: 'Fret Maritime'
    },
    {
      id: 3,
      name: 'Marie Dubois',
      company: 'Artisanat Français',
      rating: 4,
      comment: 'Très satisfaite du service. Tarifs compétitifs et suivi en temps réel très pratique.',
      service: 'Fret Terrestre'
    }
  ])

  const login = async (userData: User) => {
    user.value = userData
    // Sauvegarder dans le localStorage
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = async () => {
    user.value = null
    trackingData.value = null
    currentQuote.value = null
    localStorage.removeItem('user')
  }

  const initializeAuth = () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
    }
  }

  const calculateQuote = async (quoteData: QuoteData) => {
    loading.value = true
    currentQuote.value = quoteData
    
    // Simulation d'appel API
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    loading.value = false
    return {
      basePrice: calculateBasePrice(quoteData),
      estimatedDays: getEstimatedDelivery(quoteData),
      details: getQuoteDetails(quoteData)
    }
  }

  const trackShipment = async (trackingNumber: string) => {
    loading.value = true
    
    // Simulation d'appel API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    trackingData.value = {
      trackingNumber,
      status: 'En transit',
      location: 'Centre de tri Paris',
      estimatedDelivery: '2025-01-15',
      timeline: [
        {
          date: '2025-01-10',
          status: 'Expédié',
          location: 'Entrepôt Lyon',
          description: 'Colis pris en charge'
        },
        {
          date: '2025-01-11',
          status: 'En transit',
          location: 'Centre de tri Paris',
          description: 'Colis en cours de traitement'
        },
        {
          date: '2025-01-12',
          status: 'En cours de livraison',
          location: 'Centre de distribution local',
          description: 'Préparation pour livraison finale'
        }
      ]
    }
    
    loading.value = false
    return trackingData.value
  }

  const calculateBasePrice = (quote: QuoteData): number => {
    const baseRates = {
      air: 8.5,
      ground: 3.2,
      sea: 1.8
    }
    
    const priorityMultiplier = {
      standard: 1,
      express: 1.5,
      urgent: 2
    }
    
    return Math.round(quote.weight * baseRates[quote.transportType] * priorityMultiplier[quote.priority])
  }

  const getEstimatedDelivery = (quote: QuoteData): number => {
    const baseDays = {
      air: { standard: 3, express: 2, urgent: 1 },
      ground: { standard: 7, express: 5, urgent: 3 },
      sea: { standard: 21, express: 14, urgent: 10 }
    }
    
    return baseDays[quote.transportType][quote.priority]
  }

  const getQuoteDetails = (quote: QuoteData) => {
    return {
      volumetricWeight: Math.round((quote.dimensions.length * quote.dimensions.width * quote.dimensions.height) / 5000),
      insuranceIncluded: true,
      trackingIncluded: true,
      customsClearance: quote.transportType !== 'ground'
    }
  }

  return {
    currentQuote,
    trackingData,
    user,
    loading,
    testimonials,
    login,
    logout,
    initializeAuth,
    calculateQuote,
    trackShipment
  }
})