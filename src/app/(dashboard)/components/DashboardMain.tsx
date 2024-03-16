"use client";
// import { useAuth } from "@clerk/nextjs";
// import React, { type PropsWithChildren } from "react";
// import { pageItemsConst } from "../const/pageItems";
// import DashboardBreadcumb from "./DashboardBreadcumb";
// import { defaultBreadcumbItems } from "./DashboardBreadcumb";
// import DashboardSidebar from "./DashboardSidebar";
// import MainTopBar from "./MainTopBar";

// const DashboardMain: React.FC<PropsWithChildren> = ({ children }) => {
//   const pathname = usePathname();
//   const { orgId } = useAuth();

//   const pageItems = pageItemsConst.map((i: any) => {
//     return i.path.replace("orgId", orgId);
//   });

//   const currentPage: any = pageItems.find((i: any) => i.path === pathname);

//   const breadCumbItems = [
//     ...defaultBreadcumbItems,
//     {
//       href: currentPage?.path,
//       label: currentPage?.name,
//     },
//   ];

//   return (
//     <div className="flex w-full h-main-container-height">
//       <DashboardSidebar />
//       <main data-testid="top-bar-container" className="flex flex-col h-full relative w-full">
//         <MainTopBar />
//         <DashboardBreadcumb items={breadCumbItems} />
//         <div className="main-background absolute top-0 left-0 w-full h-full bg-[url('/images/dashboard/background-dark.png')] bg-no-repeat bg-contain pointer-events-none" />
//         <div className="flex flex-col h-full relative overflow-y-auto p-4">{children}</div>
//       </main>
//     </div>
//   );
// };

// export default DashboardMain;

"use client";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import { Aside } from "./DashboardAside/Aside";
import { AccountSwitcher } from "./account-switcher";

const defaultProps = {
  defaultLayout: [265, 1095],
  defaultCollapsed: false,
  navCollapsedSize: 4,
};

const DashboardMain: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultProps.defaultCollapsed);
  // const [mail] = useMail()

  return (
    <div className="flex w-full h-main-container-height">
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
          }}
          className="h-full max-h-[800px] items-stretch"
        >
          <ResizablePanel
            defaultSize={defaultProps.defaultLayout[0]}
            collapsedSize={defaultProps.navCollapsedSize}
            collapsible={true}
            minSize={15}
            maxSize={20}
            onCollapse={() => {
              setIsCollapsed(true);
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`;
            }}
            onExpand={() => {
              setIsCollapsed(false);
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`;
            }}
            className={cn(isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
          >
            {/* <div className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]': 'px-2')}>
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div> */}
            <Separator />
            <Aside
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Inbox",
                  label: "128",
                  icon: Inbox,
                  variant: "default",
                },
                {
                  title: "Drafts",
                  label: "9",
                  icon: File,
                  variant: "ghost",
                },
                {
                  title: "Sent",
                  label: "",
                  icon: Send,
                  variant: "ghost",
                },
                {
                  title: "Junk",
                  label: "23",
                  icon: ArchiveX,
                  variant: "ghost",
                },
                {
                  title: "Trash",
                  label: "",
                  icon: Trash2,
                  variant: "ghost",
                },
                {
                  title: "Archive",
                  label: "",
                  icon: Archive,
                  variant: "ghost",
                },
              ]}
            />
            <Separator />
            <Aside
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Social",
                  label: "972",
                  icon: Users2,
                  variant: "ghost",
                },
                {
                  title: "Updates",
                  label: "342",
                  icon: AlertCircle,
                  variant: "ghost",
                },
                {
                  title: "Forums",
                  label: "128",
                  icon: MessagesSquare,
                  variant: "ghost",
                },
                {
                  title: "Shopping",
                  label: "8",
                  icon: ShoppingCart,
                  variant: "ghost",
                },
                {
                  title: "Promotions",
                  label: "21",
                  icon: Archive,
                  variant: "ghost",
                },
              ]}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel
            defaultSize={defaultProps.defaultLayout[1]}
            className="flex flex-col h-full !overflow-y-auto p-4"
          >
            {children}
          </ResizablePanel>
          <ResizableHandle withHandle />
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  );
};

export default DashboardMain;
