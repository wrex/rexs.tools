<script>
  export let data;

  import {siteDescription} from '$lib/config';

  import TagPill from "$lib/components/TagPill.svelte";
  import TagCloud from "$lib/components/TagCloud.svelte";
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
    {/each}
  </div>
</section>