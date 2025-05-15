
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import SearchResults from "../pages/SearchResults.jsx";
import ProductPage from "../components/ProductPage.jsx";
import Error404 from "../components/Error404.jsx";
import Category from "../components/Category.jsx";
import Home from "../pages/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "search",
                element: <SearchResults />,
            },

            {
                path: "category",
                element: <Category />,
            },

        ],

    },

    {
        path: "product/:id",
        element: <ProductPage />,
    },

    {
        path: "*",
        element: <Error404 />,
    },


]);
