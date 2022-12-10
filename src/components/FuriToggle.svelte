<script type="ts">
  import { furiganaType } from '../stores/furiganaType';

  function toggleType() {
    let newType = $furiganaType === "romaji" ? "kana" : "romaji";
    furiganaType.set(newType);
    localStorage.setItem('furiganaType', $furiganaType);
  }
</script>



<!-- <select bind:value="{$theme}"> -->
<div class="toggle" on:click={toggleType} on:keypress={toggleType}>
  <span
    class = {$furiganaType === "kana" ? "selected" : "unselected"}
    >あ</span>
  <span
    class = {$furiganaType === "romaji" ? "selected" : "unselected"}
    >A</span>
</div>

<style>
.toggle {
  cursor: pointer;
}

.toggle:hover .unselected {
  color: var(--secondary-hover);
}

.toggle:hover .selected {
  color: var(--primary-hover);
}

.selected  {
  color: var(--primary);
}

.unselected {
  color: var(--secondary);
}
</style>