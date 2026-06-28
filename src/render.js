function createDomNode(element) {
  if (typeof element === "string" || typeof element === "number") {
    return document.createTextNode(String(element));
  }

  const node = document.createElement(element.type);

  Object.entries(element.props).forEach(([key, value]) => {
    node[key] = value;
  });

  element.children.forEach((child) => {
    node.appendChild(createDomNode(child));
  });

  return node;
}

export function render(element, container) {
  container.innerHTML = "";
  container.appendChild(createDomNode(element));
}
