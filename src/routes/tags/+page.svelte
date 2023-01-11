<script>
  /** @type { import("./$types").PageData } */
  export let data;

  import BlogCard from "$lib/components/BlogCard.svelte";
</script>

<svelte:head>
  <title>Tags</title>
</svelte:head>

<section class="flow">
<h1>All tags</h1>
  <div class="card-grid">
    {#each data.posts as post}
      <BlogCard post={post} />
    {/each}
  </div>
</section>