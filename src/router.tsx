import { createBrowserRouter, Navigate } from "react-router-dom";

import WorksPage from "./routes/WorksPage..tsx";
import HomePage from "./routes/HomePage.tsx";
import Layout from "./routes/layouts/Layout.tsx";
import PagesTransition from "./transitions/PagesTransition.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <PagesTransition>
              <HomePage />
            </PagesTransition>
          ),
        },
        {
          path: "/works",
          element: (
            <PagesTransition>
              <WorksPage />
            </PagesTransition>
          ),
        },
      ],
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
