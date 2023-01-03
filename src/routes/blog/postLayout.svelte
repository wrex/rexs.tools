<script>
  /** @type {string} */
  export let title;
  /** @type {string} */
  export let date;
  /** @type {string} */
  export let description;

  /** @type {string[]}*/
  export let tags = [];

  import TagPill from "$lib/components/TagPill.svelte";
</script>

<svelte:head>
  <title>{title}</title>
  <meta data-key="description" name="description" content="{description}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
</svelte:head>
  
<article class="blog-article flow">
  <h1>{title}</h1>
  <p class="description">{description}</p>
  <div class="tag-bar">
    <ul class="tags">
      {#each tags as tag}
        <li class="tag">
          <TagPill tagName={tag} large />
        </li>
      {/each}

    </ul>
    <date class="datestamp">{new Date(date).toDateString()}</date>
  </div>
    <div class="flow">
      <slot />
    </div>
</article>