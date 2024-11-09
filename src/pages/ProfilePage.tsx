import { useState } from "react";
import { verifyToken } from "../utils/verifyToken";

const ProfilePage = () => {
	const user = verifyToken(localStorage.getItem("token") || "");

	const [profile, setProfile] = useState({
		name: "Saiful Alam Fayez",
		email: "saiful@gmail.com",
		phone: "+1 (555) 123-4567",
		bio: "I'm a passionate software engineer with a love for coding and problem-solving.",
		shippingAddress: "123 Main St, Apt 4B, New York, NY 10001",
		paymentMethods: [
			{ id: 1, cardNumber: "**** **** **** 1234", expDate: "12/24" },
			{ id: 2, cardNumber: "**** **** **** 5678", expDate: "03/26" },
		],
		orders: [
			{
				id: 1,
				date: "2024-10-01",
				status: "Delivered",
				total: "$120.50",
			},
			{ id: 2, date: "2024-09-15", status: "Shipped", total: "$80.00" },
			{ id: 3, date: "2024-08-25", status: "Pending", total: "$55.00" },
		],
	});

	const [isEditing, setIsEditing] = useState(false);

	// Handler to toggle edit mode
	const handleEditClick = () => setIsEditing(!isEditing);

	// Handler for form inputs
	const handleChange = (e) => {
		const { name, value } = e.target;
		setProfile((prevProfile) => ({
			...prevProfile,
			[name]: value,
		}));
	};

	return (
		<div className="bg-gray-100 min-h-screen py-10 -ml-10">
			<div className="max-w-7xl mx-auto px-6">
				<div className="bg-white rounded-xl shadow-xl overflow-hidden">
					<div className="flex justify-between items-center p-6 border-b">
						<div className="flex items-center space-x-4">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
								alt="Profile"
								className="w-20 h-20 rounded-full border-2 border-gray-200"
							/>
							<div>
								<h1 className="text-3xl font-semibold text-gray-800">
									{profile.name}
								</h1>
								<p className="text-gray-600 text-sm">
									{profile.email}
								</p>
							</div>
						</div>
						<button
							onClick={handleEditClick}
							className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
						>
							{isEditing ? "Save" : "Edit Profile"}
						</button>
					</div>

					<div className="px-6 py-8 space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-xl font-semibold text-gray-700">
									Personal Information
								</h3>
								<div className="mt-4 space-y-4">
									<div className="flex justify-between items-center">
										<label className="text-lg font-medium text-gray-600">
											Name
										</label>
										{isEditing ? (
											<input
												type="text"
												name="name"
												value={profile.name}
												onChange={handleChange}
												className="p-2 border border-gray-300 rounded-md w-64"
											/>
										) : (
											<p className="text-lg text-gray-700">
												{profile.name}
											</p>
										)}
									</div>
									<div className="flex justify-between items-center">
										<label className="text-lg font-medium text-gray-600">
											Email
										</label>
										{isEditing ? (
											<input
												type="email"
												name="email"
												value={profile.email}
												onChange={handleChange}
												className="p-2 border border-gray-300 rounded-md w-64"
											/>
										) : (
											<p className="text-lg text-gray-700">
												{profile.email}
											</p>
										)}
									</div>
									<div className="flex justify-between items-center">
										<label className="text-lg font-medium text-gray-600">
											Phone
										</label>
										{isEditing ? (
											<input
												type="text"
												name="phone"
												value={profile.phone}
												onChange={handleChange}
												className="p-2 border border-gray-300 rounded-md w-64"
											/>
										) : (
											<p className="text-lg text-gray-700">
												{profile.phone}
											</p>
										)}
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-700">
									Bio
								</h3>
								<div className="mt-4">
									{isEditing ? (
										<textarea
											name="bio"
											value={profile.bio}
											onChange={handleChange}
											className="p-2 border border-gray-300 rounded-md w-full h-32"
										/>
									) : (
										<p className="text-lg text-gray-700">
											{profile.bio}
										</p>
									)}
								</div>
							</div>
						</div>

						<div className="mt-8">
							<h3 className="text-xl font-semibold text-gray-700">
								Shipping Address
							</h3>
							<div className="mt-4">
								<p className="text-lg text-gray-700">
									{profile.shippingAddress}
								</p>
							</div>
						</div>

						<div className="mt-8">
							<h3 className="text-xl font-semibold text-gray-700">
								Payment Methods
							</h3>
							<div className="mt-4 space-y-4">
								{profile.paymentMethods.map((method) => (
									<div
										key={method.id}
										className="flex justify-between items-center"
									>
										<p className="text-lg text-gray-700">
											Card ending in{" "}
											{method.cardNumber.slice(-4)}
										</p>
										<p className="text-lg text-gray-500">
											Expires {method.expDate}
										</p>
									</div>
								))}
							</div>
						</div>

						<div className="mt-8">
							<h3 className="text-xl font-semibold text-gray-700">
								Order History
							</h3>
							<div className="mt-4 space-y-4">
								{profile.orders.map((order) => (
									<div
										key={order.id}
										className="flex justify-between items-center"
									>
										<div className="flex space-x-4">
											<p className="text-lg text-gray-700">
												Order #{order.id}
											</p>
											<p className="text-sm text-gray-500">
												{order.date}
											</p>
										</div>
										<div className="flex space-x-4">
											<p className="text-lg text-gray-700">
												{order.status}
											</p>
											<p className="text-lg text-gray-700">
												{order.total}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
