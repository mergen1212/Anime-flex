
import type {  Daum } from '$lib/entity';
import type { LoadEvent } from '@sveltejs/kit';

export const load = async ({ fetch,params }: LoadEvent) => {
	const res = await fetch(`https://api.jikan.moe/v4/anime/`+params.id);
	const data = (await res.json()) as Daum;
	return {
		InfoAnime: data
	};
};
