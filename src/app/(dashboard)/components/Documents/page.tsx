import type { DocumentDTO } from "@/shared/types/Document";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<DocumentDTO[]> {
  return [
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
    {
      title: "Document One",
      author: null,
      updatedAt: new Date(),
      tags: null,
    },
  ];
}

const DocumentTable: React.FC = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DocumentTable;
