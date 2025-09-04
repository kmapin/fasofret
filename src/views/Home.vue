<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden pt-32 md:pt-36 lg:pt-40 xl:pt-44">
      <!-- Realistic Freight Background -->
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style="background-image: url('/src/assets/pexels-kelly-12530458.jpg');"
      ></div>
      
      <!-- Animated Logistics Elements -->
      <div class="absolute inset-0 overflow-hidden">
        
       

   

        <!-- Global Logistics Network -->
        <svg class="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#60A5FA;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#34D399;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#F97316;stop-opacity:1" />
            </linearGradient>
            <marker id="networkArrow" markerWidth="8" markerHeight="6" 
             refX="0" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="url(#networkGradient)" />
            </marker>
          </defs>
          <!-- Global Trade Routes -->
          <path 
            d="M 80 160 Q 300 180 520 160 Q 700 150 880 140" 
            stroke="url(#networkGradient)" 
            stroke-width="2" 
            fill="none" 
            marker-end="url(#networkArrow)"
            class="animate-network-flow"
          />
          <!-- Continental Connections -->
          <path 
            d="M 120 280 Q 380 260 640 280 Q 780 290 920 270" 
            stroke="url(#networkGradient)" 
            stroke-width="2" 
            fill="none" 
            marker-end="url(#networkArrow)"
            class="animate-network-flow-delayed"
          />
          <!-- Intercontinental Links -->
          <path 
            d="M 200 120 Q 400 100 600 120 Q 750 130 850 110" 
            stroke="url(#networkGradient)" 
            stroke-width="1.5" 
            fill="none" 
            marker-end="url(#networkArrow)"
            class="animate-network-flow-slow"
          />
        </svg>
        
       
      </div>

      <div class="relative container mx-auto px-4 py-8 md:py-12 lg:py-16 xl:py-20 " >
        <div class="max-w-4xl mx-auto text-center mt-16 md:mt-24 lg:mt-32">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-lg hero-text hero-text-container">
            Votre Partenaire <span class="text-orange-400">Logistique</span> de Confiance
          </h1>
          <p class="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Transport aérien, terrestre et maritime avec un service personnalisé 
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/pricing" 
              class="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Devis Gratuit
            </router-link>
            <router-link 
              to="/tracking" 
              class="border-2 border-white text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm"
            >
              Suivre mon Colis
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions Component -->
    <section class="relative z-10" id="quick-actions">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <!-- Horizontal Tabs - Style exact de l'image -->
            <div class="flex bg-gray-50">
              <button
                v-for="tab in quickActionTabs"
                :key="tab.id"
                @click="activeQuickTab = tab.id"
                class="flex-1 flex items-center justify-center px-8 py-5 text-sm font-medium transition-all duration-200 relative"
                :class="activeQuickTab === tab.id 
                  ? 'text-blue-700 bg-white border-b-3 border-blue-700' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'"
              >
                <component :is="tab.icon" class="w-5 h-5 mr-3" />
                {{ tab.label }}
                <!-- Ligne active sous l'onglet -->
                <div 
                  v-if="activeQuickTab === tab.id"
                  class="absolute bottom-0 left-0 right-0 h-1 bg-blue-700"
                ></div>
              </button>
            </div>

            <!-- Content Area - Style minimaliste -->
            <div class="p-10 bg-white">
              <!-- Tracking Tab -->
              <div v-if="activeQuickTab === 'tracking'">
                <div class="text-center mb-6">
                  <p class="text-gray-500 text-sm">Numéro de suivi, conteneur ou colis</p>
                </div>
                <form @submit.prevent="handleQuickTracking" class="max-w-2xl mx-auto">
                  <div class="flex-1 relative mb-16">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin class="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      v-model="quickTrackingForm.number"
                      type="text"
                      placeholder="Numéro de suivi, conteneur ou colis"
                      class="w-full pl-10 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-600 placeholder-gray-400 text-sm"
                      required
                    >
                    <button
                      type="submit"
                      class="absolute inset-y-0 right-0 pr-3  items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span class="text-sm font-medium mr-1">Suivi</span>
                      <ArrowRight class="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>

              <!-- Schedules Tab (Pickup) -->
              <div v-if="activeQuickTab === 'schedules'">
                <div class="text-center mb-6">
                  <p class="text-gray-500 text-sm">Programmez un enlèvement à domicile</p>
                </div>
                <form @submit.prevent="handleQuickPickup" class="max-w-2xl mx-auto">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User class="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        v-model="quickPickupForm.name"
                        type="text"
                        placeholder="Nom complet"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-600 placeholder-gray-400 text-sm"
                        required
                      >
                    </div>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone class="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        v-model="quickPickupForm.phone"
                        type="tel"
                        placeholder="Téléphone"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-600 placeholder-gray-400 text-sm"
                        required
                      >
                    </div>
                  </div>
                  <div class="relative">
                    <div class="absolute top-3 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin class="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      v-model="quickPickupForm.address"
                      type="text"
                      placeholder="Adresse complète en Île-de-France"
                      class="w-full pl-10 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-600 placeholder-gray-400 text-sm mb-4"
                      required
                    >
                    <button
                      type="submit"
                      class="absolute top-0 right-0 h-full pr-3 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span class="text-sm font-medium mr-1">Programmer</span>
                      <ArrowRight class="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>

              <!-- Offices Tab (Contact) -->
              <div v-if="activeQuickTab === 'offices'">
                <div class="text-center mb-8">
                  <p class="text-gray-500 text-sm mb-4">Nos agences à votre service</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <!-- Bureau France -->
                  <div class="border border-gray-200 rounded-lg p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <img src="/src/assets/france-flag.svg" alt="Drapeau France" class="w-6 h-6 mr-3 rounded-sm">
                      Bureau France
                    </h3>
                    <div class="space-y-4 text-sm">
                      <a href="tel:+33123456789" class="flex items-center text-gray-700 hover:text-blue-600">
                        <Phone class="w-4 h-4 mr-3 text-gray-400" />
                        <span>+33 1 23 45 67 89</span>
                      </a>
                      <a href="mailto:contact@fasofret.fr" class="flex items-center text-gray-700 hover:text-blue-600">
                        <Mail class="w-4 h-4 mr-3 text-gray-400" />
                        <span>contact@fasofret.fr</span>
                      </a>
                      <div class="flex items-start text-gray-700">
                        <MapPin class="w-4 h-4 mr-3 text-gray-400 mt-1 flex-shrink-0" />
                        <span>46 ROUTE DE GOUSSAINVILLE<br>95190 FONTENAY-EN-PARISIS, France</span>
                      </div>
                    </div>
                  </div>

                  <!-- Bureau Burkina Faso -->
                  <div class="border border-gray-200 rounded-lg p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <img src="/src/assets/burkina-faso-flag.svg" alt="Drapeau Burkina Faso" class="w-6 h-6 mr-3 rounded-sm">
                      Bureau Burkina Faso
                    </h3>
                    <div class="space-y-4 text-sm">
                      <a href="tel:+22600000000" class="flex items-center text-gray-700 hover:text-blue-600">
                        <Phone class="w-4 h-4 mr-3 text-gray-400" />
                        <span>+226 00 00 00 00 (à confirmer)</span>
                      </a>
                      <a href="mailto:contact.bf@fasofret.fr" class="flex items-center text-gray-700 hover:text-blue-600">
                        <Mail class="w-4 h-4 mr-3 text-gray-400" />
                        <span>contact.bf@fasofret.fr</span>
                      </a>
                      <div class="flex items-start text-gray-700">
                        <MapPin class="w-4 h-4 mr-3 text-gray-400 mt-1 flex-shrink-0" />
                        <span>Adresse à Ouagadougou<br>Burkina Faso (à confirmer)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services de Transport</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Solutions complètes de fret adaptées à tous vos besoins logistiques
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="service in services" 
            :key="service.type"
            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer overflow-hidden"
            @click="$router.push(`/services/${service.type}`)"
          >
            <!-- Image Header -->
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <component :is="service.icon" class="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>
              <div class="space-y-2 mb-6">
                <div v-for="feature in service.features" :key="feature" class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>
              <button class="text-blue-700 font-semibold hover:text-blue-900 transition-colors flex items-center">
                En savoir plus <ArrowRight class="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="relative h-96 md:h-[450px] lg:h-[500px] bg-gray-900 overflow-hidden">
      <video 
        :src="camionColisVideo" 
        autoplay 
        loop 
        muted 
        playsinline
        class="absolute z-0 w-full h-full object-cover"
      ></video>
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">La logistique en mouvement</h2>
        <p class="text-lg md:text-xl max-w-2xl mb-8">
          Nous veillons sur vos marchandises à chaque étape du transport.
        </p>
        <router-link 
          to="/contact"
          class="bg-orange-500 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Contactez-nous
        </router-link>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir Fasofret ?
            </h2>
            <p class="text-xl text-gray-600 mb-8">
              Plus de 15 ans d'expérience dans le transport international avec un taux de satisfaction client de 98%.
            </p>
            
            <div class="space-y-6">
              <div v-for="benefit in benefits" :key="benefit.title" class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <component :is="benefit.icon" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
                  <p class="text-gray-600">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <div class="text-3xl font-bold mb-2">15+</div>
                  <div class="text-blue-100">Années d'expérience</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold mb-2">98%</div>
                  <div class="text-blue-100">Satisfaction client</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold mb-2">50+</div>
                  <div class="text-blue-100">Pays desservis</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold mb-2">24/7</div>
                  <div class="text-blue-100">Support client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <p class="text-xl text-gray-600">Témoignages authentiques de nos partenaires</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="testimonial in store.testimonials" 
            :key="testimonial.id"
            class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-center mb-4">
              <div v-for="i in 5" :key="i" class="mr-1">
                <Star 
                  :class="i <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'" 
                  class="w-5 h-5" 
                />
              </div>
            </div>
            <p class="text-gray-600 mb-4 italic">"{{ testimonial.comment }}"</p>
            <div class="border-t pt-4">
              <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-500">{{ testimonial.company }}</div>
              <div class="text-sm text-blue-600 mt-1">{{ testimonial.service }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Prêt à expédier ?</h2>
        <p class="text-xl mb-8 text-blue-100">Obtenez un devis personnalisé en quelques minutes</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/pricing" 
            class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Devis Gratuit
          </router-link>
          <router-link 
            to="/contact" 
            class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
          >
            Nous Contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-text-container {
  margin-top: 150px;
}

#quick-actions {
  margin-top: 0px; /* Pour les petits écrans */
}

