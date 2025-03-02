<script lang="ts">
  import { base } from '$app/paths';
  import { theme } from '$lib/stores/theme';
</script>

<svelte:head>
  <title>Lactation Success LLC - Professional Breastfeeding Support in the Northern Virginia Area</title>
  <meta name="description" content="Professional lactation consulting services in the Northern Virginia area. Develop a predictable feeding routine and bond with your baby." />
  <link rel="preload" as="image" href="/images/stock-temp-logo-blue.png">
  <link rel="preload" as="image" href="/images/stock-temp-logo-pink.png">
</svelte:head>

<!-- Hero Section -->
<section class="py-24 relative">
  <!-- Background elements that transition with opacity -->
  <div class="absolute inset-0 -z-10">
    <!-- Boy gradient -->
    <div 
      class="absolute inset-0 bg-gradient-to-b from-boy-50 to-white transition-opacity duration-[var(--theme-transition-duration)] ease-[var(--theme-transition-timing)]"
      style="opacity: {$theme === 'boy' ? '1' : '0'}"
    ></div>
    <!-- Girl gradient -->
    <div 
      class="absolute inset-0 bg-gradient-to-b from-girl-50 to-white transition-opacity duration-[var(--theme-transition-duration)] ease-[var(--theme-transition-timing)]"
      style="opacity: {$theme === 'girl' ? '1' : '0'}"
    ></div>
  </div>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <!-- Logo Overlay -->
    <div class="absolute -left-[20%] top-1/2 -translate-y-1/2 hidden xl:block w-[45%] max-w-[500px]">
      <div class="relative w-full pb-[100%]">
        <!-- Both images are rendered with opacity transitions -->
        <div 
          class="absolute inset-0 bg-no-repeat bg-center bg-contain transition-opacity duration-[var(--theme-transition-duration)]"
          style="background-image: url('/images/stock-temp-logo-blue.png'); opacity: {$theme === 'boy' ? '1' : '0'}"
        ></div>
        <div 
          class="absolute inset-0 bg-no-repeat bg-center bg-contain transition-opacity duration-[var(--theme-transition-duration)]"
          style="background-image: url('/images/stock-temp-logo-pink.png'); opacity: {$theme === 'girl' ? '1' : '0'}"
        ></div>
      </div>
    </div>
    
    <div class="text-center">
      <h1 class="text-4xl tracking-tight font-serif sm:text-5xl md:text-6xl">
        <span class="block text-theme-900">Professional <span class="text-theme-700">in-home </span> and </span>
        <span class="block text-theme-700 mt-2">telehealth <span class="text-theme-900">breastfeeding support<span></span>
        <span class="block text-theme-900 mt-2">for moms and babies</span>
      </h1>
      
      <!-- Profile Card -->
      <div class="mt-12 flex flex-col items-center">
        <div class="w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
          <img src="/images/mirror-crop.jpg" alt="Carolyn Mosier" class="w-full h-full object-cover" />
        </div>
        <div class="text-center">
          <h2 class="text-2xl text-theme-900 mb-2">Carolyn Mosier</h2>
          <div class="flex items-center justify-center space-x-3 text-theme-700 font-medium text-2xl">
            <span>APRN</span>
            <span class="text-theme-300">•</span>
            <span>IBCLC</span>
            <span class="text-theme-300">•</span>
            <span>RLC</span>
          </div>
          <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Helping Northern Virginia area families create successful breastfeeding experiences through expert lactation support.
          </p>
        </div>
      </div>

      <div class="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
        <div class="rounded-md">
          <a href="/appointments" class="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-theme-700 hover:bg-theme-800 md:py-4 md:text-xl md:px-10 transform hover:-translate-y-0.5 transition-[transform,background-color,box-shadow] duration-[var(--theme-transition-duration)] shadow-soft hover:shadow-lg">
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
      <h2 class="text-3xl font-serif text-theme-900 sm:text-4xl">How I Can Help</h2>
      <p class="mt-4 text-xl text-gray-600">Personalized support for your breastfeeding journey</p>
    </div>
    
    <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Service Card 1 -->
      <div class="bg-theme-50 text-theme-900 rounded-xl shadow-soft p-8 hover:shadow-lg transition-[background-color,color,box-shadow] duration-[var(--theme-transition-duration)] border border-theme-50 flex flex-col">
        <h3 class="text-xl font-serif text-theme-900 min-h-[4rem]">Prenatal Consultations</h3>
        <p class="mt-4 text-gray-600 leading-relaxed">Prepare for successful breastfeeding before your baby arrives with personalized guidance and education.</p>
      </div>

      <!-- Service Card 2 -->
      <div class="bg-theme-50 text-theme-900 rounded-xl shadow-soft p-8 hover:shadow-lg transition-[background-color,color,box-shadow] duration-[var(--theme-transition-duration)] border border-theme-50 flex flex-col">
        <h3 class="text-xl font-serif text-theme-900 min-h-[4rem]">In-Home Support</h3>
        <p class="mt-4 text-gray-600 leading-relaxed">Receive hands-on support and guidance in the comfort of your own home during those crucial early weeks and beyond.</p>
      </div>

      <!-- Service Card 3 -->
      <div class="bg-theme-50 text-theme-900 rounded-xl shadow-soft p-8 hover:shadow-lg transition-[background-color,color,box-shadow] duration-[var(--theme-transition-duration)] border border-theme-50 flex flex-col">
        <h3 class="text-xl font-serif text-theme-900 min-h-[4rem]">Telehealth Consultations</h3>
        <p class="mt-4 text-gray-600 leading-relaxed">Get expert advice and support from your home with convenient online consultation options.</p>
      </div>
    </div>
  </div>
