<script>
  export let furigana = "";
  export let romaji = "";

  import { furiganaType } from "../stores/furiganaType";
</script>

<span class="kanji" data-furigana={$furiganaType === "kana" ? furigana : romaji}>
  <slot />
</span>

<style>
  .kanji {
    position: relative;
    display: inline-block;
  }

  .kanji:hover::before {
    content: attr(data-furigana);
    color: var(--secondary-color);
    font-size: 60%;
    line-height: 1;
    position: absolute;
    top: -0.5em;
    width: 100%;
    text-align: center;
  }


</style>