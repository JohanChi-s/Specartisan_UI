import {
  BookText,
  ChevronDown,
  LayoutGrid,
  List,
  Plus,
  PlusIcon,
  SearchIcon,
  Users,
} from "lucide-react";
import React from "react";

const AsideSpaces: React.FC = () => {
  const [isOpenTeamSpace, setIsOpenTeamSpace] = useState(true);
  return (
    <div className="flex flex-col">
      <div className="group flex items-center justify-between py-2 pl-4">
        <span className="text-sm text-gray-400 py-1.5">Spaces</span>
        <div className="flex items-center gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden group-hover:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z"
                    />
                  </svg>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Space Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden group-hover:block">
                  <SearchIcon size="20" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Search</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden group-hover:block">
                  <PlusIcon size="20" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>New Spaces</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <Button
        variant="ghost"
        asChild
        className="justify-start gap-2 w-full py-1.5 text-sm text-gray-200 font-normal hover:no-underline"
      >
        <Link href="/everything">
          <BookText className="w-4 h-4" />
          <span>Everything</span>
        </Link>
      </Button>
      <Collapsible
        open={isOpenTeamSpace}
        onOpenChange={() => setIsOpenTeamSpace(!isOpenTeamSpace)}
        className="w-full"
      >
        <Button variant="ghost" className="group flex w-full items-center justify-start">
          <Users className="h-4 w-4 group-hover:hidden" />
          <CollapsibleTrigger asChild>
            <ChevronDown className="h-4 w-4 p-1 rounded-md hidden group-hover:block hover:bg-primary-foreground" />
          </CollapsibleTrigger>
          <span className="ml-[6px] text-sm font-semibold">Team Spaces</span>
        </Button>
        <CollapsibleContent className="space-y-1 ml-3">
          <Button variant="ghost" size="sm" className="w-full flex items-center justify-start">
            <List className="w-4 h-4 mr-2" />
            This is a docs
          </Button>
        </CollapsibleContent>
      </Collapsible>
      <Button
        variant="ghost"
        asChild
        className="justify-start gap-2 w-full py-1.5 text-sm text-gray-200 font-normal hover:no-underline"
      >
        <Link href="/allspaces">
          <LayoutGrid className="w-4 h-4" />
          <span>View All Space</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        asChild
        className="justify-start gap-2 w-full py-1.5 text-sm text-gray-200 font-normal hover:no-underline"
      >
        <Link href="/allspaces">
          <Plus className="w-4 h-4" />
          <span>Create Space</span>
        </Link>
      </Button>
    </div>
  );
};

export default AsideSpaces;
