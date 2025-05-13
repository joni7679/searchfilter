import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx'
import SearchResults from "../pages/SearchResults.jsx";
import ProductPage from "../components/ProductPage.jsx";
export let router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/search",
        element: <SearchResults />
    },
    {
        path: '/product/:id',
        element: <ProductPage />
    }
])