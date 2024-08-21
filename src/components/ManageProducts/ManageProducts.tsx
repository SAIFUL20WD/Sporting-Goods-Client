import { Link, useNavigate } from "react-router-dom";
import {
	useDeleteProductMutation,
	useGetAllProductsQuery,
} from "../../redux/api/baseApi";
import toast from "react-hot-toast";

const ManageProducts = () => {
	const { data } = useGetAllProductsQuery(null);
	const navigate = useNavigate();

	const [deleteProduct] = useDeleteProductMutation();

	const handleConfirmation = (msg, id) => {
		toast((t) => (
			<span>
				Are You Sure to <b>{msg} This Product</b>
				<button
					onClick={() => {
						toast.dismiss(t.id);
						if (msg == "Delete") {
							deleteProduct(id);
							toast.success("Product deleted successfully");
						} else if (msg == "Edit") {
							navigate(`edit-product/${id}`);
						}
					}}
					className="p-1 bg-red-500 text-white rounded mx-3"
				>
					Yes
				</button>
				<button
					onClick={() => {
						toast.dismiss(t.id);
					}}
					className="p-1 bg-green-500 text-white rounded"
				>
					No
				</button>
			</span>
		));
	};

	return (
		<div className="col-span-6 p-5 rounded">
			<table className="table-auto bg-slate-200">
				<thead>
					<tr className="[&>*]:p-5 border-b-2 border-gray-950">
						<th>#</th>
						<th>Image</th>
						<th>Name</th>
						<th>Description</th>
						<th>Band</th>
						<th>Category</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Rating</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.data.map((item, i) => {
							return (
								<tr key={item._id} className="[&>*]:p-5">
									<td>{i + 1}</td>
									<td>
										<img
											src={item.image[0]}
											alt=""
											className="w-20"
										/>
									</td>
									<td>{item.name}</td>
									<td>{item.description}</td>
									<td>{item.brand}</td>
									<td>{item.category}</td>
									<td>{item.price}</td>
									<td>{item.inventory.quantity}</td>
									<td>{item.rating}</td>
									<td className="flex">
										<button
											className="p-3 bg-blue-500 text-white cursor-pointer rounded mr-3"
											onClick={() =>
												handleConfirmation(
													"Edit",
													item._id
												)
											}
										>
											Edit
										</button>
										<button
											className="p-3 bg-red-500 text-white cursor-pointer rounded"
											onClick={() =>
												handleConfirmation(
													"Delete",
													item._id
												)
											}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default ManageProducts;
