<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p class="text-xl text-blue-100">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Votre prénom"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Votre nom"
                  >
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="votre@email.com"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="+33 1 23 45 67 89"
                  >
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                <input
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Nom de votre entreprise"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
                <select
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="quote">Demande de devis</option>
                  <option value="tracking">Problème de suivi</option>
                  <option value="complaint">Réclamation</option>
                  <option value="partnership">Partenariat</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Décrivez votre demande en détail..."
                ></textarea>
              </div>

              <div class="flex items-start">
                <input
                  v-model="form.newsletter"
                  type="checkbox"
                  class="mt-1 mr-3"
                >
                <label class="text-sm text-gray-600">
                  J'accepte de recevoir des informations commerciales et la newsletter de Faso fret
                </label>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Send v-if="!isSubmitting" class="w-5 h-5 mr-2" />
                <div v-else class="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="submitted" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div class="flex items-center">
                <CheckCircle class="w-5 h-5 text-green-500 mr-3" />
                <p class="text-green-800">
                  Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <!-- Direct Contact -->
            <div class="bg-blue-50 rounded-xl p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Direct</h3>
              
              <div class="space-y-6">
                <a 
                  href="tel:+33123456789" 
                  class="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <Phone class="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">Appelez-nous</div>
                    <div class="text-gray-600">+33 1 23 45 67 89</div>
                    <div class="text-sm text-gray-500">Lun-Ven: 8h-18h</div>
                  </div>
                </a>

                <a 
                  href="mailto:contact@fasofret.fr" 
                  class="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <Mail class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">Email</div>
                    <div class="text-gray-600">contact@fasofret.fr</div>
                    <div class="text-sm text-gray-500">Réponse sous 24h</div>
                  </div>
                </a>

                <div class="flex items-center p-4 bg-white rounded-lg">
                  <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin class="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900">Adresse</div>
                    <div class="text-gray-600">46 ROUTE DE GOUSSAINVILLE</div>
                    <div class="text-gray-600">95190 FONTENAY-EN-PARISIS, France</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Emergency Contact -->
            <div class="bg-red-50 rounded-xl p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Contact d'Urgence</h3>
              <p class="text-gray-600 mb-4">
                Pour les situations urgentes en dehors des heures d'ouverture :
              </p>
              <a 
                href="tel:+33987654321" 
                class="flex items-center text-red-600 hover:text-red-700 transition-colors font-semibold"
              >
                <Phone class="w-5 h-5 mr-2" />
                <span>+33 9 87 65 43 21</span>
              </a>
              <p class="text-sm text-gray-500 mt-2">
                Disponible 24h/7j pour les urgences
              </p>
            </div>

            <!-- Office Hours -->
            <div class="bg-gray-50 rounded-xl p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Horaires d'Ouverture</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">Lundi - Vendredi</span>
                  <span class="font-medium">8h00 - 18h00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Samedi</span>
                  <span class="font-medium">9h00 - 12h00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Dimanche</span>
                  <span class="font-medium text-gray-500">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p class="text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions
            </p>
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
import { ref, reactive } from 'vue'
import { 
  Send, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown 
} from 'lucide-vue-next'

const isSubmitting = ref(false)
const submitted = ref(false)
const openFaq = ref<number | null>(null)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  newsletter: false
})

const faqs = [
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Nos délais varient selon le mode de transport : 24-72h pour le fret aérien, 2-7 jours pour le terrestre, et 15-35 jours pour le maritime. Nous vous fournirons un délai précis lors de votre devis.'
  },
  {
    question: 'Proposez-vous une assurance pour les marchandises ?',
    answer: 'Oui, tous nos envois incluent une assurance de base. Nous proposons également des couvertures étendues pour les marchandises de valeur. L\'assurance couvre les dommages, pertes et vols pendant le transport.'
  },
  {
    question: 'Comment puis-je suivre mon envoi ?',
    answer: 'Vous recevrez un numéro de suivi par email dès l\'expédition. Utilisez notre page de suivi pour connaître la position et le statut de votre colis en temps réel.'
  },
  {
    question: 'Quelles sont les restrictions sur les marchandises ?',
    answer: 'Nous acceptons la plupart des marchandises légales. Les produits dangereux, périssables ou interdits nécessitent une autorisation spéciale. Contactez-nous pour vérifier si votre produit peut être transporté.'
  },
  {
    question: 'Offrez-vous des tarifs préférentiels pour les gros volumes ?',
    answer: 'Absolument ! Nous proposons des tarifs dégressifs et des contrats personnalisés pour les entreprises ayant des besoins réguliers. Contactez notre équipe commerciale pour discuter de vos besoins.'
  }
]

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulation d'envoi
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isSubmitting.value = false
  submitted.value = true
  
  // Reset form after success
  setTimeout(() => {
    Object.assign(form, {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      newsletter: false
    })
    submitted.value = false
  }, 5000)
}

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>