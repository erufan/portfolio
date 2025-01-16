import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import "./i18n";
import { LangugeDropdownProvider } from "./contexts/LangugeDropdownContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangugeDropdownProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </LangugeDropdownProvider>
  </React.StrictMode>
);
