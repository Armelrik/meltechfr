import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";
import { HelmetProvider } from "react-helmet-async";

// import { Analytics } from "@vercel/analytics/";

// createRoot(document.getElementById("root")!).render(<App />);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <SpeedInsights />
    </HelmetProvider>
  </React.StrictMode>
);
