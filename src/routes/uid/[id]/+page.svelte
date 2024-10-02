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
		<div>
			{#if data && data.InfoAnime && data.InfoAnime.data}
				<p>{data.InfoAnime.data.synopsis}</p>
			{:else}
				<p>Loading...</p>
			{/if}
		</div>
	</div>
	<div class="anime-content">
		{#if data && data.InfoAnime && data.InfoAnime.data}
			{#each data.InfoAnime.data.genres as i}
				<span>{i.name}</span>
			{/each}
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</div>
<style>
	.anime-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-color: #f5f5f5;
		padding: 20px;
	}
	.anime-header {
		text-align: center;
		margin-bottom: 20px;
	}
	.anime-header h1 {
		font-size: 24px;
		margin-bottom: 10px;
	}
	.anime-header img {
		max-width: 100%;
		height: auto;
		margin-bottom: 10px;
	}
	.anime-header p {
		font-size: 16px;
		margin-bottom: 10px;
	}
	.anime-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	}
	.anime-content span {
		font-size: 16px;
		margin-bottom: 10px;
	}
</style>
