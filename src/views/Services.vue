<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-4xl font-bold mb-6">Nos Services de Transport</h1>
          <p class="text-xl text-blue-100">
            Solutions logistiques complètes adaptées à tous vos besoins d'expédition
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            v-for="service in services" 
            :key="service.type"
            class="group cursor-pointer"
            @click="$router.push(`/services/${service.type}`)"
          >
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div class="h-48 bg-gradient-to-br relative overflow-hidden" :class="service.gradient">
                <div class="absolute inset-0 flex items-center justify-center">
                  <component :is="service.icon" class="w-20 h-20 text-white opacity-90" />
                </div>
                <div class="absolute top-4 right-4">
                  <div class="bg-white bg-opacity-20 rounded-full p-2">
                    <ArrowRight class="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>
                
                <div class="space-y-3 mb-6">
                  <h4 class="font-semibold text-gray-900">Avantages clés :</h4>
                  <ul class="space-y-2">
                    <li v-for="feature in service.features" :key="feature" class="flex items-center">
                      <Check class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span class="text-gray-700">{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-500">
                    À partir de <span class="font-semibold text-gray-900">{{ service.priceFrom }}€/kg</span>
                  </div>
                  <button class="text-blue-700 font-semibold hover:text-blue-900 transition-colors">
                    Découvrir →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services Complémentaires</h2>
          <p class="text-xl text-gray-600">Optimisez votre chaîne logistique avec nos services additionnels</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="service in additionalServices" 
            :key="service.title"
            class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <component :is="service.icon" class="w-6 h-6 text-orange-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Besoin d'une solution personnalisée ?</h2>
        <p class="text-xl mb-8 text-blue-100">
          Nos experts sont là pour vous accompagner dans vos projets logistiques
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/contact" 
            class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contactez nos Experts
          </router-link>
          <router-link 
            to="/pricing" 
            class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
          >
            Obtenir un Devis
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  Plane, 
  Truck, 
  Ship, 
  Check, 
  ArrowRight,
  Package,
  Clock,
  Shield,
  FileText
} from 'lucide-vue-next'

const services = [
  {
    type: 'air',
    title: 'Fret Aérien',
    description: 'Solutions de transport aérien rapides et sécurisées pour vos envois urgents et marchandises de haute valeur.',
    icon: Plane,
    gradient: 'from-blue-500 to-blue-700',
    priceFrom: '8.50',
    features: [
      'Livraison express 24-72h',
      'Assurance tous risques incluse',
      'Suivi GPS en temps réel',
      'Température contrôlée disponible',
      'Dédouanement express'
    ]
  },
  {
    type: 'ground',
    title: 'Fret Terrestre',
    description: 'Transport routier fiable et économique pour vos expéditions nationales et européennes avec enlèvement à domicile.',
    icon: Truck,
    gradient: 'from-green-500 to-green-700',
    priceFrom: '3.20',
    features: [
      'Réseau européen complet',
      'Enlèvement et livraison à domicile',
      'Véhicules adaptés à tous volumes',
      'Horaires flexibles',
      'Tarifs dégressifs'
    ]
  },
  {
    type: 'sea',
    title: 'Fret Maritime',
    description: 'Transport maritime économique pour vos gros volumes vers toutes les destinations mondiales avec des délais optimisés.',
    icon: Ship,
    gradient: 'from-cyan-500 to-cyan-700',
    priceFrom: '1.80',
    features: [
      'Conteneurs 20\' et 40\' disponibles',
      'Groupage LCL possible',
      'Plus de 200 ports desservis',
      'Stockage temporaire inclus',
      'Documentation complète'
    ]
  }
]

const additionalServices = [
  {
    title: 'Emballage Professionnel',
    description: 'Protection optimale de vos marchandises avec nos solutions d\'emballage adaptées',
    icon: Package
  },
  {
    title: 'Livraison Express',
    description: 'Service de livraison prioritaire pour vos envois les plus urgents',
    icon: Clock
  },
  {
    title: 'Assurance Étendue',
    description: 'Couverture tous risques pour une tranquillité d\'esprit totale',
    icon: Shield
  },
  {
    title: 'Dédouanement',
    description: 'Gestion complète des formalités douanières par nos experts',
    icon: FileText
  }
]
</script>