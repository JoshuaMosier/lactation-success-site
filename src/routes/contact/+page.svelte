<script lang="ts">
  let formData = {
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    serviceType: '',
    message: '',
    dueDate: ''
  };

  function handleSubmit() {
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  }
</script>

<svelte:head>
  <title>Contact Me - Lactation Success</title>
  <meta name="description" content="Get in touch with our lactation consultants. Schedule a consultation or ask questions about our services in Northern Virginia and DC area." />
</svelte:head>

<!-- Header -->
<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-serif text-gray-900">Contact Me</h1>
      <p class="mt-4 text-lg text-gray-500">We're here to support you on your breastfeeding journey</p>
    </div>
  </div>
</section>

<!-- Contact Content -->
<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Information -->
      <div>
        <div class="prose prose-pink">
          <h2 class="text-2xl font-serif text-gray-900">Get in Touch</h2>
          <p class="text-gray-500">
            Whether you're preparing for your breastfeeding journey or need immediate support, we're here to help. Reach out through any of the following methods:
          </p>
        </div>

        <dl class="mt-8 space-y-6">
          <div>
            <dt class="sr-only">Phone</dt>
            <dd class="flex">
              <svg class="h-6 w-6 text-pink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="ml-3 text-gray-500">
                (703)-599-9180
              </span>
            </dd>
          </div>

          <div>
            <dt class="sr-only">Email</dt>
            <dd class="flex">
              <svg class="h-6 w-6 text-pink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="ml-3 text-gray-500">
                carolyn.mosier@lactationsuccess.com
              </span>
            </dd>
          </div>

          <div>
            <dt class="sr-only">Location</dt>
            <dd class="flex">
              <svg class="h-6 w-6 text-pink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="ml-3 text-gray-500">
                Serving Northern Virginia & DC Metro Area
              </span>
            </dd>
          </div>
        </dl>

        <div class="mt-8 prose prose-pink">
          <h3 class="text-xl font-serif text-gray-900">Response Time</h3>
          <p class="text-gray-500">
            We understand the time-sensitive nature of breastfeeding support. We typically respond to all inquiries within 24 hours, and often much sooner for urgent needs.
          </p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-white rounded-lg shadow-sm p-6 lg:p-8">
        <h2 class="text-2xl font-serif text-gray-900">Schedule a Consultation</h2>
        <form class="mt-6 space-y-6" on:submit|preventDefault={handleSubmit}>
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              bind:value={formData.phone}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Preferred Contact Method</label>
            <div class="mt-2 space-x-4">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  bind:group={formData.preferredContact}
                  value="email"
                  class="text-pink-900 focus:ring-pink-500"
                />
                <span class="ml-2">Email</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  bind:group={formData.preferredContact}
                  value="phone"
                  class="text-pink-900 focus:ring-pink-500"
                />
                <span class="ml-2">Phone</span>
              </label>
            </div>
          </div>

          <div>
            <label for="serviceType" class="block text-sm font-medium text-gray-700">Service Type</label>
            <select
              id="serviceType"
              bind:value={formData.serviceType}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            >
              <option value="">Select a service</option>
              <option value="prenatal">Prenatal Consultation</option>
              <option value="inhome">In-Home Support</option>
              <option value="virtual">Virtual Consultation</option>
            </select>
          </div>

          <div>
            <label for="dueDate" class="block text-sm font-medium text-gray-700">Due Date (if applicable)</label>
            <input
              type="date"
              id="dueDate"
              bind:value={formData.dueDate}
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              bind:value={formData.message}
              rows="4"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-900 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section> 