@media (min-width: 768px) { /* md */
  #quick-actions {
    margin-top: -40px;
  }
}

@media (min-width: 1024px) { /* lg */
  #quick-actions {
    margin-top: -43px;
  }
}
</style>

<script setup lang="ts">
import { 
  Plane, 
  Truck, 
  Ship, 
  Check, 
  ArrowRight, 
  Clock, 
  Shield, 
  Globe, 
  Star,
  Package,
  Calendar,
  User,
  Phone,
  MapPin,
  Mail,
  Calculator
} from 'lucide-vue-next'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import camionColisVideo from '../assets/video/camion_colis.mp4'
import { useMainStore } from '../stores/main'

const router = useRouter()
const store = useMainStore()

// Quick Actions State
const activeQuickTab = ref('tracking')
const quickTrackingForm = reactive({
  number: ''
})
const quickPickupForm = reactive({
  name: '',
  phone: '',
  address: ''
})

const quickActionTabs = [
  { id: 'tracking', label: 'Suivi', icon: Package },
  { id: 'schedules', label: 'Enlèvement', icon: Calendar },
  { id: 'offices', label: 'Nos bureaux', icon: Phone }
]

// Quick Actions Methods
const handleQuickTracking = () => {
  if (quickTrackingForm.number.trim()) {
    router.push(`/tracking?number=${quickTrackingForm.number.trim()}`)
  }
}

