<script>
  /** @type {string}*/
  export let href;

  import { currentPage } from "$lib/stores/currentPage";

  $: isCurrentPage = href === "/" ? false : $currentPage.startsWith(href);
  $: console.log(`${$currentPage} ${href}`);
</script>

<a
  href={href}
  aria-current={isCurrentPage}
  class:active={isCurrentPage}
>
  <slot />
</a>
