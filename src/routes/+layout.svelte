
<script>
  import '../app.postcss';
  import "../styles/global.css";
</script>

<!-- <Nav current={current} /> -->
<header class="container">
  <nav>top nav goes here</nav>
</header>

<main class="container">
  <slot />
</main>

<!-- <Footer /> -->
<footer class="container">
  <p>footer goes here</p>
</footer>