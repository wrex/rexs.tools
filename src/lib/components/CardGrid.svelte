<script>
  /** @type {import("$lib/types").Post[]} */
  export let items;

  import { paginate, PaginationNav } from 'svelte-paginate';
  import BlogCard from "$lib/components/BlogCard.svelte";

  let currentPage = 1;
  const pageSize = 6;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<div class="card-grid">
  {#each paginatedItems as post}
    <BlogCard post={post} />
  {/each}
</div>
{#if (paginatedItems.length !== items.length)}
<div class="paginationNav">
  <PaginationNav
  totalItems={items.length}
  pageSize={pageSize}
  currentPage={currentPage}
  limit={2}
  showStepOptions={true}
  on:setPage="{(e) => currentPage = e.detail.page}"
  />
</div>
{/if}