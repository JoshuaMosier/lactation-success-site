<script lang="ts">
  // Add any necessary imports here
  let openQuestions = new Set();

  function toggleQuestion(index: number) {
    if (openQuestions.has(index)) {
      openQuestions.delete(index);
    } else {
      openQuestions.add(index);
    }
    openQuestions = openQuestions; // trigger reactivity
  }

  const faqs = [
    {
      question: "How do I make an appointment?",
      answer: "See the appointments page for more information. <a href='/appointments' class='text-theme-900 hover:text-theme-700 underline'>Click here</a>"
    },
    {
      question: "Where do you see clients for appointments?",
      answer: "I see mothers and babies in their homes and virtually via telehealth appointments."
    },
    {
      question: "What areas do you serve?",
      answer: "I currently cover a 25 mile radius from Falls Church, Virginia. Telehealth consultations are available to families anywhere in the Northern Virginia area."
    },
    {
      question: "Do you charge for travel?",
      answer: "No, I do not charge any additional fees for travel within my service area."
    },
    {
      question: "What should I prepare for the consultation?",
      answer: "Try to time baby's feeding so that they are hungry at the appointment time. I'll want to assess a feed and offer advice. Prepare any questions you may have so I can address any issues. Feel free to have a support person be part of the consultation."
    },
    {
      question: "Do you take insurance?",
      answer: "Yes, I work with The Lactation Network who process insurance inquiries for lactation consultants. <a href='https://go.lactationnetwork.com/LactationSuccessLLC' class='text-theme-900 hover:text-theme-700 underline'>Click here</a> for more information and to check if your insurance is covered."
    },
    {
      question: "When should I schedule a lactation consultation?",
      answer: "It's beneficial to schedule a consultation before your baby arrives to prepare for breastfeeding. However, many families seek support in the first few days or weeks after birth, especially if they're experiencing challenges with latch, milk supply, or pain. I'm here to help at any stage of your journey."
    },
    {
      question: "What happens during a consultation?",
      answer: "During a consultation, we'll discuss your goals and concerns, observe a feeding session, assess your baby's latch and positioning, check your baby's weight, and develop a personalized care plan. We'll also provide practical tips and techniques you can implement right away."
    },
    {
      question: "How long does a consultation last?",
      answer: "Initial consultations typically last 90-120 minutes to allow time for a thorough assessment and care plan development. Follow-up visits are usually 60-90 minutes. Telehealth consultations are typically 60 minutes."
    }
  ];
</script>

<svelte:head>
  <title>Frequently Asked Questions - Lactation Success LLC</title>
  <meta name="description" content="Find answers to common questions about lactation consulting services, insurance coverage, and what to expect during consultations." />
</svelte:head>

<!-- Header -->
<section class="bg-cover bg-center py-20" style="background-image: linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), url('/images/stock-sleeping-baby.jpeg');">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-serif text-theme-900 sm:text-5xl md:text-6xl">
        <span class="block">Frequently Asked Questions</span>
      </h1>
      <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services</p>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <div class="space-y-8">
        {#each faqs as faq, index}
          <div class="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
            <button
              class="w-full px-8 py-6 text-left focus:outline-none"
              on:click={() => toggleQuestion(index)}
            >
              <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold text-gray-900">{faq.question}</h2>
                <span class="ml-6 flex-shrink-0">
                  {#if openQuestions.has(index)}
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
            {#if openQuestions.has(index)}
              <div class="px-8 pb-6">
                <p class="text-lg text-gray-600">{@html faq.answer}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>

      <!-- Still Have Questions -->
      <div class="mt-12 text-center">
        <h2 class="text-2xl font-serif text-gray-900">Still Have Questions?</h2>
        <p class="mt-4 text-gray-500">
          Don't hesitate to reach out. I'm here to help you on your breastfeeding journey.
        </p>
        <div class="mt-8">
          <a href="/about" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-theme-900 hover:bg-theme-800">
            About Me
          </a>
        </div>
      </div>
    </div>
  </div>
</section> 