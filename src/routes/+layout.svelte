
<script>
  import "$lib/styles/global.css";
  import {currentPage} from "$lib/stores/currentPage";
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '../lib/components/Footer.svelte';
  
  import { fade } from 'svelte/transition'

  export let data;
  $: currentPage.set(data.currentRoute)
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