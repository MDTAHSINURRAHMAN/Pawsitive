import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";
import SingleProduct from "../pages/shop/productDetails/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/categories/:categoryName",
        element: <CategoryPage></CategoryPage>,
      },
      { path: "/search", element: <Search></Search> },
      { path: "/shop", element: <ShopPage></ShopPage> },
      { path: "/shop/:id", element: <SingleProduct></SingleProduct> },
    ],
  },
]);

export default router;
