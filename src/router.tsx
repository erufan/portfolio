import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/loading/Loading.tsx";

const HomePage = lazy(() => import("./routes/HomePage.tsx"));
import WorksPage from "./routes/WorksPage..tsx";
import PagesTransition from "./transitions/PagesTransition.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PagesTransition>
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
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
