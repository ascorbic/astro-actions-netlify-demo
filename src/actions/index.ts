import { defineAction } from "astro:actions";

export const server = {
  sayHello: defineAction({
    handler: async () => {
      console.log("hello ON the server");
      return "hello FROM the server";
    },
  }),
};
