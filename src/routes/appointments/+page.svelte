<script lang="ts">
  // Add expanding section functionality
  let isExpanded = false;

  function toggleExpand() {
    isExpanded = !isExpanded;
  }
</script>

<svelte:head>
  <title>Schedule an Appointment - Lactation Success LLC</title>
  <meta name="description" content="Schedule a lactation consultation with Carolyn Mosier APRN, IBCLC, RLC. Offering in-home visits and telehealth appointments in Northern Virginia." />
</svelte:head>

<!-- Header -->
<section class="bg-cover bg-center py-20" style="background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4)), url('/images/baby-banner.png');">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-serif text-blue-900 sm:text-5xl md:text-6xl">
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
      <!-- Expandable What to Expect Section -->
      <div class="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 mb-12 hover:shadow-xl transition-shadow duration-200">
        <button
          class="w-full text-left focus:outline-none"
          on:click={toggleExpand}
        >
          <div class="flex items-center justify-between">
            <h2 class="text-3xl font-serif text-blue-900">What to Expect During Your Consultation</h2>
            <span class="ml-6 flex-shrink-0">
              {#if isExpanded}
                <svg class="h-6 w-6 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
              {:else}
                <svg class="h-6 w-6 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
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
            </ul>
          </div>
        {/if}
      </div>

      <!-- Scheduling Steps -->
      <div class="space-y-8">
        <!-- Step 1 -->
        <div class="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
          <div class="flex items-start">
            <div class="flex-shrink-0 bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              1
            </div>
            <div class="ml-4">
              <h3 class="text-2xl font-serif text-blue-900 mb-4">Review Insurance Coverage</h3>
              <p class="text-gray-600 mb-4">
                Most insurance plans cover 100% of lactation visits under the Affordable Care Act. 
                <a href="/insurance" class="text-blue-700 hover:text-blue-900 underline">View our insurance page</a> for detailed coverage information.
              </p>
              <a 
                href="https://www.healthcare.gov/coverage/breast-feeding-benefits/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-700 hover:text-blue-900 underline"
              >
                Learn more about breastfeeding benefits under the ACA
              </a>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
          <div class="flex items-start">
            <div class="flex-shrink-0 bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              2
            </div>
            <div class="ml-4">
              <h3 class="text-2xl font-serif text-blue-900 mb-4">Choose Your Payment Method</h3>
              
              <!-- Insurance Option -->
              <div class="mb-6">
                <h4 class="text-xl text-blue-800 mb-2">Insurance Coverage</h4>
                <p class="text-gray-600 mb-4">
                  If your insurance is covered by The Lactation Network (TLN), you can start the verification process immediately.
                </p>
                <a 
                  href="https://go.lactationnetwork.com/LactationSuccessLLC"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-block bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors duration-200"
                >
                  Verify Insurance with TLN
                </a>
              </div>

              <!-- Self-Pay Option -->
              <div class="border-t border-gray-200 pt-6">
                <h4 class="text-xl text-blue-800 mb-2">Self-Pay Fee Schedule</h4>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h5 class="font-medium text-gray-900">Initial In-Home Visit</h5>
                    <p class="text-gray-600">$235 (1.5-2 hours)</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h5 class="font-medium text-gray-900">Follow-up In-Home Visit</h5>
                    <p class="text-gray-600">$200</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h5 class="font-medium text-gray-900">Multiples Initial Visit</h5>
                    <p class="text-gray-600">$330 (1.5-2 hours)</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h5 class="font-medium text-gray-900">Multiples Follow-up Visit</h5>
                    <p class="text-gray-600">$250</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h5 class="font-medium text-gray-900">Telehealth Visit</h5>
                    <p class="text-gray-600">$200 (1 hour)</p>
                  </div>
                </div>
                <div class="mt-4 text-gray-600">
                  <p>No additional charge for travel to your home.</p>
                  <p>Payment accepted via Cash, Venmo, PayPal, or credit card.</p>
                  <p class="mt-2 text-sm italic">A Superbill will be provided for insurance reimbursement if needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
          <div class="flex items-start">
            <div class="flex-shrink-0 bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              3
            </div>
            <div class="ml-4">
              <h3 class="text-2xl font-serif text-blue-900 mb-4">Schedule Your Appointment</h3>
              <p class="text-gray-600 mb-6">
                Contact me to schedule your appointment or if you have any questions about the process.
              </p>
              
              <!-- Contact Information -->
              <div class="mb-8 space-y-4">
                <div class="flex items-center text-gray-700">
                  <svg class="h-5 w-5 text-blue-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="font-medium">(703)-599-9180</span>
                </div>
                <div class="flex items-center text-gray-700">
                  <svg class="h-5 w-5 text-blue-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="font-medium">carolyn.mosier@lactationsuccess.com</span>
                </div>
              </div>

              <!-- Contact Buttons -->
              <div class="grid md:grid-cols-2 gap-4">
                <a 
                  href="tel:+17035999180"
                  class="flex items-center justify-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-200"
                >
                  <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call or Text
                </a>
                <a 
                  href="mailto:carolyn.mosier@lactationsuccess.com"
                  class="flex items-center justify-center px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-200"
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