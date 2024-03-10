import type { User } from "@clerk/nextjs/server";

export interface Profile {
  address?: string | null;
  age?: number | null;
  avatarUrl?: string | null;
  createdAt: Date;
  fullName?: string | null;
  id: string;
  updatedAt: Date;
  user: User;
  userId: string;
}
