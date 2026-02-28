<script lang="ts">
  // Add any necessary imports here
</script>

<svelte:head>
  <title>Insurance Coverage - Lactation Success LLC</title>
  <meta name="description" content="Learn about insurance coverage for lactation consulting services. Many insurance plans cover breastfeeding support and lactation consultations." />
</svelte:head>

<!-- Header -->
<section class="bg-cover bg-center py-20" style="background-image: linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), url('/images/stock-babies-crop2.jpeg');">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-serif text-theme-900 sm:text-5xl md:text-6xl">
        <span class="block">Insurance Coverage</span>
      </h1>
      <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Understanding your benefits for professional lactation support services to help you on your breastfeeding journey.</p>
    </div>
  </div>
</section>

<!-- Main Content -->
<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Insurance Overview -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 class="text-3xl font-serif text-gray-900 mb-6">Insurance Coverage Partners</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- TLN Section -->
          <div class="flex flex-col h-full">
            <div class="mb-4">
              <div class="flex items-center gap-4 mb-2">
                <img src="/images/TLN.svg" alt="The Lactation Network logo" class="w-16 h-16 flex-shrink-0" />
                <h3 class="text-xl font-serif text-gray-900">The Lactation Network (TLN)</h3>
              </div>
              <p class="text-gray-600">
                Many insurance plans cover <span class="font-medium text-theme-900">100% of unlimited lactation visits</span> through TLN. Verify coverage before your appointment.
              </p>
            </div>
            <div class="text-center mt-auto">
              <span class="inline-flex w-full items-center justify-center rounded-full bg-gray-400 px-6 py-3 font-medium text-white cursor-not-allowed">
                Verify Coverage <br>
                through TLN
              </span>
            </div>
          </div>

          <!-- Wildflower Section -->
          <div class="flex flex-col h-full">
            <div class="mb-4">
              <div class="flex items-center gap-4 mb-2">
                <div class="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/images/insurance-logos/wildflower-logo.png" alt="Wildflower Health logo" class="w-16 flex-shrink-0" />
                </div>
                <h3 class="text-xl font-serif text-gray-900">Wildflower Health</h3>
              </div>
              <p class="text-gray-600">
                Cigna members can access covered lactation services through our Wildflower Health partnership.
              </p>
            </div>
            <div class="text-center mt-auto">
              <span class="inline-flex w-full items-center justify-center rounded-full bg-gray-400 px-6 py-3 font-medium text-white cursor-not-allowed">
                Verify Cigna Coverage through Wildflower
              </span>
            </div>
          </div>

          <!-- CareFirst Section -->
          <div class="flex flex-col h-full">
            <div class="mb-4">
              <div class="flex items-center gap-4 mb-2">
                <div class="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div class="flex gap-1">
                    <img src="/images/insurance-logos/blue-cross.png" alt="Blue Cross logo" class="h-8 object-contain" />
                    <img src="/images/insurance-logos/blue-shield.png" alt="Blue Shield logo" class="h-8 object-contain" />
                  </div>
                </div>
                <h3 class="text-xl font-serif text-gray-900">CareFirst</h3>
              </div>
              <p class="text-gray-600">
                CareFirst Blue Cross Blue Shield members can contact me directly to schedule an appointment.
              </p>
            </div>
            <div class="text-center mt-auto">
              <span class="inline-flex w-full flex-col items-center justify-center rounded-full bg-gray-400 px-6 py-3 font-medium text-white cursor-not-allowed">
                Not Currently Scheduling
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Accepted Insurance -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 class="text-3xl font-serif text-gray-900 mb-6">Accepted Insurance Plans</h2>
        
        <!-- TLN Plans -->
        <div class="mb-8">
          <h3 class="text-xl font-medium text-gray-900 mb-4">The Lactation Network (TLN) Plans:</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <ul class="space-y-4">
              <li class="flex items-center bg-theme-50 rounded-lg p-4">
                <span class="text-theme-900 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div class="flex items-center">
                  <div class="w-16 h-11 flex items-center justify-center bg-white rounded-md shadow-sm mr-3">
                    <img src="/images/insurance-logos/aetna.png" alt="Aetna logo" class="max-h-8 max-w-14 object-contain" />
                  </div>
                  <span class="text-gray-700 font-medium">Aetna</span>
                </div>
              </li>
              <!-- <li class="flex items-center bg-theme-50 rounded-lg p-4">
                <span class="text-theme-900 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div class="flex items-center">
                  <div class="w-16 h-11 flex items-center justify-center bg-white rounded-md shadow-sm mr-3">
                    <img src="/images/insurance-logos/anthem.png" alt="Anthem logo" class="max-h-8 max-w-14 object-contain" />
                  </div>
                  <span class="text-gray-700 font-medium">Anthem</span>
                </div>
              </li> -->
              <!-- <li class="flex items-center bg-theme-50 rounded-lg p-4">
                <span class="text-theme-900 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div class="flex items-center">
                  <div class="w-16 h-11 flex items-center justify-center bg-white rounded-md shadow-sm mr-3">
                    <img src="/images/insurance-logos/blue-cross.png" alt="Blue Cross logo" class="max-h-8 max-w-14 object-contain" />
                  </div>
                  <span class="text-gray-700 font-medium">Blue Cross PPO</span>
                </div>
              </li> -->
              <!-- <li class="flex items-center bg-theme-50 rounded-lg p-4">
                <span class="text-theme-900 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div class="flex items-center">
                  <div class="w-16 h-11 flex items-center justify-center bg-white rounded-md shadow-sm mr-3">
                    <img src="/images/insurance-logos/blue-shield.png" alt="Blue Shield logo" class="max-h-8 max-w-14 object-contain" />
                  </div>
                  <span class="text-gray-700 font-medium">Blue Shield PPO (not Federal)</span>
                </div>
              </li> --> 
              <li class="flex items-center bg-theme-50 rounded-lg p-4">
                <span class="text-theme-900 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div class="flex items-center">
                  <div class="w-16 h-11 flex items-center justify-center bg-white rounded-md shadow-sm mr-3">
                    <img src="/images/insurance-logos/optum.png" alt="VA CCN logo" class="max-h-8 max-w-14 object-contain" />
                  </div>
                  <span class="text-gray-700 font-medium">Veterans Affairs Community Care Network (VA CCN) through Optum Care in Regions 1, 2 and 3, Multiplan</span>
                </div>
              </li>
            </ul>
            <ul class="space-y-4">
             
              <li class="flex items-center bg-theme-50 rounded-lg p-4">
                <span class="text-theme-900 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div class="flex items-center">
                  <div class="w-16 h-11 flex items-center justify-center bg-white rounded-md shadow-sm mr-3">
                    <img src="/images/insurance-logos/uhc.png" alt="United Healthcare logo" class="max-h-8 max-w-14 object-contain" />
                  </div>
                  <span class="text-gray-700 font-medium">United Healthcare (Commercial UHC plans as well as UMR, All Savers, Oxford Health Plan, and Surest)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Wildflower Plans -->
        <div class="mt-8">
          <h3 class="text-xl font-medium text-gray-900 mb-4">Wildflower Health Plans:</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-center bg-theme-50 rounded-lg p-4">
              <span class="text-theme-900 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </span>
              <div class="flex items-center">
                <div class="w-16 h-11 flex items-center justify-center bg-white rounded-md shadow-sm mr-3">
                  <img src="/images/insurance-logos/cigna.png" alt="Cigna logo" class="max-h-8 max-w-14 object-contain" />
                </div>
                <span class="text-gray-700 font-medium">Cigna Insurance Plans</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CareFirst Plans -->
        <div class="mt-8">
          <h3 class="text-xl font-medium text-gray-900 mb-4">CareFirst Plans:</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-center bg-theme-50 rounded-lg p-4">
              <span class="text-theme-900 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </span>
              <div class="flex items-center">
                <div class="w-16 h-11 flex items-center justify-center bg-white rounded-md shadow-sm mr-3">
                  <div class="flex gap-1">
                    <img src="/images/insurance-logos/blue-cross.png" alt="Blue Cross logo" class="max-h-8 object-contain" />
                    <img src="/images/insurance-logos/blue-shield.png" alt="Blue Shield logo" class="max-h-8 object-contain" />
                  </div>
                </div>
                <span class="text-gray-700 font-medium">CareFirst Blue Cross Blue Shield</span>
              </div>
            </div>
          </div>
          <p class="mt-4 text-gray-600 bg-theme-50 p-4 rounded-lg border border-theme-100">
            If you have CareFirst Blue Cross Blue Shield, please call or text me at (703) 599-9180 to schedule an appointment.
          </p>
        </div>

        <div class="mt-8">
          <h3 class="text-xl font-medium text-gray-900 mb-4">Tricare Plans:</h3>
          <p class="mt-8 text-lg text-gray-600 bg-theme-50 p-4 rounded-lg border border-theme-100">
            If you have Tricare, please call me to schedule an appointment. I am an in-network Tricare provider.
          </p>
          </div>  
      </div>

      <!-- Self-Pay Options -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 class="text-3xl font-serif text-gray-900 mb-6">Self-Pay Options</h2>
        <p class="text-lg text-gray-600 mb-8">
          If you prefer to self-pay or your insurance is not currently accepted, we offer competitive rates for our services:
        </p>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="bg-theme-50 p-6 rounded-lg">
            <h5 class="font-medium text-xl text-theme-900 mb-2">Initial In-Home Visit</h5>
            <p class="text-gray-700">$235 (1.5-2 hours)</p>
          </div>
          <div class="bg-theme-50 p-6 rounded-lg">
            <h5 class="font-medium text-xl text-theme-900 mb-2">Follow-up In-Home Visit</h5>
            <p class="text-gray-700">$200</p>
          </div>
          <div class="bg-theme-50 p-6 rounded-lg">
            <h5 class="font-medium text-xl text-theme-900 mb-2">Multiples Initial Visit</h5>
            <p class="text-gray-700">$330 (1.5-2 hours)</p>
          </div>
          <div class="bg-theme-50 p-6 rounded-lg">
            <h5 class="font-medium text-xl text-theme-900 mb-2">Multiples Follow-up Visit</h5>
            <p class="text-gray-700">$250</p>
          </div>
          <div class="bg-theme-50 p-6 rounded-lg">
            <h5 class="font-medium text-xl text-theme-900 mb-2">Telehealth Visit</h5>
            <p class="text-gray-700">$200 (1 hour)</p>
          </div>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg text-gray-700">
          <ul class="space-y-2">
            <li>• No additional charge for travel to your home</li>
            <li>• Payment accepted via Cash, Venmo, PayPal, or credit card</li>
            <li class="text-sm italic">• A Superbill will be provided for insurance reimbursement if needed</li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-theme-900 rounded-2xl p-12 text-center text-white">
        <h2 class="text-3xl font-serif mb-6">Thank You for Your Interest</h2>
        <p class="text-lg text-theme-100 mb-8 max-w-2xl mx-auto">
          We are currently not accepting new appointments. Please check back soon for updates.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/about" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-theme-900 transition-colors duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </div>
</section> 