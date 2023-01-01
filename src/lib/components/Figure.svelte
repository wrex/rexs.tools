<script>
  /** @type {object} */
  export let src;
  /** @type {string} */
  export let caption;

  import Image from "$lib/components/Image.svelte";
</script>

<figure>
  <Image
    src={src}
    alt={caption}
  />
  <figcaption>{caption}</figcaption>
</figure>