import { OrganizationList } from "@clerk/nextjs";

export default function CreateWorkspacePage() {
  console.log("vao day");

  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/w/:id/home"
      afterCreateOrganizationUrl="/w/:id/home"
    />
  );
}
