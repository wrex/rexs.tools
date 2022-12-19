<script>
  export let furigana = "";
  export let romaji = "";

  import { furiganaType } from "../stores/furiganaType";
</script>

<span data-tooltip={$furiganaType === "kana" ? furigana: romaji}>
  <slot />
</span>

<style>
  [data-tooltip] {
    position: relative;
    font-family: var(--font-sans);
  }

  [data-tooltip]:not(a, button, input) {
    border-bottom: 1px dotted;
    text-decoration: none;
    cursor: help;
  }

  [data-tooltip]::after,
  [data-tooltip]::before {
    --tooltip-bg: var(--surface-4);
    display: block;
    position: absolute;
    content: attr(data-tooltip);
    z-index: 99;
    bottom: 120%;
    left: 50%;
    padding: 0.25rem 0.5rem;
    overflow: hidden;
    transform: translate(-50%, -0.25rem);
    border-radius: 0.5em;
    background: var(--tooltip-bg);
    color: var(--text-1);
    font-size: var(--font-size-1);
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    box-shadow: var(--shadow-4);
  }

  [data-tooltip]::after {
    padding: 0;
    transform: translate(-50%, 50%);
    border-top: 0.5em solid var(--tooltip-bg);
    border-right: 0.5em solid transparent;
    border-left: 0.5em solid transparent;
    border-radius: 0;
    background-color: transparent;
    content: "";
    color: var(--tooltip-bg);
    box-shadow: none;
  }

  [data-tooltip]:focus::after,
  [data-tooltip]:focus::before,
  [data-tooltip]:hover::after,
  [data-tooltip]:hover::before {
    opacity: 1;
  }
</style>