<script>
	/** @type {import("$lib/types").ImageSource} */
	export let src;
	
	/** @type string */
	export let alt;
</script>

<picture>
	{#each Object.entries(src.sources) as [format, images]}
		<source
			srcset={images.map((i) => `${i.src}`).join(', ')}
			type={'image/' + format}
		/>
	{/each}
	<img src={src.fallback.src} {alt} loading="lazy" />
	<!-- https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading#images_and_iframes -->
</picture>

<style>
	img {
		margin: auto;
	}
</style>
