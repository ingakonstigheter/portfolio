
export interface PostResponse {
    limit: number
    posts: Post[]
    skip: number
    total: number
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}