</section>

<!-- Why Choose Section -->
<section class="py-20 relative bg-cover bg-center" style="background-image: url('/images/stock-babies.jpeg')">
  <!-- Semi-transparent overlay -->
  <div class="absolute inset-0 bg-theme-100/70 backdrop-blur-sm"></div>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div class="text-center">
      <h2 class="text-3xl font-serif text-theme-950 sm:text-4xl">Why Choose Lactation Success</h2>
      <p class="mt-4 text-xl text-theme-900 max-w-2xl mx-auto">Every woman and baby's feeding journey is personal. Breastfeeding can be difficult, but it can get better. I'm here to give you the confidence and guidance to find joy in that journey.</p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div class="bg-theme-50 text-theme-900 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-lg transition-[background-color,color,box-shadow] duration-[var(--theme-transition-duration)]">
        <h3 class="text-xl font-serif text-theme-950 font-semibold">Personalized Approach</h3>
        <p class="mt-4 text-theme-900 leading-relaxed">Every mother and baby pair is unique. I provide customized support tailored to your specific needs and goals.</p>
      </div>

      <div class="bg-theme-50 text-theme-900 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-lg transition-[background-color,color,box-shadow] duration-[var(--theme-transition-duration)]">
        <h3 class="text-xl font-serif text-theme-950 font-semibold">Evidence-Based Care</h3>
        <p class="mt-4 text-theme-900 leading-relaxed">As an IBCLC certified consultant, I provide up-to-date, research-based guidance you can trust.</p>
      </div>

      <div class="bg-theme-50 text-theme-900 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-lg transition-[background-color,color,box-shadow] duration-[var(--theme-transition-duration)]">
        <h3 class="text-xl font-serif text-theme-950 font-semibold">Flexible Support Options</h3>
        <p class="mt-4 text-theme-900 leading-relaxed">Choose from prenatal education, in-home visits, or telehealth consultations to fit your schedule and comfort level.</p>
      </div>

      <div class="bg-theme-50 text-theme-900 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-lg transition-[background-color,color,box-shadow] duration-[var(--theme-transition-duration)]">
        <h3 class="text-xl font-serif text-theme-950 font-semibold">Insurance Accepted</h3>
        <p class="mt-4 text-theme-900 leading-relaxed">Many insurance plans cover lactation services. I'll help you understand your coverage and benefits.</p>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="py-20 bg-gradient-to-b from-white to-theme-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-serif text-theme-900 sm:text-4xl">What Mothers Say</h2>
      <p class="mt-4 text-xl text-gray-600">Real experiences from mothers I've helped</p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
      <!-- Testimonial 1 -->
      <div class="bg-theme-50 text-theme-900 rounded-xl p-8 shadow-soft hover:shadow-lg transition-[background-color,color,box-shadow] duration-[var(--theme-transition-duration)] relative">
        <div class="absolute -top-4 left-8 text-theme-700">
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <blockquote class="mt-4">
          <p class="text-lg text-gray-600 italic">Carolyn was quick to respond to my breastfeeding concerns following mastitis. She offered comprehensive advice and followed up to make sure we were back on track. Her help and knowledge are invaluable!</p>
          <footer class="mt-6">
            <p class="text-theme-900 font-medium flex items-center gap-2">
              <span class="text-theme-400">—</span>
              <span class="font-serif text-lg">Maria M.</span>
            </p>
          </footer>
        </blockquote>
      </div>

      <!-- Testimonial 2 -->
      <div class="bg-theme-50 text-theme-900 rounded-xl p-8 shadow-soft hover:shadow-lg transition-[background-color,color,box-shadow] duration-[var(--theme-transition-duration)] relative">
        <div class="absolute -top-4 left-8 text-theme-700">
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <blockquote class="mt-4">
          <p class="text-lg text-gray-600 italic">I was just producing enough milk to feed my son after he was born, it was a struggle. Then I experienced a severe allergic reaction when he was 3 months old. Due to the stress and medication my supply dropped dramatically. I was at a loss, feeling like I failed my son. With Carolyn's knowledge, tips and encouragement she not only brought back my supply but also my confidence during my lactation journey.</p>
          <footer class="mt-6">
            <p class="text-theme-900 font-medium flex items-center gap-2">
              <span class="text-theme-400">—</span>
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
    <div class="bg-theme-50 rounded-2xl shadow-soft overflow-hidden border border-theme-100">
      <div class="px-8 py-16 sm:px-16 sm:py-20">
        <div class="text-center">
          <h2 class="text-3xl font-serif text-theme-900 sm:text-4xl">Ready to start your journey?</h2>
          <p class="mt-4 text-xl text-theme-700">Schedule a consultation today and take the first step toward a confident feeding experience.</p>
          <div class="mt-10">
            <a href="/appointments" class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-theme-700 hover:bg-theme-800 transform hover:-translate-y-0.5 transition-[transform,background-color,box-shadow] duration-[var(--theme-transition-duration)] shadow-soft hover:shadow-lg">
              Schedule an Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>