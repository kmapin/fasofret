<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div 
      class="relative text-white py-20 md:py-28 bg-cover bg-center"
      :style="`background-image: url(${authHeroImage});`"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-green-800 to-black opacity-70"></div>
      <div class="relative container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">Rejoignez Faso Fret</h1>
        <p class="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">Créez votre compte et accédez à nos services de transport et logistique de qualité.</p>
      </div>
    </div>

    <!-- Register Form Section -->
    <div class="container mx-auto px-4">
      <div class="-mt-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Form Column -->
          <div class="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div class="text-center mb-6">
              <h2 class="text-2xl font-bold text-gray-800">Créer un compte</h2>
              <p class="text-gray-500">Rejoignez notre communauté de clients satisfaits.</p>
            </div>
            
            <form @submit.prevent="handleRegister" class="space-y-8">
              <!-- Section 1: Informations Personnelles -->
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <User class="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-lg font-medium text-gray-900">Informations personnelles</h3>
                    <p class="text-sm text-gray-500">Vos informations de base pour créer votre compte</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label for="firstName" class="block text-sm font-semibold text-gray-700">Prénom *</label>
                    <div class="relative">
                      <input
                        id="firstName"
                        v-model="registerForm.firstName"
                        type="text"
                        required
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        :class="firstNameError ? 'border-red-300 bg-red-50' : ''"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <p v-if="firstNameError" class="text-xs text-red-500">{{ firstNameError }}</p>
                  </div>

                  <div class="space-y-2">
                    <label for="lastName" class="block text-sm font-semibold text-gray-700">Nom *</label>
                    <div class="relative">
                      <input
                        id="lastName"
                        v-model="registerForm.lastName"
                        type="text"
                        required
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        :class="lastNameError ? 'border-red-300 bg-red-50' : ''"
                        placeholder="Votre nom"
                      />
                    </div>
                    <p v-if="lastNameError" class="text-xs text-red-500">{{ lastNameError }}</p>
                  </div>
                </div>
              </div>

              <!-- Section 2: Informations de Contact -->
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail class="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-lg font-medium text-gray-900">Informations de contact</h3>
                    <p class="text-sm text-gray-500">Comment nous pouvons vous joindre</p>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <label for="email" class="block text-sm font-semibold text-gray-700">Adresse email *</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail class="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        v-model="registerForm.email"
                        type="email"
                        required
                        class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        :class="emailError ? 'border-red-300 bg-red-50' : ''"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <p v-if="emailError" class="text-xs text-red-500">{{ emailError }}</p>
                  </div>

                  <div class="space-y-2">
                    <label for="phone" class="block text-sm font-semibold text-gray-700">Téléphone *</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone class="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        v-model="registerForm.phone"
                        type="tel"
                        required
                        class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        :class="phoneError ? 'border-red-300 bg-red-50' : ''"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                    <p v-if="phoneError" class="text-xs text-red-500">{{ phoneError }}</p>
                  </div>
                </div>
              </div>

              <!-- Section 3: Informations Professionnelles -->
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Building class="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-lg font-medium text-gray-900">Informations professionnelles</h3>
                    <p class="text-sm text-gray-500">Optionnel - pour personnaliser nos services</p>
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="company" class="block text-sm font-semibold text-gray-700">Entreprise</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Building class="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="company"
                      v-model="registerForm.company"
                      type="text"
                      class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>
              </div>

              <!-- Section 4: Sécurité -->
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <Lock class="w-4 h-4 text-red-600" />
                    </div>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-lg font-medium text-gray-900">Sécurité de votre compte</h3>
                    <p class="text-sm text-gray-500">Choisissez un mot de passe sécurisé</p>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <label for="password" class="block text-sm font-semibold text-gray-700">Mot de passe *</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock class="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        v-model="registerForm.password"
                        :type="showPassword ? 'text' : 'password'"
                        required
                        class="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        :class="passwordError ? 'border-red-300 bg-red-50' : ''"
                        placeholder="Choisissez un mot de passe sécurisé"
                      />
                      <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute inset-y-0 right-0 pr-4 "
                      >
                        <Eye v-if="!showPassword" class="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        <EyeOff v-else class="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      </button>
                    </div>
                    <p v-if="passwordError" class="text-xs text-red-500">{{ passwordError }}</p>
                    
                    <!-- Password Strength Indicator -->
                    <div class="bg-gray-50 rounded-lg p-3 border">
                      <p class="text-xs font-medium text-gray-700 mb-2">Critères de sécurité :</p>
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="flex items-center space-x-2">
                          <div :class="passwordValidation.length ? 'w-2 h-2 bg-green-500 rounded-full' : 'w-2 h-2 bg-gray-300 rounded-full'"></div>
                          <span :class="passwordValidation.length ? 'text-green-600' : 'text-gray-500'">8+ caractères</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <div :class="passwordValidation.uppercase ? 'w-2 h-2 bg-green-500 rounded-full' : 'w-2 h-2 bg-gray-300 rounded-full'"></div>
                          <span :class="passwordValidation.uppercase ? 'text-green-600' : 'text-gray-500'">Majuscule</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <div :class="passwordValidation.lowercase ? 'w-2 h-2 bg-green-500 rounded-full' : 'w-2 h-2 bg-gray-300 rounded-full'"></div>
                          <span :class="passwordValidation.lowercase ? 'text-green-600' : 'text-gray-500'">Minuscule</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <div :class="passwordValidation.number ? 'w-2 h-2 bg-green-500 rounded-full' : 'w-2 h-2 bg-gray-300 rounded-full'"></div>
                          <span :class="passwordValidation.number ? 'text-green-600' : 'text-gray-500'">Chiffre</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <label for="confirmPassword" class="block text-sm font-semibold text-gray-700">Confirmer le mot de passe *</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock class="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="confirmPassword"
                        v-model="registerForm.confirmPassword"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        required
                        class="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        :class="confirmPasswordError ? 'border-red-300 bg-red-50' : ''"
                        placeholder="Confirmez votre mot de passe"
                      />
                      <button
                        type="button"
                        @click="showConfirmPassword = !showConfirmPassword"
                        class="absolute inset-y-0 right-0 pr-4  "
                      >
                        <Eye v-if="!showConfirmPassword" class="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        <EyeOff v-else class="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      </button>
                    </div>
                    <p v-if="confirmPasswordError" class="text-xs text-red-500">{{ confirmPasswordError }}</p>
                  </div>
                </div>
              </div>

              <!-- Section 5: Conditions et Préférences -->
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <CheckCircle class="w-4 h-4 text-yellow-600" />
                    </div>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-lg font-medium text-gray-900">Conditions et préférences</h3>
                    <p class="text-sm text-gray-500">Acceptation des conditions et choix de communication</p>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="bg-gray-50 rounded-lg p-4 border">
                    <div class="flex items-start space-x-3">
                      <input
                        id="terms"
                        v-model="registerForm.acceptTerms"
                        type="checkbox"
                        required
                        class="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <div class="flex-1">
                        <label for="terms" class="text-sm font-medium text-gray-700">
                          Acceptation des conditions *
                        </label>
                        <p class="text-sm text-gray-600 mt-1">
                          J'accepte les 
                          <a href="#" class="text-green-600 hover:underline font-medium">conditions d'utilisation</a> 
                          et la 
                          <a href="#" class="text-green-600 hover:underline font-medium">politique de confidentialité</a>
                          de Faso Fret.
                        </p>
                      </div>
                    </div>
                    <p v-if="termsError" class="text-xs text-red-500 mt-2">{{ termsError }}</p>
                  </div>

                  <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div class="flex items-start space-x-3">
                      <input
                        id="newsletter"
                        v-model="registerForm.newsletter"
                        type="checkbox"
                        class="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div class="flex-1">
                        <label for="newsletter" class="text-sm font-medium text-gray-700">
                          Newsletter et offres spéciales
                        </label>
                        <p class="text-sm text-gray-600 mt-1">
                          Je souhaite recevoir les actualités, conseils logistiques et offres spéciales de Faso Fret par email.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isLoading || !isFormValid"
                class="w-full bg-blue-600  text-white py-3 px-4 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Loader2 v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5" />
                {{ isLoading ? 'Création du compte...' : 'Créer mon compte' }}
              </button>
            </form>

            <!-- Login Link -->
            <div class="mt-6 text-center">
              <p class="text-sm text-gray-600">
                Vous avez déjà un compte ?
                <router-link to="/login" class="font-medium text-green-600 hover:text-green-500 transition-colors duration-200">
                  Se connecter
                </router-link>
              </p>
            </div>
          </div>

          <!-- Benefits Column -->
          <div class="space-y-6">
            <!-- Welcome Message -->
            <div class="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Bienvenue chez Faso Fret</h3>
                <p class="text-gray-600">Rejoignez des milliers de clients qui nous font confiance pour leurs besoins de transport et logistique.</p>
              </div>
            </div>

            <!-- Benefits Section -->
            <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
      <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <svg class="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Pourquoi choisir Faso Fret ?
      </h3>
      <div class="space-y-4">
        <div class="flex items-start space-x-4">
          <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800">Transport sécurisé</h4>
            <p class="text-sm text-gray-600">Suivi en temps réel et assurance complète</p>
          </div>
        </div>
        <div class="flex items-start space-x-4">
          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
            <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800">Tarifs compétitifs</h4>
            <p class="text-sm text-gray-600">Prix transparents sans frais cachés</p>
          </div>
        </div>
        <div class="flex items-start space-x-4">
          <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
            <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800">Support 24h/7j</h4>
            <p class="text-sm text-gray-600">Assistance disponible à tout moment</p>
          </div>
        </div>
        <div class="flex items-start space-x-4">
          <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
            <svg class="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800">Réseau étendu</h4>
            <p class="text-sm text-gray-600">Couverture dans toute l'Afrique de l'Ouest</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistics -->
    <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">

      <h3 class="text-xl font-bold mb-6 text-center">Nos chiffres parlent</h3>
      <div class="grid grid-cols-2 gap-6">
        <div class="text-center">
          <div class="text-3xl font-bold mb-1">10K+</div>
          <div class="text-sm opacity-90">Clients satisfaits</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold mb-1">50K+</div>
          <div class="text-sm opacity-90">Colis livrés</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold mb-1">15</div>
          <div class="text-sm opacity-90">Pays couverts</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold mb-1">99%</div>
          <div class="text-sm opacity-90">Taux de réussite</div>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useMainStore } from '../stores/main'
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  Loader2 
} from 'lucide-vue-next'
import authHeroImage from '../assets/img/auth_hero.jpg'


