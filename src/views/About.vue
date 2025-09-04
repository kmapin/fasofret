<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">À propos de nous</h1>
          <p class="text-xl text-blue-100">
            15 ans d'expertise au service de vos besoins logistiques
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fondée en 2010 par une équipe de passionnés de logistique, TransitPro s'est rapidement imposée 
                comme un acteur incontournable du transport international. Notre vision était simple : 
                révolutionner l'expérience client dans le secteur du fret.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers de servir plus de 2 000 entreprises à travers l'Europe et 
                au-delà, en proposant des solutions sur mesure adaptées à chaque besoin. Notre croissance 
                constante témoigne de la confiance que nos clients nous accordent.
              </p>
              <p>
                De la PME locale aux multinationales, nous accompagnons nos partenaires dans leur 
                développement en leur offrant des services logistiques fiables, innovants et compétitifs.
              </p>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
              <div class="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div class="text-4xl font-bold text-blue-700 mb-2">15+</div>
                  <div class="text-gray-700">Années d'expérience</div>
                </div>
                <div>
                  <div class="text-4xl font-bold text-blue-700 mb-2">2000+</div>
                  <div class="text-gray-700">Clients satisfaits</div>
                </div>
                <div>
                  <div class="text-4xl font-bold text-blue-700 mb-2">50+</div>
                  <div class="text-gray-700">Pays desservis</div>
                </div>
                <div>
                  <div class="text-4xl font-bold text-blue-700 mb-2">98%</div>
                  <div class="text-gray-700">Satisfaction client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
          <p class="text-xl text-gray-600">
            Les principes qui guident notre action au quotidien
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="value in values" 
            :key="value.title"
            class="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <component :is="value.icon" class="w-8 h-8 text-orange-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
          <p class="text-xl text-gray-600">
            Des experts passionnés à votre service
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="member in team" 
            :key="member.name"
            class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="h-64 bg-gradient-to-br flex items-center justify-center" :class="member.gradient">
              <div class="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <User class="w-12 h-12 text-white" />
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ member.name }}</h3>
              <p class="text-orange-600 font-medium mb-3">{{ member.role }}</p>
              <p class="text-gray-600 text-sm leading-relaxed">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Partenaires</h2>
          <p class="text-xl text-gray-600">
            Gage de qualité et de professionnalisme
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="cert in certifications" 
            :key="cert.name"
            class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <component :is="cert.icon" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ cert.name }}</h3>
            <p class="text-sm text-gray-600">{{ cert.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Rejoignez nos clients satisfaits</h2>
        <p class="text-xl mb-8 text-blue-100">
          Découvrez pourquoi plus de 2 000 entreprises nous font confiance
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/contact" 
            class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Nous Contacter
          </router-link>
          <router-link 
            to="/services" 
            class="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Découvrir nos Services
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  Heart, 
  Shield, 
  Zap, 
  User,
  Award,
  Globe,
  CheckCircle,
  Users
} from 'lucide-vue-next'

const values = [
  {
    title: 'Excellence',
    description: 'Nous nous engageons à dépasser vos attentes en proposant des services de qualité supérieure et un suivi personnalisé de chaque expédition.',
    icon: Award
  },
  {
    title: 'Fiabilité',
    description: 'La ponctualité et la sécurité sont au cœur de nos préoccupations. Nous garantissons la livraison de vos marchandises dans les délais convenus.',
    icon: Shield
  },
  {
    title: 'Innovation',
    description: 'Nous investissons constamment dans les nouvelles technologies pour améliorer nos services et vous offrir une expérience client optimale.',
    icon: Zap
  }
]

const team = [
  {
    name: 'Marie Dubois',
    role: 'Directrice Générale',
    description: 'Fondatrice de Faso fret, Marie apporte plus de 20 ans d\'expérience dans la logistique internationale.',
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    name: 'Pierre Martin',
    role: 'Directeur Commercial',
    description: 'Expert en développement commercial, Pierre accompagne nos clients dans leurs projets de croissance.',
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Sophie Bernard',
    role: 'Responsable Opérations',
    description: 'Sophie coordonne l\'ensemble de nos opérations pour garantir l\'excellence de nos services.',
    gradient: 'from-green-500 to-green-700'
  }
]

const certifications = [
  {
    name: 'ISO 9001',
    description: 'Certification qualité internationale',
    icon: Award
  },
  {
    name: 'IATA',
    description: 'Agent de fret aérien certifié',
    icon: Globe
  },
  {
    name: 'OEA',
    description: 'Opérateur Économique Agréé',
    icon: CheckCircle
  },
  {
    name: 'Carbon Neutral',
    description: 'Engagement écologique certifié',
    icon: Heart
  }
]
</script>