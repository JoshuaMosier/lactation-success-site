<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Lactation Success LLC - Professional Breastfeeding Support in the Northern Virginia Area</title>
  <meta name="description" content="Professional lactation consulting services in the Northern Virginia area. Develop a predictable feeding routine and bond with your baby." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-b from-blue-50 to-white py-24 relative">
  <!-- Logo Overlay -->
  <div class="absolute left-16 top-1/2 -translate-y-1/2 hidden lg:block">
    <img src="/images/stock-temp-logo-blue.svg" alt="Lactation Success LLC Logo" class="h-[500px] object-contain opacity-90" />
  </div>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl tracking-tight font-serif sm:text-5xl md:text-6xl">
        <span class="block text-blue-900">Professional <span class="text-blue-700">in-home </span> and </span>
        <span class="block text-blue-700 mt-2">telehealth <span class="text-blue-900">breastfeeding support<span></span>
        <span class="block text-blue-900 mt-2">for moms and babies</span>
      </h1>
      
      <!-- Profile Card -->
      <div class="mt-12 flex flex-col items-center">
        <div class="w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
          <img src="/images/mirror-crop.jpg" alt="Carolyn Mosier" class="w-full h-full object-cover" />
        </div>
        <div class="text-center">
          <h2 class="text-2xl text-blue-900 mb-2">Carolyn Mosier</h2>
          <div class="flex items-center justify-center space-x-3 text-blue-700 font-medium text-2xl">
            <span>APRN</span>
            <span class="text-blue-300">•</span>
            <span>IBCLC</span>
            <span class="text-blue-300">•</span>
            <span>RLC</span>
          </div>
          <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Helping Northern Virginia area families create successful breastfeeding experiences through expert lactation support.
          </p>
        </div>
      </div>

      <div class="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
        <div class="rounded-md">
          <a href="/appointments" class="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-xl md:px-10 transform hover:-translate-y-0.5 transition-all duration-300 shadow-soft hover:shadow-lg">
            Schedule an Appointment
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Services Overview -->
<section class="py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-serif text-blue-900 sm:text-4xl">How I Can Help</h2>
      <p class="mt-4 text-xl text-gray-600">Personalized support for your breastfeeding journey</p>
    </div>
    
    <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Service Card 1 -->
      <div class="bg-white rounded-xl shadow-soft p-8 hover:shadow-lg transition-all duration-300 border border-blue-50 flex flex-col">
        <h3 class="text-xl font-serif text-blue-900 min-h-[4rem]">Prenatal Consultations</h3>
        <p class="mt-4 text-gray-600 leading-relaxed">Prepare for successful breastfeeding before your baby arrives with personalized guidance and education.</p>
      </div>

      <!-- Service Card 2 -->
      <div class="bg-white rounded-xl shadow-soft p-8 hover:shadow-lg transition-all duration-300 border border-blue-50 flex flex-col">
        <h3 class="text-xl font-serif text-blue-900 min-h-[4rem]">In-Home Support</h3>
        <p class="mt-4 text-gray-600 leading-relaxed">Receive hands-on support and guidance in the comfort of your own home during those crucial early weeks and beyond.</p>
      </div>

      <!-- Service Card 3 -->
      <div class="bg-white rounded-xl shadow-soft p-8 hover:shadow-lg transition-all duration-300 border border-blue-50 flex flex-col">
        <h3 class="text-xl font-serif text-blue-900 min-h-[4rem]">Telehealth Consultations</h3>
        <p class="mt-4 text-gray-600 leading-relaxed">Get expert advice and support from your home with convenient online consultation options.</p>
      </div>
    </div>
  </div>
</section>

