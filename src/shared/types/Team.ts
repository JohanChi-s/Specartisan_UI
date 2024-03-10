import type { User } from "@clerk/nextjs/server";
import type { Workspace } from "./Workspace";

export interface Team {
  avatarUrl?: string | null;
  canComment?: boolean | null;
  canShare?: boolean | null;
  createdAt: Date;
  defaultUserRole?: string | null;
  id: string;
  inviteRequired?: boolean | null;
  name?: string | null;
  subDomain?: string | null;
  theme?: string | null;
  updatedAt: Date;
  url?: string | null;
  users: User[];
  workspaces: Workspace[];
  documents: Document[];
}
