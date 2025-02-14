<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="landing-container">
  <img 
    src="{base}/Lactation Success landing page.png" 
    alt="Lactation Success Landing Page"
    class="landing-image"
  />
</div>

<style>
  .landing-container {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .landing-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  /* Reset default margins and padding */
  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(html) {
    margin: 0;
    padding: 0;
  }
</style>
