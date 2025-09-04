<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart class="w-8 h-8 text-white" />
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Service d'Achat Délégué</h1>
          <p class="text-xl text-purple-100">
            Nous achetons pour vous sur vos sites préférés et nous nous occupons de la livraison
          </p>
        </div>
      </div>
    </section>

    <!-- Authentication Check -->
    <div v-if="!store.user" class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock class="w-8 h-8 text-blue-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Connexion Requise</h2>
            <p class="text-gray-600 mb-6">
              Cette fonctionnalité est réservée aux clients connectés. Connectez-vous pour accéder 
              à notre service d'achat délégué et profiter de nos tarifs préférentiels.
            </p>
            <div class="space-y-4">
              <router-link 
                to="/login" 
                class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Se Connecter
              </router-link>
              <div class="text-sm text-gray-500">
                Pas encore de compte ? 
                <router-link to="/contact" class="text-blue-600 hover:text-blue-700 font-medium">
                  Créer un compte
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service Content (Only for authenticated users) -->
    <div v-else>
      <!-- Service Info -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
              <p class="text-xl text-gray-600">
                Un service simple et sécurisé pour vos achats internationaux
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search class="w-8 h-8 text-purple-600" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">1. Vous trouvez</h3>
                <p class="text-gray-600">
                  Trouvez l'article que vous souhaitez sur n'importe quel site internet
                </p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard class="w-8 h-8 text-purple-600" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">2. Nous achetons</h3>
                <p class="text-gray-600">
                  Nous achetons l'article pour vous avec nos moyens de paiement sécurisés
                </p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck class="w-8 h-8 text-purple-600" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">3. Nous livrons</h3>
                <p class="text-gray-600">
                  Nous nous occupons de la livraison jusqu'à chez vous
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Purchase Request Form -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Demande d'Achat Délégué</h2>
              <p class="text-xl text-gray-600">
                Remplissez le formulaire ci-dessous pour votre demande
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-8">
              <form @submit.prevent="submitPurchaseRequest" class="space-y-6">
                <!-- Product Information -->
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Informations Produit</h3>
                  
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">URL du produit *</label>
                      <input
                        v-model="purchaseForm.productUrl"
                        type="url"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="https://exemple.com/produit"
                      >
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Nom du produit *</label>
                        <input
                          v-model="purchaseForm.productName"
                          type="text"
                          required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                          placeholder="Nom du produit"
                        >
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Prix affiché</label>
                        <input
                          v-model="purchaseForm.displayedPrice"
                          type="text"
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                          placeholder="Ex: 99.99 EUR"
                        >
                      </div>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Quantité souhaitée</label>
                      <input
                        v-model.number="purchaseForm.quantity"
                        type="number"
                        min="1"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="1"
                      >
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Variantes/Options</label>
                      <textarea
                        v-model="purchaseForm.variants"
                        rows="3"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                        placeholder="Couleur, taille, modèle, etc."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <!-- Delivery Information -->
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Informations de Livraison</h3>
                  
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Adresse de livraison *</label>
                      <textarea
                        v-model="purchaseForm.deliveryAddress"
                        rows="3"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                        placeholder="Adresse complète de livraison"
                      ></textarea>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Mode de livraison</label>
                        <select
                          v-model="purchaseForm.deliveryMode"
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        >
                          <option value="standard">Standard (5-7 jours)</option>
                          <option value="express">Express (2-3 jours)</option>
                          <option value="urgent">Urgent (24-48h)</option>
                        </select>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Date souhaitée</label>
                        <input
                          v-model="purchaseForm.desiredDate"
                          type="date"
                          :min="minDate"
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Additional Information -->
                <div class="border-b border-gray-200 pb-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Informations Complémentaires</h3>
                  
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Budget maximum</label>
                      <input
                        v-model="purchaseForm.maxBudget"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Ex: 150 EUR (frais inclus)"
                      >
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Instructions spéciales</label>
                      <textarea
                        v-model="purchaseForm.specialInstructions"
                        rows="4"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                        placeholder="Toute information importante pour l'achat (compte requis, code promo, etc.)"
                      ></textarea>
                    </div>

                    <div class="flex items-start">
                      <input
                        v-model="purchaseForm.urgentRequest"
                        type="checkbox"
                        class="mt-1 mr-3"
                      >
                      <label class="text-sm text-gray-600">
                        Demande urgente (+20% de frais de service)
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Terms and Conditions -->
                <div class="space-y-4">
                  <div class="flex items-start">
                    <input
                      v-model="purchaseForm.acceptTerms"
                      type="checkbox"
                      required
                      class="mt-1 mr-3"
                    >
                    <label class="text-sm text-gray-600">
                      J'accepte les <a href="#" class="text-purple-600 hover:text-purple-700">conditions générales</a> 
                      du service d'achat délégué et je comprends que des frais de service s'appliquent *
                    </label>
                  </div>

                  <div class="flex items-start">
                    <input
                      v-model="purchaseForm.acceptPricing"
                      type="checkbox"
                      required
                      class="mt-1 mr-3"
                    >
                    <label class="text-sm text-gray-600">
                      Je comprends que le prix final inclura le prix du produit + frais de livraison + 
                      frais de service (15% du prix produit, minimum 10€) *
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <ShoppingCart v-if="!isSubmitting" class="w-5 h-5 mr-2" />
                  <div v-else class="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer la Demande' }}
                </button>
              </form>

              <!-- Success Message -->
              <div v-if="requestSubmitted" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-3" />
                  <div>
                    <p class="text-green-800 font-medium">Demande envoyée avec succès !</p>
                    <p class="text-green-700 text-sm mt-1">
                      Nous vous contacterons sous 24h avec un devis détaillé. 
                      Numéro de demande: {{ requestNumber }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Information -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Tarification Transparente</h2>
              <p class="text-xl text-gray-600">
                Nos frais de service sont clairs et compétitifs
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-white rounded-xl shadow-lg p-8">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Frais de Service</h3>
                <div class="space-y-3">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Commission de base:</span>
                    <span class="font-medium">15% du prix produit</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Minimum de facturation:</span>
                    <span class="font-medium">10€</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Demande urgente:</span>
                    <span class="font-medium">+20%</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Livraison express:</span>
                    <span class="font-medium">Selon destination</span>
                  </div>
                </div>
              </div>

              <div class="bg-purple-50 rounded-xl p-8">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Avantages Inclus</h3>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <Check class="w-5 h-5 text-purple-600 mr-3" />
                    <span class="text-gray-700">Paiement sécurisé</span>
                  </div>
                  <div class="flex items-center">
                    <Check class="w-5 h-5 text-purple-600 mr-3" />
                    <span class="text-gray-700">Suivi complet</span>
                  </div>
                  <div class="flex items-center">
                    <Check class="w-5 h-5 text-purple-600 mr-3" />
                    <span class="text-gray-700">Assurance incluse</span>
                  </div>
                  <div class="flex items-center">
                    <Check class="w-5 h-5 text-purple-600 mr-3" />
                    <span class="text-gray-700">Support client dédié</span>
                  </div>
                  <div class="flex items-center">
                    <Check class="w-5 h-5 text-purple-600 mr-3" />
                    <span class="text-gray-700">Gestion des retours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useMainStore } from '../stores/main'
