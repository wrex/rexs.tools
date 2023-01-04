<script>
  import TagCloud from '$lib/components/TagCloud.svelte';

  let curState = false;

  const toggle = () => {
    curState = ! curState;
  }

  const tagCounts = {
    wood: 3,
    metal: 4,
    paper: 0,
    plastic: 1
  }
</script>

<h1>Ignore this</h1>
<p class="description">This page is for testing things under development</p>

<TagCloud {tagCounts} />