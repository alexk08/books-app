import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookPage, { bookLoader } from "./pages/BookPage";
import { ErrorPage } from "./pages/ErrorPage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "book/:id",
    element: <BookPage />,
    loader: bookLoader,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