const router = useRouter()
const mainStore = useMainStore()

// Form data
const registerForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
  newsletter: false
})

// Form state
const isLoading = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

// Error states
const firstNameError = ref('')
const lastNameError = ref('')
const emailError = ref('')
const phoneError = ref('')
const passwordError = ref('')
const confirmPasswordError = ref('')
const termsError = ref('')

// Password validation
const passwordValidation = computed(() => ({
  length: registerForm.password.length >= 8,
  uppercase: /[A-Z]/.test(registerForm.password),
  lowercase: /[a-z]/.test(registerForm.password),
  number: /\d/.test(registerForm.password)
}))

const isPasswordValid = computed(() => 
  Object.values(passwordValidation.value).every(Boolean)
)

const isFormValid = computed(() => 
  registerForm.firstName &&
  registerForm.lastName &&
  registerForm.email &&
  registerForm.phone &&
  registerForm.password &&
  registerForm.confirmPassword &&
  registerForm.acceptTerms &&
  isPasswordValid.value &&
  registerForm.password === registerForm.confirmPassword &&
  !firstNameError.value &&
  !lastNameError.value &&
  !emailError.value &&
  !phoneError.value &&
  !passwordError.value &&
  !confirmPasswordError.value &&
  !termsError.value
)

// Watchers for real-time validation
watch(() => registerForm.firstName, (value) => {
  if (value && value.length < 2) {
    firstNameError.value = 'Le prénom doit contenir au moins 2 caractères'
  } else {
    firstNameError.value = ''
  }
})

