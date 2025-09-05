<template>
  <div class="min-h-screen pt-20" v-if="service">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="bg-gradient-to-br py-10 flex items-center" :class="service.gradient">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center text-white">
            <component :is="service.icon" class="w-24 h-12 mx-auto mb-6 opacity-90" />
            <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ service.title }}</h1>
            <p class="text-xl text-opacity-90">{{ service.subtitle }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Description du Service</h2>
              <p class="text-gray-600 text-lg leading-relaxed mb-6">{{ service.fullDescription }}</p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  v-for="benefit in service.benefits" 
                  :key="benefit.title"
                  class="flex items-start space-x-4"
                >
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <component :is="benefit.icon" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
                    <p class="text-gray-600 text-sm">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Specifications -->
            <div class="bg-gray-50 rounded-xl p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Spécifications Techniques</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="spec in service.specifications" :key="spec.label">
                  <div class="flex justify-between items-center py-2 border-b border-gray-200">
                    <span class="font-medium text-gray-900">{{ spec.label }}</span>
                    <span class="text-gray-600">{{ spec.value }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Notre Processus</h3>
              <div class="space-y-4">
                <div 
                  v-for="(step, index) in service.process" 
                  :key="step"
                  class="flex items-center space-x-4"
                >
                  <div class="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    {{ index + 1 }}
                  </div>
                  <p class="text-gray-700">{{ step }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-8">
            <!-- Pricing Card -->
            <div class="bg-white rounded-xl shadow-lg p-6 border-2 border-orange-200">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Tarification</h3>
              <div class="text-center mb-6">
                <div class="text-3xl font-bold text-orange-600">{{ service.priceFrom }}€</div>
                <div class="text-gray-500">par kilogramme</div>
              </div>
              <ul class="space-y-2 mb-6">
                <li v-for="include in service.priceIncludes" :key="include" class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-2" />
                  <span class="text-sm text-gray-700">{{ include }}</span>
                </li>
              </ul>
              <router-link 
                to="/pricing" 
                class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
              >
                Obtenir un Devis
              </router-link>
            </div>

            <!-- Contact Card -->
            <div class="bg-blue-50 rounded-xl p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Besoin d'Aide ?</h3>
              <p class="text-gray-600 mb-4">
                Nos experts sont disponibles pour vous conseiller et répondre à toutes vos questions.
              </p>
              <div class="space-y-3">
                <a 
                  href="tel:+33123456789" 
                  class="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <Phone class="w-5 h-5" />
                  <span>+33 1 23 45 67 89</span>
                </a>
                <router-link 
                  to="/contact" 
                  class="flex items-center space-x-3 text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <Mail class="w-5 h-5" />
                  <span>Nous contacter</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { 
  Plane, 
  Truck, 
  Ship, 
  Check, 
  Phone, 
  Mail,
  Clock,
  Shield,
  Globe,
  Package,
  Zap,
  Users
} from 'lucide-vue-next'

const route = useRoute()
const serviceType = computed(() => route.params.type as string)

const servicesData = {
  air: {
    title: 'Fret Aérien',
    subtitle: 'Transport aérien express pour vos envois urgents',
    icon: Plane,
    gradient: 'from-blue-500 to-blue-700',
    priceFrom: '8.50',
    fullDescription: 'Notre service de fret aérien vous garantit une livraison rapide et sécurisée de vos marchandises partout dans le monde. Avec notre réseau de partenaires aériens de confiance, nous assurons le transport de vos colis les plus précieux et urgents dans les meilleures conditions.',
    benefits: [
      {
        title: 'Rapidité Exceptionnelle',
        description: 'Livraison en 24-72h vers la plupart des destinations mondiales',
        icon: Zap
      },
      {
        title: 'Sécurité Maximale',
        description: 'Suivi GPS et assurance tous risques pour vos envois de valeur',
        icon: Shield
      },
      {
        title: 'Réseau Global',
        description: 'Plus de 200 destinations desservies à travers le monde',
        icon: Globe
      },
      {
        title: 'Service Personnalisé',
        description: 'Équipe dédiée pour un suivi personnalisé de vos expéditions',
        icon: Users
      }
    ],
    specifications: [
      { label: 'Poids maximum', value: '500 kg par colis' },
      { label: 'Dimensions maximum', value: '200x150x150 cm' },
      { label: 'Délai moyen', value: '24-72h' },
      { label: 'Destinations', value: '200+ pays' },
      { label: 'Assurance', value: 'Jusqu\'à 50 000€' },
      { label: 'Suivi', value: 'Temps réel 24/7' }
    ],
    process: [
      'Réception et vérification de votre colis dans nos entrepôts',
      'Emballage professionnel et étiquetage sécurisé',
      'Transport prioritaire vers l\'aéroport de départ',
      'Envol et suivi en temps réel du vol',
      'Dédouanement express à l\'arrivée',
      'Livraison finale chez le destinataire'
    ],
    priceIncludes: [
      'Assurance tous risques',
      'Suivi temps réel',
      'Emballage renforcé',
      'Dédouanement express',
      'Support 24/7'
    ]
  },
  ground: {
    title: 'Fret Terrestre',
    subtitle: 'Solutions routières économiques et fiables',
    icon: Truck,
    gradient: 'from-green-500 to-green-700',
    priceFrom: '3.20',
    fullDescription: 'Notre réseau de transport terrestre couvre l\'ensemble de l\'Europe avec des solutions adaptées à tous vos besoins. Que ce soit pour des envois réguliers ou ponctuels, nous vous garantissons un service fiable et des tarifs compétitifs.',
    benefits: [
      {
        title: 'Réseau Étendu',
        description: 'Couverture complète de l\'Europe avec 500+ destinations',
        icon: Globe
      },
      {
        title: 'Flexibilité Totale',
        description: 'Enlèvement et livraison à domicile selon vos horaires',
        icon: Clock
      },
      {
        title: 'Tous Volumes',
        description: 'Du petit colis au camion complet, nous nous adaptons',
        icon: Package
      },
      {
        title: 'Tarifs Optimisés',
        description: 'Les meilleurs prix du marché avec des tarifs dégressifs',
        icon: Shield
      }
    ],
    specifications: [
      { label: 'Poids maximum', value: '25 tonnes par envoi' },
      { label: 'Volume maximum', value: '100 m³' },
      { label: 'Délai moyen', value: '2-5 jours' },
      { label: 'Zones couvertes', value: 'Europe + Maghreb' },
      { label: 'Véhicules', value: 'Fourgons à semi-remorques' },
      { label: 'Horaires', value: 'Enlèvement 6h-20h' }
    ],
    process: [
      'Planification de l\'enlèvement selon vos disponibilités',
      'Chargement sécurisé avec matériel adapté',
      'Transport direct ou via nos plateformes de groupage',
      'Suivi en temps réel tout au long du trajet',
      'Coordination avec le destinataire pour la livraison',
      'Livraison avec signature et preuve de livraison'
    ],
    priceIncludes: [
      'Enlèvement à domicile',
      'Assurance transport',
      'Sangles et calage',
      'Suivi GPS',
      'Livraison incluse'
    ]
  },
  sea: {
    title: 'Fret Maritime',
    subtitle: 'Transport maritime économique pour gros volumes',
    icon: Ship,
    gradient: 'from-cyan-500 to-cyan-700',
    priceFrom: '1.80',
    fullDescription: 'Le transport maritime reste la solution la plus économique pour vos expéditions de gros volumes vers l\'international. Nous gérons l\'intégralité de la chaîne logistique depuis l\'enlèvement jusqu\'à la livraison finale.',
    benefits: [
      {
        title: 'Économies Importantes',
        description: 'Les tarifs les plus compétitifs pour vos gros volumes',
        icon: Shield
      },
      {
        title: 'Capacité Illimitée',
        description: 'Conteneurs 20\' et 40\' selon vos besoins',
        icon: Package
      },
      {
        title: 'Réseau Mondial',
        description: 'Plus de 200 ports desservis sur tous les continents',
        icon: Globe
      },
      {
        title: 'Service Complet',
        description: 'De l\'enlèvement au dédouanement, nous gérons tout',
        icon: Users
      }
    ],
    specifications: [
      { label: 'Conteneur 20\'', value: '28 m³ - 25 tonnes' },
      { label: 'Conteneur 40\'', value: '67 m³ - 26 tonnes' },
      { label: 'Délai moyen', value: '15-35 jours' },
      { label: 'Ports desservis', value: '200+ ports' },
      { label: 'Groupage LCL', value: 'À partir de 1 m³' },
      { label: 'Stockage', value: '30 jours gratuits' }
    ],
    process: [
      'Étude de faisabilité et choix de la ligne maritime',
      'Enlèvement et transport vers le port d\'embarquement',
      'Empotage en conteneur et scellage sécurisé',
      'Chargement à bord et départ du navire',
      'Traversée avec suivi satellite du navire',
      'Arrivée, dédouanement et livraison finale'
    ],
    priceIncludes: [
      'Transport au port',
      'Empotage conteneur',
      'Frais portuaires',
      'Assurance de base',
      'Tracking satellite'
    ]
  }
}

const service = computed(() => {
  return servicesData[serviceType.value as keyof typeof servicesData] || null
})
</script>