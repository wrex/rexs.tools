<script>
  /** @type {Object.<string,number>}*/
  export let tagCounts = {};

  const sortedTags = Object.keys(tagCounts).sort();

  /**
   * countString -- append count for tag in parens 
   * @param {string} tag
   */
  const countString = (tag) => {
     return tagCounts[tag] ? ` (${tagCounts[tag]})` : ''; 
  }

  import TagPill from "./TagPill.svelte";
</script>

<ul class="tagcloud">
  {#each sortedTags as tag}
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

<style>

.tagcloud {
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-3);
  margin-block: var(--size-3);
}
</style>