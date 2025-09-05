<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home class="w-8 h-8 text-white" />
          </div>
          <h1 class="text-3xl md:text-4xl font-bold mb-6">Enlèvement à Domicile</h1>
          <p class="text-xl text-blue-100">
            Service d'enlèvement de vos colis directement chez vous en Île-de-France
          </p>
        </div>
      </div>
    </section>

    <!-- Service Info -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Un service pratique et flexible
            </h2>
            <p class="text-xl text-gray-600 mb-8">
              Gagnez du temps avec notre service d'enlèvement à domicile. Nos chauffeurs viennent 
              récupérer vos colis directement chez vous selon vos disponibilités.
            </p>
            
            <div class="space-y-6">
              <div v-for="benefit in benefits" :key="benefit.title" class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <component :is="benefit.icon" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
                  <p class="text-gray-600">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Zone de couverture</h3>
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <div class="flex items-center mb-4">
                <MapPin class="w-6 h-6 text-blue-600 mr-3" />
                <span class="text-lg font-semibold text-gray-900">Île-de-France</span>
              </div>
              <div class="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Paris (75)</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Hauts-de-Seine (92)</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Seine-Saint-Denis (93)</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Val-de-Marne (94)</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Seine-et-Marne (77)</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Yvelines (78)</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Essonne (91)</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Val-d'Oise (95)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Form -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Réserver un Créneau</h2>
            <p class="text-xl text-gray-600">
              Choisissez votre créneau d'enlèvement selon vos disponibilités
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="p-8">
              <form @submit.prevent="submitBooking" class="space-y-6">
                <!-- Contact Info -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                    <input
                      v-model="bookingForm.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Votre nom complet"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                    <input
                      v-model="bookingForm.phone"
                      type="tel"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+33 1 23 45 67 89"
                    >
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    v-model="bookingForm.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="votre@email.com"
                  >
                </div>

                <!-- Address -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Adresse complète *</label>
                  <textarea
                    v-model="bookingForm.address"
                    rows="3"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Numéro, rue, code postal, ville"
                  ></textarea>
                </div>

                <!-- Package Details -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de colis</label>
                    <select
                      v-model="bookingForm.packageCount"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="1">1 colis</option>
                      <option value="2">2 colis</option>
                      <option value="3">3 colis</option>
                      <option value="4">4 colis</option>
                      <option value="5+">5 colis ou plus</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Poids estimé (kg)</label>
                    <input
                      v-model.number="bookingForm.weight"
                      type="number"
                      min="0.1"
                      step="0.1"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Ex: 25.5"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Type de marchandise</label>
                    <select
                      v-model="bookingForm.packageType"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Sélectionner</option>
                      <option value="documents">Documents</option>
                      <option value="electronics">Électronique</option>
                      <option value="textiles">Textiles</option>
                      <option value="machinery">Machines</option>
                      <option value="food">Alimentation</option>
                      <option value="fragile">Fragile</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <!-- Date and Time Selection -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Date souhaitée *</label>
                    <input
                      v-model="bookingForm.date"
                      type="date"
                      :min="minDate"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Créneau horaire *</label>
                    <select
                      v-model="bookingForm.timeSlot"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Choisir un créneau</option>
                      <option value="morning">Matin (8h-12h)</option>
                      <option value="afternoon">Après-midi (14h-18h)</option>
                      <option value="evening">Fin de journée (18h-20h)</option>
                    </select>
                  </div>
                </div>

                <!-- Special Instructions -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Instructions spéciales</label>
                  <textarea
                    v-model="bookingForm.instructions"
                    rows="3"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Étage, code d'accès, instructions particulières..."
                  ></textarea>
                </div>

                <!-- Terms -->
                <div class="flex items-start">
                  <input
                    v-model="bookingForm.acceptTerms"
                    type="checkbox"
                    required
                    class="mt-1 mr-3"
                  >
                  <label class="text-sm text-gray-600">
                    J'accepte les <a href="#" class="text-blue-600 hover:text-blue-700">conditions générales</a> 
                    et confirme que l'adresse est bien située en Île-de-France *
                  </label>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Calendar v-if="!isSubmitting" class="w-5 h-5 mr-2" />
                  <div v-else class="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {{ isSubmitting ? 'Réservation en cours...' : 'Réserver le Créneau' }}
                </button>
              </form>
            </div>

            <!-- Success Message -->
            <div v-if="bookingSubmitted" class="bg-green-50 border-t p-8">
              <div class="flex items-center justify-center">
                <CheckCircle class="w-8 h-8 text-green-500 mr-4" />
                <div>
                  <h3 class="text-lg font-semibold text-green-800 mb-2">Réservation confirmée !</h3>
                  <p class="text-green-700">
                    Votre demande d'enlèvement a été enregistrée. Nous vous contacterons sous 24h pour confirmer le créneau.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Tarification</h2>
          
          <div class="bg-white rounded-xl shadow-lg p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro class="w-8 h-8 text-blue-600" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Tarif Fixe</h3>
                <div class="text-3xl font-bold text-blue-600 mb-2">15€</div>
                <p class="text-gray-600">Par enlèvement en Île-de-France</p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock class="w-8 h-8 text-green-600" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Délai</h3>
                <div class="text-3xl font-bold text-green-600 mb-2">24-48h</div>
                <p class="text-gray-600">Après confirmation de réservation</p>
              </div>
            </div>
            
            <div class="mt-8 p-4 bg-orange-50 rounded-lg">
              <p class="text-orange-800 text-sm">
                <Info class="w-4 h-4 inline mr-2" />
                Le tarif d'enlèvement s'ajoute aux frais de transport selon le mode choisi (aérien, terrestre, maritime).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
          </div>

          <div class="space-y-6">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="bg-white rounded-xl shadow-sm"
            >
              <button
                @click="toggleFaq(index)"
                class="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
              >
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-gray-900">{{ faq.question }}</h3>
                  <ChevronDown 
                    class="w-5 h-5 text-gray-400 transition-transform duration-200"
                    :class="openFaq === index ? 'transform rotate-180' : ''"
                  />
                </div>
              </button>
              
              <transition 
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="openFaq === index" class="px-6 pb-6">
                  <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { 
  Home, 
  MapPin, 
  Check, 
  Calendar, 
  CheckCircle, 
  Euro, 
  Clock, 
  Info, 
  ChevronDown,
  Truck,
  Shield,
  Users
} from 'lucide-vue-next'

