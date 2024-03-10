import DocumentTable from "@/app/(dashboard)/components/Documents/page";
import { auth } from "@clerk/nextjs";

const HomePage: React.FC = () => {
  return (
    <div>
      HomePage
      <div>
        <DocumentTable />
      </div>
    </div>
  );
};

export default HomePage;
