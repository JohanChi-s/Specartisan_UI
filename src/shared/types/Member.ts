import type { Collection } from "./Collection";

export interface Member {
  collection?: Collection | null;
  collectionId?: string | null;
  createdAt: Date;
  document: Document[];
  id: string;
  role: object;
  updatedAt: Date;
  userId?: string | null;
}
