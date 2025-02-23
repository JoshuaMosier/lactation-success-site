<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Company Info -->
      <div class="col-span-1 md:col-span-2">
        <h3 class="text-lg font-serif text-pink-900 mb-4">Lactation Success</h3>
        <p class="text-gray-600 mb-4">
          Supporting mothers and babies in Northern Virginia & DC area with professional lactation consulting services.
        </p>
        <p class="text-gray-600">
          IBCLC Certified • Available 7 Days a Week
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
        <ul class="space-y-3">
          <li><a href="/services" class="text-gray-600 hover:text-pink-900">Services</a></li>
          <li><a href="/insurance" class="text-gray-600 hover:text-pink-900">Insurance</a></li>
          <li><a href="/faq" class="text-gray-600 hover:text-pink-900">FAQs</a></li>
          <li><a href="/contact" class="text-gray-600 hover:text-pink-900">Contact</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
        <ul class="space-y-3">
          <li class="text-gray-600">Northern Virginia & DC Area</li>
          <li>
            <a href="tel:+17035999180" class="text-gray-600 hover:text-pink-900">
              (703)-599-9180
            </a>
          </li>
          <li>
            <a href="mailto:carolyn.mosier@lactationsuccess.com" class="text-gray-600 hover:text-pink-900">
              carolyn.mosier@lactationsuccess.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-12 pt-8 border-t border-gray-200">
      <p class="text-center text-gray-500 text-sm">
        © {currentYear} Lactation Success. All rights reserved.
      </p>
    </div>
  </div>
</footer> 