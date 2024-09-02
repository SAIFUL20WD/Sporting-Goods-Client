import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.png";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const Sidebar = () => {
	return (
		<aside
			className={`col-span-3 absolute left-0 top-0 z-9999 min-h-screen w-72.5 overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0`}
		>
			<div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
				<NavLink to="/">
					<img src={Logo} alt="Logo" />
				</NavLink>
			</div>

			<div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
				<nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
					<div>
						<h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
							MENU
						</h3>

						<ul className="mb-6 flex flex-col gap-1.5">
							<li>
								<NavLink
									to="view-products"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
								>
									<AiFillProduct size={24} />
									View Products
								</NavLink>
							</li>

							<li>
								<NavLink
									to="add-product"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
								>
									<IoMdAddCircleOutline size={24} />
									Add Product
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/profile"
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
								>
									<FaUserAlt />
									Profile
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
