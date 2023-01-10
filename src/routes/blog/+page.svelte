<script>

 /** @type { import("$lib/types").PostData} */ 
  export let data;

  import {siteDescription} from '$lib/config';

  import TagCloud from "$lib/components/TagCloud.svelte";
  import BlogCard from '$lib/components/BlogCard.svelte';
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
  <div class="card-grid">
    {#each data.posts as post}
      <BlogCard post={post} />
    {/each}
  </div>
</section>