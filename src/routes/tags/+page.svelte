<script>
  /** @type { import("./$types").PageData } */
  export let data;
  import CardGrid from "$lib/components/CardGrid.svelte";

</script>

<svelte:head>
  <title>Tags</title>
</svelte:head>

<section class="flow">
<h1>All tags</h1>
<CardGrid items={data.posts} />
</section>