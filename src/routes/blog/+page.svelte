<script>
  export let data;

  import TagPill from "$lib/components/TagPill.svelte";
</script>
  
<section class="flow">
  <h1>Blog posts</h1>
  <div class="card-grid">
    {#each data.posts as post}
      <article class="blog-card">
        <a href={post.route}>
          <div class="imageContainer">
            <img
              src={post.srcPath + post.meta.image.url}
              alt={post.meta.image.alt}
            />
          </div>
        </a>
        <div class="tag-bar">
          <ul class="tags">
            {#each post.meta.tags as tag}
              <li>
                <TagPill tagName={tag} />
              </li>
            {/each}
          </ul>
          <date class="datestamp">
            {post.meta.date.slice(0, 10)}
          </date>
        </div>
        <h2>
          <a href={post.route}>{post.meta.title}</a>
        </h2>
        <p class="description">{post.meta.description}</p>
      </article> 
    {/each}
  </div>
</section>