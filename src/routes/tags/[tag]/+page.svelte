<script>
  /** @type {import("./$types").PageData} */
  export let data;

  import CardGrid from "$lib/components/CardGrid.svelte";
</script>

<svelte:head>
  <title>{data.tag}</title>
</svelte:head>

<section class="flow">
<h1>Tag: <em>{data.tag}</em></h1>
<CardGrid items={data.posts} />
</section>