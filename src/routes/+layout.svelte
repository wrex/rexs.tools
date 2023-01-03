
<script>
  import '../app.postcss';
  import "$lib/styles/global.css";

  import Nav from './Nav.svelte';
  import Footer from './Footer.svelte';
  
  import { fade } from 'svelte/transition'

  export let data;
</script>

<header>
  <Nav />
</header>

{#key data.currentRoute}
<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }} class="container">
  <slot />
</main>
{/key}

<Footer />