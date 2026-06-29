import { jsx } from "./jsx.js";
import { render } from "./render.js";

const element = (
  <div id="app">
    <h1>Hello</h1>
    world
    <p>420</p>
  </div>
);

render(element, document.getElementById("root"));
