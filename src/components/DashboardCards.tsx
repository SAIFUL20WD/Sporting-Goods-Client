import { FaBox, FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";
import { useGetStatisticsQuery } from "../redux/api/baseApi";

const DashboardCards = () => {
	const { data } = useGetStatisticsQuery(undefined);
	console.log(data);
	if (data) {
		return (
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -ml-10 my-10 mr-10">
				<div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-semibold text-gray-700">
							Total Products
						</h2>
						<p className="text-xl text-gray-500 mt-2">
							{data?.data?.productsCount}
						</p>
					</div>
					<div className="text-4xl text-blue-600">
						<FaBox />
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-semibold text-gray-700">
							Total Users
						</h2>
						<p className="text-xl text-gray-500 mt-2">
							{data?.data?.usersCount}
						</p>
					</div>
					<div className="text-4xl text-green-600">
						<FaUsers />
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-semibold text-gray-700">
							Total Orders
						</h2>
						<p className="text-xl text-gray-500 mt-2">
							{data?.data?.ordersCount}
						</p>
					</div>
					<div className="text-4xl text-orange-600">
						<FaShoppingCart />
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-semibold text-gray-700">
							Total Payments
						</h2>
						<p className="text-xl text-gray-500 mt-2">
							${data?.data?.totalRevenue[0].totalRevenue}
						</p>
					</div>
					<div className="text-4xl text-yellow-600">
						<FaDollarSign />
					</div>
				</div>
			</div>
		);
	} else {
		return <div>No data available</div>;
	}
};

export default DashboardCards;
