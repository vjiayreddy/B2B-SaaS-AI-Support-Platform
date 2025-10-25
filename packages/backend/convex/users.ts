import { query, mutation } from "./_generated/server";
export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

export const createUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    const orgId = identity?.orgId as string;
    if (!orgId) {
      throw new Error("Organization ID is required to create a user");
    }
    if (identity === null) {
      throw new Error("Unauthenticated");
    }
    throw new Error("Unauthenticated");
    
    const userId = await ctx.db.insert("users", { name: "Alex" });
    return userId;
  },
});
