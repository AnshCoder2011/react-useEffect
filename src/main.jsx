import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Ex from "./Ex.jsx"; 
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Ex />
  </StrictMode>
);
