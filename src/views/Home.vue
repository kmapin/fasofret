<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden pt-32 md:pt-36 lg:pt-40 xl:pt-44">
      <!-- Realistic Freight Background -->
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        :style="`background-image: url(${backgroundImage});`"
      ></div>
      
      <!-- Animated Logistics Elements -->
      <div class="absolute inset-0 overflow-hidden">
        
       

   

        <!-- Global Logistics Network -->
        <svg class="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#60A5FA;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#34D399;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#F97316;stop-opacity:1" />
            </linearGradient>
            <marker id="networkArrow" markerWidth="8" markerHeight="6" 
             refX="0" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="url(#networkGradient)" />
            </marker>
          </defs>
          <!-- Global Trade Routes -->
          <path 
            d="M 80 160 Q 300 180 520 160 Q 700 150 880 140" 
            stroke="url(#networkGradient)" 
            stroke-width="2" 
            fill="none" 
            marker-end="url(#networkArrow)"
            class="animate-network-flow"
          />
          <!-- Continental Connections -->
          <path 
            d="M 120 280 Q 380 260 640 280 Q 780 290 920 270" 
            stroke="url(#networkGradient)" 
            stroke-width="2" 
            fill="none" 
            marker-end="url(#networkArrow)"
            class="animate-network-flow-delayed"
          />
          <!-- Intercontinental Links -->
          <path 
            d="M 200 120 Q 400 100 600 120 Q 750 130 850 110" 
            stroke="url(#networkGradient)" 
            stroke-width="1.5" 
            fill="none" 
            marker-end="url(#networkArrow)"
            class="animate-network-flow-slow"
          />
        </svg>
        
       
      </div>

      <div class="relative container mx-auto px-4 py-8 md:py-12 lg:py-16 xl:py-20 " >
        <div class="max-w-4xl mx-auto text-center mt-16 md:mt-24 lg:mt-32">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-lg hero-text hero-text-container">
            Votre Partenaire <span class="text-orange-400">Logistique</span> de Confiance
          </h1>
          <p class="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Transport aérien, terrestre et maritime avec un service personnalisé 
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/pricing" 
              class="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Devis Gratuit
            </router-link>
            <router-link 
              to="/tracking" 
              class="border-2 border-white text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm"
            >
              Suivre mon Colis
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions Component -->
    <section class="relative z-10" id="quick-actions">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <!-- Horizontal Tabs - Style exact de l'image -->
            <div class="flex bg-gray-50">
              <button
                v-for="tab in quickActionTabs"
                :key="tab.id"
                @click="activeQuickTab = tab.id"
                class="flex-1 flex items-center justify-center px-8 py-5 text-sm font-medium transition-all duration-200 relative"
                :class="activeQuickTab === tab.id 
                  ? 'text-blue-700 bg-white border-b-3 border-blue-700' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'"
              >
                <component :is="tab.icon" class="w-5 h-5 mr-3" />
                {{ tab.label }}
                <!-- Ligne active sous l'onglet -->
                <div 
                  v-if="activeQuickTab === tab.id"
                  class="absolute bottom-0 left-0 right-0 h-1 bg-blue-700"
                ></div>
              </button>
            </div>

            <!-- Content Area - Style minimaliste -->
            <div class="p-10 bg-white">
              <!-- Tracking Tab -->
              <div v-if="activeQuickTab === 'tracking'">
                <div class="text-center mb-6">
                  <p class="text-gray-500 text-sm">Numéro de suivi, conteneur ou colis</p>
                </div>
                <form @submit.prevent="handleQuickTracking" class="max-w-2xl mx-auto">
                  <div class="flex-1 relative mb-16">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin class="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      v-model="quickTrackingForm.number"
                      type="text"
                      placeholder="Numéro de suivi, conteneur ou colis"
                      class="w-full pl-10 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-600 placeholder-gray-400 text-sm"
                      required
                    >
                    <button
                      type="submit"
                      class="absolute inset-y-0 right-0 pr-3  items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span class="text-sm font-medium mr-1">Suivi</span>
                      <ArrowRight class="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>

              <!-- Schedules Tab (Pickup) -->
              <div v-if="activeQuickTab === 'schedules'">
                <div class="text-center mb-6">
                  <p class="text-gray-500 text-sm">Programmez un enlèvement à domicile</p>
                </div>
                <form @submit.prevent="handleQuickPickup" class="max-w-2xl mx-auto">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User class="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        v-model="quickPickupForm.name"
                        type="text"
                        placeholder="Nom complet"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-600 placeholder-gray-400 text-sm"
                        required
                      >
                    </div>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone class="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        v-model="quickPickupForm.phone"
                        type="tel"
                        placeholder="Téléphone"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-600 placeholder-gray-400 text-sm"
                        required
                      >
                    </div>
                  </div>
                  <div class="relative">
                    <div class="absolute top-3 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin class="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      v-model="quickPickupForm.address"
                      type="text"
                      placeholder="Adresse complète en Île-de-France"
                      class="w-full pl-10 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-600 placeholder-gray-400 text-sm mb-4"
                      required
                    >
                    <button
                      type="submit"
                      class="absolute top-0 right-0 h-full pr-3 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span class="text-sm font-medium mr-1">Programmer</span>
                      <ArrowRight class="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>

              <!-- Offices Tab (Contact) -->
              <div v-if="activeQuickTab === 'offices'">
                <div class="text-center mb-8">
                  <p class="text-gray-500 text-sm mb-4">Nos agences à votre service</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <!-- Bureau France -->
                  <div class="border border-gray-200 rounded-lg p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <img src="/src/assets/france-flag.svg" alt="Drapeau France" class="w-6 h-6 mr-3 rounded-sm">
                      Bureau France
                    </h3>
                    <div class="space-y-4 text-sm">
                      <a href="tel:+33123456789" class="flex items-center text-gray-700 hover:text-blue-600">
                        <Phone class="w-4 h-4 mr-3 text-gray-400" />
                        <span>+33 1 23 45 67 89</span>
                      </a>
                      <a href="mailto:contact@fasofret.fr" class="flex items-center text-gray-700 hover:text-blue-600">
                        <Mail class="w-4 h-4 mr-3 text-gray-400" />
                        <span>contact@fasofret.fr</span>
                      </a>
                      <div class="flex items-start text-gray-700">
                        <MapPin class="w-4 h-4 mr-3 text-gray-400 mt-1 flex-shrink-0" />
                        <span>46 ROUTE DE GOUSSAINVILLE<br>95190 FONTENAY-EN-PARISIS, France</span>
                      </div>
                    </div>
                  </div>

                  <!-- Bureau Burkina Faso -->
                  <div class="border border-gray-200 rounded-lg p-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <img src="/src/assets/burkina-faso-flag.svg" alt="Drapeau Burkina Faso" class="w-6 h-6 mr-3 rounded-sm">
                      Bureau Burkina Faso
                    </h3>
                    <div class="space-y-4 text-sm">
                      <a href="tel:+22600000000" class="flex items-center text-gray-700 hover:text-blue-600">
                        <Phone class="w-4 h-4 mr-3 text-gray-400" />
                        <span>+226 00 00 00 00 (à confirmer)</span>
                      </a>
                      <a href="mailto:contact.bf@fasofret.fr" class="flex items-center text-gray-700 hover:text-blue-600">
                        <Mail class="w-4 h-4 mr-3 text-gray-400" />
                        <span>contact.bf@fasofret.fr</span>
                      </a>
                      <div class="flex items-start text-gray-700">
                        <MapPin class="w-4 h-4 mr-3 text-gray-400 mt-1 flex-shrink-0" />
                        <span>Adresse à Ouagadougou<br>Burkina Faso (à confirmer)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services de Transport</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Solutions complètes de fret adaptées à tous vos besoins logistiques
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="service in services" 
            :key="service.type"
            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer overflow-hidden"
            @click="$router.push(`/services/${service.type}`)"
          >
            <!-- Image Header -->
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <component :is="service.icon" class="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>
              <div class="space-y-2 mb-6">
                <div v-for="feature in service.features" :key="feature" class="flex items-center">
                  <Check class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>
              <button class="text-blue-700 font-semibold hover:text-blue-900 transition-colors flex items-center">
                En savoir plus <ArrowRight class="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="relative h-96 md:h-[450px] lg:h-[500px] bg-gray-900 overflow-hidden">
      <video 
        :src="camionColisVideo" 
        autoplay 
        loop 
        muted 
        playsinline
        class="absolute z-0 w-full h-full object-cover"
      ></video>
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">La logistique en mouvement</h2>
        <p class="text-lg md:text-xl max-w-2xl mb-8">
          Nous veillons sur vos marchandises à chaque étape du transport.
        </p>
        <router-link 
          to="/contact"
          class="bg-orange-500 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Contactez-nous
        </router-link>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir Fasofret ?
            </h2>
            <p class="text-xl text-gray-600 mb-8">
              Plus de 15 ans d'expérience dans le transport international avec un taux de satisfaction client de 98%.
            </p>
            
            <div class="space-y-6">
              <div v-for="benefit in benefits" :key="benefit.title" class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <component :is="benefit.icon" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
                  <p class="text-gray-600">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <div class="text-3xl font-bold mb-2">15+</div>
                  <div class="text-blue-100">Années d'expérience</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold mb-2">98%</div>
                  <div class="text-blue-100">Satisfaction client</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold mb-2">50+</div>
                  <div class="text-blue-100">Pays desservis</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold mb-2">24/7</div>
                  <div class="text-blue-100">Support client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <p class="text-xl text-gray-600">Témoignages authentiques de nos partenaires</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="testimonial in store.testimonials" 
            :key="testimonial.id"
            class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-center mb-4">
              <div v-for="i in 5" :key="i" class="mr-1">
                <Star 
                  :class="i <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'" 
                  class="w-5 h-5" 
                />
              </div>
            </div>
            <p class="text-gray-600 mb-4 italic">"{{ testimonial.comment }}"</p>
            <div class="border-t pt-4">
              <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-500">{{ testimonial.company }}</div>
              <div class="text-sm text-blue-600 mt-1">{{ testimonial.service }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Events & Achievements Carousel Section -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Nos Événements & Distinctions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-7">
            Découvrez les moments forts de Faso Fret : nos partenariats, récompenses et engagements qui font notre fierté
          </p>
        </div>

        <!-- Events Carousel -->
        <div class="relative max-w-7xl mx-auto">
          <!-- Carousel Container -->
          <div 
            class="overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-100"
            @mouseenter="pauseAutoPlay"
            @mouseleave="resumeAutoPlay"
          >
            <div 
              class="flex transition-all duration-1000 ease-in-out"
              :style="`transform: translateX(-${currentSlide * 100}%)`"
            >
              <div 
                v-for="event in companyEvents" 
                :key="event.id"
                class="w-full flex-shrink-0"
              >
                <div class="bg-white overflow-hidden hover:bg-gray-50 transition-colors duration-300">
                  <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                    <!-- Image Section -->
                    <div class="relative h-80 lg:h-full overflow-hidden">
                      <img 
                        :src="event.image"
                        :alt="event.title"
                        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      >
                      <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      
                      <!-- Event Type Badge -->
                      <div class="absolute top-4 left-4">
                        <span :class="event.typeColor" class="px-3 py-1 rounded-full text-xs font-medium flex items-center backdrop-blur-sm">
                          <component :is="event.icon" class="w-3 h-3 mr-1" />
                          {{ event.type }}
                        </span>
                      </div>
                      
                      <!-- Date Badge -->
                      <div class="absolute bottom-4 right-4">
                        <span class="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded text-xs font-medium">
                          {{ event.date }}
                        </span>
                      </div>
                    </div>
                    
                    <!-- Content Section -->
                    <div class="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                      <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-8">{{ event.title }}</h3>
                      <p class="text-gray-600 mb-6 leading-6 text-base lg:text-lg">{{ event.description }}</p>
                      
                      <!-- Event Details -->
                      <div class="space-y-2 mb-4">
                        <div v-if="event.location" class="flex items-center text-gray-600 text-sm">
                          <MapPin class="w-4 h-4 mr-2 text-gray-400" />
                          <span>{{ event.location }}</span>
                        </div>
                        <div v-if="event.organizer" class="flex items-center text-gray-600 text-sm">
                          <User class="w-4 h-4 mr-2 text-gray-400" />
                          <span>{{ event.organizer }}</span>
                        </div>
                        <div v-if="event.achievement" class="flex items-center text-yellow-700 text-sm">
                          <Award class="w-4 h-4 mr-2 text-yellow-500" />
                          <span class="font-medium">{{ event.achievement }}</span>
                        </div>
                      </div>
                      
                      <!-- Impact Stats -->
                      <div v-if="event.impact" class="grid grid-cols-2 gap-6 mt-6">
                        <div v-for="stat in event.impact" :key="stat.label" class="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div class="text-2xl font-bold text-blue-600 mb-1">{{ stat.value }}</div>
                          <div class="text-sm text-gray-600 font-medium">{{ stat.label }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Carousel Navigation -->
          <div class="flex justify-center items-center mt-8 space-x-8">
            <!-- Previous Button -->
            <button 
              @click="previousSlide"
              class="group relative w-14 h-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-md"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <!-- Custom Left Arrow -->
              <div class="relative z-10 flex items-center justify-center">
                <svg 
                  class="w-6 h-6 text-gray-600 group-hover:text-white transition-all duration-300 transform group-hover:-translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
                </svg>
              </div>
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
            </button>
            
            <!-- Slide Indicators with Counter -->
            <div class="flex flex-col items-center space-y-3">
              <!-- Counter -->
              <div class="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {{ currentSlide + 1 }} / {{ companyEvents.length }}
              </div>
              
              <!-- Indicators -->
              <div class="flex space-x-2">
                <button
                  v-for="(event, index) in companyEvents"
                  :key="event.id"
                  @click="goToSlide(index)"
                  class="relative group"
                >
                  <div 
                    class="h-3 rounded-full transition-all duration-500 ease-out"
                    :class="currentSlide === index 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 w-8 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400 w-3 hover:w-4'"
                  ></div>
                  <div 
                    v-if="currentSlide === index"
                    class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-30 blur-sm"
                  ></div>
                </button>
              </div>
            </div>
            
            <!-- Next Button -->
            <button 
              @click="nextSlide"
              class="group relative w-14 h-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-md"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <!-- Custom Right Arrow -->
              <div class="relative z-10 flex items-center justify-center">
                <svg 
                  class="w-6 h-6 text-gray-600 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
            </button>
          </div>
          
          <!-- Auto-play Status (moved below) -->
          <div class="flex justify-center mt-4">
            <div class="flex items-center text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-full border">
              <div 
                class="w-2 h-2 rounded-full mr-2 transition-all duration-300"
                :class="isAutoPlaying ? 'bg-green-500 animate-pulse shadow-sm' : 'bg-gray-400'"
              ></div>
              <span class="font-medium">{{ isAutoPlaying ? 'Défilement automatique' : 'En pause' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Prêt à expédier ?</h2>
        <p class="text-xl mb-8 text-blue-100">Obtenez un devis personnalisé en quelques minutes</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/pricing" 
            class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Devis Gratuit
          </router-link>
          <router-link 
            to="/contact" 
            class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
          >
            Nous Contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-text-container {
  margin-top: 150px;
}

#quick-actions {
  margin-top: 0px; /* Pour les petits écrans */
}

@media (min-width: 768px) { /* md */
  #quick-actions {
    margin-top: -40px;
  }
}

@media (min-width: 1024px) { /* lg */
  #quick-actions {
    margin-top: -43px;
  }
}
</style>

<script setup lang="ts">
import { 
  Plane, 
  Truck, 
  Ship, 
  Check, 
  ArrowRight, 
  Clock, 
  Shield, 
  Globe, 
  Star,
  Package,
  Calendar,
  User,
  Phone,
  MapPin,
  Mail,
  Award
} from 'lucide-vue-next'
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import camionColisVideo from '../assets/video/camion_colis.mp4'
import backgroundImage from '../assets/img/pexels-kelly-12530458.jpg'
import { useMainStore } from '../stores/main'

const router = useRouter()
const store = useMainStore()

// Quick Actions State
const activeQuickTab = ref('tracking')
const quickTrackingForm = reactive({
  number: ''
})
const quickPickupForm = reactive({
  name: '',
  phone: '',
  address: ''
})

const quickActionTabs = [
  { id: 'tracking', label: 'Suivi', icon: Package },
  { id: 'schedules', label: 'Enlèvement', icon: Calendar },
  { id: 'offices', label: 'Nos bureaux', icon: Phone }
]

// Quick Actions Methods
const handleQuickTracking = () => {
  if (quickTrackingForm.number.trim()) {
    router.push(`/tracking?number=${quickTrackingForm.number.trim()}`)
  }
}

const handleQuickPickup = () => {
  // Store form data and redirect to pickup page
  const params = new URLSearchParams({
    name: quickPickupForm.name,
    phone: quickPickupForm.phone,
    address: quickPickupForm.address
  })
  router.push(`/pickup?${params.toString()}`)
}

// Events Carousel Data & State
const currentSlide = ref(0)
const isAutoPlaying = ref(true)
const autoPlayInterval = ref<number | null>(null)

const companyEvents = [
  {
    id: 1,
    type: 'Prix & Distinction',
    typeColor: 'bg-yellow-500 text-white',
    title: 'Faso Fret remporte le Prix de l\'Excellence Logistique 2024',
    description: 'Nous sommes fiers d\'avoir été récompensés pour notre innovation et notre service client exceptionnel lors du Salon International du Transport de Ouagadougou.',
    date: '15 Nov 2024',
    location: 'Ouagadougou, Burkina Faso',
    organizer: 'Chambre de Commerce du Burkina Faso',
    achievement: 'Prix de l\'Excellence Logistique 2024',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Award,
    impact: [
      { value: '1er', label: 'Prix National' },
      { value: '98%', label: 'Satisfaction Client' }
    ]
  },
  {
    id: 2,
    type: 'Sponsoring',
    typeColor: 'bg-blue-500 text-white',
    title: 'Partenaire Officiel du Marathon International de Ouagadougou',
    description: 'Faso Fret est fier de sponsoriser cet événement sportif majeur, démontrant notre engagement envers la communauté et le développement du sport au Burkina Faso.',
    date: '20 Oct 2024',
    location: 'Ouagadougou, Burkina Faso',
    organizer: 'Fédération Burkinabè d\'Athlétisme',
    image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Star,
    impact: [
      { value: '5000+', label: 'Participants' },
      { value: '50K€', label: 'Sponsoring' }
    ]
  },
  {
    id: 3,
    type: 'Certification',
    typeColor: 'bg-green-500 text-white',
    title: 'Certification ISO 9001:2015 - Management de la Qualité',
    description: 'Obtention de la certification internationale ISO 9001:2015, reconnaissance de notre système de management de la qualité et de notre engagement envers l\'excellence.',
    date: '5 Sep 2024',
    location: 'Audit International',
    organizer: 'Bureau Veritas Certification',
    achievement: 'Certification ISO 9001:2015',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Shield,
    impact: [
      { value: '100%', label: 'Conformité' },
      { value: '3 ans', label: 'Validité' }
    ]
  },
  {
    id: 4,
    type: 'Événement Corporate',
    typeColor: 'bg-purple-500 text-white',
    title: 'Inauguration de notre Nouvelle Plateforme Logistique',
    description: 'Événement d\'inauguration de notre centre logistique de 5000m² en présence des autorités locales et de nos partenaires stratégiques.',
    date: '12 Août 2024',
    location: 'Zone Industrielle, Ouagadougou',
    organizer: 'Faso Fret',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Package,
    impact: [
      { value: '5000m²', label: 'Surface' },
      { value: '200+', label: 'Invités' }
    ]
  },
  {
    id: 5,
    type: 'Sponsoring',
    typeColor: 'bg-orange-500 text-white',
    title: 'Soutien à la Foire Internationale de l\'Artisanat de Ouagadougou',
    description: 'Faso Fret accompagne les artisans locaux en offrant des services de transport gratuits pour leurs œuvres, favorisant le rayonnement de l\'artisanat burkinabè.',
    date: '25 Juil 2024',
    location: 'FIAO, Ouagadougou',
    organizer: 'Ministère de l\'Artisanat',
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Globe,
    impact: [
      { value: '500+', label: 'Artisans Aidés' },
      { value: 'Gratuit', label: 'Transport Offert' }
    ]
  }
]

// Carousel Navigation Functions
const nextSlide = () => {
  if (currentSlide.value < companyEvents.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0 // Loop back to first slide
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = companyEvents.length - 1 // Loop to last slide
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

// Auto-play Functions
const startAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
  autoPlayInterval.value = setInterval(() => {
    if (isAutoPlaying.value) {
      nextSlide()
    }
  }, 4000) // Change slide every 4 seconds
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

const pauseAutoPlay = () => {
  isAutoPlaying.value = false
}

const resumeAutoPlay = () => {
  isAutoPlaying.value = true
}

// Lifecycle hooks
onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})

const services = [
  {
    type: 'air',
    title: 'Fret Aérien',
    description: 'Transport rapide et sécurisé par voie aérienne pour vos envois urgents et marchandises de valeur.',
    icon: Plane,
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Livraison express 24-48h',
      'Assurance incluse',
      'Suivi en temps réel'
    ]
  },
  {
    type: 'ground',
    title: 'Fret Terrestre',
    description: 'Solutions terrestres économiques et fiables pour vos expéditions nationales et européennes.',
    icon: Truck,
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Réseau européen étendu',
      'Tarifs compétitifs',
      'Enlèvement à domicile'
    ]
  },
  {
    type: 'sea',
    title: 'Fret Maritime',
    description: 'Transport maritime pour vos gros volumes et marchandises non urgentes vers le monde entier.',
    icon: Ship,
    image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Capacité importante',
      'Prix avantageux',
      'Destinations mondiales'
    ]
  }
]

const benefits = [
  {
    icon: Clock,
    title: 'Ponctualité Garantie',
    description: 'Respect des délais de livraison avec un taux de ponctualité de 95%'
  },
  {
    icon: Shield,
    title: 'Sécurité Maximale',
    description: 'Assurance complète et emballage professionnel pour tous vos envois'
  },
  {
    icon: Globe,
    title: 'Réseau International',
    description: 'Plus de 50 pays desservis avec des partenaires de confiance'
  }
]
</script>