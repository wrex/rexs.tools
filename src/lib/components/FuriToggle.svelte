<script type="ts">
  import { furiganaType } from '../stores/furiganaType';
  import {fade} from 'svelte/transition';

  function toggleType() {
    let newType = $furiganaType === "romaji" ? "kana" : "romaji";
    furiganaType.set(newType);
    localStorage.setItem('furiganaType', $furiganaType);
  }
</script>



<!-- <select bind:value="{$theme}"> -->
<div class="toggle" on:click={toggleType} on:keypress={toggleType}>
  {#if $furiganaType === "kana"}
  <span in:fade
    class = {$furiganaType === "kana" ? "selected" : "unselected"}
    >あ</span>
  {:else}
  <span in:fade
    class = {$furiganaType === "romaji" ? "selected" : "unselected"}
    >A</span>
  {/if}
</div>

<style>
.toggle {
  cursor: pointer;
  line-height: 1;
  text-align: center;
  color: var(--text-2);
  width: 1em;
}

.toggle:hover {
  color: var(--text-1);
}
</style>