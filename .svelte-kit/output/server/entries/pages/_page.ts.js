import { redirect } from "@sveltejs/kit";
import { a as auth } from "../../chunks/auth.svelte.js";
async function load({ parent }) {
  await parent();
  if (auth.isAuthenticated) {
    throw redirect(303, "/edge");
  } else {
    throw redirect(303, "/login");
  }
}
export {
  load
};
