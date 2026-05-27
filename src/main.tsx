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
    <iframe
      id="12116"
      className="wctv-video"
      title="Video 1 - The Importance Of Multi time Frame Trading To Professional Traders"
      src="https://player.vimeo.com/video/362785793?h=9e47e476e0"
      allow="autoplay"
      allowFullScreen
    />
    <Toaster />
  </BrowserRouter>,
);
