<script>
  /** @type {string} */
  export let title;
  /** @type {string} */
  export let date;
  /** @type {string} */
  export let description;
  /** @type {{url: string, alt: string}} */
  export let image;

  /** @type {string[]}*/
  export let tags = [];

  import TagPill from "$lib/components/TagPill.svelte";
  import {currentPage} from "$lib/stores/currentPage";
</script>

<svelte:head>
  <title>{title}</title>
  <meta data-key="description" name="description" content="{description}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
  <meta property="og:image" content={image.url}>
  <meta property="twitter:image" content={image.url}>
</svelte:head>
  
<article class="blog-article flow">
  <h1 class="blog-title"><a aria-hidden="true" tabindex="-1" href={$currentPage}><span class="icon icon-link"></span></a>{@html title}</h1>
  <p class="description">{@html description}</p>
  <div class="tag-bar">
    <ul class="tags">
      {#each tags as tag}
          <TagPill tagName={tag} large />
      {/each}
    </ul>
    <date class="datestamp">{new Date(date).toDateString()}</date>
  </div>
    <div class="flow">
      <slot />
    </div>
</article>

<style>

</style>