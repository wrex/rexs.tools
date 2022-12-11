<script type="ts">
  export let posts = [];
  const rowSize = 3;
  
  // Turn flat list of posts into array of rows, with rowSize elements in each row
  let rows = [];
  for (let i = 0; i < posts.length; i += rowSize) {
    rows.push(posts.slice(i, i + rowSize));
  }

  const lastRowLength = rows[rows.length - 1].length;
  const emptyPostCount = rowSize - lastRowLength;
  const emptyPost = {
    frontmatter: {
      image: {
        url: "",
        alt: "",
      },
      title: "",
      description: "",
      pubDate: "",
      tags: [],
    },
    url: "",
  }
  for (let i = 0; i < emptyPostCount; i += 1) {
    rows[rows.length - 1].push(emptyPost);
  }
</script>

{#each rows as rowPosts, i}
  <div class="grid">
    {#each rowPosts as post}
    <article>
      <div class="imageContainer"><img src={post.frontmatter.image.url} alt={post.frontmatter.image.alt} /></div>
      <h4><a href={post.url}>{post.frontmatter.title}</a></h4>
      <p class="description">{post.frontmatter.description}</p>
      <ul class="tags">
        {#each post.frontmatter.tags as tag}
          <li><a href="#">{tag}</a></li>
        {/each}
      </ul>
      <date>{post.frontmatter.pubDate.slice(0,10)}</date>
    </article>
    {/each}
  </div>
{/each}

<style>
  article {
    position: relative;
    padding-block: 1rem;
    z-index: -1;
  }

  article date {
    position: absolute;
    right: var(--block-spacing-horizontal);
  }

  .tags {
    font-size: small;
    padding: 0;
    width: 90%;
  }

  .description {
    font-size: small;
    color: var(--secondary);
  }

  .tags li {
    list-style-type: none;
    float: left;
    margin-right: 1em;
  }

  .imageContainer {
    display: flex;
    align-items: center;
    height: 20vh;
    margin-block: 1rem;
  }
  date {
    color: var(--secondary);
    font-size: small;
  }
</style>