import { useAuth } from "@clerk/nextjs";
import {
  Clock,
  Cloud,
  Computer,
  FileWarning,
  GoalIcon,
  HomeIcon,
  InboxIcon,
  Star,
  Trash,
  Users,
} from "lucide-react";
import { For } from "million/react";
import React from "react";

const AsideNavigateMenus: React.FC = () => {
  const { orgId } = useAuth();

  const menuItems = [
    {
      name: "Home",
      href: `/w/${orgId}/home`,
      icon: <HomeIcon className="w-4 h-4" />,
    },
    {
      name: "My Drive",
      href: `/w/${orgId}/inbox`,
      icon: <InboxIcon className="w-4 h-4" />,
    },
    {
      name: "My Computer",
      href: `/w/${orgId}/mycomputer`,
      icon: <Computer className="w-4 h-4" />,
    },
    {
      name: "Shared",
      href: `/w/${orgId}/shared`,
      icon: <Users className="w-4 h-4" />,
    },
    {
      name: "Recent",
      href: `/w/${orgId}/recent`,
      icon: <Clock className="w-4 h-4" />,
    },
    {
      name: "Starred",
      href: `/w/${orgId}/starred`,
      icon: <Star className="w-4 h-4" />,
    },
    {
      name: "Spam",
      href: `/w/${orgId}/spam`,
      icon: <FileWarning className="w-4 h-4" />,
    },
    {
      name: "Trash",
      href: `/w/${orgId}/trash`,
      icon: <Trash className="w-4 h-4" />,
    },
    {
      name: "Cloud",
      href: `/w/${orgId}/cloud`,
      icon: <Cloud className="w-4 h-4" />,
    },
  ];

  return (
    <ul>
      <For each={menuItems}>
        {(item) => (
          <li className="hover:bg-gray-600/50 rounded">
            <Button
              variant="link"
              asChild
              className="justify-start gap-2 w-full py-1.5 text-sm text-gray-200 font-normal hover:no-underline"
            >
              <Link href={item.href}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </Button>
          </li>
        )}
      </For>
    </ul>
  );
};

export default AsideNavigateMenus;
