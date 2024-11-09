import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { logOut } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import toast from "react-hot-toast";

const Navbar = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const cart = useAppSelector((state: RootState) => state.cart.cart);
	const handleLogOut = () => {
		localStorage.removeItem("token");
		logOut();
		toast.success("Logged Out");
		setLoggedIn(false);
	};

	return (
		<div className="max-w-7xl mx-auto uppercase">
			<nav
				onLoad={() => {
					const user = localStorage.getItem("token");
					if (user) {
						setLoggedIn(true);
					}
				}}
			>
				<ul className="flex max-md:flex-col max-md:mb-5 justify-start items-center max-md:[&>li]:m-1 max-lg:[&>li]:mx-3 [&>li]:mx-5 font-semibold">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
						>
							<img src={logo} alt="logo" className="w-52" />
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/all-products"
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
						>
							All Prouducts
						</NavLink>
					</li>
					{loggedIn && (
						<li>
							<NavLink
								to="/dashboard"
								className={({ isActive }) =>
									isActive ? "active" : ""
								}
							>
								Dashboard
							</NavLink>
						</li>
					)}
					<li>
						<NavLink
							to="/about-us"
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
						>
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact-us"
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
						>
							Contact Us
						</NavLink>
					</li>
					<li className="flex items-center relative">
						<FaCartShopping size={18} className="mx-1" />
						<NavLink
							to="/cart"
							className={({ isActive }) =>
								(isActive ? "active" : "") + ""
							}
						>
							Cart
						</NavLink>
						<p className="absolute bottom-4 left-1 text-sm text-white bg-[#6b68e7] px-2 rounded-full -z-10">
							{cart.length > 0 ? cart.length : ""}
						</p>
					</li>
					<li className="flex items-center">
						<FaRegUserCircle size={18} className="mx-1" />
						{loggedIn ? (
							<button
								onClick={handleLogOut}
								className="uppercase"
							>
								Logout
							</button>
						) : (
							<NavLink to="/login">Login</NavLink>
						)}
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
