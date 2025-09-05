<template>
  <div class="min-h-screen bg-gray-50 pt-2 font-light">
   
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div class="container mx-auto px-4">
        
      </div>
    </section>
    <!-- Header Manager Dashboard -->
    <div class="bg-white shadow-sm border-b border-gray-200 mb-8">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div>
            <div class="flex items-center space-x-4">
             
              <div>
                <h1 class="text-2xl font-medium text-gray-900">Tableau de Bord Gestionnaire</h1>
                <p class="text-gray-600 font-light">Bienvenue, {{ store.user?.name }}</p>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-6">
            <div class="text-right  md:block">
              <p class="text-sm font-normal text-gray-700">{{ store.user?.company }}</p>
              <p class="text-xs text-gray-500 font-light">{{ store.user?.email }}</p>
            </div>
            <button
              @click="handleLogout"
              class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-200 flex items-center shadow-sm hover:shadow-md font-normal text-sm"
            >
              <LogOut class="w-4 h-4 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Global Stats -->
    <section class="py-6">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center">
                <Users class="w-6 h-6 text-blue-600" />
              </div>
              <div class="ml-4">
                <p class="text-xs text-gray-500 font-light">Clients actifs</p>
                <p class="text-xl font-normal text-gray-900">{{ globalStats.activeClients }}</p>
              </div>
              <div class="text-right">
                <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center">
                <Package class="w-6 h-6 text-green-600" />
              </div>
              <div class="ml-4">
                <p class="text-xs text-gray-500 font-light">Envois ce mois</p>
                <p class="text-xl font-normal text-gray-900">{{ globalStats.totalShipments }}</p>
              </div>
              <div class="text-right">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 bg-orange-100 rounded-md flex items-center justify-center">
                <TrendingUp class="w-6 h-6 text-orange-600" />
              </div>
              <div class="ml-4">
                <p class="text-xs text-gray-500 font-light">Chiffre d'affaires</p>
                <p class="text-xl font-normal text-gray-900">{{ globalStats.revenue }}€</p>
              </div>
              <div class="text-right">
                <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center">
                <AlertTriangle class="w-6 h-6 text-purple-600" />
              </div>
              <div class="ml-4">
                <p class="text-xs text-gray-500 font-light">Alertes</p>
                <p class="text-xl font-normal text-gray-900">{{ globalStats.alerts }}</p>
              </div>
              <div class="text-right">
                <div class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
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
            <!-- Recent Activity -->
            <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-lg font-medium text-gray-900 flex items-center">
                  <div class="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                    <Activity class="w-4 h-4 text-blue-600" />
                  </div>
                  Activité Récente
                </h2>
                <button class="text-blue-600 hover:text-blue-700 font-normal text-sm flex items-center hover:underline">
                  Voir tout 
                  <ArrowRight class="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div class="space-y-3">
                <div 
                  v-for="activity in recentActivity" 
                  :key="activity.id"
                  class="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                >
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                      <component :is="getActivityIcon(activity.type)" class="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{{ activity.description }}</p>
                      <p class="text-gray-500 text-sm font-light">{{ activity.client }} - {{ activity.trackingNumber }}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <span 
                      class="px-3 py-1 rounded-full text-xs font-normal"
                      :class="getStatusClass(activity.status)"
                    >
                      {{ activity.status }}
                    </span>
                    <p class="text-xs text-gray-500 mt-1 font-light">{{ formatDate(activity.date) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Client Management -->
            <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-lg font-medium text-gray-900 flex items-center">
                  <div class="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center mr-3">
                    <Package class="w-4 h-4 text-green-600" />
                  </div>
                  Gestion des Expéditions
                </h2>
                <button 
                  @click="openNewShipmentFlow"
                  class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-normal"
                >
                  <Plus class="w-4 h-4 mr-2 inline" />
                  Nouvelle Expédition
                </button>
              </div>
              
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-gray-200">
                      <th class="text-left py-3 px-4 font-medium text-gray-700">Numéro de Suivi</th>
                      <th class="text-left py-3 px-4 font-medium text-gray-700">Destination</th>
                      <th class="text-left py-3 px-4 font-medium text-gray-700">Statut</th>
                      <th class="text-left py-3 px-4 font-medium text-gray-700">Progression</th>
                      <th class="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr 
                      v-for="shipment in shipmentsList" 
                      :key="shipment.id"
                      class="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td class="py-3 px-4">
                        <div>
                          <p class="font-medium text-gray-900">{{ shipment.trackingNumber }}</p>
                          <p class="text-sm text-gray-500">{{ shipment.client }}</p>
                        </div>
                      </td>
                      <td class="py-3 px-4 text-gray-700">{{ shipment.destination }}</td>
                      <td class="py-3 px-4">
                        <span 
                          class="px-2 py-1 rounded-full text-xs font-normal"
                          :class="getStatusClass(shipment.status)"
                        >
                          {{ shipment.status }}
                        </span>
                      </td>
                      <td class="py-3 px-4">
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            class="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            :style="{ width: shipment.progress + '%' }"
                          ></div>
                        </div>
                        <span class="text-xs text-gray-500 mt-1">{{ shipment.progress }}%</span>
                      </td>
                      <td class="py-3 px-4">
                        <button 
                          @click="openTrackingControl(shipment)"
                          class="text-blue-600 hover:text-blue-700 text-sm mr-3"
                        >
                          Piloter
                        </button>
                        <button 
                          @click="sendNotification()"
                          class="text-green-600 hover:text-green-700 text-sm"
                        >
                          Notifier
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-6">
            <!-- Quick Actions -->
            <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Actions Rapides</h3>
              <div class="space-y-3">
                <button class="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-md transition-colors">
                  <FileText class="w-5 h-5 text-blue-600 mr-3" />
                  <span class="text-gray-700">Générer Rapport</span>
                </button>
                <button class="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-md transition-colors">
                  <Mail class="w-5 h-5 text-green-600 mr-3" />
                  <span class="text-gray-700">Envoyer Newsletter</span>
                </button>
                <button class="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-md transition-colors">
                  <Settings class="w-5 h-5 text-orange-600 mr-3" />
                  <span class="text-gray-700">Paramètres Système</span>
                </button>
                <button class="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-md transition-colors">
                  <BarChart3 class="w-5 h-5 text-purple-600 mr-3" />
                  <span class="text-gray-700">Analyses Avancées</span>
                </button>
              </div>
            </div>

            <!-- Alerts -->
            <div class="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <AlertTriangle class="w-5 h-5 text-orange-600 mr-2" />
                Alertes Système
              </h3>
              <div class="space-y-3">
                <div 
                  v-for="alert in systemAlerts" 
                  :key="alert.id"
                  class="bg-white rounded-md p-3 border border-orange-200"
                >
                  <div class="flex items-start">
                    <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">{{ alert.title }}</p>
                      <p class="text-xs text-gray-600 mt-1">{{ alert.description }}</p>
                      <p class="text-xs text-orange-600 mt-1">{{ formatDate(alert.date) }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Performance Chart -->
            <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Performance Mensuelle</h3>
              <div class="space-y-4">
                <div v-for="month in performanceData" :key="month.name" class="flex items-center">
                  <span class="text-sm text-gray-600 w-12">{{ month.name }}</span>
                  <div class="flex-1 mx-3">
                    <div class="bg-gray-200 rounded-full h-2">
                      <div 
                        class="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        :style="{ width: month.percentage + '%' }"
                      ></div>
                    </div>
                  </div>
                  <span class="text-sm font-medium text-gray-900">{{ month.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tracking Control Modal -->
    <div v-if="showTrackingControl" class="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm overflow-y-auto">
      <div class="min-h-screen flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[95vh] overflow-hidden flex flex-col">
        <!-- Modal Header -->
        <div class="bg-blue-600 text-white p-6 rounded-t-2xl">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                <Settings class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-2xl font-bold">Pilotage du Suivi</h3>
                <p class="text-blue-100">{{ selectedShipment?.trackingNumber }}</p>
              </div>
            </div>
            <button @click="closeTrackingControl" class="text-white hover:text-blue-200 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              <X class="w-6 h-6" />
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="flex-1 overflow-y-auto">
          <div class="p-6 space-y-8">
          <!-- Current Status -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <MapPin class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Position Actuelle</h4>
                  <p class="text-sm text-gray-600">{{ selectedShipment?.currentLocation }}</p>
                </div>
              </div>
            </div>

            <div class="bg-green-50 rounded-xl p-6 border border-green-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Package class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Statut</h4>
                  <p class="text-sm text-gray-600">{{ selectedShipment?.status }}</p>
                </div>
              </div>
            </div>

            <div class="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <Clock class="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Progression</h4>
                  <p class="text-sm text-gray-600">{{ selectedShipment?.progress }}%</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Status Control -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Contrôle du Statut</h4>
            <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
              <button
                v-for="step in trackingSteps"
                :key="step.id"
                @click="updateTrackingStatus(step.id)"
                class="p-4 border-2 rounded-lg text-center transition-all duration-200 hover:shadow-md"
                :class="selectedShipment?.status === step.label 
                  ? 'border-blue-500 bg-blue-50 text-blue-700' 
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'"
              >
                <div class="font-medium text-sm mb-1">{{ step.label }}</div>
                <div class="text-xs text-gray-500">{{ step.description }}</div>
              </button>
            </div>
          </div>

          <!-- Notifications -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Notifications Client</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                @click="openNotificationModal('pickup_ready')"
                class="flex items-center p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
              >
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Bell class="w-5 h-5 text-green-600" />
                </div>
                <div class="text-left">
                  <div class="font-medium text-gray-900">Colis Disponible</div>
                  <div class="text-sm text-gray-500">Notifier la disponibilité</div>
                </div>
              </button>

              <button
                @click="openNotificationModal('status_update')"
                class="flex items-center p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Send class="w-5 h-5 text-blue-600" />
                </div>
                <div class="text-left">
                  <div class="font-medium text-gray-900">Mise à Jour</div>
                  <div class="text-sm text-gray-500">Informer du statut</div>
                </div>
              </button>

              <button
                @click="openNotificationModal('delivery_attempt')"
                class="flex items-center p-4 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors"
              >
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <Truck class="w-5 h-5 text-orange-600" />
                </div>
                <div class="text-left">
                  <div class="font-medium text-gray-900">Échec Livraison</div>
                  <div class="text-sm text-gray-500">Tentative échouée</div>
                </div>
              </button>
            </div>
          </div>

          <!-- Client Info -->
          <div class="bg-gray-50 rounded-xl p-6">
            <h4 class="font-semibold text-gray-900 mb-4">Informations Client</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Client:</span>
                  <span class="font-medium">{{ selectedShipment?.client }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Destination:</span>
                  <span class="font-medium">{{ selectedShipment?.destination }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Statut:</span>
                  <span class="font-medium">{{ selectedShipment?.status }}</span>
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Téléphone:</span>
                  <span class="font-medium">{{ selectedShipment?.phone }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Email:</span>
                  <span class="font-medium">{{ selectedShipment?.email }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Progression:</span>
                  <span class="font-medium">{{ selectedShipment?.progress }}%</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="bg-gray-50 px-6 py-4 rounded-b-2xl flex justify-end flex-shrink-0 border-t border-gray-200">
          <button
            @click="closeTrackingControl"
            class="text-gray-500 hover:text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
      </div>
    </div>

    <!-- Notification Modal -->
    <div v-if="showNotificationModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm overflow-y-auto">
      <div class="min-h-screen flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
        <!-- Modal Header -->
        <div class="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                <Send class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-2xl font-bold">{{ notificationTemplates[notificationForm.type].title }}</h3>
                <p class="text-green-100">{{ selectedShipment?.trackingNumber }}</p>
              </div>
            </div>
            <button @click="closeNotificationModal" class="text-white hover:text-green-200 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              <X class="w-6 h-6" />
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6 flex-1 overflow-y-auto">
          <form @submit.prevent="sendNotification" class="space-y-6">
            <!-- Contact Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  v-model="notificationForm.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  v-model="notificationForm.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                >
              </div>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                v-model="notificationForm.message"
                rows="6"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Actions -->
            <div class="flex justify-end space-x-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                @click="closeNotificationModal"
                class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Send class="w-4 h-4 mr-2" />
                Envoyer la Notification
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
    <!-- New Shipment Flow Modal -->
    <div v-if="showNewShipmentFlow" class="fixed inset-0 bg-black bg-opacity-60 z-50 backdrop-blur-sm overflow-y-auto">
      <div class="min-h-screen flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[95vh] overflow-hidden flex flex-col">
          <!-- Modal Header -->
          <div class="bg-blue-600 text-white p-6 rounded-t-2xl">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                 <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <Plus class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold">Créer une Nouvelle Expédition</h3>
                  <p class="text-blue-200">Étape {{ currentStep }} sur {{ totalSteps }}</p>
                </div>
              </div>
              <button @click="closeNewShipmentFlow" class="text-white hover:text-blue-200 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
                <X class="w-6 h-6" />
              </button>
            </div>
            <!-- Progress Bar -->
            <div class="mt-4">
              <div class="bg-blue-500 h-1 rounded-full">
                <div class="bg-white h-1 rounded-full transition-all duration-300" :style="{ width: (currentStep / totalSteps) * 100 + '%' }"></div>
              </div>
            </div>
          </div>

          <!-- Modal Content -->
          <div class="p-8 flex-1 overflow-y-auto">
            <form @submit.prevent="nextStep">
              <!-- Step 1: Client Info -->
              <div v-if="currentStep === 1" class="space-y-6">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Informations Client</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input v-model="newShipmentForm.clientName" placeholder="Nom complet du client" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  <input v-model="newShipmentForm.clientCompany" placeholder="Société (optionnel)" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  <input v-model="newShipmentForm.clientEmail" type="email" placeholder="Email du client" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  <input v-model="newShipmentForm.clientPhone" type="tel" placeholder="Téléphone du client" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <!-- Step 2: Shipment Details -->
              <div v-if="currentStep === 2" class="space-y-6">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Détails de l'Expédition</h4>
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input v-model="newShipmentForm.origin" placeholder="Origine" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  <input v-model="newShipmentForm.destination" placeholder="Destination" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  <input v-model.number="newShipmentForm.weight" type="number" placeholder="Poids (kg)" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  <input v-model="newShipmentForm.packageType" placeholder="Type de colis (ex: Carton, Palette)" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Dimensions (cm)</label>
                  <div class="grid grid-cols-3 gap-4">
                    <input v-model.number="newShipmentForm.dimensions.length" type="number" placeholder="Longueur" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    <input v-model.number="newShipmentForm.dimensions.width" type="number" placeholder="Largeur" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    <input v-model.number="newShipmentForm.dimensions.height" type="number" placeholder="Hauteur" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>

              <!-- Step 3: Transport & Priority -->
              <div v-if="currentStep === 3" class="space-y-6">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Transport et Priorité</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Type de Transport</label>
                    <select v-model="newShipmentForm.transportType" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="ground">Routier</option>
                      <option value="air">Aérien</option>
                      <option value="sea">Maritime</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Priorité</label>
                    <select v-model="newShipmentForm.priority" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="standard">Standard</option>
                      <option value="express">Express</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Step 4: Addresses -->
              <div v-if="currentStep === 4" class="space-y-6">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Adresses</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <textarea v-model="newShipmentForm.pickupAddress" placeholder="Adresse d'enlèvement" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
                  <textarea v-model="newShipmentForm.deliveryAddress" placeholder="Adresse de livraison" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
              </div>

              <!-- Step 5: Review & Confirm -->
              <div v-if="currentStep === 5" class="space-y-4">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">Récapitulatif</h4>
                <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div><strong>Client:</strong> {{ newShipmentForm.clientName }}</div>
                    <div><strong>Société:</strong> {{ newShipmentForm.clientCompany || 'N/A' }}</div>
                    <div><strong>Origine:</strong> {{ newShipmentForm.origin }}</div>
                    <div><strong>Destination:</strong> {{ newShipmentForm.destination }}</div>
                    <div><strong>Poids:</strong> {{ newShipmentForm.weight }} kg</div>
                    <div><strong>Dimensions:</strong> {{ newShipmentForm.dimensions.length }}x{{ newShipmentForm.dimensions.width }}x{{ newShipmentForm.dimensions.height }} cm</div>
                    <div><strong>Transport:</strong> {{ newShipmentForm.transportType }}</div>
                    <div><strong>Priorité:</strong> {{ newShipmentForm.priority }}</div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <!-- Modal Footer -->
          <div class="bg-gray-50 px-8 py-4 rounded-b-2xl flex justify-between items-center flex-shrink-0 border-t border-gray-200">
            <button
              v-if="currentStep > 1"
              @click="prevStep"
              class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Précédent
            </button>
            <div v-else></div> <!-- Placeholder to keep alignment -->

            <button
              v-if="currentStep < totalSteps"
              @click="nextStep"
              class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Suivant
            </button>
            <button
              v-if="currentStep === totalSteps"
              @click="createShipment"
              class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Créer l'Expédition
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from '../stores/main';
import { 
  Users, 
  Package, 
  Plus, 
  AlertTriangle,
  LogOut,
  Truck,
  Plane,
  MapPin,
  Clock,
  X,
  Send,
  Bell
} from 'lucide-vue-next';

// --- TYPE DEFINITIONS ---
interface Shipment {
  id: number;
  trackingNumber: string;
  client: string;
  destination: string;
  status: string;
  progress: number;
  currentLocation: string;
  phone: string;
  email: string;
}

interface RecentActivity {
  id: number;
  type: 'shipment' | 'delivery' | 'pickup' | 'issue';
  description: string;
  client: string;
  trackingNumber: string;
  status: string;
  date: string;
}

interface SystemAlert {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface PerformanceData {
  name: string;
  value: string;
  percentage: number;
}

interface TrackingStep {
  id: string;
  label: string;
  description: string;
}

type NotificationType = 'pickup_ready' | 'status_update' | 'delivery_attempt';

interface NotificationForm {
  type: NotificationType;
  message: string;
  phone: string;
  email: string;
}

const router = useRouter();
const store = useMainStore();

const globalStats = reactive({
  activeClients: 156,
  totalShipments: 342,
  revenue: 45890,
  alerts: 7
});

const recentActivity = ref<RecentActivity[]>([
  {
    id: 1,
    type: 'shipment',
    description: 'Nouveau colis pour Tech Solutions',
    client: 'Sophie Martin',
    trackingNumber: 'TP123456789FR',
    status: 'Planifié',
    date: '2025-01-15'
  },
  {
    id: 2,
    type: 'delivery',
    description: 'Colis livré à Import Export Global',
    client: 'Jean-Luc Durand',
    trackingNumber: 'TP987654321FR',
    status: 'Livré',
    date: '2025-01-14'
  },
  {
    id: 3,
    type: 'issue',
    description: 'Retard signalé pour Artisanat Français',
    client: 'Marie Dubois',
    trackingNumber: 'TP555555555FR',
    status: 'En attente',
    date: '2025-01-14'
  }
]);

const systemAlerts = ref<SystemAlert[]>([
  {
    id: 1,
    title: 'Retard de livraison',
    description: '3 colis en retard sur la ligne Paris-Madrid',
    date: '2025-01-12'
  },
  {
    id: 2,
    title: 'Maintenance serveur',
    description: 'Maintenance programmée ce soir 22h-2h',
    date: '2025-01-12'
  },
  {
    id: 3,
    title: 'Nouveau client',
    description: 'Validation requise pour Logistics Pro',
    date: '2025-01-11'
  }
]);

const performanceData = ref<PerformanceData[]>([
  { name: 'Jan', value: '2.1K', percentage: 85 },
  { name: 'Fév', value: '2.8K', percentage: 95 },
  { name: 'Mar', value: '2.4K', percentage: 78 },
  { name: 'Avr', value: '3.2K', percentage: 100 },
  { name: 'Mai', value: '2.9K', percentage: 88 }
]);

const showTrackingControl = ref(false);
const selectedShipment = ref<Shipment | null>(null);
const showNotificationModal = ref(false);
const showNewShipmentFlow = ref(false);
const currentStep = ref(1);
const totalSteps = 5;

const notificationForm = reactive<NotificationForm>({
  type: 'pickup_ready',
  message: '',
  phone: '',
  email: ''
});

const newShipmentForm = reactive({
  clientName: '',
  clientCompany: '',
  clientEmail: '',
  clientPhone: '',
  origin: '',
  destination: '',
  weight: null,
  dimensions: {
    length: null,
    width: null,
    height: null
  },
  transportType: 'ground',
  priority: 'standard',
  packageType: '',
  description: '',
  value: null,
  insurance: true,
  pickupAddress: '',
  deliveryAddress: '',
  pickupDate: '',
  deliveryDate: ''
});

const shipmentsList = ref<Shipment[]>([
  {
    id: 1,
    trackingNumber: 'TP123456789FR',
    client: 'Tech Solutions SARL',
    destination: 'Lyon, France',
    status: 'En transit',
    progress: 60,
    currentLocation: 'Centre de tri, Paris',
    phone: '+33 6 12 34 56 78',
    email: 'sophie.martin@tech.com'
  },
  {
    id: 2,
    trackingNumber: 'TP987654321FR',
    client: 'Import Export Global',
    destination: 'Marseille, France',
    status: 'Livré',
    progress: 100,
    currentLocation: 'Marseille, France',
    phone: '+33 7 89 01 23 45',
    email: 'jl.durand@import.com'
  },
  {
    id: 3,
    trackingNumber: 'TP555555555FR',
    client: 'Artisanat Français',
    destination: 'Bordeaux, France',
    status: 'En attente',
    progress: 15,
    currentLocation: 'Entrepôt, Paris',
    phone: '+33 6 54 32 10 98',
    email: 'marie.d@artisanat.fr'
  }
]);

const trackingSteps = ref<TrackingStep[]>([
  { id: 'preparation', label: 'En préparation', description: 'Colis en cours de préparation' },
  { id: 'transit', label: 'En transit', description: 'Colis en cours de transport' },
  { id: 'arrived', label: 'Arrivé au centre', description: 'Colis arrivé au centre de distribution' },
  { id: 'ready', label: 'Prêt pour retrait', description: 'Colis disponible pour le retrait' },
  { id: 'delivered', label: 'Livré', description: 'Colis remis au destinataire' }
]);

const notificationTemplates = {
  pickup_ready: {
    title: 'Colis disponible pour collecte',
    defaultMessage: 'Bonjour, votre colis {trackingNumber} est arrivé à notre centre de distribution et est disponible pour collecte. Vous pouvez venir le récupérer aux heures d\'ouverture : Lun-Ven 8h-18h, Sam 9h-12h. Merci de vous munir d\'une pièce d\'identité.'
  },
  status_update: {
    title: 'Mise à jour du statut',
    defaultMessage: 'Votre colis {trackingNumber} a été mis à jour. Nouveau statut : {status}. Vous pouvez suivre l\'évolution sur notre site web.'
  },
  delivery_attempt: {
    title: 'Tentative de livraison',
    defaultMessage: 'Nous avons tenté de livrer votre colis {trackingNumber} mais personne n\'était présent. Le colis est maintenant disponible dans notre centre de collecte.'
  }
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'shipment': return Package
    case 'delivery': return Truck
    case 'pickup': return Plane
    case 'issue': return AlertTriangle
    default: return Package
  }
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Livré':
      return 'bg-green-100 text-green-800'
    case 'En cours':
      return 'bg-blue-100 text-blue-800'
    case 'Planifié':
      return 'bg-orange-100 text-orange-800'
    case 'En attente':
      return 'bg-red-100 text-red-800'
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

const handleLogout = () => {
  store.logout();
  router.push('/login');
};



const openNewShipmentFlow = () => {
  console.log('Opening new shipment flow...')
  showNewShipmentFlow.value = true
  currentStep.value = 1
}

const closeNewShipmentFlow = () => {
  console.log('Closing new shipment flow...')
  showNewShipmentFlow.value = false
  currentStep.value = 1
  // Reset form
  Object.assign(newShipmentForm, {
    clientName: '',
    clientCompany: '',
    clientEmail: '',
    clientPhone: '',
    origin: '',
    destination: '',
    weight: null,
    dimensions: { length: null, width: null, height: null },
    transportType: 'ground',
    priority: 'standard',
    packageType: '',
    description: '',
    value: null,
    insurance: true,
    pickupAddress: '',
    deliveryAddress: '',
    pickupDate: '',
    deliveryDate: ''
  })
}
const createShipment = async () => {
  // Validation basique
  if (!newShipmentForm.clientName || !newShipmentForm.clientEmail || !newShipmentForm.clientPhone ||
      !newShipmentForm.origin || !newShipmentForm.destination || !newShipmentForm.weight ||
      !newShipmentForm.packageType || !newShipmentForm.pickupAddress || !newShipmentForm.deliveryAddress) {
    alert('Veuillez remplir tous les champs obligatoires')
    return
  }

  // Générer un numéro de suivi
  const trackingNumber = 'TP' + Math.random().toString().substr(2, 9) + 'FR'
  
  // Créer la nouvelle expédition
  const newShipment = {
    id: shipmentsList.value.length + 1,
    trackingNumber,
    client: newShipmentForm.clientCompany || newShipmentForm.clientName,
    destination: newShipmentForm.destination,
    status: 'En préparation',
    progress: 10,
    currentLocation: 'Entrepôt ' + newShipmentForm.origin.split(',')[0],
    phone: newShipmentForm.clientPhone,
    email: newShipmentForm.clientEmail
  }

  // Ajouter à la liste
  shipmentsList.value.unshift(newShipment)

  // Mettre à jour les statistiques
  globalStats.totalShipments++

  // Ajouter à l'activité récente
  recentActivity.value.unshift({
    id: recentActivity.value.length + 1,
    type: 'shipment',
    description: 'Nouvelle expédition créée',
    client: newShipment.client,
    trackingNumber: newShipment.trackingNumber,
    status: 'En préparation',
    date: new Date().toISOString().split('T')[0]
  })

  // Fermer la modal
  closeNewShipmentFlow()

  // Notification de succès
  alert(`Expédition créée avec succès !
Numéro de suivi: ${trackingNumber}
Client: ${newShipment.client}
Destination: ${newShipment.destination}`)
}

const nextStep = () => {
  if (validateCurrentStep()) {
    if (currentStep.value < totalSteps) {
      currentStep.value++
    }
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const validateCurrentStep = () => {
  switch (currentStep.value) {
    case 1:
      return newShipmentForm.clientName && newShipmentForm.clientEmail && newShipmentForm.clientPhone
    case 2:
      return newShipmentForm.origin && newShipmentForm.destination && newShipmentForm.weight && 
             newShipmentForm.dimensions.length && newShipmentForm.dimensions.width && 
             newShipmentForm.dimensions.height && newShipmentForm.packageType
    case 3:
      return newShipmentForm.transportType && newShipmentForm.priority
    case 4:
      return newShipmentForm.pickupAddress && newShipmentForm.deliveryAddress
    case 5:
      return true
    default:
      return false
  }
}

const openTrackingControl = (shipment: Shipment) => {
  selectedShipment.value = shipment
  showTrackingControl.value = true
}

const closeTrackingControl = () => {
  showTrackingControl.value = false
  selectedShipment.value = null
}

const updateTrackingStatus = (statusId: string) => {
  const shipment = selectedShipment.value;
  if (!shipment) return;

  const step = trackingSteps.value.find(s => s.id === statusId);
  if (step) {
    shipment.status = step.label;
    const stepIndex = trackingSteps.value.findIndex(s => s.id === statusId);
    if (stepIndex !== -1) {
      shipment.progress = ((stepIndex + 1) / trackingSteps.value.length) * 100;
    }
  }
  closeTrackingControl();
};

const openNotificationModal = (type: NotificationType) => {
  const shipment = selectedShipment.value;
  if (!shipment) return;

  notificationForm.type = type;
  notificationForm.phone = shipment.phone;
  notificationForm.email = shipment.email;
  notificationForm.message = notificationTemplates[type].defaultMessage
    .replace('{trackingNumber}', shipment.trackingNumber)
    .replace('{status}', shipment.status)
    .replace('{destination}', shipment.destination);
  showNotificationModal.value = true;
};

const closeNotificationModal = () => {
  showNotificationModal.value = false
  notificationForm.message = ''
  notificationForm.phone = ''
  notificationForm.email = ''
}

const sendNotification = () => {
  // Simulation d'envoi de notification
    // Here you would typically call an API
  console.log('Sending notification:', notificationForm);
  
  alert(`Notification envoyée avec succès !
Type: ${notificationTemplates[notificationForm.type].title}
Destinataire: ${notificationForm.email}
Téléphone: ${notificationForm.phone}`)
  
  closeNotificationModal()
}

onMounted(() => {
  // Vérifier si l'utilisateur est connecté et est un gestionnaire
  if (!store.user || store.user.role !== 'manager') {
    router.push('/login')
  }
})
</script>