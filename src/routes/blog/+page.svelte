<script>
 /** @type { import("./$types").PageData} */ 
  export let data;

  import {siteDescription} from '$lib/config';

  import TagCloud from "$lib/components/TagCloud.svelte";
  import CardGrid from '$lib/components/CardGrid.svelte';

  const tagCounts = data.tagCounts;
</script>

<svelte:head>
	<title>Blog posts</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

  
<section class="flow">
  <h1>Blog posts</h1>
  <aside>
    <TagCloud {tagCounts} />
  </aside>
  <CardGrid items={data.posts} />
</section>

