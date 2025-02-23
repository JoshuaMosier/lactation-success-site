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
      question: "When should I schedule a lactation consultation?",
      answer: "It's beneficial to schedule a consultation before your baby arrives to prepare for breastfeeding. However, many families seek support in the first few days or weeks after birth, especially if they're experiencing challenges with latch, milk supply, or pain. We're here to help at any stage of your journey."
    },
    {
      question: "What happens during a consultation?",
      answer: "During a consultation, we'll discuss your goals and concerns, observe a feeding session, assess your baby's latch and positioning, check your baby's weight, and develop a personalized care plan. We'll also provide practical tips and techniques you can implement right away."
    },
    {
      question: "How long does a consultation last?",
      answer: "Initial consultations typically last 90-120 minutes to allow time for a thorough assessment and care plan development. Follow-up visits are usually 60-90 minutes. Virtual consultations are typically 60 minutes."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes, we offer secure video consultations for follow-up care and minor concerns. While in-person visits are recommended for initial consultations, virtual support can be very effective for ongoing care and quick questions."
    },
    {
      question: "Is lactation support covered by insurance?",
      answer: "Many insurance plans cover lactation support services under the Affordable Care Act. We can help you understand your coverage and provide necessary documentation for insurance claims. We also offer self-pay options for families without coverage."
    },
    {
      question: "What areas do you serve?",
      answer: "We provide in-home consultations throughout Northern Virginia and the DC metropolitan area. Virtual consultations are available to families anywhere in Virginia and DC."
    },
    {
      question: "How quickly can I get an appointment?",
      answer: "We understand the time-sensitive nature of breastfeeding challenges and strive to see new clients within 24-48 hours of contact. Emergency appointments may be available for urgent situations."
    },
    {
      question: "What should I prepare for the consultation?",
      answer: "Try to time the consultation close to when your baby typically feeds. Have any feeding supplies you use ready (pump parts, nipple shields, etc.). Keep a log of feeding times and wet/dirty diapers if possible. Most importantly, don't clean or prepare anything special - we want to see your real feeding environment."
    }
  ];
</script>

<svelte:head>
  <title>Frequently Asked Questions - Lactation Success</title>
  <meta name="description" content="Find answers to common questions about lactation consulting services, insurance coverage, and what to expect during consultations." />
</svelte:head>

<!-- Header -->
<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-serif text-gray-900">Frequently Asked Questions</h1>
      <p class="mt-4 text-lg text-gray-500">Find answers to common questions about our services</p>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <div class="space-y-6">
        {#each faqs as faq, index}
          <div class="bg-white rounded-lg shadow-sm">
            <button
              class="w-full px-6 py-4 text-left focus:outline-none"
              on:click={() => toggleQuestion(index)}
            >
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">{faq.question}</h2>
                <span class="ml-6 flex-shrink-0">
                  {#if openQuestions.has(index)}
                    <svg class="h-5 w-5 text-pink-900" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                  {:else}
                    <svg class="h-5 w-5 text-pink-900" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                  {/if}
                </span>
              </div>
            </button>
            {#if openQuestions.has(index)}
              <div class="px-6 pb-4">
                <p class="text-gray-500">{faq.answer}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>

      <!-- Still Have Questions -->
      <div class="mt-12 text-center">
        <h2 class="text-2xl font-serif text-gray-900">Still Have Questions?</h2>
        <p class="mt-4 text-gray-500">
          Don't hesitate to reach out. We're here to help you on your breastfeeding journey.
        </p>
        <div class="mt-8">
          <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-900 hover:bg-pink-800">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </div>
</section> 