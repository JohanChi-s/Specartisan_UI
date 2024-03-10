import type { User } from "@clerk/nextjs/server";
import type { ActionEvent } from "./ActionEvent";
import type { Archived } from "./Archived";
import type { Collection } from "./Collection";
import type { Member } from "./Member";
import type { Tag } from "./Tag";
import type { Team } from "./Team";
import type { Workspace } from "./Workspace";

export interface Document {
  actionEvents: ActionEvent[];
  archiveds: Archived[];
  author: User | null;
  authorId: string;
  team?: Team | null;
  teamId?: string | null;
  workspace?: Workspace | null;
  workspaceId?: string | null;
  childDocuments: Document[];
  collectionId?: string | null;
  collection?: Collection | null;
  comments: Comment[];
  createdAt: Date;
  documents: Document[];
  tags: Tag[] | null;
  emoji?: string | null;
  id: string;
  isFullWidth?: boolean | null;
  isPublic: boolean;
  members: Member[];
  publishedAt?: Date | null;
  revision?: number | null;
  templateId?: string | null;
  text?: string | null;
  title: string;
  updatedAt: Date;
}

export type DocumentDTO = Pick<Document, "title" | "author" | "updatedAt" | "tags">;
