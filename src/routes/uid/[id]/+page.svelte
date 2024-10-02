<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="anime-page">
	<div class="anime-header">
		<h1>{data.InfoAnime.data.title}</h1>
	</div>
	<div class="anime-content">
		<div class="anime-image">
			<img src={data.InfoAnime.data.images.jpg.large_image_url} alt={data.InfoAnime.data.title} />
		</div>
		<div class="anime-details">
			<p><strong>Тип:</strong> {data.InfoAnime.data.type}</p>
			<p><strong>Эпизоды:</strong> {data.InfoAnime.data.episodes}</p>
			<p><strong>Статус:</strong> {data.InfoAnime.data.status}</p>
			<p>
				<strong>Жанры:</strong>
				{data.InfoAnime.data.genres.map((genre) => genre.name).join(', ')}
			</p>
			<p><strong>Рейтинг:</strong> {data.InfoAnime.data.score}</p>
		</div>
	</div>
	<div class="anime-synopsis">
		<h2>Описание</h2>
		<p>{data.InfoAnime.data.synopsis}</p>
	</div>
	<div class="anime-trailer">
		<h2>Трейлер</h2>
		{#if data.InfoAnime.data.trailer.embed_url}
			<iframe
				title="YouTube video player"
				width="560"
				height="315"
				src={data.InfoAnime.data.trailer.url}
				frameborder="0"
				allowfullscreen
			></iframe>
		{:else}
			<p>Трейлер недоступен</p>
		{/if}
	</div>

	<div class="anime-links">
		<h2>Ссылки</h2>
		<a href={data.InfoAnime.data.url} target="_blank" rel="noopener noreferrer">MyAnimeList</a>
	</div>
</div>
