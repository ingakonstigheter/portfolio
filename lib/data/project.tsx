import { Post, PostResponse } from '../interfaces';

export async function fetchAllProjects() {
  const response = await fetch('https://dummyjson.com/posts');
  const { posts }: PostResponse = await response.json();
  return posts;
}
export async function fetchProjectById(id: string) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const post: Post = await response.json();
  return post;
}
export async function fetchProjectsByTag(tag: string) {
  const response = await fetch(`https://dummyjson.com/posts/tag/${tag}`);
  const {posts}: PostResponse = await response.json();
  return posts;
}
