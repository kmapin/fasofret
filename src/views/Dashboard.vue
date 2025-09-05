<template>
  <div class="min-h-screen bg-gray-50 pt-24 font-light">
    <!-- Header Dashboard -->
    <div class="bg-white shadow-sm border-b border-gray-200 mb-8">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
                <Package class="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 class="text-2xl font-medium text-gray-900">Tableau de Bord</h1>
                <p class="text-gray-600 font-light">Bienvenue, {{ store.user?.name }}</p>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-6">
            <div class="text-right hidden md:block">
              <p class="text-sm font-normal text-gray-700">{{ store.user?.company }}</p>
              <p class="text-xs text-gray-500 font-light">{{ store.user?.email }}</p>
            </div>
            <button
              @click="handleLogout"
              class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-200 flex items-center shadow-sm hover:shadow-md font-normal text-sm"
            >
              <LogOut class="w-4 h-4 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <section class="py-6">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center">
                <Package class="w-6 h-6 text-blue-600" />
              </div>
              <div class="ml-4">
                <p class="text-xs text-gray-500 font-light">Envois actifs</p>
                <p class="text-xl font-normal text-gray-900">{{ stats.activeShipments }}</p>
              </div>
              <div class="text-right">
                <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center">
                <CheckCircle class="w-6 h-6 text-green-600" />
              </div>
              <div class="ml-4">
                <p class="text-xs text-gray-500 font-light">Livrés ce mois</p>
                <p class="text-xl font-normal text-gray-900">{{ stats.deliveredThisMonth }}</p>
              </div>
              <div class="text-right">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 bg-orange-100 rounded-md flex items-center justify-center">
                <Calendar class="w-6 h-6 text-orange-600" />
              </div>
              <div class="ml-4">
                <p class="text-xs text-gray-500 font-light">RDV à venir</p>
                <p class="text-xl font-normal text-gray-900">{{ stats.upcomingPickups }}</p>
              </div>
              <div class="text-right">
                <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center">
                <Euro class="w-6 h-6 text-purple-600" />
              </div>
              <div class="ml-4">
                <p class="text-xs text-gray-500 font-light">Économies</p>
                <p class="text-xl font-normal text-gray-900">{{ stats.savings }}€</p>
              </div>
              <div class="text-right">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-6 pb-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <!-- Left Column -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Quick Actions -->
            <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
              <h2 class="text-lg font-medium text-gray-900 mb-6 flex items-center">
                <div class="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                  <Calculator class="w-4 h-4 text-blue-600" />
                </div>
                Actions Rapides
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <router-link
                  to="/pricing"
                  class="flex flex-col items-center p-4 border border-gray-200 rounded-md hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
                >
                  <Calculator class="w-8 h-8 text-blue-600 mb-3" />
                  <div>
                    <p class="font-normal text-gray-900 text-center mb-1 text-sm">Nouveau Devis</p>
                    <p class="text-xs text-gray-500 text-center font-light">Calculer un prix</p>
                  </div>
                </router-link>

                <router-link
                  to="/pickup"
                  class="flex flex-col items-center p-4 border border-gray-200 rounded-md hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
                >
                  <Home class="w-8 h-8 text-green-600 mb-3" />
                  <div>
                    <p class="font-normal text-gray-900 text-center mb-1 text-sm">Enlèvement</p>
                    <p class="text-xs text-gray-500 text-center font-light">Programmer un RDV</p>
                  </div>
                </router-link>

                <button
                  @click="showTrackingModal = true"
                  class="flex flex-col items-center p-4 border border-gray-200 rounded-md hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 group"
                >
                  <Search class="w-8 h-8 text-orange-600 mb-3" />
                  <div>
                    <p class="font-normal text-gray-900 text-center mb-1 text-sm">Suivi Rapide</p>
                    <p class="text-xs text-gray-500 text-center font-light">Localiser un colis</p>
                  </div>
                </button>
              </div>
            </div>

            <!-- Recent Shipments -->
            <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100 mt-6">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-lg font-medium text-gray-900 flex items-center">
                  <div class="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center mr-3">
                    <Package class="w-4 h-4 text-green-600" />
                  </div>
                  Envois Récents
                </h2>
                <button
                  @click="activeTab = 'history'"
                  class="text-blue-600 hover:text-blue-700 font-normal text-sm flex items-center hover:underline"
                >
                  Voir tout 
                  <ArrowRight class="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div class="space-y-3">
                <div 
                  v-for="shipment in recentShipments" 
                  :key="shipment.id"
                  class="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 mb-3"
                >
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                      <component :is="getTransportIcon(shipment.type)" class="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{{ shipment.trackingNumber }}</p>
                      <p class="text-gray-500 text-sm font-light">{{ shipment.destination }}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <span 
                      class="px-3 py-1 rounded-full text-xs font-normal"
                      :class="getStatusClass(shipment.status)"
                    >
                      {{ shipment.status }}
                    </span>
                    <p class="text-xs text-gray-500 mt-1 font-light">{{ formatDate(shipment.date) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-6 mt-0">
            <!-- Navigation Tabs -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 sticky top-24">
              <div class="border-b border-gray-200">
                <nav class="flex bg-gray-50 min-h-[80px]">
                  <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="activeTab = tab.id"
                    class="flex-1 py-3 px-2 text-center font-normal transition-all duration-200 relative group text-sm"
                    :class="activeTab === tab.id 
                      ? `bg-white text-${tab.color}-700 shadow-sm` 
                      : 'text-gray-500 hover:text-gray-700 hover:bg-white hover:bg-opacity-50'"
                  >
                    <div class="flex flex-col items-center justify-center h-full">
                      <div 
                        class="w-7 h-7 rounded-md flex items-center justify-center mb-1 transition-all duration-200"
                        :class="activeTab === tab.id 
                          ? `bg-${tab.color}-100` 
                          : 'bg-gray-200 group-hover:bg-gray-300'"
                      >
                        <component 
                          :is="tab.icon" 
                          class="w-3.5 h-3.5 transition-colors duration-200"
                          :class="activeTab === tab.id 
                            ? `text-${tab.color}-600` 
                            : 'text-gray-500 group-hover:text-gray-600'"
                        />
                      </div>
                      <span class="text-xs font-normal leading-tight">{{ tab.label }}</span>
                      <div 
                        v-if="activeTab === tab.id"
                        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 transition-all duration-200"
                        :class="`bg-${tab.color}-500`"
                      ></div>
                    </div>
                  </button>
                </nav>
              </div>

              <div class="p-4">
                <!-- History Tab -->
                <div v-if="activeTab === 'history'" class="space-y-3">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="font-medium text-gray-900 flex items-center">
                      <div class="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                        <History class="w-4 h-4 text-blue-600" />
                      </div>
                      Historique Complet
                    </h3>
                    <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full font-light">
                      {{ shipmentHistory.length }} expéditions
                    </span>
                  </div>
                  <div class="space-y-2">
                    <div 
                      v-for="item in shipmentHistory" 
                      :key="item.id"
                      class="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-blue-50 transition-all duration-200 border border-gray-200"
                    >
                      <div class="flex items-center">
                        <div class="w-8 h-8 bg-white rounded-md flex items-center justify-center mr-3 shadow-sm">
                          <Package class="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p class="font-normal text-gray-900 text-sm">{{ item.trackingNumber }}</p>
                          <p class="text-gray-600 flex items-center text-xs font-light">
                            <MapPin class="w-4 h-4 mr-1" />
                            {{ item.destination }}
                          </p>
                        </div>
                      </div>
                      <span 
                        class="px-3 py-1 rounded-full text-xs font-normal"
                        :class="getStatusClass(item.status)"
                      >
                        {{ item.status }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Pickups Tab -->
                <div v-if="activeTab === 'pickups'" class="space-y-3">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="font-medium text-gray-900 flex items-center">
                      <div class="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center mr-3">
                        <Calendar class="w-4 h-4 text-green-600" />
                      </div>
                      Rendez-vous d'Enlèvement
                    </h3>
                    <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full font-light">
                      {{ upcomingPickups.length }} RDV programmés
                    </span>
                  </div>
                  <div class="space-y-2">
                    <div 
                      v-for="pickup in upcomingPickups" 
                      :key="pickup.id"
                      class="p-3 bg-green-50 rounded-md hover:bg-green-100 transition-all duration-200 border border-green-200"
                    >
                      <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center">
                          <div class="w-6 h-6 bg-white rounded-md flex items-center justify-center mr-2">
                            <Calendar class="w-4 h-4 text-green-600" />
                          </div>
                          <span class="font-normal text-gray-900 text-sm">{{ pickup.date }}</span>
                        </div>
                        <span 
                          class="px-3 py-1 rounded-full text-xs font-normal"
                          :class="pickup.status === 'Confirmé' ? 'bg-green-200 text-green-800' : 'bg-orange-200 text-orange-800'"
                        >
                          {{ pickup.status }}
                        </span>
                      </div>
                      <div class="space-y-1">
                        <p class="text-gray-700 flex items-center text-sm font-light">
                          <Clock class="w-4 h-4 mr-2 text-green-600" />
                          {{ pickup.timeSlot }}
                        </p>
                        <p class="text-gray-600 flex items-center text-xs font-light">
                          <MapPin class="w-4 h-4 mr-2 text-green-600" />
                          {{ pickup.address }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Tracking Tab -->
                <div v-if="activeTab === 'tracking'" class="space-y-3">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="font-medium text-gray-900 flex items-center">
                      <div class="w-6 h-6 bg-orange-100 rounded-md flex items-center justify-center mr-3">
                        <MapPin class="w-4 h-4 text-orange-600" />
                      </div>
                      Suivi en Cours
                    </h3>
                    <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full font-light">
                      {{ activeTrackings.length }} colis actifs
                    </span>
                  </div>
                  <div class="space-y-2">
                    <div 
                      v-for="tracking in activeTrackings" 
                      :key="tracking.id"
                      class="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg hover:from-orange-100 hover:to-orange-200 transition-all duration-200 border border-orange-200 shadow-sm hover:shadow-md"
                    >
                      <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                          <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm">
                            <Package class="w-5 h-5 text-orange-600" />
                          </div>
                          <div>
                            <span class="font-medium text-gray-900 text-sm">{{ tracking.trackingNumber }}</span>
                            <div class="text-xs text-gray-500">{{ tracking.destination }}</div>
                          </div>
                        </div>
                        <button
                          @click="showTrackingDetails(tracking)"
                          class="bg-white text-orange-600 hover:text-orange-700 font-medium px-3 py-2 rounded-lg hover:bg-orange-50 transition-all duration-200 border border-orange-300 flex items-center text-sm shadow-sm hover:shadow-md"
                        >
                          <Eye class="w-4 h-4 mr-2" />
                          Détails
                        </button>
                      </div>
                      <div class="space-y-3">
                        <p class="text-gray-700 flex items-center text-sm font-light">
                          <MapPin class="w-4 h-4 mr-2 text-orange-600" />
                          {{ tracking.currentLocation }}
                        </p>
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <span class="text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full text-xs border border-green-200">
                              {{ tracking.status }}
                            </span>
                          </div>
                          <div class="text-xs text-gray-500">
                            <Clock class="w-3 h-3 inline mr-1" />
                            Mis à jour il y a {{ tracking.lastUpdate }}
                          </div>
                        </div>
                        <div class="bg-white bg-opacity-60 rounded-md p-2 mt-2">
                          <div class="flex items-center justify-between text-xs">
                            <span class="text-gray-600">Progression</span>
                            <span class="font-medium text-orange-600">{{ tracking.progress }}%</span>
                          </div>
                          <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                            <div 
                              class="bg-gradient-to-r from-orange-500 to-orange-600 h-1.5 rounded-full transition-all duration-500"
                              :style="{ width: tracking.progress + '%' }"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Support Card -->
            <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-md p-5 text-white mt-6">
              <h3 class="text-lg font-medium mb-3">Besoin d'Aide ?</h3>
              <p class="text-blue-100 mb-3 font-light text-sm">
                Notre équipe support est disponible pour vous accompagner
              </p>
              <div class="space-y-2">
                <a 
                  href="tel:+33123456789" 
                  class="flex items-center text-white hover:text-blue-100 transition-colors p-1.5 rounded-md hover:bg-white hover:bg-opacity-10 text-sm"
                >
                  <Phone class="w-4 h-4 mr-2" />
                  <span>+33 1 23 45 67 89</span>
                </a>
                <router-link 
                  to="/contact" 
                  class="flex items-center text-white hover:text-blue-100 transition-colors p-1.5 rounded-md hover:bg-white hover:bg-opacity-10 text-sm"
                >
                  <Mail class="w-4 h-4 mr-2" />
                  <span>Nous contacter</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Tracking Modal -->
    <div v-if="showTrackingModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm p-4">
      <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-medium text-gray-900">Suivi Rapide</h3>
          <button @click="showTrackingModal = false" class="text-gray-400 hover:text-gray-600 p-2 rounded-md hover:bg-gray-100 transition-colors">
            <X class="w-6 h-6" />
          </button>
        </div>
        <form @submit.prevent="quickTrack" class="space-y-4">
          <input
            v-model="quickTrackingNumber"
            type="text"
            placeholder="Numéro de suivi"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-md font-normal hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
          >
            Suivre
          </button>
        </form>
      </div>
    </div>

    <!-- Tracking Detail Modal -->
    <div v-if="showTrackingDetail && selectedTracking" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm p-4">
      <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <!-- Modal Header -->
        <div class="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-t-2xl">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                <Package class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-2xl font-bold">{{ selectedTracking.trackingNumber }}</h3>
                <p class="text-orange-100">Suivi détaillé de votre colis</p>
              </div>
            </div>
            <button @click="closeTrackingDetail" class="text-white hover:text-orange-200 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              <X class="w-6 h-6" />
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <!-- Status Overview -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <MapPin class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Position Actuelle</h4>
                  <p class="text-sm text-gray-600">{{ selectedTracking.currentLocation }}</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span class="text-sm font-medium text-green-700">{{ selectedTracking.status }}</span>
              </div>
            </div>

            <div class="bg-green-50 rounded-xl p-6 border border-green-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <MapPin class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Destination</h4>
                  <p class="text-sm text-gray-600">{{ selectedTracking.destination }}</p>
                </div>
              </div>
              <div class="text-sm text-gray-500">
                Livraison prévue dans 2-3 jours
              </div>
            </div>

            <div class="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <Clock class="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Dernière Mise à Jour</h4>
                  <p class="text-sm text-gray-600">Il y a {{ selectedTracking.lastUpdate }}</p>
                </div>
              </div>
              <div class="text-sm text-gray-500">
                Suivi automatique actif
              </div>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="mb-8">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-gray-900">Progression du Transport</h4>
              <span class="text-lg font-bold text-orange-600">{{ selectedTracking.progress }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div 
                class="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-1000 relative"
                :style="{ width: selectedTracking.progress + '%' }"
              >
                <div class="absolute right-0 top-0 w-3 h-3 bg-white rounded-full shadow-md transform translate-x-1/2"></div>
              </div>
            </div>
            <div class="flex justify-between text-xs text-gray-500 mt-2">
              <span>Expédié</span>
              <span>En transit</span>
              <span>En livraison</span>
              <span>Livré</span>
            </div>
          </div>

          <!-- Detailed Timeline -->
          <div class="mb-8">
            <h4 class="font-semibold text-gray-900 mb-6">Historique Détaillé</h4>
            <div class="space-y-4">
              <div 
                v-for="(event, index) in trackingTimeline" 
                :key="index"
                class="flex items-start"
              >
                <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                     :class="event.completed ? 'bg-green-100' : 'bg-gray-100'">
                  <component :is="event.icon" 
                           class="w-5 h-5"
                           :class="event.completed ? 'text-green-600' : 'text-gray-400'" />
                </div>
                <div class="flex-1">
                  <div class="bg-white border rounded-lg p-4 shadow-sm"
                       :class="event.completed ? 'border-green-200' : 'border-gray-200'">
                    <div class="flex items-center justify-between mb-2">
                      <h5 class="font-medium text-gray-900">{{ event.title }}</h5>
                      <span class="text-sm text-gray-500">{{ event.time }}</span>
                    </div>
                    <p class="text-sm text-gray-600 mb-2">{{ event.description }}</p>
                    <div class="flex items-center text-xs text-gray-500">
                      <MapPin class="w-3 h-3 mr-1" />
                      <span>{{ event.location }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Package Details -->
          <div class="bg-gray-50 rounded-xl p-6">
            <h4 class="font-semibold text-gray-900 mb-4">Détails du Colis</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Poids:</span>
                  <span class="font-medium">2.5 kg</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Dimensions:</span>
                  <span class="font-medium">30x20x15 cm</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Service:</span>
                  <span class="font-medium">Express</span>
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Expéditeur:</span>
                  <span class="font-medium">Paris, France</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Destinataire:</span>
                  <span class="font-medium">{{ selectedTracking.destination }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Assurance:</span>
                  <span class="font-medium text-green-600">✓ Incluse</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="bg-gray-50 px-6 py-4 rounded-b-2xl flex flex-col sm:flex-row gap-3 justify-end">
          <button
            @click="refreshTrackingDetail"
            class="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <RefreshCw class="w-4 h-4 mr-2" />
            Actualiser
          </button>
          <router-link
            to="/contact"
            class="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
          >
            Signaler un Problème
          </router-link>
          <button
            @click="closeTrackingDetail"
            class="text-gray-500 hover:text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMainStore } from '../stores/main'
import { 
  Package, 
  Calendar, 
  LogOut, 
  Plane, 
  Truck, 
  Ship, 
  X,
  History,
  MapPin
} from 'lucide-vue-next'

const router = useRouter()
const store = useMainStore()

const activeTab = ref('history')
const showTrackingModal = ref(false)
const quickTrackingNumber = ref('')
const showTrackingDetail = ref(false)
const selectedTracking = ref<any>(null)

const tabs = [
  { id: 'history', label: 'Historique', icon: History, color: 'blue' },
  { id: 'pickups', label: 'Rendez-vous', icon: Calendar, color: 'green' },
  { id: 'tracking', label: 'Suivi Actif', icon: MapPin, color: 'orange' }
]

const stats = reactive({
  activeShipments: 8,
  deliveredThisMonth: 24,
  upcomingPickups: 3,
  savings: 1250
})

interface Shipment {
  id: number
  trackingNumber: string
  destination: string
  status: string
  type: string
  date: string
}

const recentShipments = ref<Shipment[]>([
  {
    id: 1,
    trackingNumber: 'TP123456789FR',
    destination: 'Madrid, Espagne',
    status: 'En transit',
    type: 'ground',
    date: '2025-01-12'
  },
  {
    id: 2,
    trackingNumber: 'TP987654321FR',
    destination: 'Londres, UK',
    status: 'Livré',
    type: 'air',
    date: '2025-01-10'
  },
  {
    id: 3,
    trackingNumber: 'TP456789123FR',
    destination: 'New York, USA',
    status: 'En préparation',
    type: 'sea',
    date: '2025-01-11'
  }
])

interface HistoryItem {
  id: number
  trackingNumber: string
  destination: string
  status: string
}

const shipmentHistory = ref<HistoryItem[]>([
  { id: 1, trackingNumber: 'TP123456789FR', destination: 'Madrid, Espagne', status: 'En transit' },
  { id: 2, trackingNumber: 'TP987654321FR', destination: 'Londres, UK', status: 'Livré' },
  { id: 3, trackingNumber: 'TP456789123FR', destination: 'New York, USA', status: 'En préparation' },
  { id: 4, trackingNumber: 'TP789123456FR', destination: 'Berlin, Allemagne', status: 'Livré' },
  { id: 5, trackingNumber: 'TP321654987FR', destination: 'Rome, Italie', status: 'Livré' }
])

interface Pickup {
  id: number
  date: string
  timeSlot: string
  address: string
  status: string
}

const upcomingPickups = ref<Pickup[]>([
  {
    id: 1,
    date: '15 Janvier 2025',
    timeSlot: 'Matin (9h-12h)',
    address: '123 Rue de la République, Paris',
    status: 'Confirmé'
  },
  {
    id: 2,
    date: '18 Janvier 2025',
    timeSlot: 'Après-midi (14h-17h)',
    address: '456 Avenue des Champs, Lyon',
    status: 'En attente'
  },
  {
    id: 3,
    date: '22 Janvier 2025',
    timeSlot: 'Matin (8h-11h)',
    address: '789 Boulevard Saint-Michel, Marseille',
    status: 'Confirmé'
  }
])

interface ActiveTracking {
  id: number
  trackingNumber: string
  destination: string
  currentLocation: string
  status: string
  lastUpdate: string
  progress: number
}

const activeTrackings = ref<ActiveTracking[]>([
  {
    id: 1,
    trackingNumber: 'TP123456789FR',
    destination: 'Madrid, Espagne',
    currentLocation: 'Centre de tri Paris',
    status: 'En transit',
    lastUpdate: '2h',
    progress: 65
  },
  {
    id: 2,
    trackingNumber: 'TP456789123FR',
    destination: 'New York, USA',
    currentLocation: 'Port du Havre',
    status: 'En préparation',
    lastUpdate: '30min',
    progress: 25
  }
])

interface TimelineItem {
  title: string
  description: string
  location: string
  time: string
  icon: any
  completed: boolean
}

const trackingTimeline = ref<TimelineItem[]>([
  {
    title: 'Colis expédié',
    description: 'Votre colis a été pris en charge par notre équipe',
    location: 'Entrepôt Paris',
    time: '12 Jan, 09:30',
    icon: Package,
    completed: true
  },
  {
    title: 'En transit',
    description: 'Colis en cours de transport vers la destination',
    location: 'Centre de tri Paris',
    time: '12 Jan, 14:20',
    icon: Truck,
    completed: true
  },
  {
    title: 'Arrivé au centre de distribution',
    description: 'Colis arrivé au centre de distribution local',
    location: 'Centre Madrid',
    time: '13 Jan, 08:15',
    icon: MapPin,
    completed: false
  },
  {
    title: 'En cours de livraison',
    description: 'Colis en cours de livraison finale',
    location: 'Madrid, Espagne',
    time: 'Prévu 13 Jan, 16:00',
    icon: Truck,
    completed: false
  }
])

const getTransportIcon = (type: string) => {
  switch (type) {
    case 'air': return Plane
    case 'ground': return Truck
    case 'sea': return Ship
    default: return Package
  }
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Livré':
      return 'bg-green-100 text-green-800'
    case 'En transit':
      return 'bg-blue-100 text-blue-800'
    case 'En préparation':
      return 'bg-orange-100 text-orange-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short'
  })
}

const handleLogout = async () => {
  await store.logout()
  router.push('/login')
}

const quickTrack = () => {
  showTrackingModal.value = false
  router.push(`/tracking?number=${quickTrackingNumber.value}`)
  quickTrackingNumber.value = ''
}



const showTrackingDetails = (tracking: any) => {
  selectedTracking.value = tracking
  showTrackingDetail.value = true
}

const closeTrackingDetail = () => {
  showTrackingDetail.value = false
  selectedTracking.value = null
}

const refreshTrackingDetail = () => {
  // Simulation de rafraîchissement
  console.log('Actualisation du suivi...')
}

onMounted(() => {
  // Vérifier si l'utilisateur est connecté
  if (!store.user) {
    router.push('/login')
  }
})
</script>