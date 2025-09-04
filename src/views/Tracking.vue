<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Suivi d'acheminement</h1>
          <p class="text-xl text-blue-100">
            Suivez vos expéditions en temps réel grâce à notre système de tracking avancé
          </p>
        </div>
      </div>
    </section>

    <!-- Tracking Form -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <div class="bg-white rounded-xl shadow-lg p-8">
            <div class="text-center mb-8">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search class="w-8 h-8 text-blue-600" />
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Entrez votre numéro de suivi</h2>
              <p class="text-gray-600">
                Votre numéro de suivi vous a été envoyé par email lors de l'expédition
              </p>
            </div>

            <form @submit.prevent="trackShipment" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de suivi
                </label>
                <input
                  v-model="trackingNumber"
                  type="text"
                  placeholder="Ex: TP123456789FR"
                  class="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                  required
                >
                <p class="text-sm text-gray-500 mt-2">
                  Format: 2-3 lettres + 8-12 chiffres + 2 lettres (pays)
                </p>
              </div>

              <button
                type="submit"
                :disabled="store.loading"
                class="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Package v-if="!store.loading" class="w-5 h-5 mr-2" />
                <div v-else class="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {{ store.loading ? 'Recherche en cours...' : 'Suivre mon colis' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Tracking Results -->
    <section v-if="store.trackingData" class="pb-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Status Card -->
          <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                  Colis {{ store.trackingData.trackingNumber }}
                </h3>
                <p class="text-gray-600">
                  Dernière mise à jour: {{ formatDate(new Date()) }}
                </p>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-500 mb-1">Statut actuel</div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span class="text-lg font-semibold text-green-600">
                    {{ store.trackingData.status }}
                  </span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-blue-50 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <MapPin class="w-5 h-5 text-blue-600 mr-2" />
                  <span class="font-medium text-gray-900">Position actuelle</span>
                </div>
                <p class="text-gray-700">{{ store.trackingData.location }}</p>
              </div>

              <div class="bg-green-50 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <Calendar class="w-5 h-5 text-green-600 mr-2" />
                  <span class="font-medium text-gray-900">Livraison prévue</span>
                </div>
                <p class="text-gray-700">{{ formatDate(store.trackingData.estimatedDelivery) }}</p>
              </div>

              <div class="bg-orange-50 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <Clock class="w-5 h-5 text-orange-600 mr-2" />
                  <span class="font-medium text-gray-900">Temps restant</span>
                </div>
                <p class="text-gray-700">{{ getTimeRemaining(store.trackingData.estimatedDelivery) }}</p>
              </div>
            </div>
          </div>

          <!-- Timeline -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-8">Historique de livraison</h3>
            
            <div class="relative">
              <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <div class="space-y-8">
                <div 
                  v-for="(event, index) in store.trackingData.timeline" 
                  :key="index"
                  class="relative flex items-start"
                >
                  <div class="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                    <component :is="getStatusIcon(event.status)" class="w-8 h-8 text-white" />
                  </div>
                  
                  <div class="ml-6 flex-1">
                    <div class="bg-gray-50 rounded-lg p-6">
                      <div class="flex items-center justify-between mb-2">
                        <h4 class="text-lg font-semibold text-gray-900">{{ event.status }}</h4>
                        <span class="text-sm text-gray-500">{{ formatDate(event.date) }}</span>
                      </div>
                      <p class="text-gray-600 mb-2">{{ event.description }}</p>
                      <div class="flex items-center text-sm text-gray-500">
                        <MapPin class="w-4 h-4 mr-2" />
                        <span>{{ event.location }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Future step -->
                <div class="relative flex items-start opacity-50">
                  <div class="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center relative z-10">
                    <CheckCircle class="w-8 h-8 text-white" />
                  </div>
                  
                  <div class="ml-6 flex-1">
                    <div class="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                      <div class="flex items-center justify-between mb-2">
                        <h4 class="text-lg font-semibold text-gray-900">Livré</h4>
                        <span class="text-sm text-gray-500">{{ formatDate(store.trackingData.estimatedDelivery) }}</span>
                      </div>
                      <p class="text-gray-600 mb-2">Colis remis au destinataire</p>
                      <div class="flex items-center text-sm text-gray-500">
                        <MapPin class="w-4 h-4 mr-2" />
                        <span>Adresse de livraison</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              @click="refreshTracking"
              class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <RefreshCw class="w-5 h-5 mr-2" />
              Actualiser
            </button>
            <router-link 
              to="/contact" 
              class="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
            >
              Signaler un Problème
            </router-link>
            <button 
              @click="resetTracking"
              class="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Nouveau Suivi
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Help Section -->
    <section v-if="!store.trackingData" class="pb-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Besoin d'aide ?</h2>
            <p class="text-xl text-gray-600">
              Consultez notre FAQ ou contactez notre équipe support
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <h3 class="text-xl font-semibold text-gray-900">Questions fréquentes</h3>
              
              <div v-for="faq in faqs" :key="faq.question" class="border-b border-gray-200 pb-4">
                <h4 class="font-medium text-gray-900 mb-2">{{ faq.question }}</h4>
                <p class="text-gray-600 text-sm">{{ faq.answer }}</p>
              </div>
            </div>

            <div class="bg-blue-50 rounded-xl p-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Support client</h3>
              <p class="text-gray-600 mb-6">
                Notre équipe est disponible pour vous aider avec vos questions de suivi.
              </p>
              
              <div class="space-y-4">
                <a 
                  href="tel:+33123456789" 
                  class="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Phone class="w-5 h-5 mr-3" />
                  <span>+33 1 23 45 67 89</span>
                </a>
                <a 
                  href="mailto:suivi@transitpro.fr" 
                  class="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Mail class="w-5 h-5 mr-3" />
                  <span>suivi@transitpro.fr</span>
                </a>
                <div class="flex items-center text-gray-600">
                  <Clock class="w-5 h-5 mr-3" />
                  <span>Lun-Ven: 8h-18h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '../stores/main'
import { 
  Search, 
  Package, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle, 
  RefreshCw, 
  Phone, 
  Mail,
  Truck
} from 'lucide-vue-next'

const store = useMainStore()
const route = useRoute()
const trackingNumber = ref('')

// Surveiller les changements dans l'URL et pré-remplir le formulaire
onMounted(() => {
  if (route.query.number && typeof route.query.number === 'string') {
    trackingNumber.value = route.query.number;
    trackShipment();
  }
});

watch(() => route.query.number, (newNumber) => {
  if (newNumber && typeof newNumber === 'string') {
    trackingNumber.value = newNumber;
    trackShipment();
  }
});

const faqs = [
  {
    question: 'Où puis-je trouver mon numéro de suivi ?',
    answer: 'Votre numéro de suivi vous a été envoyé par email après l\'expédition de votre colis.'
  },
  {
    question: 'À quelle fréquence les informations sont-elles mises à jour ?',
    answer: 'Les données de suivi sont actualisées toutes les heures pendant le transport.'
  },
  {
    question: 'Que faire si mon colis semble bloqué ?',
    answer: 'Contactez notre service client qui pourra vous donner plus de détails sur la situation.'
  },
  {
    question: 'Puis-je modifier l\'adresse de livraison ?',
    answer: 'La modification d\'adresse est possible avant l\'arrivée du colis au centre de distribution final.'
  }
]

const trackShipment = async () => {
  if (!trackingNumber.value.trim()) return
  
  try {
    await store.trackShipment(trackingNumber.value.trim())
  } catch (error) {
    console.error('Erreur lors du suivi:', error)
  }
}

const refreshTracking = async () => {
  if (store.trackingData) {
    await store.trackShipment(store.trackingData.trackingNumber)
  }
}

const resetTracking = () => {
  store.trackingData = null
  trackingNumber.value = ''
}

const formatDate = (dateString: string | Date) => {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getTimeRemaining = (estimatedDelivery: string) => {
  const now = new Date()
  const delivery = new Date(estimatedDelivery)
  const diffTime = delivery.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays <= 0) return 'Livraison imminente'
  if (diffDays === 1) return '1 jour'
  return `${diffDays} jours`
}

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case 'expédié':
      return Package
    case 'en transit':
      return Truck
    case 'en cours de livraison':
      return Truck
    default:
      return Package
  }
}
</script>