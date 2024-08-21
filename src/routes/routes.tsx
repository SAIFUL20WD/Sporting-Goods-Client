import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AllProductPage from "../pages/AllProductPage";
import ManageProductsPage from "../pages/ManageProductsPage";
import LoginPage from "../pages/LoginPage";
import AddProduct from "../components/ManageProducts/AddProduct";
import ManageProducts from "../components/ManageProducts/ManageProducts";
import EditProduct from "../components/ManageProducts/EditProduct";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "all-products",
				element: <AllProductPage />,
			},
			{
				path: "product/:id",
				element: <h1>This is single Product page</h1>,
			},
			{
				path: "manage-products",
				element: <ManageProductsPage />,
				children: [
					{
						path: "",
						element: <ManageProducts />,
					},
					{
						path: "add-product",
						element: <AddProduct />,
					},
					{
						path: "edit-product/:id",
						element: <EditProduct />,
					},
				],
			},
			{
				path: "cart",
				element: <h1>This is cart </h1>,
			},
			{
				path: "checkout",
				element: <h1>This is Checkout </h1>,
			},
			{
				path: "about-us",
				element: <h1>This is about us</h1>,
			},
		],
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);

export default router;
