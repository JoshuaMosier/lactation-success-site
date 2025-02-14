<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="landing-container">
  <div class="content-wrapper">
    <div class="image-container">
      <img 
        src="{base}/landing-stock-photo.jpeg" 
        alt="Mother and baby breastfeeding illustration"
        class="landing-image"
      />
    </div>
    <div class="text-container">
      <h1>Lactation Success</h1>
      <div class="coming-soon-wrapper">
        <h2>Coming Soon</h2>
        <h3>March 2025</h3>
      </div>
      <p class="support-text">In home and virtual breastfeeding support</p>
      <p class="credentials">by Carolyn Mosier APRN, IBCLC, RLC</p>
    </div>
  </div>
</div>

<style>
  @font-face {
    font-family: 'Cavolini';
    src: url('/fonts/Cavolini.ttf') format('truetype');
  }

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
    font-family: 'Cavolini', sans-serif;
    font-size: 3.5rem;
    margin: 0 0 20px 0;
    letter-spacing: 1px;
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
    font-family: 'Cavolini', sans-serif;
    font-size: 2.8rem;
    margin: 0;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h3 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 2.2rem;
    font-weight: 300;
    margin: 5px 0 0 0;
    color: #ffffff;
    letter-spacing: 3px;
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
