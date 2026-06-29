import { createElement } from "./createElement.js";

export function jsx(type, props, ...children) {
  return createElement(type, props, children);
}
