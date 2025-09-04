<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
    :class="{ 
      'bg-white shadow-lg': scrolled, 
      'bg-black bg-opacity-20 backdrop-blur-sm': !scrolled && isHomePage
    }"
  >
    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Truck class="w-5 h-5 text-white" />
          </div>
          <span class="text-xl font-bold tracking-tight" :class="scrolled ? 'text-gray-900' : 'text-white'">
            Faso fret
          </span>
        </router-link>

        <!-- Desktop Navigation - Menu Horizontal -->
        <div class="hidden md:flex items-center space-x-8">
          <!-- Prices -->
          <router-link 
            to="/pricing"
            class="font-medium text-sm transition-colors duration-200 hover:text-blue-600 py-2"
            :class="isHomePage && !scrolled ? 'text-white' : 'text-gray-900'"
            active-class="text-blue-600"
          >
            Tarifs
          </router-link>

          <!-- Services Dropdown -->
          <div 
            class="relative group"
            @mouseenter="showServicesMenu = true"
            @mouseleave="showServicesMenu = false"
          >
            <router-link
              to="/services"
              class="font-medium text-sm transition-colors duration-200 hover:text-blue-600 flex items-center py-2"
              :class="[
                isHomePage && !scrolled ? 'text-white' : 'text-gray-900',
                { 'text-blue-600': isServicesActive }
              ]"
            >
              Services
              <ChevronDown class="w-4 h-4 ml-1 transition-transform duration-200" :class="{ 'rotate-180': showServicesMenu }" />
            </router-link>
            
            <transition 
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 transform translate-y-2"
              enter-to-class="opacity-100 transform translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 transform translate-y-0"
              leave-to-class="opacity-0 transform translate-y-2"
            >
              <div 
                v-if="showServicesMenu"
                class="absolute top-full left-0 mt-2 w-auto min-w-max bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 whitespace-nowrap"
              >
                <router-link 
                  v-for="service in servicesItems" 
                  :key="service.name"
                  :to="service.path"
                  class="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                  active-class="bg-blue-50 text-blue-700"
                >
                  <component :is="service.icon" class="w-5 h-5 mr-4 text-gray-400" />
                  <div>
                    <div class="font-medium text-sm mb-1">{{ service.name }}</div>
                    <div class="text-xs text-gray-500 leading-relaxed">{{ service.description }}</div>
                  </div>
                </router-link>
              </div>
            </transition>
          </div>

          <!-- Schedules -->
          <router-link 
            to="/tracking"
            class="font-medium text-sm transition-colors duration-200 hover:text-blue-600 py-2"
            :class="isHomePage && !scrolled ? 'text-white' : 'text-gray-900'"
            active-class="text-blue-600"
          >
            Suivi
          </router-link>

          <!-- Tools Dropdown -->
          <div 
            class="relative group"
            @mouseenter="showToolsMenu = true"
            @mouseleave="showToolsMenu = false"
          >
            <router-link
              to="/tools"
              class="font-medium text-sm transition-colors duration-200 hover:text-blue-600 flex items-center py-2"
              :class="[
                isHomePage && !scrolled ? 'text-white' : 'text-gray-900',
                { 'text-blue-600': isToolsActive }
              ]"
              active-class="text-blue-600"
            >
              Outils
              <ChevronDown class="w-4 h-4 ml-1 transition-transform duration-200" :class="{ 'rotate-180': showToolsMenu }" />
            </router-link>
            
            <transition 
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 transform translate-y-2"
              enter-to-class="opacity-100 transform translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 transform translate-y-0"
              leave-to-class="opacity-0 transform translate-y-2"
            >
              <div 
                v-if="showToolsMenu"
                class="absolute top-full left-0 mt-2 w-auto min-w-max bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 whitespace-nowrap"
              >
                <router-link 
                  v-for="tool in toolsItems" 
                  :key="tool.name"
                  :to="tool.path"
                  class="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                  active-class="bg-blue-50 text-blue-700"
                >
                  <component :is="tool.icon" class="w-5 h-5 mr-4 text-gray-400" />
                  <div>
                    <div class="font-medium text-sm mb-1">{{ tool.name }}</div>
                    <div class="text-xs text-gray-500 leading-relaxed">{{ tool.description }}</div>
                  </div>
                </router-link>
              </div>
            </transition>
          </div>

          <!-- Company -->
          <router-link 
            to="/about"
            class="font-medium text-sm transition-colors duration-200 hover:text-blue-600 py-2"
            :class="isHomePage && !scrolled ? 'text-white' : 'text-gray-900'"
            active-class="text-blue-600"
          >
            À propos
          </router-link>
        </div>

        <!-- Right Side Actions -->
        <div class="flex items-center space-x-4">
          <!-- Auth Buttons -->
          <div class="hidden md:flex items-center space-x-3">
            <router-link 
              v-if="!store.user"
              to="/login" 
              class="font-medium text-sm transition-colors duration-200 hover:text-blue-600 py-2"
              :class="isHomePage && !scrolled ? 'text-white' : 'text-gray-900'"
              active-class="text-blue-600"
            >
              Connexion
            </router-link>
            
            <router-link 
              v-if="store.user"
              :to="store.user.role === 'manager' ? '/manager-dashboard' : '/dashboard'" 
              class="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
              <User class="w-4 h-4 mr-2" />
              Mon Espace
            </router-link>
            
            <button
              v-if="store.user"
              @click="handleLogout"
              class="flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
            >
              <LogOut class="w-4 h-4 mr-2" />
              Déconnexion
            </button>
            
            <router-link 
              v-if="!store.user"
              to="/contact" 
              class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
              S'inscrire
            </router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded transition-colors duration-200"
            :class="isHomePage && !scrolled ? 'hover:bg-white hover:bg-opacity-10 text-white' : 'hover:bg-gray-100 text-gray-900'"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <transition 
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden" @click="closeMobileMenu"></div>
    </transition>

    <!-- Mobile Menu -->
    <transition 
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="transform translate-x-full"
      enter-to-class="transform translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="transform translate-x-0"
      leave-to-class="transform translate-x-full"
    >
      <div v-if="mobileMenuOpen" class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto md:hidden">
        <div class="p-6">
          <!-- Mobile Menu Header -->
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Truck class="w-5 h-5 text-white" />
              </div>
              <span class="text-xl font-bold text-gray-900">TransitPro</span>
              <span class="text-xl font-bold text-gray-900">Faso fret</span>
            </div>
            <button @click="closeMobileMenu" class="p-2 hover:bg-gray-100 rounded transition-colors">
              <X class="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <!-- Mobile Navigation -->
          <nav class="space-y-1">
            <!-- Tarifs -->
            <router-link 
              to="/pricing"
              @click="closeMobileMenu"
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium"
              active-class="bg-blue-50 text-blue-700"
            >
              <Calculator class="w-5 h-5 mr-3" />
              Tarifs
            </router-link>

            <!-- Services -->
            <div>
              <router-link
                to="/services"
                @click="toggleMobileServicesMenu"
                class="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium"
                :class="{ 'bg-blue-50 text-blue-700': isServicesActive }"
              >
                <div class="flex items-center">
                  <Package class="w-5 h-5 mr-3" />
                  Services
                </div>
                <ChevronDown class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': mobileServicesOpen }" />
              </router-link>
              
              <transition 
                enter-active-class="transition-all duration-200 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-48"
                leave-active-class="transition-all duration-150 ease-in"
                leave-from-class="opacity-100 max-h-48"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="mobileServicesOpen" class="overflow-hidden">
                  <div class="pl-4 pt-2 space-y-1">
                    <router-link 
                      v-for="service in servicesItems" 
                      :key="service.name"
                      :to="service.path"
                      @click="closeMobileMenu"
                      class="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                      active-class="bg-blue-50 text-blue-700"
                    >
                      <component :is="service.icon" class="w-4 h-4 mr-3" />
                      <span>{{ service.name }}</span>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Suivi -->
            <router-link 
              to="/tracking"
              @click="closeMobileMenu"
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium"
              active-class="bg-blue-50 text-blue-700"
            >
              <Package class="w-5 h-5 mr-3" />
              Suivi
            </router-link>

            <!-- Outils -->
            <div>
              <router-link
                to="/tools"
                class="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium"
                :class="{ 'bg-blue-50 text-blue-700': isToolsActive }"
                @click="toggleMobileToolsMenu"
              >
                <div class="flex items-center">
                  <Settings class="w-5 h-5 mr-3" />
                  Outils
                </div>
                <ChevronDown class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': mobileToolsOpen }" />
              </router-link>
              
              <transition 
                enter-active-class="transition-all duration-200 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-48"
                leave-active-class="transition-all duration-150 ease-in"
                leave-from-class="opacity-100 max-h-48"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="mobileToolsOpen" class="overflow-hidden">
                  <div class="pl-4 pt-2 space-y-1">
                    <router-link 
                      v-for="tool in toolsItems" 
                      :key="tool.name"
                      :to="tool.path"
                      @click="closeMobileMenu"
                      class="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                      active-class="bg-blue-50 text-blue-700"
                    >
                      <component :is="tool.icon" class="w-4 h-4 mr-3" />
                      <span>{{ tool.name }}</span>
                    </router-link>
                  </div>
                </div>
              </transition>
            </div>

            <!-- À propos -->
            <router-link 
              to="/about"
              @click="closeMobileMenu"
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium"
              active-class="bg-blue-50 text-blue-700"
            >
              <Info class="w-5 h-5 mr-3" />
              À propos
            </router-link>

            <!-- Divider -->
            <div class="border-t border-gray-200 my-4"></div>

            <!-- Utility Links Mobile -->
            <div class="space-y-1">
              <router-link 
                to="/contact"
                @click="closeMobileMenu"
                class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Phone class="w-5 h-5 mr-3" />
                Support
              </router-link>
            </div>

            <!-- Auth Actions Mobile -->
            <div class="border-t border-gray-200 my-4"></div>
            
            <router-link 
              v-if="!store.user"
              to="/login"
              @click="closeMobileMenu"
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium"
            >
              <User class="w-5 h-5 mr-3" />
              Connexion
            </router-link>
            
            <router-link 
              v-if="store.user"
              :to="store.user.role === 'manager' ? '/manager-dashboard' : '/dashboard'"
              @click="closeMobileMenu"
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium"
            >
              <User class="w-5 h-5 mr-3" />
              Mon Espace
            </router-link>
            
            <button 
              v-if="store.user"
              @click="handleLogout"
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors font-medium"
            >
              <LogOut class="w-5 h-5 mr-3" />
              Déconnexion
            </button>
            
            <router-link 
              v-if="!store.user"
              to="/contact"
              @click="closeMobileMenu"
              class="flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4"
            >
              S'inscrire
            </router-link>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '../stores/main'
