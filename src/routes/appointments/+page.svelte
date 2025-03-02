<script context="module" lang="ts">
  // Declare Leaflet types
  declare const L: {
    map: (id: string) => any;
    tileLayer: (url: string, options: any) => any;
    marker: (coords: [number, number]) => any;
    circle: (coords: [number, number], options: any) => any;
  };
</script>

<script lang="ts">
  // Add expanding section functionality
  let isExpanded = false;
  let isServiceAreaExpanded = false;

  function toggleExpand() {
    isExpanded = !isExpanded;
  }

  function toggleServiceArea() {
    isServiceAreaExpanded = !isServiceAreaExpanded;
  }

  // Map initialization
  import { onMount } from 'svelte';
  
  let map: any;
  
  function initializeMap() {
    if (map) {
      map.remove();
    }
    
    // Falls Church, VA coordinates
    const fallsChurch: [number, number] = [38.882334, -77.171091];
    
    // Create the map centered on Falls Church
    map = L.map('map').setView(fallsChurch, 9);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add a marker for Falls Church
    L.marker(fallsChurch)
      .bindPopup('Falls Church, VA - Service Area Center')
      .addTo(map);
    
    // Add a 25-mile radius circle (converted to meters)
    const radius = 25 * 1609.34; // Convert miles to meters
    L.circle(fallsChurch, {
      color: '#1e3a8a', // theme-900
      fillColor: '#1e3a8a',
      fillOpacity: 0.1,
      weight: 2,
      radius: radius
    }).addTo(map);
  }

  onMount(() => {
    // Cleanup on component destruction
    return () => {
      if (map) {
        map.remove();
      }
    };
  });

  // Watch for changes in isServiceAreaExpanded
  $: if (isServiceAreaExpanded) {
    // Need to wait for the DOM to update
    setTimeout(initializeMap, 0);
  }
</script>

<svelte:head>
  <title>Schedule an Appointment - Lactation Success LLC</title>
  <meta name="description" content="Schedule a lactation consultation with Carolyn Mosier APRN, IBCLC, RLC. Offering in-home visits and telehealth appointments in Northern Virginia." />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
</svelte:head>

<!-- Header -->
<section class="bg-cover bg-center py-20" style="background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4)), url('/images/baby-banner.png');">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-serif text-theme-900 sm:text-5xl md:text-6xl">
        <span class="block">Schedule an Appointment</span>
      </h1>
      <p class="mt-4 text-xl text-gray-600 max-w-xl mx-auto">Learn what to expect and follow our simple steps to book your consultation.</p>
    </div>
  </div>
</section>

