import type { Collection } from "./Collection";
import type { EnumActionEventAction } from "./EnumActionEventAction";

export interface ActionEvent {
  action: EnumActionEventAction;
  actor?: string | null;
  assignee?: string | null;
  assigner?: string | null;
  collection?: Collection | null;
  collectionId?: string | null;
  createdAt: Date;
  document?: Document | null;
  documentId?: string | null;
  id: string;
}
