import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AllProductPage from "../pages/AllProductPage";
import ManageProductsPage from "../pages/ManageProductsPage";
import LoginPage from "../pages/LoginPage";
import AddProduct from "../components/ManageProducts/AddProduct";
import ViewProducts from "../components/ManageProducts/ViewProducts";
import EditProduct from "../components/ManageProducts/EditProduct";
import AboutUsPage from "../pages/AboutUsPage";
import RegisterPage from "../pages/RegisterPage";

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
				element: <AllProductPage categoryStatus={false} />,
			},
			{
				path: "all-products/:category",
				element: <AllProductPage categoryStatus={true} />,
			},
			{
				path: "product/:id",
				element: <h1>This is single Product page</h1>,
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
				element: <AboutUsPage />,
			},
		],
	},
	{
		path: "manage-products",
		element: <ManageProductsPage />,
		children: [
			{
				path: "view-products",
				element: <ViewProducts />,
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
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "*",
		element: <h1>404 Not Found</h1>,
	},
]);

export default router;
