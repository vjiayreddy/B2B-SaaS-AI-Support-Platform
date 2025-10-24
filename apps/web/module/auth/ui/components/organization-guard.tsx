'use client';
import { useOrganization } from "@clerk/nextjs";
import Layout from "@/module/auth/ui/layouts/auth-layout";
import OrganizationSelectView from "../views/organization-select-view";


export const OrganizationGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organization } = useOrganization();
  if (!organization) {
    return (
      <Layout>
       <OrganizationSelectView/>
      </Layout>
    );
  }
    return <>{children}</>;
};
