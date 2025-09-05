<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 footer-content">
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <Truck class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold">Faso fret</h3>
              <p class="text-gray-300 text-sm">Solutions Logistiques</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4 max-w-md">
            Votre partenaire de confiance pour tous vos besoins de transport et de logistique. 
            Fret aérien, terrestre et maritime avec un service personnalisé.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span class="text-sm font-bold">f</span>
              </div>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">
              <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span class="text-sm font-bold">in</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Liens rapides</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-300 hover:text-white transition-colors">Accueil</router-link></li>
            <li><router-link to="/services" class="text-gray-300 hover:text-white transition-colors">Services</router-link></li>
            <li><router-link to="/pricing" class="text-gray-300 hover:text-white transition-colors">Tarifs</router-link></li>
            <li><router-link to="/tracking" class="text-gray-300 hover:text-white transition-colors">Suivi</router-link></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <Phone class="w-5 h-5 text-orange-500" />
              <span class="text-gray-300">+33 1 23 45 67 89</span>
            </div>
            <div class="flex items-center space-x-3">
              <Mail class="w-5 h-5 text-orange-500" />
              <span class="text-gray-300">contact@fasofret.fr</span>
            </div>
            <div class="flex items-start space-x-3">
              <MapPin class="w-5 h-5 text-orange-500 mt-0.5" />
              <span class="text-gray-300">46 ROUTE DE GOUSSAINVILLE<br>95190 FONTENAY-EN-PARISIS, France</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p class="text-gray-300">
          © 2025 Faso fret. Tous droits réservés. | 
          <a href="#" class="hover:text-white transition-colors">Mentions légales</a> | 
          <a href="#" class="hover:text-white transition-colors">Politique de confidentialité</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Truck, Phone, Mail, MapPin } from 'lucide-vue-next'
</script>