watch(() => registerForm.lastName, (value) => {
  if (value && value.length < 2) {
    lastNameError.value = 'Le nom doit contenir au moins 2 caractères'
  } else {
    lastNameError.value = ''
  }
})

watch(() => registerForm.email, (value) => {
  if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    emailError.value = 'Veuillez saisir une adresse email valide'
  } else {
    emailError.value = ''
  }
})

watch(() => registerForm.phone, (value) => {
  if (value && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(value)) {
    phoneError.value = 'Veuillez saisir un numéro de téléphone valide'
  } else {
    phoneError.value = ''
  }
})

watch(() => registerForm.password, (value) => {
  if (value && !isPasswordValid.value) {
    passwordError.value = 'Le mot de passe ne respecte pas les critères requis'
  } else {
    passwordError.value = ''
  }
})

watch(() => registerForm.confirmPassword, (value) => {
  if (value && value !== registerForm.password) {
    confirmPasswordError.value = 'Les mots de passe ne correspondent pas'
  } else {
    confirmPasswordError.value = ''
  }
})

watch(() => registerForm.acceptTerms, (value) => {
  if (!value) {
    termsError.value = 'Vous devez accepter les conditions d\'utilisation'
  } else {
    termsError.value = ''
  }
})

// Clear all errors
const clearErrors = () => {
  firstNameError.value = ''
  lastNameError.value = ''
  emailError.value = ''
  phoneError.value = ''
  passwordError.value = ''
  confirmPasswordError.value = ''
  termsError.value = ''
}

// Handle registration
const handleRegister = async () => {
  clearErrors()
  
  if (!isFormValid.value) {
    return
  }

  isLoading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Create user object
    const newUser = {
      email: registerForm.email,
      name: `${registerForm.firstName} ${registerForm.lastName}`,
      company: registerForm.company || '',
      role: 'client' as const
    }

    // Set user in store (simulate successful registration)
    mainStore.login(newUser)

    // Redirect to dashboard
    router.push('/dashboard')
  } catch (error) {
    console.error('Registration error:', error)
    // Handle registration error
  } finally {
    isLoading.value = false
  }
}
</script>