<!-- What to Expect Section -->
<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Service Area Map -->
      <div class="bg-white rounded-2xl shadow-lg border border-theme-100 p-8 mb-12 hover:shadow-xl transition-shadow duration-300">
        <button
          class="w-full text-left focus:outline-none"
          on:click={toggleServiceArea}
        >
          <div class="flex items-center justify-between">
            <h2 class="text-3xl font-serif text-theme-900">Service Areas</h2>
            <span class="ml-6 flex-shrink-0">
              {#if isServiceAreaExpanded}
                <svg class="h-6 w-6 text-theme-900" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
              {:else}
                <svg class="h-6 w-6 text-theme-900" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
              {/if}
            </span>
          </div>
        </button>
        {#if isServiceAreaExpanded}
          <div class="mt-6">
            <p class="text-gray-600 mb-6">I provide in-home consultations within approximately 25 miles of Falls Church, Virginia.</p>
            <div class="relative w-full h-[400px] rounded-lg overflow-hidden" id="map"></div>
          </div>
        {/if}
      </div>

      <!-- Expandable What to Expect Section -->
      <div class="bg-white rounded-2xl shadow-lg border border-theme-100 p-8 mb-12 hover:shadow-xl transition-shadow duration-300">
        <button
          class="w-full text-left focus:outline-none"
          on:click={toggleExpand}
        >
          <div class="flex items-center justify-between">
            <h2 class="text-3xl font-serif text-theme-900">What to Expect During Your Consultation</h2>
            <span class="ml-6 flex-shrink-0">
              {#if isExpanded}
                <svg class="h-6 w-6 text-theme-900" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
              {:else}
                <svg class="h-6 w-6 text-theme-900" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
              {/if}
            </span>
          </div>
        </button>
        {#if isExpanded}
          <div class="mt-6 prose prose-lg max-w-none text-gray-600">
            <p class="mb-4">During our consultation, we will:</p>
            <ul class="space-y-2">
              <li>Discuss your specific goals and concerns</li>
              <li>Observe a feeding session</li>
              <li>Assess your baby's latch and positioning</li>
              <li>Check your baby's weight</li>
              <li>Develop a personalized care plan</li>
              <li>Provide practical tips and techniques you can implement right away</li>
              <li>Address any other issues you may have</li>
            </ul>
          </div>
        {/if}
      </div>

      <!-- Section Break -->
      <div class="border-t border-theme-100 my-16"></div>

      <!-- Scheduling Steps Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-serif text-theme-900">How to Schedule Your Appointment</h2>
        <p class="mt-4 text-lg text-gray-600">Follow these simple steps to book your consultation</p>
      </div>

      <!-- Scheduling Steps -->
      <div class="space-y-8">
        <!-- Step 1 -->
        <div class="bg-white rounded-2xl shadow-lg border border-theme-100 p-4 sm:p-8">
          <div class="flex flex-col sm:flex-row sm:items-start">
            <div class="flex-shrink-0 bg-theme-900 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mb-4 sm:mb-0">
              1
            </div>
            <div class="sm:ml-4 w-full">
              <h3 class="text-2xl font-serif text-theme-900 mb-4">Review Insurance Coverage</h3>
              <p class="text-gray-600 mb-4">
                Most insurance plans cover 100% of lactation visits under the Affordable Care Act. 
                <a href="/insurance" class="text-theme-700 hover:text-theme-900 underline">View our insurance page</a> for detailed coverage information.
              </p>
              <a 
                href="https://www.healthcare.gov/coverage/breast-feeding-benefits/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-theme-700 hover:text-theme-900 underline"
              >
                Learn more about breastfeeding benefits under the ACA
              </a>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-white rounded-2xl shadow-lg border border-theme-100 p-4 sm:p-8">
          <div class="flex flex-col sm:flex-row sm:items-start">
            <div class="flex-shrink-0 bg-theme-900 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mb-4 sm:mb-0">
              2
            </div>
            <div class="sm:ml-4 w-full">
              <h3 class="text-2xl font-serif text-theme-900 mb-4">Choose Your Payment Method</h3>
              
              <div class="grid md:grid-cols-2 gap-8">
                <!-- Insurance Option -->
                <div>
                  <h4 class="text-xl text-theme-800 mb-2">Insurance Coverage</h4>
                  <p class="text-gray-600 mb-4">
                    If your insurance is covered by The Lactation Network (TLN), you can start the verification process immediately, and they'll handle your claims.
                  </p>
                  <!-- Insurance Logos -->
                  <div class="flex flex-wrap items-center justify-center gap-4 mb-6 bg-gray-50 p-6 rounded-lg">
                    <div class="w-20 h-10 flex items-center justify-center bg-white rounded-md shadow-sm">
                      <img src="/images/insurance-logos/anthem.png" alt="Anthem logo" class="max-h-8 max-w-12 object-contain" />
                    </div>
                    <div class="w-20 h-10 flex items-center justify-center bg-white rounded-md shadow-sm">
                      <img src="/images/insurance-logos/blue-cross.png" alt="theme Cross logo" class="max-h-8 max-w-12 object-contain" />
                    </div>
                    <div class="w-20 h-10 flex items-center justify-center bg-white rounded-md shadow-sm">
                      <img src="/images/insurance-logos/blue-shield.png" alt="theme Shield logo" class="max-h-8 max-w-12 object-contain" />
                    </div>
                    <div class="w-20 h-10 flex items-center justify-center bg-white rounded-md shadow-sm">
                      <img src="/images/insurance-logos/optum.png" alt="VA CCN logo" class="max-h-8 max-w-12 object-contain" />
                    </div>
                    <div class="w-20 h-10 flex items-center justify-center bg-white rounded-md shadow-sm">
                      <img src="/images/insurance-logos/uhc.png" alt="United Healthcare logo" class="max-h-8 max-w-12 object-contain" />
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <a 
                      href="https://go.lactationnetwork.com/LactationSuccessLLC"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-block bg-theme-700 text-white px-6 py-3 rounded-full hover:bg-theme-800 transition-colors duration-300"
                    >
                      Verify Insurance with TLN
                    </a>
                  </div>
                  <br>
                  <p class="text-gray-600 mb-4">If your insurance is not listed above, you will pay upfront and a Superbill (receipt) will be provided for insurance reimbursement.</p>
                </div>

                <!-- Self-Pay Option -->
                <div class="md:border-l md:border-gray-200 md:pl-8">
                  <h4 class="text-xl text-theme-800 mb-2">Self-Pay Fee Schedule</h4>
                  <div class="space-y-2">
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <h5 class="font-medium text-gray-900 text-sm">Initial In-Home Visit</h5>
                      <p class="text-gray-600 text-sm">$235 (1.5-2 hours)</p>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <h5 class="font-medium text-gray-900 text-sm">Follow-up In-Home Visit</h5>
                      <p class="text-gray-600 text-sm">$200 (1 hour)</p>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <h5 class="font-medium text-gray-900 text-sm">Multiples Initial Visit</h5>
                      <p class="text-gray-600 text-sm">$330 (1.5-2 hours)</p>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <h5 class="font-medium text-gray-900 text-sm">Multiples Follow-up Visit</h5>
                      <p class="text-gray-600 text-sm">$250 (1 hour)</p>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <h5 class="font-medium text-gray-900 text-sm">Telehealth Visit</h5>
                      <p class="text-gray-600 text-sm">$200 (1 hour)</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Payment Notes -->
              <div class="mt-8 pt-6 border-t border-gray-200">
                <div class="text-gray-600 text-sm space-y-1">
                  <p>• No additional charge for travel to your home</p>
                  <p>• Payment accepted via Cash, Venmo, PayPal, or credit card prior to your appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-white rounded-2xl shadow-lg border border-theme-100 p-4 sm:p-8">
          <div class="flex flex-col sm:flex-row sm:items-start">
            <div class="flex-shrink-0 bg-theme-900 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mb-4 sm:mb-0">
              3
            </div>
            <div class="sm:ml-4 w-full">
              <h3 class="text-2xl font-serif text-theme-900 mb-4">Schedule Your Appointment</h3>
              <p class="text-gray-800 mb-6">
                Contact me to schedule your appointment or if you have any questions about the process.
              </p>

              <!-- Contact Information -->
              <div class="grid md:grid-cols-2 gap-4 mb-8">
                <div class="flex items-center text-gray-700">
                  <svg class="h-5 w-5 text-theme-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="font-medium">(703)-599-9180</span>
                </div>
                <div class="flex items-center text-gray-700">
                  <svg class="h-5 w-5 text-theme-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="font-medium">carolyn.mosier@lactationsuccess.com</span>
                </div>
              </div>

              <!-- Availability Info -->
              <div class="bg-theme-50 rounded-lg p-6 mb-8">
                <h4 class="text-lg font-serif text-theme-800 mb-4">Availability</h4>
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 class="font-medium text-theme-900 mb-2">In-Home Visits</h5>
                    <p class="text-gray-700">Monday - Friday</p>
                    <p class="text-gray-700">9:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <h5 class="font-medium text-theme-900 mb-2">Telehealth Consultations</h5>
                    <p class="text-gray-700">Monday - Friday: Regular hours</p>
                    <p class="text-gray-700">Weekends: Available as needed</p>
                  </div>
                </div>
              </div>

              <!-- Contact Buttons -->
              <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="tel:+17035999180"
                  class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-theme-900 text-lg font-medium rounded-full text-white hover:bg-theme-800 transition-colors duration-300"
                >
                  <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call or Text
                </a>
                <a 
                  href="mailto:carolyn.mosier@lactationsuccess.com"
                  class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-theme-900 text-lg font-medium rounded-full text-theme-900 hover:bg-theme-900 hover:text-white transition-colors duration-300"
                >
                  <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 