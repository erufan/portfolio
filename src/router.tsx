import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/loading/Loading.tsx";

const HomePage = lazy(() => import("./routes/HomePage.tsx"));
import WorksPage from "./routes/WorksPage..tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <HomePage />
        </Suspense>
      ),
    },
    { path: "/works", element: <WorksPage /> },
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
