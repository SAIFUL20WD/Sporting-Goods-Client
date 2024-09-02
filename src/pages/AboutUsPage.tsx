const AboutUsPage = () => {
	return (
		<section className="container max-w-7xl mx-auto">
			<div className="bg-[#eee] min-h-screen p-10">
				<section className="mb-12">
					<h1 className="text-4xl font-bold text-gray-800 mb-4">
						About Us
					</h1>
					<p className="text-lg text-gray-700">
						Welcome to Sporting Goods, your premier destination for
						top-quality sporting goods and equipment. Founded in
						2009, we have been committed to providing athletes and
						sports enthusiasts with the best products to enhance
						their performance and enjoyment.
					</p>
				</section>

				<section className="bg-white p-6 rounded-lg shadow-md mb-12">
					<h2 className="text-3xl font-semibold text-gray-800 mb-4">
						Our Mission & Vision
					</h2>
					<div className="mb-4">
						<h3 className="text-2xl font-semibold text-gray-700 mb-2">
							Mission
						</h3>
						<p className="text-gray-600">
							Our mission is to provide high-quality sporting
							goods and excellent customer service, making it
							easier for athletes of all levels to achieve their
							goals and enjoy their favorite sports.
						</p>
					</div>
					<div>
						<h3 className="text-2xl font-semibold text-gray-700 mb-2">
							Vision
						</h3>
						<p className="text-gray-600">
							We envision a world where everyone has access to the
							best sporting equipment, inspiring a healthier, more
							active lifestyle and fostering a love for sports in
							communities everywhere.
						</p>
					</div>
				</section>

				<section className="mb-12">
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
				</section>

				<section className="bg-white p-6 rounded-lg shadow-md mb-12">
					<h2 className="text-3xl font-semibold text-gray-800 mb-4">
						Our Team
					</h2>
					<div className="flex flex-wrap -mx-4">
						<div className="w-full md:w-1/3 px-4 mb-6">
							<div className="bg-gray-200 p-4 rounded-lg text-center">
								<img
									src="../../src/assets/images/team/team_1.jpg"
									alt="Team Member 1"
									className="w-32 h-32 mx-auto rounded-full mb-4"
								/>
								<h3 className="text-xl font-semibold text-gray-700">
									Jane Doe
								</h3>
								<p className="text-gray-600">CEO</p>
							</div>
						</div>
						<div className="w-full md:w-1/3 px-4 mb-6">
							<div className="bg-gray-200 p-4 rounded-lg text-center">
								<img
									src="../../src/assets/images/team/team_2.jpeg"
									alt="Team Member 2"
									className="w-32 h-32 mx-auto rounded-full mb-4"
								/>
								<h3 className="text-xl font-semibold text-gray-700">
									John Smith
								</h3>
								<p className="text-gray-600">
									Head of Marketing
								</p>
							</div>
						</div>
						<div className="w-full md:w-1/3 px-4 mb-6">
							<div className="bg-gray-200 p-4 rounded-lg text-center">
								<img
									src="../../src/assets/images/team/team_3.jpg"
									alt="Team Member 3"
									className="w-32 h-32 mx-auto rounded-full mb-4"
								/>
								<h3 className="text-xl font-semibold text-gray-700">
									Alice Johnson
								</h3>
								<p className="text-gray-600">
									Customer Support Manager
								</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-3xl font-semibold text-gray-800 mb-4">
						Our Store Location
					</h2>
					<div className="bg-white p-6 rounded-lg shadow-md">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.872805438911!2d-74.00594198459224!3d40.71277577933085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1fc6a6b9b5%3A0x826f4f8497c2f45a!2sNew%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1620788035235!5m2!1sen!2sus"
							width="100%"
							height="400"
							style={{ border: 0 }}
							allowFullScreen={false}
							aria-hidden="false"
							tabIndex={0}
							title="Store Location"
						></iframe>
					</div>
				</section>
			</div>
		</section>
	);
};

export default AboutUsPage;