import { 
  ShoppingCart, 
  Lock, 
  Search, 
  CreditCard, 
  Truck, 
  CheckCircle,
  Check
} from 'lucide-vue-next'

const store = useMainStore()

const isSubmitting = ref(false)
const requestSubmitted = ref(false)
const requestNumber = ref('')

const purchaseForm = reactive({
  productUrl: '',
  productName: '',
  displayedPrice: '',
  quantity: 1,
  variants: '',
  deliveryAddress: '',
  deliveryMode: 'standard',
  desiredDate: '',
  maxBudget: '',
  specialInstructions: '',
  urgentRequest: false,
  acceptTerms: false,
  acceptPricing: false
})

const minDate = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
})

const submitPurchaseRequest = async () => {
  isSubmitting.value = true
  
  // Simulation d'envoi
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Générer un numéro de demande
  requestNumber.value = 'DA' + Math.random().toString().substr(2, 8)
  
  isSubmitting.value = false
  requestSubmitted.value = true
  
  // Reset form after success
  setTimeout(() => {
    Object.assign(purchaseForm, {
      productUrl: '',
      productName: '',
      displayedPrice: '',
      quantity: 1,
      variants: '',
      deliveryAddress: '',
      deliveryMode: 'standard',
      desiredDate: '',
      maxBudget: '',
      specialInstructions: '',
      urgentRequest: false,
      acceptTerms: false,
      acceptPricing: false
    })
    requestSubmitted.value = false
    requestNumber.value = ''
  }, 5000)
}
</script>