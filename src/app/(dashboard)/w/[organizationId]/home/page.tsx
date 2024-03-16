import DocumentTable from "@/app/(dashboard)/components/Documents/page";
import { auth } from "@clerk/nextjs";

const HomePage: React.FC = () => {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <DocumentTable />
    </div>
  );
};

export default HomePage;
