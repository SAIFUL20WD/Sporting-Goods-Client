import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AllProductPage from "../pages/AllProductPage";

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
				path: "all-product",
				element: <AllProductPage />,
			},
			{
				path: "manage-product",
				element: <h1>This is manage Product</h1>,
			},
			{
				path: "cart",
				element: <h1>This is cart </h1>,
			},
			{
				path: "about-us",
				element: <h1>This is about us</h1>,
			},
		],
	},
]);

export default router;
