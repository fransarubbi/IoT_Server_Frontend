import { w as writable } from "./index.js";
import "./api.js";
const edges = writable([]);
const edgesLoading = writable(false);
const edgeStates = writable({});
export {
  edgesLoading as a,
  edgeStates as b,
  edges as e
};
