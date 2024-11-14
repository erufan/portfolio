import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/loading/Loading.tsx";

const Page1 = lazy(() => import("./routes/HomePage.tsx"));
import Page2 from "./routes/WorksPage..tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Page1 />
      </Suspense>
    ),
  },
  { path: "/works", element: <Page2 /> },
]);

export default router;
