<script>
  export let data;
  </script>
  
  <h1>Blog</h1>
    
  <ul>
    {#each data.posts as post}
      <li>
        <h2>
          <a href={post.routePath}>
            {post.meta.title}
          </a>
        </h2>
        <img src={post.srcPath + post.meta.image.url} alt={post.meta.image.alt}>
        <p>Published {post.meta.date}</p>
      </li>
    {/each}
  </ul>