import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import { BrowserRouter } from "react-router";

// import App from "./ep2/App";
// import App from "./ep3/App";
// import App from "./ep4/App";
import App from "./ep5/App";
import "./main.css";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