const handleQuickPickup = () => {
  // Store form data and redirect to pickup page
  const params = new URLSearchParams({
    name: quickPickupForm.name,
    phone: quickPickupForm.phone,
    address: quickPickupForm.address
  })
  router.push(`/pickup?${params.toString()}`)
}

const services = [
  {
    type: 'air',
    title: 'Fret Aérien',
    description: 'Transport rapide et sécurisé par voie aérienne pour vos envois urgents et marchandises de valeur.',
    icon: Plane,
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Livraison express 24-48h',
      'Assurance incluse',
      'Suivi en temps réel'
    ]
  },
  {
    type: 'ground',
    title: 'Fret Terrestre',
    description: 'Solutions terrestres économiques et fiables pour vos expéditions nationales et européennes.',
    icon: Truck,
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Réseau européen étendu',
      'Tarifs compétitifs',
      'Enlèvement à domicile'
    ]
  },
  {
    type: 'sea',
    title: 'Fret Maritime',
    description: 'Transport maritime pour vos gros volumes et marchandises non urgentes vers le monde entier.',
    icon: Ship,
    image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Capacité importante',
      'Prix avantageux',
      'Destinations mondiales'
    ]
  }
]

const benefits = [
  {
    icon: Clock,
    title: 'Ponctualité Garantie',
    description: 'Respect des délais de livraison avec un taux de ponctualité de 95%'
  },
  {
    icon: Shield,
    title: 'Sécurité Maximale',
    description: 'Assurance complète et emballage professionnel pour tous vos envois'
  },
  {
    icon: Globe,
    title: 'Réseau International',
    description: 'Plus de 50 pays desservis avec des partenaires de confiance'
  }
]
</script>