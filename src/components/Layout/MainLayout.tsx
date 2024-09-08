import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
	return (
		<>
			<Toaster />
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default MainLayout;
