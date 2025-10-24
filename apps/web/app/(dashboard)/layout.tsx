import React from "react";
import AuthGuard from "@/module/auth/ui/components/auth-guard";
import { OrganizationGuard } from "@/module/auth/ui/components/organization-guard";

const DasboardRootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <OrganizationGuard>{children}</OrganizationGuard>
    </AuthGuard>
  );
};

export default DasboardRootlayout;
