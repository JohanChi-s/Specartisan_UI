import type { User } from "@clerk/nextjs/server";
import type { Collection } from "./Collection";
import type { Team } from "./Team";

export interface Workspace {
  createdAt: Date;
  domain?: string | null;
  id: string;
  isPublic: boolean;
  name: string;
  teams: Team[];
  updatedAt: Date;
  url?: string | null;
  user: User[];
  documents: Document[];
  collections: Collection[];
}
