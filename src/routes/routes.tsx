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
import SingleProductPage from "../pages/SingleProductPage";
import CartPage from "../pages/CartPage";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";

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
				element: <SingleProductPage />,
			},
			{
				path: "cart",
				element: <CartPage />,
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
		element: (
			<ProtectedRoute>
				<ManageProductsPage />
			</ProtectedRoute>
		),
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
		element: <NotFound />,
	},
]);

export default router;
