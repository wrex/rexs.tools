<script>
  import {siteTitle, siteDescription, siteImage} from '$lib/config';
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <meta name="description" content={siteDescription}>
  <meta property="og:image" content={siteImage}>
</svelte:head>

<h1>Rex's Tools</h1>
  <section class="hero flow">
    <!-- svelte-preprocess-import-assets-ignore -->
    <img
      class="heroImage"
      src="/images/wrench-600.png"
      alt="A hand holding a wrench"
    />
    <div class="heroText flow">
      <p>
        Thoughts from a lifetime of collecting and <em>using</em> tools and machines
        for wood, metal, and even plastic.
      </p>
      <blockquote>
        Man is a tool-using animal. Without tools he is nothing, with tools he
        is all.
        <cite>&mdash; Thomas Carlyle</cite>
      </blockquote>
    </div>
  </section>