import AuthRootLayout from "@/app/(auth)/layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <AuthRootLayout>{children}</AuthRootLayout>;
};
export default Layout;
