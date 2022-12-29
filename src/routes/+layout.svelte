
<script>
  import '../app.postcss';
  import "../styles/global.css";

  import Nav from './Nav.svelte';
  import Footer from './Footer.svelte';
</script>

<!-- <Nav current={current} /> -->
<header>
  <Nav />
</header>

<main class="container">
  <slot />
</main>

<Footer />