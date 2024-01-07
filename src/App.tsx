import React from "react";
import ReactDom from "react-dom/client";
import { Popup } from "./Popup.tsx";

const rootElement = document.querySelector("#root");
if (rootElement === null) {
  throw new Error("Root element not found");
}
const reactRoot = ReactDom.createRoot(rootElement);

reactRoot.render(<Popup />);
