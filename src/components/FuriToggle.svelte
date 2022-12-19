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
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-4);
  line-height: 1;
  text-align: center;

  display: flex;
  flex-direction: column;
}

.toggle:hover .unselected {
  color: var(--text-2);
}

.toggle:hover .selected {
  color: var(--brand);
}

.selected  {
  color: var(--brand);
}

.unselected {
  color: var(--text-2);
}
</style>