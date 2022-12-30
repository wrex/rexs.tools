
<script>
  import '../app.postcss';
  import "$lib/styles/global.css";

  import Nav from './Nav.svelte';
  import Footer from './Footer.svelte';

  // prerender everything by default (in this top level layout)
  // turn this off on individual routes by settting prerender to false
  export const prerender = true;
</script>

<!-- <Nav current={current} /> -->
<header>
  <Nav />
</header>

<main class="container">
  <slot />
</main>

<Footer />