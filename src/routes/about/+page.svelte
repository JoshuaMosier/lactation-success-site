<script lang="ts">
  // No form data needed for About page
</script>

<svelte:head>
  <title>About Me - Lactation Success LLC</title>
  <meta name="description" content="Contact Carolyn Mosier, International Board Certified Lactation Consultant, RN, and Advanced Practice Nurse serving the Northern Virginia area." />
</svelte:head>

<!-- Header -->
<section class="bg-cover bg-center py-20" style="background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.75)), url('/images/peony.jpg');">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-serif text-theme-900 sm:text-5xl md:text-6xl">
        <span class="block">About Me</span>
      </h1>
      <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">I'm dedicated to supporting your breastfeeding journey</p>
    </div>
  </div>
</section>

<!-- Contact Content -->
<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Information -->
      <div>
        <div class="bg-white rounded-xl shadow-lg p-8 border border-theme-100 hover:shadow-xl transition-shadow duration-300">
          <!-- Profile Section -->
          <div class="text-center mb-8 pb-6 border-b border-theme-100">
            <div class="w-48 h-48 rounded-xl overflow-hidden border-4 border-white shadow-lg mb-6 mx-auto">
              <img
                src="/images/mirror-crop.jpg"
                alt="Carolyn Mosier, IBCLC"
                class="w-full h-full object-cover"
              />
            </div>
            <h2 class="text-3xl text-theme-900 mb-3 font-serif">Carolyn Mosier</h2>
            <div class="flex items-center justify-center space-x-3 text-theme-700 font-medium text-lg">
              <span>APRN</span>
              <span class="text-theme-300">•</span>
              <span>IBCLC</span>
              <span class="text-theme-300">•</span>
              <span>RLC</span>
            </div>
          </div>

          <h2 class="text-4xl font-serif text-theme-700 mb-8 pb-4 border-b border-theme-100">Get in Touch</h2>
          
          <dl class="space-y-8">
            <div>
              <dt class="sr-only">Phone</dt>
              <dd class="flex items-center p-3 hover:bg-theme-50 rounded-lg transition-colors duration-300">
                <svg class="h-6 w-6 text-theme-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="ml-3 text-gray-600 font-medium">
                  (703)-599-9180
                </span>
              </dd>
            </div>

            <div>
              <dt class="sr-only">Email</dt>
              <dd class="flex items-center p-3 hover:bg-theme-50 rounded-lg transition-colors duration-300">
                <svg class="h-6 w-6 text-theme-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="ml-3 text-gray-600 font-medium">
                  carolyn.mosier@lactationsuccess.com
                </span>
              </dd>
            </div>

            <div>
              <dt class="sr-only">Location</dt>
              <dd class="flex items-center p-3 hover:bg-theme-50 rounded-lg transition-colors duration-300">
                <svg class="h-6 w-6 text-theme-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="ml-3 text-gray-600 font-medium">
                  Currently serving the Northern Virginia area
                </span>
              </dd>
            </div>
          </dl>

          <div class="mt-8 pt-6 border-t border-theme-100">
            <p class="text-gray-600 italic">
              It is a privilege to share my experience and expertise with mothers throughout their breastfeeding journey. Please feel free to reach out to discuss how I can support you in achieving your breastfeeding goals.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Professional Information -->
      <div class="space-y-8">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-theme-100">
          <h2 class="text-2xl font-serif text-theme-900 mb-6">Professional Background</h2>
          <div class="space-y-4 text-gray-600">
            <p>
              I am an International Board Certified Lactation Consultant, RN, and Advanced Practice Nurse. With 30+ years of experience in maternal child healthcare, I bring a well-rounded approach to lactation support.
            </p>
            <p>
              My professional journey includes extensive experience as a NICU nurse, where I provided comprehensive care, including assisting breastfeeding mothers. More recently, I've focused on providing skilled lactation support across different stages - from prenatal preparation through postpartum care, in both inpatient and outpatient settings.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 border border-theme-100">
          <h2 class="text-2xl font-serif text-theme-900 mb-6">My Approach</h2>
          <p class="text-gray-600">
            My philosophy centers on meeting mothers and babies where they are and developing strategies that maximize their success. I believe in understanding each mother's unique goals, addressing their specific concerns, and providing supportive guidance throughout their breastfeeding journey.
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 border border-theme-100">
          <h2 class="text-2xl font-serif text-theme-900 mb-6">Personal Experience</h2>
          <p class="text-gray-600">
            As a mother of four wonderful breastfed children who are now starting families of their own, I understand firsthand the joys and challenges of breastfeeding. My husband and I both served in the United States Navy, giving me unique insight into the challenges faced by busy working active duty families.
          </p>
          <br>
          <p class="text-gray-600">
            In my free time I like to garden, travel and spend time with my family including my new granddaughter!
          </p>
        </div>
      </div>
    </div>
  </div>
</section> 