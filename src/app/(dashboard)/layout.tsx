import React, { type PropsWithChildren } from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardMain from "./components/DashboardMain";

const DashboardLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <>
      <DashboardHeader />
      <DashboardMain>{children}</DashboardMain>
    </>
  );
};

export default DashboardLayout;
