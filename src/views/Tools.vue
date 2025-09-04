<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Nos Outils</h1>
          <p class="text-xl text-orange-100">
            Découvrez tous nos outils pour faciliter vos expéditions
          </p>
        </div>
      </div>
    </section>

    <!-- Tools Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <router-link
            to="/pricing"
            class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div class="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative">
              <Calculator class="w-20 h-20 text-white opacity-90" />
              <div class="absolute top-4 right-4">
                <div class="bg-white bg-opacity-20 rounded-full p-2">
                  <ArrowRight class="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Simulateur & Tarifs</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Calculez instantanément le prix de vos expéditions avec notre simulateur avancé.
              </p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-700">Devis instantané</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-700">Tous modes de transport</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-700">Tarifs transparents</span>
                </div>
              </div>
            </div>
          </router-link>

          <router-link
            to="/tracking"
            class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div class="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center relative">
              <Search class="w-20 h-20 text-white opacity-90" />
              <div class="absolute top-4 right-4">
                <div class="bg-white bg-opacity-20 rounded-full p-2">
                  <ArrowRight class="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Suivi d'Acheminement</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Suivez vos colis en temps réel grâce à notre système de tracking avancé.
              </p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-700">Suivi temps réel</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-700">Notifications SMS/Email</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-700">Historique complet</span>
                </div>
              </div>
            </div>
          </router-link>

          <router-link
            to="/pickup"
            class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div class="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center relative">
              <Home class="w-20 h-20 text-white opacity-90" />
              <div class="absolute top-4 right-4">
                <div class="bg-white bg-opacity-20 rounded-full p-2">
                  <ArrowRight class="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Enlèvement à Domicile</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Programmez un rendez-vous d'enlèvement directement chez vous en Île-de-France.
              </p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-700">Créneaux flexibles</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-700">Tarif fixe 15€</span>
                </div>
                <div class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-700">Service sécurisé</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Besoin d'aide ?</h2>
        <p class="text-xl text-gray-600 mb-8">
          Notre équipe d'experts est là pour vous accompagner
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/contact" 
            class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Nous Contacter
          </router-link>
          <a 
            href="tel:+33123456789" 
            class="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Appeler Maintenant
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  Calculator, 
  Search, 
  Home, 
  Check, 
  ArrowRight 
} from 'lucide-vue-next'
</script>