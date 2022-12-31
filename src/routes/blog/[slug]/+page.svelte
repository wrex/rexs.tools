<script>
  /** @type {import('./$types').PageData} */
  export let data;

  const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta;
  import Kanji from "$lib/components/Kanji.svelte";
</script>

<article>
  <h1>{ title }</h1>
  <p>Published: {date}</p>

  <!-- This works, but seems wrong: need to import Components in +page.svelte
  and the actual markdown file (both) -->
  <div class="markdown flow">{@html data.PostContent}</div>

</article>