import { Comment } from './Comment';

export interface Post {
  boardSeq: number;
  thumbnailPath: string;
  title: string;
  contents?: string;
  writer?: number;
  nickname: string;
  createDate: string;
  readCount: number;
  likeCount: number;
  commentCount: number;
  genre: string;
  hasLiked: boolean;
  webtoonLink: string;
}

export interface PostDetail {
  board: Post;
  commentList: Comment[];
}

interface BestPost extends Post {
  seq: number;
  webtoonSeq: number;
}

export interface BestPosts {
  bestBoardList: BestPost[];
  newBoardList: BestPost[];
}
