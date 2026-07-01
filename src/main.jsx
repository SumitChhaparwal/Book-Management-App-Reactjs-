import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Lpage from "./Components/Lpage.jsx";
import Category from "./Components/Category.jsx";
import PopularB from "./Components/PopularB.jsx";
import BrowseBook from "./Components/BrowseBook.jsx";
import Categories from "./Components/Categories.jsx";
import BookDetails from "./Components/BookDetails.jsx";
import AddBook from "./Components/AddBook.jsx";
import DisplayError from "./Components/DisplayError.jsx";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Lpage />
            <Category />
            <PopularB />
          </>
        ),
      },
      {
        path: "/browsebooks",
        element: <BrowseBook />,
      },
      {
        path: "/browsebooks/:category",
        element: <BrowseBook />,
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails />,
      },
      {
        path: "/addbook",
        element: <AddBook />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoute} />
  </StrictMode>,
);
