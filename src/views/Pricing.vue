<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-4xl font-bold mb-6">Tarifs & Simulateur</h1>
          <p class="text-xl text-blue-100">
            Découvrez nos tarifs transparents et obtenez un devis personnalisé en quelques clics
          </p>
        </div>
      </div>
    </section>
 <!-- Quote Simulator -->
 <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simulateur de Devis</h2>
            <p class="text-xl text-gray-600">
              Obtenez une estimation précise en renseignant les détails de votre envoi
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="p-8">
              <form @submit.prevent="calculateQuote" class="space-y-6">
                <!-- Transport Type -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-3">Mode de transport</label>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      v-for="type in transportTypes"
                      :key="type.value"
                      type="button"
                      @click="selectTransportType(type.value)"
                      class="flex items-center justify-center p-4 border-2 rounded-lg transition-all duration-200"
                      :class="quoteForm.transportType === type.value 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:border-gray-300'"
                    >
                      <component :is="type.icon" class="w-6 h-6 mr-3" />
                      <span class="font-medium">{{ type.label }}</span>
                    </button>
                  </div>
                </div>

                <!-- Origin and Destination -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Ville d'origine</label>
                    <input
                      v-model="quoteForm.origin"
                      type="text"
                      placeholder="Ex: Paris, France"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                    <input
                      v-model="quoteForm.destination"
                      type="text"
                      placeholder="Ex: Madrid, Espagne"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    >
                  </div>
                </div>

                <!-- Weight and Dimensions -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Poids (kg)</label>
                    <input
                      v-model.number="quoteForm.weight"
                      type="number"
                      min="0.1"
                      step="0.1"
                      placeholder="Ex: 25.5"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Type de marchandise</label>
                    <select
                      v-model="quoteForm.packageType"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    >
                      <option value="">Sélectionner</option>
                      <option value="documents">Documents</option>
                      <option value="electronics">Électronique</option>
                      <option value="textiles">Textiles</option>
                      <option value="machinery">Machines</option>
                      <option value="food">Alimentation</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <!-- Dimensions -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Dimensions (cm)</label>
                  <div class="grid grid-cols-3 gap-4">
                    <input
                      v-model.number="quoteForm.dimensions.length"
                      type="number"
                      min="1"
                      placeholder="Longueur"
                      class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    >
                    <input
                      v-model.number="quoteForm.dimensions.width"
                      type="number"
                      min="1"
                      placeholder="Largeur"
                      class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    >
                    <input
                      v-model.number="quoteForm.dimensions.height"
                      type="number"
                      min="1"
                      placeholder="Hauteur"
                      class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    >
                  </div>
                </div>

                <!-- Priority -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-3">Priorité</label>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label
                      v-for="priority in priorities"
                      :key="priority.value"
                      class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200"
                      :class="quoteForm.priority === priority.value 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'"
                    >
                      <input
                        v-model="quoteForm.priority"
                        :value="priority.value"
                        type="radio"
                        class="sr-only"
                      >
                      <div>
                        <div class="font-medium text-gray-900">{{ priority.label }}</div>
                        <div class="text-sm text-gray-500">{{ priority.description }}</div>
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  :disabled="store.loading"
                  class="w-full bg-orange-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Calculator v-if="!store.loading" class="w-5 h-5 mr-2" />
                  <div v-else class="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {{ store.loading ? 'Calcul en cours...' : 'Calculer le Devis' }}
                </button>
              </form>
            </div>

            <!-- Quote Result -->
            <div v-if="quoteResult" class="bg-blue-50 border-t p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Votre Devis Personnalisé</h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div class="bg-white rounded-lg p-6 shadow-sm">
                    <h4 class="text-lg font-semibold text-gray-900 mb-4">Détails du Transport</h4>
                    <div class="space-y-3">
                      <div class="flex justify-between">
                        <span class="text-gray-600">De:</span>
                        <span class="font-medium">{{ store.currentQuote?.origin }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-600">Vers:</span>
                        <span class="font-medium">{{ store.currentQuote?.destination }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-600">Poids:</span>
                        <span class="font-medium">{{ store.currentQuote?.weight }} kg</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-600">Mode:</span>
                        <span class="font-medium">{{ getTransportLabel(store.currentQuote?.transportType || '') }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-600">Priorité:</span>
                        <span class="font-medium">{{ getPriorityLabel(store.currentQuote?.priority || '') }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="bg-white rounded-lg p-6 shadow-sm">
                    <h4 class="text-lg font-semibold text-gray-900 mb-4">Tarification</h4>
                    <div class="space-y-3">
                      <div class="flex justify-between text-2xl font-bold text-blue-600">
                        <span>Prix total:</span>
                        <span>{{ quoteResult.basePrice }}€</span>
                      </div>
                      <div class="flex justify-between text-sm text-gray-600">
                        <span>Délai estimé:</span>
                        <span>{{ quoteResult.estimatedDays }} jour{{ quoteResult.estimatedDays > 1 ? 's' : '' }}</span>
                      </div>
                      <div class="border-t pt-3 mt-4">
                        <div class="text-sm text-gray-600 space-y-1">
                          <div v-if="quoteResult.details.insuranceIncluded" class="flex items-center">
                            <Check class="w-4 h-4 text-green-500 mr-2" />
                            <span>Assurance incluse</span>
                          </div>
                          <div v-if="quoteResult.details.trackingIncluded" class="flex items-center">
                            <Check class="w-4 h-4 text-green-500 mr-2" />
                            <span>Suivi temps réel</span>
                          </div>
                          <div v-if="quoteResult.details.customsClearance" class="flex items-center">
                            <Check class="w-4 h-4 text-green-500 mr-2" />
                            <span>Dédouanement inclus</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8 flex flex-col sm:flex-row gap-4">
                <router-link 
                  to="/contact" 
                  class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Confirmer la Commande
                </router-link>
                <button 
                  @click="resetQuote"
                  class="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Nouveau Calcul
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Pricing Tables -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tarifs Standards</h2>
          <p class="text-xl text-gray-600">
            Prix indicatifs par kilogramme selon le mode de transport
          </p>
          <div class="mt-6 bg-orange-100 border border-orange-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p class="text-orange-800">
              <Info class="w-5 h-5 inline mr-2" />
              Ces tarifs sont donnés à titre indicatif. Utilisez notre simulateur ci-dessous pour obtenir un devis précis et personnalisé.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div 
            v-for="pricing in pricingData" 
            :key="pricing.type"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="pricing.image"
                :alt="pricing.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <component :is="pricing.icon" class="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ pricing.title }}</h3>
              <p class="text-gray-600 mb-6">{{ pricing.description }}</p>
              
              <div class="space-y-4 mb-6">
                <div v-for="tier in pricing.tiers" :key="tier.name" class="border rounded-lg p-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="font-semibold text-gray-900">{{ tier.name }}</span>
                    <span class="text-lg font-bold text-blue-600">{{ tier.price }}€/kg</span>
                  </div>
                  <p class="text-sm text-gray-500">{{ tier.description }}</p>
                </div>
              </div>

              <button 
                @click="selectTransportType(pricing.type)"
                class="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                Choisir ce Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

   
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useMainStore } from '../stores/main'
import { 
  Plane, 
  Truck, 
  Ship, 
  Info, 
  Calculator, 
  Check 
} from 'lucide-vue-next'

const store = useMainStore()
const quoteResult = ref<any>(null)

const quoteForm = reactive({
  origin: '',
  destination: '',
  weight: null as number | null,
  dimensions: {
    length: null as number | null,
    width: null as number | null,
    height: null as number | null
  },
  transportType: 'ground' as 'air' | 'ground' | 'sea',
  priority: 'standard' as 'standard' | 'express' | 'urgent',
  packageType: ''
})

const pricingData = [
  {
    type: 'air',
    title: 'Fret Aérien',
    description: 'Transport rapide par voie aérienne',
    icon: Plane,
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-blue-500 to-blue-700',
    tiers: [
      { name: 'Standard', price: '8.50', description: '3-5 jours ouvrés' },
      { name: 'Express', price: '12.75', description: '2-3 jours ouvrés' },
      { name: 'Urgent', price: '17.00', description: '24-48 heures' }
    ]
  },
  {
    type: 'ground',
    title: 'Fret Terrestre',
    description: 'Solutions routières économiques',
    icon: Truck,
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-green-500 to-green-700',
    tiers: [
      { name: 'Standard', price: '3.20', description: '5-7 jours ouvrés' },
      { name: 'Express', price: '4.80', description: '3-4 jours ouvrés' },
      { name: 'Urgent', price: '6.40', description: '2-3 jours ouvrés' }
    ]
  },
  {
    type: 'sea',
    title: 'Fret Maritime',
    description: 'Transport maritime pour gros volumes',
    icon: Ship,
    image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-cyan-500 to-cyan-700',
    tiers: [
      { name: 'Standard', price: '1.80', description: '20-30 jours' },
      { name: 'Express', price: '2.70', description: '14-20 jours' },
      { name: 'Urgent', price: '3.60', description: '10-14 jours' }
    ]
  }
]

const transportTypes = [
  { value: 'air', label: 'Aérien', icon: Plane },
  { value: 'ground', label: 'Terrestre', icon: Truck },
  { value: 'sea', label: 'Maritime', icon: Ship }
]

const priorities = [
  { 
    value: 'standard', 
    label: 'Standard', 
    description: 'Délai normal, tarif économique' 
  },
  { 
    value: 'express', 
    label: 'Express', 
    description: 'Livraison accélérée (+50%)' 
  },
  { 
    value: 'urgent', 
    label: 'Urgent', 
    description: 'Priorité maximale (+100%)' 
  }
]

const selectTransportType = (type: string) => {
  if (type === 'air' || type === 'ground' || type === 'sea') {
    quoteForm.transportType = type
  }
  document.getElementById('quote-simulator')?.scrollIntoView({ behavior: 'smooth' })
}

const calculateQuote = async () => {
  try {
    // Validation des champs requis
    if (!quoteForm.origin || !quoteForm.destination || !quoteForm.weight) {
      console.error('Veuillez remplir tous les champs obligatoires')
      return
    }
    
    const result = await store.calculateQuote({
      origin: quoteForm.origin,
      destination: quoteForm.destination,
      weight: quoteForm.weight,
      dimensions: {
        length: quoteForm.dimensions.length || 0,
        width: quoteForm.dimensions.width || 0,
        height: quoteForm.dimensions.height || 0
      },
      transportType: quoteForm.transportType,
      priority: quoteForm.priority,
      packageType: quoteForm.packageType
    })
    quoteResult.value = result
  } catch (error) {
    console.error('Erreur lors du calcul du devis:', error)
  }
}

const resetQuote = () => {
  quoteResult.value = null
  Object.assign(quoteForm, {
    origin: '',
    destination: '',
    weight: null,
    dimensions: { length: null, width: null, height: null },
    transportType: 'ground',
    priority: 'standard',
    packageType: ''
  })
}

const getTransportLabel = (type: string) => {
  const transport = transportTypes.find(t => t.value === type)
  return transport?.label || type
}

const getPriorityLabel = (priority: string) => {
  const p = priorities.find(pr => pr.value === priority)
  return p?.label || priority
}
</script>