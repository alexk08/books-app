import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getBook } from "./api";
import { Loader } from "./ui-kit";

const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const BookPage = React.lazy(() => import("./pages/BookPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "book/:id",
    element: <BookPage />,
    loader: ({ params }) => getBook(params.id),
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return (
    <React.Suspense fallback={<Loader size="w-10 h-10" color="text-neutral" fullScreen />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}
