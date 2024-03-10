import type { Collection } from "./Collection";

export interface Archived {
  collections: Collection[];
  createdAt: Date;
  documents: Document[];
  id: string;
  updatedAt: Date;
  userId: string;
}
