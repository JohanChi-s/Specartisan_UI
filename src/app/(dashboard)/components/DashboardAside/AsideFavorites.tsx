import { CaretSortIcon } from "@radix-ui/react-icons";
import { ChevronRightIcon, PinIcon } from "lucide-react";
import React from "react";

const AsideFavorites: React.FC = () => {
  const handlePinFavorites = () => {};
  const [isOpenFavorites, setIsOpenFavorites] = useState(false);

  return (
    <div className="group flex items-center justify-between py-2">
      {/* <Button variant="ghost" className="text-lg font-normal text-gray-400">
        <span>Favorites</span>
        <ChevronRightIcon size={20} />
      </Button> */}
      <Collapsible
        open={isOpenFavorites}
        onOpenChange={() => setIsOpenFavorites(!isOpenFavorites)}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Favorites</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="hidden group-hover:block"
              onClick={handlePinFavorites}
            >
              <PinIcon size="20" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Pin favorites to Top</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default AsideFavorites;