const isSubmitting = ref(false)
const bookingSubmitted = ref(false)
const openFaq = ref<number | null>(null)
const route = useRoute()

// Pré-remplir le formulaire si des données sont fournies dans l'URL
const populateFormFromQuery = () => {
  if (route.query.name && typeof route.query.name === 'string') {
    bookingForm.name = route.query.name;
  }
  if (route.query.phone && typeof route.query.phone === 'string') {
    bookingForm.phone = route.query.phone;
  }
  if (route.query.address && typeof route.query.address === 'string') {
    bookingForm.address = route.query.address;
  }
}

onMounted(populateFormFromQuery);
watch(() => route.query, populateFormFromQuery);

const bookingForm = reactive({
  name: '',
  phone: '',
  email: '',
  address: '',
  packageCount: '1',
  weight: null,
  packageType: '',
  date: '',
  timeSlot: '',
  instructions: '',
  acceptTerms: false
})

const benefits = [
  {
    title: 'Gain de Temps',
    description: 'Plus besoin de vous déplacer, nous venons directement chez vous selon vos disponibilités.',
    icon: Clock
  },
  {
    title: 'Service Sécurisé',
    description: 'Chauffeurs professionnels avec matériel adapté pour un enlèvement en toute sécurité.',
    icon: Shield
  },
  {
    title: 'Flexibilité',
    description: 'Créneaux adaptés à votre emploi du temps, du lundi au samedi.',
    icon: Users
  },
  {
    title: 'Suivi Complet',
    description: 'Confirmation par SMS et email, puis suivi de votre colis jusqu\'à destination.',
    icon: Truck
  }
]

const faqs = [
  {
    question: 'Dans quels délais puis-je réserver un enlèvement ?',
    answer: 'Vous pouvez réserver un enlèvement avec un préavis minimum de 24h. Nous recommandons de réserver 48-72h à l\'avance pour garantir votre créneau préféré.'
  },
  {
    question: 'Que se passe-t-il si je ne suis pas disponible au créneau réservé ?',
    answer: 'Vous pouvez reporter votre enlèvement jusqu\'à 2h avant le créneau prévu en nous contactant. Au-delà, des frais de déplacement de 10€ peuvent s\'appliquer.'
  },
  {
    question: 'Y a-t-il des restrictions sur le type de colis ?',
    answer: 'Nous acceptons la plupart des colis standards. Les produits dangereux, périssables ou de grande valeur nécessitent une déclaration préalable.'
  },
  {
    question: 'Comment préparer mon colis pour l\'enlèvement ?',
    answer: 'Votre colis doit être correctement emballé et étiqueté. Si besoin, nous proposons un service d\'emballage professionnel sur place (+5€).'
  },
  {
    question: 'Puis-je modifier mon adresse d\'enlèvement ?',
    answer: 'Oui, vous pouvez modifier l\'adresse jusqu\'à 4h avant le créneau prévu, à condition qu\'elle reste en Île-de-France.'
  }
]

const minDate = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
})

const submitBooking = async () => {
  isSubmitting.value = true
  
  // Simulation d'envoi
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isSubmitting.value = false
  bookingSubmitted.value = true
  
  // Reset form after success
  setTimeout(() => {
    Object.assign(bookingForm, {
      name: '',
      phone: '',
      email: '',
      address: '',
      packageCount: '1',
      weight: null,
      packageType: '',
      date: '',
      timeSlot: '',
      instructions: '',
      acceptTerms: false
    })
    bookingSubmitted.value = false
  }, 5000)
}

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>