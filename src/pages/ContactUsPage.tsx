import Contact from "../components/Home/Contact";

const ContactUsPage = () => {
	return (
		<section className="max-w-7xl mx-auto">
			<Contact />
			<div className="text-center bg-white p-6 rounded-lg shadow-md mx-8 mb-12">
				<h2 className="text-3xl font-semibold text-gray-800 mb-4">
					Contact Information
				</h2>
				<p className="text-lg text-gray-700 mb-2">
					Email:{" "}
					<a
						href="mailto:info@yourstore.com"
						className="text-blue-500 hover:underline"
					>
						info@sportinggoods.com
					</a>
				</p>
				<p className="text-lg text-gray-700 mb-2">
					Phone:{" "}
					<a
						href="tel:+1234567890"
						className="text-blue-500 hover:underline"
					>
						+1 (234) 567-890
					</a>
				</p>
				<p className="text-lg text-gray-700">
					Address: 68 Spring, USA, New York
				</p>
			</div>
		</section>
	);
};

export default ContactUsPage;
