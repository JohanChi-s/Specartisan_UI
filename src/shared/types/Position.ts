export interface Position {
  col: number;
  comments?: Comment | null;
  commentsId?: string | null;
  content?: string | null;
  createdAt: Date;
  id: string;
  line: number;
  toCol?: string | null;
  toLine?: string | null;
  updatedAt: Date;
}