import { 
  Truck, 
  Menu, 
  X, 
  ChevronDown, 
  Plane, 
  Ship, 
  User,
  Package,
  Settings,
  Info,
  Calculator,
  Phone,
  Search,
  Home,
  ShoppingCart,
  LogOut
} from 'lucide-vue-next'

const route = useRoute()
const store = useMainStore()

// State
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const showServicesMenu = ref(false)
const showToolsMenu = ref(false)
const mobileServicesOpen = ref(false)
const mobileToolsOpen = ref(false)

// Menu Items
const servicesItems = [
  { 
    name: 'Fret Aérien', 
    path: '/services/air', 
    icon: Plane,
    description: 'Transport rapide par avion'
  },
  { 
    name: 'Fret Terrestre', 
    path: '/services/ground', 
    icon: Truck,
    description: 'Solutions routières'
  },
  { 
    name: 'Fret Maritime', 
    path: '/services/sea', 
    icon: Ship,
    description: 'Transport par bateau'
  }
]

const toolsItems = [
  { 
    name: 'Simulateur & Tarifs', 
    path: '/pricing', 
    icon: Calculator,
    description: 'Calculer vos prix'
  },
  { 
    name: 'Suivi d\'acheminement', 
    path: '/tracking', 
    icon: Search,
    description: 'Localiser vos colis'
  },
  { 
    name: 'Enlèvement à Domicile', 
    path: '/pickup', 
    icon: Home,
    description: 'Programmer un RDV'
  }
]

// Ajouter le service d'achat délégué aux outils
toolsItems.push({
  name: 'Achat Délégué',
  path: '/purchase-delegate',
  icon: ShoppingCart,
  description: 'Nous achetons pour vous'
})

const isHomePage = computed(() => route.path === '/' || route.path === '/login')

const isServicesActive = computed(() => {
  return route.path.startsWith('/services')
})

const isToolsActive = computed(() => route.path === '/tools')

// Methods
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    mobileServicesOpen.value = false
    mobileToolsOpen.value = false
  }
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileServicesOpen.value = false
  mobileToolsOpen.value = false
  document.body.style.overflow = ''
}

const toggleMobileServicesMenu = () => {
  mobileServicesOpen.value = !mobileServicesOpen.value
  if (mobileServicesOpen.value) {
    mobileToolsOpen.value = false
  }
}

const toggleMobileToolsMenu = () => {
  mobileToolsOpen.value = !mobileToolsOpen.value
  if (mobileToolsOpen.value) {
    mobileServicesOpen.value = false
  }
}

const handleLogout = async () => {
  await store.logout()
  // Rediriger vers la page d'accueil après déconnexion
  window.location.href = '/'
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>