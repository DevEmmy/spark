import { createElement } from "./createElement.js";
import { render } from "./render.js";

const element = createElement("div", { id: "app" }, [
  createElement("h1", null, ["Hello"]),
  "world",
  null,
  false,
  createElement("p", null, [42]),
]);

console.log(element);

render(element, document.getElementById("root"));
