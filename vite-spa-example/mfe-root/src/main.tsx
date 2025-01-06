import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerApplication, start } from "single-spa";
import App from "./App.tsx";
import "./index.css";

const reactMfeModule = "@viteSingleSpa/reactMfeExample";

registerApplication({
  name: "reactMfeExample",
  app: () => import(/* @vite-ignore */ reactMfeModule),
  activeWhen: "/",
});
start();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
