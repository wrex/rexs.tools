<script type="ts">
  export let posts = [];
  const rowSize = 2;
  
  // Turn flat list of posts into array of rows, with rowSize elements in each row
  let rows = [];
  for (let i = 0; i < posts.length; i += rowSize) {
    rows.push(posts.slice(i, i + rowSize));
  }
</script>

{#each rows as rowPosts, i}
  <section class="grid">
    {#each rowPosts as post}
    <article>
      <hgroup>
        <h4><a href={post.url}>{post.frontmatter.title}</a></h4>
        <date>{post.frontmatter.pubDate.slice(0,10)}</date>
      </hgroup>
    </article>
    {/each}
  </section>
{/each}

<style>
  date {
    color: var(--secondary);
  }
</style>