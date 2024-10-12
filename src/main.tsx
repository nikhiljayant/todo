import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TodosContext from "./Context/TodosContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodosContext>
      <App />
    </TodosContext>
  </StrictMode>
);
