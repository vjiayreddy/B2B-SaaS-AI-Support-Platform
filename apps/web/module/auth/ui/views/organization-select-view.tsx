import React from "react";
import { OrganizationList } from "@clerk/nextjs";

const OrganizationSelectView = () => {
  return (
    <OrganizationList
      hidePersonal
      skipInvitationScreen
      afterSelectOrganizationUrl="/"
      afterCreateOrganizationUrl="/"
    />
  );
};

export default OrganizationSelectView;