<!-- Why Choose Section -->
<section class="py-20 relative bg-cover bg-center" style="background-image: url('/images/stock-babies.jpeg')">
  <!-- Semi-transparent overlay -->
  <div class="absolute inset-0 bg-blue-100/70 backdrop-blur-sm"></div>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div class="text-center">
      <h2 class="text-3xl font-serif text-blue-950 sm:text-4xl">Why Choose Lactation Success</h2>
      <p class="mt-4 text-xl text-blue-900 max-w-2xl mx-auto">Every woman and baby's feeding journey is personal. Breastfeeding can be difficult, but it can get better. I'm here to give you the confidence and guidance to find joy in that journey.</p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div class="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300">
        <h3 class="text-xl font-serif text-blue-950 font-semibold">Personalized Approach</h3>
        <p class="mt-4 text-blue-900 leading-relaxed">Every mother and baby pair is unique. I provide customized support tailored to your specific needs and goals.</p>
      </div>

      <div class="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300">
        <h3 class="text-xl font-serif text-blue-950 font-semibold">Evidence-Based Care</h3>
        <p class="mt-4 text-blue-900 leading-relaxed">As an IBCLC certified consultant, I provide up-to-date, research-based guidance you can trust.</p>
      </div>

      <div class="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300">
        <h3 class="text-xl font-serif text-blue-950 font-semibold">Flexible Support Options</h3>
        <p class="mt-4 text-blue-900 leading-relaxed">Choose from prenatal education, in-home visits, or telehealth consultations to fit your schedule and comfort level.</p>
      </div>

      <div class="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300">
        <h3 class="text-xl font-serif text-blue-950 font-semibold">Insurance Accepted</h3>
        <p class="mt-4 text-blue-900 leading-relaxed">Many insurance plans cover lactation services. I'll help you understand your coverage and benefits.</p>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="py-20 bg-gradient-to-b from-white to-blue-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-serif text-blue-900 sm:text-4xl">What Mothers Say</h2>
      <p class="mt-4 text-xl text-gray-600">Real experiences from mothers I've helped</p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
      <!-- Testimonial 1 -->
      <div class="bg-white rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 relative">
        <div class="absolute -top-4 left-8 text-blue-700">
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <blockquote class="mt-4">
          <p class="text-lg text-gray-600 italic">Carolyn was quick to respond to my breastfeeding concerns following mastitis. She offered comprehensive advice and followed up to make sure we were back on track. Her help and knowledge are invaluable!</p>
          <footer class="mt-6">
            <p class="text-blue-900 font-medium flex items-center gap-2">
              <span class="text-blue-400">—</span>
              <span class="font-serif text-lg">Maria M.</span>
            </p>
          </footer>
        </blockquote>
      </div>

      <!-- Testimonial 2 -->
      <div class="bg-white rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 relative">
        <div class="absolute -top-4 left-8 text-blue-700">
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <blockquote class="mt-4">
          <p class="text-lg text-gray-600 italic">I was just producing enough milk to feed my son after he was born, it was a struggle. Then I experienced a severe allergic reaction when he was 3 months old. Due to the stress and medication my supply dropped dramatically. I was at a loss, feeling like I failed my son. With Carolyn's knowledge, tips and encouragement she not only brought back my supply but also my confidence during my lactation journey.</p>
          <footer class="mt-6">
            <p class="text-blue-900 font-medium flex items-center gap-2">
              <span class="text-blue-400">—</span>
              <span class="font-serif text-lg">Ellen D.</span>
            </p>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-blue-50 rounded-2xl shadow-soft overflow-hidden border border-blue-100">
      <div class="px-8 py-16 sm:px-16 sm:py-20">
        <div class="text-center">
          <h2 class="text-3xl font-serif text-blue-900 sm:text-4xl">Ready to start your journey?</h2>
          <p class="mt-4 text-xl text-blue-700">Schedule a consultation today and take the first step toward a confident feeding experience.</p>
          <div class="mt-10">
            <a href="/appointments" class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-700 hover:bg-blue-800 transform hover:-translate-y-0.5 transition-all duration-300 shadow-soft hover:shadow-lg">
              Schedule an Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .landing-container {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .content-wrapper {
    display: flex;
    max-width: 1200px;
    width: 100%;
    gap: 40px;
    align-items: center;
    padding: 20px;
  }

  .image-container {
    flex: 1;
    max-width: 400px;
  }

  .landing-image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .text-container {
    flex: 1;
    text-align: center;
    color: #1a365d;
  }

  h1 {
    font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
    font-size: 3.5rem;
    margin: 0 0 20px 0;
    letter-spacing: -0.025em;
  }

  .coming-soon-wrapper {
    background: linear-gradient(135deg, #1a365d 0%, #2a4a7d 100%);
    padding: 20px;
    border-radius: 10px;
    margin: 0 auto 30px;
    max-width: 80%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
    font-size: 2.8rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: -0.025em;
  }

  h3 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 2.2rem;
    font-weight: 300;
    margin: 5px 0 0 0;
    letter-spacing: 0.025em;
  }

  .support-text {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 1.5rem;
    margin: 0 0 15px 0;
    font-weight: 300;
    letter-spacing: 0.5px;
  }

  .credentials {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 1.2rem;
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  /* Mobile responsive design */
  @media (max-width: 768px) {
    .landing-container {
      align-items: flex-start;
      padding-top: 40px;
    }

    .content-wrapper {
      flex-direction: column;
      gap: 20px;
    }

    .image-container {
      max-width: 300px;
    }

    h1 {
      font-size: 2.5rem;
    }

    .coming-soon-wrapper {
      max-width: 100%;
      padding: 15px;
    }

    h2 {
      font-size: 2.2rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    .support-text {
      font-size: 1.2rem;
    }

    .credentials {
      font-size: 1rem;
    }
  }

  /* Reset default margins and padding */
  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(html) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(*, *:before, *:after) {
    box-sizing: inherit;
  }
</style>
