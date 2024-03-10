import type { Collection } from "./Collection";
import type { Document } from "./Document";

export interface Tag {
  name: string;
  documents: Document[];
  collections: Collection[];
}
