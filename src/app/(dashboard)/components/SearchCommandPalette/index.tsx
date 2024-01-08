'use client'
import { CommandIcon, PlusSquareIcon, SearchIcon } from "lucide-react";
import { CommandMenu } from "./CommandMenu";

const SearchCommandPalette: React.FC = () => {
  const [on, toggle] = useToggle(false);
  return (
    <div className="relative inline-block md:flex md:justify-center md:w-[360px] bg-gray-500 rounded-md group items-center">
      <Button variant="default" className="relative flex py-2 items-center" onClick={() => toggle()}>
        <SearchIcon size="16" className="group-hover:text-white text-white mr-2" />
        Search...
      </Button>
      <div className="absolute inline-flex justify-center items-center gap-1 top-2 right-2 z-[1] text-white group-hover:text-white">
        <CommandIcon size={16} className="" />
        <kbd className="text-xs">K</kbd>
      </div>
      <CommandMenu />
    </div>
  );
};

export default SearchCommandPalette;
