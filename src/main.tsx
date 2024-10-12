import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TodosContext from "./Context/TodosContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TodosContext>
        <App />
      </TodosContext>
    </BrowserRouter>
  </StrictMode>
);
