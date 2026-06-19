import { a as auth, i as initAuth } from "../../chunks/auth.svelte.js";
const ssr = false;
async function load() {
  if (auth.loading) {
    await initAuth();
  }
  return {};
}
export {
  load,
  ssr
};
