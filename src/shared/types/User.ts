import type { Collection } from "./Collection";
import type { Profile } from "./Profile";
import type { Team } from "./Team";
import type { Workspace } from "./Workspace";

export interface User {
  createdAt: Date;
  email: string;
  firstName?: string | null;
  id: string;
  isActive?: boolean | null;
  isAdmin: boolean;
  isViewer?: boolean | null;
  language?: string | null;
  lastActiveAt?: Date | null;
  lastName?: string | null;
  password: string;
  profile?: Profile | null;
  roles: object | null;
  teams: Team[];
  updatedAt: Date;
  username: string;
  workspaces: Workspace[];
  documents: Document[];
  collections: Collection[];
}
