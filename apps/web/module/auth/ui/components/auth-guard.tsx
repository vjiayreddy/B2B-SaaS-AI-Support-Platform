'use client';
import AuthRootLayout from "@/app/(auth)/layout";
import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";
import { SignInView } from "../views/sign-in-views";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>
        <AuthRootLayout>Loading...</AuthRootLayout>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <AuthRootLayout>
          <SignInView />
        </AuthRootLayout>
      </Unauthenticated>
    </>
  );
};

export default AuthGuard;
