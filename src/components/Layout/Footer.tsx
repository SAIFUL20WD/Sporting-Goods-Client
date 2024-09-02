import { Link } from "react-router-dom";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaMapMarkerAlt,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
	return (
		<footer className="container bg-slate-950 text-[#bbb] p-10">
			<section className="max-w-7xl mx-auto grid grid-cols-12 text-sm">
				<div className="col-span-3">
					<div className="text-sm">
						<h4 className="uppercase text-white text-lg font-medium my-3">
							About our store
						</h4>
						<div className="flex items-center mb-3">
							<IoMdCall />
							<Link
								to="tel:(098) - 686 - 666888"
								className="mx-3"
							>
								(098) - 686 - 666888
							</Link>
						</div>
						<div className="flex items-center mb-3">
							<IoMdMail />
							<Link
								to="mailto:support@sportinggoods.com"
								className="mx-3"
							>
								support@sportinggoods.com
							</Link>
						</div>
						<div className="flex items-center mb-3">
							<FaMapMarkerAlt />
							<p className="mx-3">68 Spring, USA, New York</p>
						</div>
					</div>
					<div className="flex">
						<Link
							to="https://facebook.com"
							target="_blank"
							className="p-2 bg-[#242424] rounded-full hover:text-slate-50 hover:bg-[#6b68e7] duration-300 mr-1"
						>
							<FaFacebookF />
						</Link>
						<Link
							to="https://twitter.com"
							target="_blank"
							className="p-2 bg-[#242424] rounded-full hover:text-slate-50 hover:bg-[#6b68e7] duration-300 mr-1"
						>
							<FaTwitter />
						</Link>
						<Link
							to="https://instagram.com"
							target="_blank"
							className="p-2 bg-[#242424] rounded-full hover:text-slate-50 hover:bg-[#6b68e7] duration-300 mr-1"
						>
							<FaInstagram />
						</Link>
						<Link
							to="https://youtube.com"
							target="_blank"
							className="p-2 bg-[#242424] rounded-full hover:text-slate-50 hover:bg-[#6b68e7] duration-300 mr-1"
						>
							<FaYoutube />
						</Link>
					</div>
				</div>
				<div className="col-span-3">
					<h4 className="uppercase text-white text-lg font-medium my-3">
						Site Links
					</h4>
					<div className="flex flex-col">
						<ul>
							<li className="hover:text-[#6b68e7] mb-2">
								<Link to="#">My Account</Link>
							</li>
							<li className="hover:text-[#6b68e7] mb-2">
								<Link to="manage-products">
									Manage Products
								</Link>
							</li>
							<li className="hover:text-[#6b68e7] mb-2">
								<Link to="cart">Cart</Link>
							</li>
							<li className="hover:text-[#6b68e7] mb-2">
								<Link to="checkout">Checkout</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-span-3">
					<h4 className="uppercase text-white text-lg font-medium my-3">
						Information
					</h4>
					<div className="flex flex-col">
						<ul>
							<li className="hover:text-[#6b68e7] mb-2">
								<Link to="about-us">About Us</Link>
							</li>
							<li className="hover:text-[#6b68e7] mb-2">
								<Link to="#">FAQs</Link>
							</li>
							<li className="hover:text-[#6b68e7] mb-2">
								<Link to="#">Warranty and Services</Link>
							</li>
							<li className="hover:text-[#6b68e7] mb-2">
								<Link to="#">Support 24/7</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-span-3">
					<h4 className="uppercase text-white text-lg font-medium my-3">
						Services
					</h4>
					<div className="flex flex-col">
						<ul>
							<li className="hover:text-[#6b68e7] mb-2">
								<a href="#contact">Contact Us</a>
							</li>
							<li className="hover:text-[#6b68e7] mb-2">
								<Link to="#">Returns</Link>
							</li>
							<li className="hover:text-[#6b68e7] mb-2">
								<Link to="#">Support</Link>
							</li>
							<li className="hover:text-[#6b68e7] mb-2">
								<Link to="#">Customer Service</Link>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<div className="border-t text-center mt-5 pt-5">
				Sporting Goods © 2024 Store. All Rights Reserved. Made with Love
				by SAF
			</div>
		</footer>
	);
};

export default Footer;
