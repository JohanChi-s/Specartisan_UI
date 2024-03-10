"use client";
import { Key, Slash } from "lucide-react";
import React from "react";

interface BreadcrumbItemProps {
  href: string;
  label: string;
}

interface DashboardBreadcumbProps {
  items?: BreadcrumbItemProps[];
}

/**
 *
 * @param param0
 * @returns
 *
 * Sameple data
 *
 */

export const defaultBreadcumbItems = [{ href: "/", label: "Home" }];

const DashboardBreadcumb: React.FC<DashboardBreadcumbProps> = ({
  items = defaultBreadcumbItems,
}) => {
  return (
    <Breadcrumb className="pt-4 pl-4">
      <BreadcrumbList>
        {items.map((item, index) => (
          <div key={item.label} className="flex">
            {index === 0 ? null : <BreadcrumbSeparator className="text-2xl" />}
            <BreadcrumbItem className="text-2xl">
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardBreadcumb;
