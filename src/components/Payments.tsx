import { useGetAllPaymentsQuery } from "../redux/api/baseApi";

const Payments = () => {
	const { data } = useGetAllPaymentsQuery(undefined);

	if (data) {
		return (
			<div className="my-5 -ml-10 mr-10">
				<div className="relative overflow-x-auto">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Name
								</th>
								<th scope="col" className="px-6 py-3">
									Email
								</th>
								<th scope="col" className="px-6 py-3">
									Transaction ID
								</th>
								<th scope="col" className="px-6 py-3">
									Status
								</th>
								<th scope="col" className="px-6 py-3">
									Payment Date
								</th>
							</tr>
						</thead>
						<tbody>
							{data?.data?.map((item, i) => {
								console.log(item);
								return (
									<tr
										className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
										key={i}
									>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											{item?.user?.name}
										</th>
										<td className="px-6 py-4">
											{item?.user?.email}
										</td>
										<td className="px-6 py-4 capitalize">
											{item?.transcationId}
										</td>
										<td className="px-6 py-4">
											{item?.status}
										</td>
										<td className="px-6 py-4">
											{item?.createdAt.split("T")[0]}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	} else {
		return <div>No Data Found</div>;
	}
};

export default Payments;
