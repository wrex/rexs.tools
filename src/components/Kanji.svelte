<script>
  export let furigana = "";
  export let romaji = "";

  import { furiganaType } from "../stores/furiganaType";
</script>

<span data-tooltip={$furiganaType === "kana" ? furigana: romaji}>
  <slot />
</span>