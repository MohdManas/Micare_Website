import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { About, Contact, Home } from "./pages";
import { Suspense } from "react";
import { RootLayout } from "./layouts";
import { Loader } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <div className="relative min-h-screen w-screen">
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
