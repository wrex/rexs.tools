
<script>
  import '../app.postcss';
  import "../styles/global.css";
</script>

<html lang="en">
  <head>
    <!-- <BaseHead title={title} description={description} permalink={permalink} /> -->
    
    <!-- Global Metadata -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/icon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.webmanifest" />
  </head>
  <body>
    <!-- <Nav current={current} /> -->

    <main class="container">
      <slot />
    </main>

    <!-- <Footer /> -->
  </body>
</html>