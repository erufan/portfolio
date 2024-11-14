import { createBrowserRouter } from "react-router-dom";

import WorksPage from "./routes/WorksPage..tsx";
import PagesTransition from "./transitions/PagesTransition.tsx";
import HomePage from "./routes/HomePage.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
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
