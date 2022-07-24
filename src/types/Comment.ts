export interface Comment {
  boardSeq: number;
  commentSeq: number;
  contents: string;
  createDate: string;
  nickName: string;
  parentSeq: number | null;
  profileImage: string;
  writer: number;
}
