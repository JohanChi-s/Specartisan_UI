import type { User } from "@clerk/nextjs/server";
import type { ActionEvent } from "./ActionEvent";
import type { Archived } from "./Archived";
import type { Member } from "./Member";
import type { Workspace } from "./Workspace";

export interface Collection {
  actionEvents: ActionEvent[];
  archiveds: Archived[];
  authorId: string;
  canShare?: boolean | null;
  childCollectionIds?: string | null;
  createdAt: Date;
  description?: string | null;
  downloadPermission: object;
  icon?: string | null;
  id: string;
  index?: string | null;
  isSaving?: boolean | null;
  members: Member[];
  name: string;
  parentCollectionId?: string | null;
  updatedAt: Date;
  url?: string | null;
  workspaceId?: string | null;
  documents: Document[];
  userId?: string | null;
  owner?: User | null;
  workspace?: Workspace | null;
}
