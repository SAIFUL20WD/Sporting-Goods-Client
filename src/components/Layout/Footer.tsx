import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between mb-8">
					{/* About Us Section */}
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<h4 className="text-xl font-semibold mb-4">About Us</h4>
						<p className="text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					{/* Quick Links Section */}
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<h4 className="text-xl font-semibold mb-4">
							Quick Links
						</h4>
						<ul>
							<li>
								<Link
									to="/about"
									className="text-gray-400 hover:text-white"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/services"
									className="text-gray-400 hover:text-white"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="text-gray-400 hover:text-white"
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									to="/privacy"
									className="text-gray-400 hover:text-white"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Media Section */}
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<h4 className="text-xl font-semibold mb-4">
							Follow Us
						</h4>
						<div className="flex space-x-4">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white"
							>
								<i className="fab fa-facebook-f text-xl"></i>
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white"
							>
								<i className="fab fa-twitter text-xl"></i>
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white"
							>
								<i className="fab fa-instagram text-xl"></i>
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white"
							>
								<i className="fab fa-linkedin-in text-xl"></i>
							</a>
						</div>
					</div>

					{/* Payment Methods Section */}
					<div className="w-full md:w-1/4">
						<h4 className="text-xl font-semibold mb-4">
							We Accept
						</h4>
						<div className="flex space-x-4">
							<img
								src="/images/visa.png"
								alt="Visa"
								className="w-16"
							/>
							<img
								src="/images/mastercard.png"
								alt="MasterCard"
								className="w-16"
							/>
							<img
								src="/images/paypal.png"
								alt="PayPal"
								className="w-16"
							/>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="text-center text-gray-400">
					<p>&copy; 2024 Your Company Name. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
