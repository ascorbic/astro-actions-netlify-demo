import { defineAction } from "astro:actions";

export const server = {
  sayHello: defineAction({
    // input: z.object({ postId: z.string() }),
    handler: async () => {
      console.log("hello world");
      return "hello";
    },
  }),
};
