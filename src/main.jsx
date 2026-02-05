import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import { ErrorBoundary } from "./ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallback={<h1>boundary</h1>}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
