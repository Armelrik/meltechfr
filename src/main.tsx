import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";

// import { Analytics } from "@vercel/analytics/";

createRoot(document.getElementById("root")!).render(<App />);
