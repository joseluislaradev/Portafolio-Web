import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ScrollInPage } from "./utilidades/ScrollInPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollInPage />
      <App />
    </BrowserRouter>
  </StrictMode>
);
