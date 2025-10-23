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
    const userId = await ctx.db.insert("users", { name: "Alex" });
    return userId;
  },
});
