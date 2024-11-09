import { useState } from "react";

const Newsletter = () => {
	const [email, setEmail] = useState("");
	const [isSubscribed, setIsSubscribed] = useState(false);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubscribe = (e) => {
		e.preventDefault();
		if (email && /\S+@\S+\.\S+/.test(email)) {
			setIsSubscribed(true);
			setEmail("");
		} else {
			alert("Please enter a valid email.");
		}
	};

	return (
		<section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-22 px-4 md:px-16">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
				<p className="text-lg mb-6">
					Subscribe to our newsletter for the latest updates, offers,
					and more!
				</p>

				{isSubscribed ? (
					<div className="bg-green-500 text-white p-4 rounded-md">
						<p className="font-semibold">
							Thank you for subscribing!
						</p>
					</div>
				) : (
					<form
						onSubmit={handleSubscribe}
						className="flex justify-center items-center space-x-4"
					>
						<input
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={handleEmailChange}
							className="px-4 py-2 rounded-md w-full max-w-md border-2 border-white bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
							required
						/>
						<button
							type="submit"
							className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
						>
							Subscribe
						</button>
					</form>
				)}
			</div>
		</section>
	);
};

export default Newsletter;
