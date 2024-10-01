import type { LoadEvent } from '@sveltejs/kit';
export type Posts = Post[]

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export async function load({ fetch }: LoadEvent) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json() as  Posts;
    return { posts };
}
