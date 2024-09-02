import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar";

const ManageProductsPage = () => {
	return (
		<section>
			<Toaster />
			<main className="grid grid-cols-12">
				<Sidebar />
				<div className="col-span-9">
					<Outlet />
				</div>
			</main>
		</section>
	);
};

export default ManageProductsPage;
