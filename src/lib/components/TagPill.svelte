<script>
  /** @type {string} */
  export let tagName;

  export let large = false;

  /**
   * 
   * @param {string} tag
   */
  const tagType = (tag) => {
    if (tag.match(new RegExp('^wood', 'i'))) return 'wood';
    if (tag.match(new RegExp('^metal', 'i'))) return 'metal';
    if (tag.match(new RegExp('^plastic', 'i'))) return 'plastic';
    return 'default';
  }

  const classList = large ? "tag large" : "tag";
</script>

<!-- This should probably be a button, but for reasons I don't understand, that
introduces ugly vertical spacing. -->
<div
  class={classList}
  data-tagType={tagType(tagName)}
>
  {tagName}
</div>
