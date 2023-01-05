<script>
  const year = new Date().getFullYear();
  import { siteAuthor } from "$lib/config";
</script>
<footer>
  <span>
    &copy; {year} {siteAuthor} (All Rights Reserved)
  </span>
</footer>

<style>
  footer {
    color: var(--text-2);
    font-size: var(--font-size-00);
    text-align: center;
    margin-top: var(--size-8);
  }
</style>
