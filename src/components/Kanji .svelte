<script>
  export let furigana = "";
  export let romaji = "";

  import { furiganaType } from "../stores/furiganaType";
</script>

<span class="container">
  <span class="furigana">
    {$furiganaType === "kana" ? furigana : romaji}
  </span>
  <span class="kanji">
    <slot />
  </span>
</span>

<style>
  .container {
    position: relative;
    display: inline-block;
    width: auto;
  }

  .furigana {
    font-size: 50%;
    line-height: 1;
    position: absolute;
    top: -0.5em;
    width: 100%;
    min-width: max-content;
    text-align: center;
  }
  
  @media (hover: hover) {
    .furigana {
      visibility: hidden;
    }
    .container:hover .furigana {
      visibility: visible;
    }
  }

</style>