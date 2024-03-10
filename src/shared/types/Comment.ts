import type { EnumCommentStatus } from "./EnumCommentStatus";
import type { Position } from "./Position";

export interface Comment {
  content: string;
  createdAt: Date;
  document?: Document | null;
  documentId?: string | null;
  id: string;
  parentComment?: Comment | null;
  parentCommentId?: string | null;
  position?: Position | null;
  replies: Comment[];
  status?: EnumCommentStatus;
  updatedAt: Date;
  userId: string;
}
