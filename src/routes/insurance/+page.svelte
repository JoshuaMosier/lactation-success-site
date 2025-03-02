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
        <div class="flex items-center mb-6">
          <h2 class="text-3xl font-serif text-gray-900 flex-grow">Coverage through The Lactation Network</h2>
          <img src="/images/TLN.svg" alt="The Lactation Network logo" class="w-24 h-24 ml-4" />
        </div>
        <p class="text-lg text-gray-600 leading-relaxed mb-6">
          I have partnered with The Lactation Network (TLN) to provide lactation services covered by many insurance companies. Through TLN, once approved, <span class="font-medium text-theme-900">100% of unlimited lactation visits</span> may be covered as needed through your insurance company. Ideally insurance
          coverage should be verified prior to your appointment.
        </p>
        <div class="text-center">
          <a href="https://go.lactationnetwork.com/LactationSuccessLLC" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-theme-700 hover:bg-theme-800 transform hover:-translate-y-0.5 transition-all duration-300 shadow-soft hover:shadow-lg">
            Verify Coverage through TLN
          </a>
        </div>
      </div>

      <!-- Accepted Insurance -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
        <h2 class="text-3xl font-serif text-gray-900 mb-6">Accepted Insurance Plans</h2>
        <p class="text-lg text-gray-600 mb-8">
          TLN covers many PPO plans, including:
        </p>
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
                  <img src="/images/insurance-logos/anthem.png" alt="Anthem logo" class="max-h-8 max-w-14 object-contain" />
                </div>
                <span class="text-gray-700 font-medium">Anthem</span>
              </div>
            </li>
            <li class="flex items-center bg-theme-50 rounded-lg p-4">
              <span class="text-theme-900 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </span>
              <div class="flex items-center">
                <div class="w-16 h-11 flex items-center justify-center bg-white rounded-md shadow-sm mr-3">
                  <img src="/images/insurance-logos/blue-cross.png" alt="theme Cross logo" class="max-h-8 max-w-14 object-contain" />
                </div>
                <span class="text-gray-700 font-medium">theme Cross PPO</span>
              </div>
            </li>
            <li class="flex items-center bg-theme-50 rounded-lg p-4">
              <span class="text-theme-900 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </span>
              <div class="flex items-center">
                <div class="w-16 h-11 flex items-center justify-center bg-white rounded-md shadow-sm mr-3">
                  <img src="/images/insurance-logos/blue-shield.png" alt="theme Shield logo" class="max-h-8 max-w-14 object-contain" />
                </div>
                <span class="text-gray-700 font-medium">theme Shield PPO (not Federal)</span>
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
                  <img src="/images/insurance-logos/cigna.png" alt="Cigna logo" class="max-h-8 max-w-14 object-contain" />
                </div>
                <span class="text-gray-700 font-medium">Cigna</span>
              </div>
            </li> -->
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
                  <img src="/images/insurance-logos/optum.png" alt="VA CCN logo" class="max-h-8 max-w-14 object-contain" />
                </div>
                <span class="text-gray-700 font-medium">Veterans Affairs Community Care Network (VA CCN) through Optum Care in Regions 1, 2 and 3, Multiplan</span>
              </div>
            </li>
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
        <p class="mt-8 text-lg text-gray-600 bg-theme-50 p-4 rounded-lg border border-theme-100">
          I have applied to become a Tricare provider and hope to see those clients in the near future.
        </p>
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
        <h2 class="text-3xl font-serif mb-6">Ready to Get Started?</h2>
        <p class="text-lg text-theme-100 mb-8 max-w-2xl mx-auto">
          Now that you understand your coverage options, schedule your consultation or reach out with any questions. I'm here to help you navigate your insurance benefits and provide the support you need.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/appointments" class="inline-flex items-center justify-center px-8 py-4 bg-white text-lg font-medium rounded-full text-theme-900 hover:bg-theme-50 transition-colors duration-300">
            Schedule an Appointment
          </a>
          <a href="/about" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-theme-900 transition-colors duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </div>
</section> 