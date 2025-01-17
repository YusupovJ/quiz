import "./styles/index.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router";
import { Toaster } from "./components/ui/sonner";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
);
