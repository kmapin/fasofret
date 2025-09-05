<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div 
      class="relative text-white py-20 md:py-28 bg-cover bg-center"
      style="background-image: url('src/assets/auth_hero.jpg')"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-blue-800 to-black opacity-70"></div>
      <div class="relative container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">Bienvenue sur votre Espace Client</h1>
        <p class="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">Gérez vos expéditions, suivez vos colis et consultez votre historique en toute simplicité.</p>
      </div>
    </div>

    <!-- Login Form Section -->
    <div class="container mx-auto px-4">
      <div class="-mt-16">
        <div class="w-full max-w-md mx-auto">
          <div class="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div class="text-center mb-6">
              <h2 class="text-2xl font-bold text-gray-800">Connexion</h2>
              <p class="text-gray-500">Accédez à votre tableau de bord.</p>
            </div>
            <form @submit.prevent="handleLogin" class="space-y-6">
              <!-- Email -->
              <div class="space-y-2">
                <label for="email" class="block text-sm font-semibold text-gray-700">Adresse email</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User class="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    v-model="loginForm.email"
                    type="email"
                    required
                    class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    :class="emailError ? 'border-red-300 bg-red-50' : ''"
                  />
                </div>
                <p v-if="emailError" class="text-xs text-red-500">{{ emailError }}</p>
              </div>

              <!-- Mot de passe -->
              <div class="space-y-2">
                <div class="flex justify-between items-baseline">
                  <label for="password" class="block text-sm font-semibold text-gray-700">Mot de passe</label>
                  <a href="#" class="text-sm text-blue-600 hover:underline">Mot de passe oublié ?</a>
                </div>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock class="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    v-model="loginForm.password"
                    type="password"
                    required
                    class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    :class="passwordError ? 'border-red-300 bg-red-50' : ''"
                  />
                </div>
                <p v-if="passwordError" class="text-xs text-red-500">{{ passwordError }}</p>
              </div>

              <!-- Se souvenir de moi -->
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                  <label for="remember-me" class="ml-2 block text-sm text-gray-900">Se souvenir de moi</label>
                </div>
              </div>

              <!-- Bouton de soumission -->
              <div>
                <button 
                  type="submit" 
                  class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
                  :disabled="isLoading"
                >
                  <span v-if="!isLoading">Se connecter</span>
                  <span v-else class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connexion...
                  </span>
                </button>
              </div>
            </form>

            <!-- Séparateur -->
            <div class="mt-6">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-200"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">Ou</span>
                </div>
              </div>
            </div>

            <!-- Inscription -->
            <div class="mt-6 text-center">
              <p class="text-sm text-gray-600">
                Pas encore de compte ?
                <router-link to="/register" class="font-medium text-blue-600 hover:underline">
                  Inscrivez-vous
                </router-link>
              </p>
            </div>
          </div>
        </div>

        <!-- Demo Accounts Info -->
        <div class="mt-8 max-w-md mx-auto">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div class="flex items-center mb-4">
              <Info class="w-5 h-5 text-blue-600 mr-2" />
              <h3 class="text-lg font-semibold text-blue-900">Comptes de Démonstration</h3>
            </div>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-blue-100">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-medium text-blue-900">Client</span>
                  <User class="w-4 h-4 text-blue-600" />
                </div>
                <div class="space-y-1 text-sm">
                  <div class="flex items-center">
                    <span class="text-gray-600 w-20">Email:</span>
                    <code class="bg-gray-100 px-2 py-1 rounded text-blue-700">demo@transitpro.fr</code>
                  </div>
                  <div class="flex items-center">
                    <span class="text-gray-600 w-20">Mot de passe:</span>
                    <code class="bg-gray-100 px-2 py-1 rounded text-blue-700">demo123</code>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-blue-100">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-medium text-blue-900">Gestionnaire</span>
                  <User class="w-4 h-4 text-blue-600" />
                </div>
                <div class="space-y-1 text-sm">
                  <div class="flex items-center">
                    <span class="text-gray-600 w-20">Email:</span>
                    <code class="bg-gray-100 px-2 py-1 rounded text-blue-700">manager@transitpro.fr</code>
                  </div>
                  <div class="flex items-center">
                    <span class="text-gray-600 w-20">Mot de passe:</span>
                    <code class="bg-gray-100 px-2 py-1 rounded text-blue-700">manager123</code>
                  </div>
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
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useMainStore } from '../stores/main'

import { 
  User, 
  Lock
} from 'lucide-vue-next'

const router = useRouter()
const store = useMainStore()

const isLoading = ref(false)

const emailError = ref('')
const passwordError = ref('')
const generalError = ref('')

const loginForm = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const clearErrors = () => {
  emailError.value = ''
  passwordError.value = ''
  generalError.value = ''
}

const validateForm = () => {
  let isValid = true
  
  if (!loginForm.email) {
    emailError.value = 'L\'adresse email est requise'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) {
    emailError.value = 'Format d\'email invalide'
    isValid = false
  }
  
  if (!loginForm.password) {
    passwordError.value = 'Le mot de passe est requis'
    isValid = false
  } else if (loginForm.password.length < 6) {
    passwordError.value = 'Le mot de passe doit contenir au moins 6 caractères'
    isValid = false
  }
  
  return isValid
}

const handleLogin = async () => {
  clearErrors()
  
  if (!validateForm()) {
    return
  }
  
  isLoading.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    if (loginForm.email === 'demo@transitpro.fr' && loginForm.password === 'demo123') {
      await store.login({
        email: loginForm.email,
        name: 'Jean Dupont',
        company: 'Entreprise Demo SARL',
        role: 'client'
      })
      
      router.push('/dashboard')
    } else if (loginForm.email === 'manager@transitpro.fr' && loginForm.password === 'manager123') {
      await store.login({
        email: loginForm.email,
        name: 'Marie Gestionnaire',
        company: 'Faso fret - Administration',
        role: 'manager'
      })
      
      router.push('/manager-dashboard')
    } else {
      generalError.value = 'Identifiants incorrects. Veuillez vérifier vos informations.'
    }
  } catch (error) {
    generalError.value = 'Une erreur est survenue. Veuillez réessayer.'
    console.error('Erreur de connexion:', error)
  } finally {
    isLoading.value = false
  }
}
</script>