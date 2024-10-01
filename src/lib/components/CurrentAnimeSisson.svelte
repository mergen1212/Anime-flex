<script lang="ts">
	import type { AnimeList } from "../entity";

	

	let { Anime }: { Anime: AnimeList } = $props();
</script>

<div class="list">
	<div class="contener">
		<div class="animeList">
			{#each Anime.data as i}
				<div class="animeItem">
					<a href={`uid/${i.mal_id}/`}>
						<img src={i.images.webp.image_url} alt="loading" />
						<p>{i.title}</p>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.list {
		padding-bottom: 1rem !important;
		background-color: rgba(0, 0, 0, 0.04);
		border-bottom: 1px solid rgba(0, 0, 0, 0.135);
		border-top: 1px solid rgba(0, 0, 0, 0.135);
	}

	.contener {
		max-width: 540px;
	}

	.animeList {
		display: grid;
		grid-template-columns: repeat(4, 1fr); /* 4 колонки */
		gap: 7px; /* расстояние между элементами */
	}
	.animeItem {
		text-align: center; /* выравнивание текста по центру */
	}

	.animeItem img {
		max-width: 100vh;
		max-height: 300px;
		/* чтобы изображение не выходило за пределы блока */
		height: auto; /* сохраняем пропорции изображения */
	}

	.contener {
		padding-left: 15px;
		padding-right: 15px;
		margin-right: auto;
		margin-left: auto;
		width: 100%;
	}
	@media (min-width: 230px) {
		.contener {
			max-width: 200px;
		}
		.animeList {
			display: grid;
			grid-template-columns: repeat(1, 1fr); /* 4 колонки */
			gap: 7px; /* расстояние между элементами */
		}
	}

	@media (min-width: 530px) {
		.contener {
			max-width: 500px;
		}
		.animeList {
			display: grid;
			grid-template-columns: repeat(2, 1fr); /* 4 колонки */
			gap: 4px; /* расстояние между элементами */
		}
	}
	@media (min-width: 768px) {
		.contener {
			max-width: 720px;
		}
		.animeList {
			display: grid;
			grid-template-columns: repeat(2, 1fr); /* 4 колонки */
			gap: 7px; /* расстояние между элементами */
		}
	}
	@media (min-width: 992px) {
		.contener {
			max-width: 960px;
		}
		.animeList {
			display: grid;
			grid-template-columns: repeat(3, 1fr); /* 4 колонки */
			gap: 10px; /* расстояние между элементами */
		}
	}
	@media (min-width: 1200px) {
		.contener {
			max-width: 1140px;
		}
		.animeList {
			display: grid;
			grid-template-columns: repeat(3, 1fr); /* 4 колонки */
			gap: 5px; /* расстояние между элементами */
		}
	}
	@media (min-width: 1400px) {
		.contener {
			max-width: 1340px;
		}
		.animeList {
			display: grid;
			grid-template-columns: repeat(4, 1fr); /* 4 колонки */
			gap: 10px; /* расстояние между элементами */
		}
	}
</style>
