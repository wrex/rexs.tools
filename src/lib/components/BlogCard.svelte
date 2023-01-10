<script>
  /** @type { import("$lib/types").Post } */
  export let post;

  import TagPill from "./TagPill.svelte";
</script>

<article class="blog-card">
  <a href={post.route}>
    <div class="imageContainer">
      <img
        src={post.meta.image.url}
        alt={post.meta.image.alt}
      />
    </div>
  </a>
  <div class="tag-bar">
    <ul class="tags">
      {#each post.meta.tags as tag}
        <li>
          <a href={`/tags/${tag}`}>
            <TagPill tagName={tag} />
          </a>
        </li>
      {/each}
    </ul>
    <date class="datestamp">
      {post.meta.date.slice(0, 10)}
    </date>
  </div>
  <h2>
    <a href={post.route}>{@html post.meta.title}</a>
  </h2>
  <p class="description">{@html post.meta.description}</p>
</article> 