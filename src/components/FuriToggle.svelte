<script>
  import { furiganaType } from "../stores/furiganaType";

  // See if type was already set in localStorage
  if (typeof localStorage !== 'undefined' && localStorage.getItem('furiganaType')) {
    furiganaType.set(localStorage.getItem('furiganaType'));
  } else {
    furiganaType.set('romaji'); // Default to romaji
  }

  function handleChange(event) {
    furiganaType.set(event.target.value);
    localStorage.setItem('furiganaType', $furiganaType);
  }
</script>


<div class="theme-toggle">
    <label class={$furiganaType === "kana" ? 'checked' : ''}>
      あ
      <input
        type="radio"
        name="theme-toggle"
        checked={$furiganaType === "kana"}
        value={"kana"}
        title={`Use kana for furigana`}
        aria-label={`Use kana for furigana`}
        on:change={handleChange}
      />
    </label>
    <label class={$furiganaType === "romaji" ? 'checked' : ''}>
      A
      <input
        type="radio"
        name="theme-toggle"
        checked={$furiganaType === "romaji"}
        value={"romaji"}
        title={`Use romaji for furigana`}
        aria-label={`Use romaji for furigana`}
        on:change={handleChange}
      />
    </label>
</div>
