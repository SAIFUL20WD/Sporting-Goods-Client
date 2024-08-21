import { Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";

const ManageProductsPage = () => {
	return (
		<section className="grid grid-cols-12 gap-4">
			<Toaster />

			<div className="col-span-3 bg-slate-900">
				<ul className="list-none px-3 text-xl text-white font-medium">
					<li className="py-3">
						<Link to="">Manage Product</Link>
					</li>
					<li>
						<Link to="add-product">Add Product</Link>
					</li>
				</ul>
			</div>

			<Outlet />
		</section>
	);
};

export default ManageProductsPage;
