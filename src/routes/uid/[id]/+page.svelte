<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="anime-page">
	<div class="anime-header">
		{#if data && data.InfoAnime && data.InfoAnime.data}
			<h1>{data.InfoAnime.data.title}</h1>
		{:else}
			<p>Loading...</p>
		{/if}
		{#if data && data.InfoAnime && data.InfoAnime.data}
			<img src={data.InfoAnime.data.images.webp.image_url} alt="loading" />
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</div>
