export function createElement(type, props, children) {
  return {
    type,
    props: props || {},
    children: (children || []).filter(
      (child) => child !== null && child !== undefined && typeof child !== "boolean"
    ),
  };
}
