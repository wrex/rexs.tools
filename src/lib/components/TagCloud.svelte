<script>
  /** @type {Object.<string,number>}*/
  export let tagCounts = {};

  const countString = (tag) => {
     return tagCounts[tag] ? ` (${tagCounts[tag]})` : ''; 
  }

  import TagPill from "./TagPill.svelte";
</script>

<ul>
  {#each Object.keys(tagCounts) as tag}
    <li>
      <a href={`/tags/${tag}/`}>
        <TagPill 
        tagName={`${tag}${countString(tag)}`} 
        large
        />
      </a>
    </li>
  {/each}
</ul>