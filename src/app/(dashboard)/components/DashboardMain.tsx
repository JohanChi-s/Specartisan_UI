"use client";
import { useAuth } from "@clerk/nextjs";
import React, { type PropsWithChildren } from "react";
import { pageItemsConst } from "../const/pageItems";
import DashboardBreadcumb from "./DashboardBreadcumb";
import { defaultBreadcumbItems } from "./DashboardBreadcumb";
import DashboardSidebar from "./DashboardSidebar";
import MainTopBar from "./MainTopBar";

const DashboardMain: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const { orgId } = useAuth();

  const pageItems = pageItemsConst.map((i: any) => {
    return i.path.replace("orgId", orgId);
  });
  console.log("🚀 ~ pageItems ~ pageItems:", pageItems);

  const currentPage: any = pageItems.find((i: any) => i.path === pathname);

  const breadCumbItems = [
    ...defaultBreadcumbItems,
    {
      href: currentPage?.path,
      label: currentPage?.name,
    },
  ];

  return (
    <div className="flex w-full h-main-container-height">
      <DashboardSidebar />
      <main data-testid="top-bar-container" className="flex flex-col h-full relative w-full">
        <MainTopBar />
        <DashboardBreadcumb items={breadCumbItems} />
        <div className="main-background absolute top-0 left-0 w-full h-full bg-[url('/images/dashboard/background-dark.png')] bg-no-repeat bg-contain pointer-events-none" />
        <div className="flex flex-col h-full relative overflow-y-auto p-4">{children}</div>
      </main>
    </div>
  );
};

export default DashboardMain;
