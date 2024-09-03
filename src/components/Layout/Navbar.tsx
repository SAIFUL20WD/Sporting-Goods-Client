import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { logOut } from "../../redux/features/auth/authSlice";

const Navbar = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const handleLogOut = () => {
		localStorage.removeItem("token");
		logOut();
		setLoggedIn(false);
	};

	return (
		<nav
			className="max-w-7xl mx-auto uppercase"
			onLoad={() => {
				const user = localStorage.getItem("token");
				if (user) {
					setLoggedIn(true);
				}
			}}
		>
			<ul className="flex max-md:flex-col justify-start items-center md:[&>li]:m-2 lg:[&>li]:mx-5 font-semibold">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<img src={logo} alt="logo" className="w-52" />
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/all-products"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						All Prouducts
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/manage-products/view-products"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Manage Prouducts
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about-us"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						About Us
					</NavLink>
				</li>
				<li className="flex items-center">
					<FaCartShopping size={18} />
					<NavLink
						to="/cart"
						className={({ isActive }) =>
							(isActive ? "active" : "") + "mx-1"
						}
					>
						Cart
					</NavLink>
				</li>
				<li className="flex items-center">
					<FaRegUserCircle size={18} className="mx-1" />
					{loggedIn ? (
						<button onClick={handleLogOut}>Logout</button>
					) : (
						<NavLink to="/login">Login</NavLink>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
