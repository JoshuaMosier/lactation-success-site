<script lang="ts">
  // Add any necessary imports here
</script>

<svelte:head>
  <title>Services - Lactation Success</title>
  <meta name="description" content="Professional lactation consulting services including prenatal consultations, in-home support, and virtual consultations in Northern Virginia and DC area." />
</svelte:head>

<!-- Header -->
<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-serif text-gray-900">Services</h1>
      <p class="mt-4 text-lg text-gray-500">Comprehensive lactation support tailored to your needs</p>
    </div>
  </div>
</section>

<!-- Services -->
<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="space-y-16">
      <!-- Prenatal Consultations -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-2xl font-serif text-gray-900">Prenatal Consultations</h2>
          <p class="mt-4 text-gray-500">Start your breastfeeding journey with confidence through personalized prenatal education and preparation.</p>
          <ul class="mt-6 space-y-4">
            <li class="flex items-start">
              <span class="text-blue-900">•</span>
              <span class="ml-3 text-gray-500">Comprehensive breastfeeding education</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-900">•</span>
              <span class="ml-3 text-gray-500">Preparation for the first few weeks</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-900">•</span>
              <span class="ml-3 text-gray-500">Discussion of your goals and concerns</span>
            </li>
          </ul>
          <div class="mt-8">
            <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800">
              Schedule Prenatal Consultation
            </a>
          </div>
        </div>
        <div class="lg:pl-8">
          <!-- Add an appropriate image here -->
        </div>
      </div>

      <!-- In-Home Support -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="lg:order-2">
          <h2 class="text-2xl font-serif text-gray-900">In-Home Support</h2>
          <p class="mt-4 text-gray-500">Receive hands-on guidance and support in the comfort of your own home during those crucial early weeks.</p>
          <ul class="mt-6 space-y-4">
            <li class="flex items-start">
              <span class="text-blue-900">•</span>
              <span class="ml-3 text-gray-500">Personalized latch assessment and assistance</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-900">•</span>
              <span class="ml-3 text-gray-500">Weight checks and feeding evaluation</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-900">•</span>
              <span class="ml-3 text-gray-500">Customized care plan development</span>
            </li>
          </ul>
          <div class="mt-8">
            <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800">
              Schedule Home Visit
            </a>
          </div>
        </div>
        <div class="lg:order-1 lg:pr-8">
          <!-- Add an appropriate image here -->
        </div>
      </div>

      <!-- Virtual Consultations -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-2xl font-serif text-gray-900">Virtual Consultations</h2>
          <p class="mt-4 text-gray-500">Convenient online support from the comfort of your home, perfect for follow-up care or minor concerns.</p>
          <ul class="mt-6 space-y-4">
            <li class="flex items-start">
              <span class="text-blue-900">•</span>
              <span class="ml-3 text-gray-500">Flexible scheduling options</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-900">•</span>
              <span class="ml-3 text-gray-500">Real-time guidance and support</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-900">•</span>
              <span class="ml-3 text-gray-500">Follow-up care and progress monitoring</span>
            </li>
          </ul>
          <div class="mt-8">
            <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800">
              Schedule Virtual Consultation
            </a>
          </div>
        </div>
        <div class="lg:pl-8">
          <!-- Add an appropriate image here -->
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-serif text-gray-900">Investment in Your Journey</h2>
      <p class="mt-4 text-lg text-gray-500">Insurance may cover part or all of your lactation support. Contact us to learn more about coverage and pricing options.</p>
      <div class="mt-8">
        <a href="/insurance" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white shadow-sm hover:bg-gray-50">
          Learn About Insurance Coverage
        </a>
      </div>
    </div>
  </div>
</section> 