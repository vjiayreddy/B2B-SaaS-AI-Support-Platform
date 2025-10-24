//import { Button } from "@workspace/ui/components/button"
//import { add } from "@workspace/math/add"
"use client";
import {
  useQuery,
  useMutation,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import {SignInButton,SignOutButton,useUser,UserButton} from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany) as any[];
  const addUser = useMutation(api.users.createUser);
  const user = useUser();
  console.log("Current User:", user);
  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          {(users?.length > 0 &&
            users.map((user) => (
              <div key={user._id} className="p-4 m-2 border rounded">
                <p className="text-lg font-semibold">Name: {user.name}</p>
                <p className="text-sm text-gray-500">ID: {user._id}</p>
              </div>
            ))) || <p>No users found.</p>}
               <SignOutButton>SignOut</SignOutButton>
               <UserButton/>
        </div>
     
      </Authenticated>
      <Unauthenticated>
        <div className="flex items-center justify-center min-h-svh">
          <p>Plase Login!</p>
          <div>
            <SignInButton/>
          </div>
        </div>
      </Unauthenticated>
    </>
  );
}
