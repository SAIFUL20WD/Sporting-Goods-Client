import { useNavigate } from "react-router-dom";
import {
	useDeleteProductMutation,
	useGetAllProductsQuery,
} from "../../redux/api/baseApi";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

const ViewProducts = () => {
	const { data } = useGetAllProductsQuery(null);
	const navigate = useNavigate();

	const [deleteProduct] = useDeleteProductMutation();

	const handleConfirmation = (msg, id) => {
		toast((t) => (
			<span className="w-80">
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
					className="p-1 bg-red-500 text-white rounded mx-2"
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
		<div className="col-span-9 p-5 rounded lg:-ml-16">
			<table className="table-auto bg-[#eee] rounded shadow-lg">
				<thead>
					<tr className="[&>*]:p-5 border-b-2 border-gray-950">
						<th>No</th>
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
											className="w-16"
										/>
									</td>
									<td>{item.name}</td>
									<td>{item.description}</td>
									<td>{item.brand}</td>
									<td>{item.category}</td>
									<td>{item.price}</td>
									<td>{item.inventory.quantity}</td>
									<td>{item.rating}</td>
									<td className="flex mt-3">
										<button
											className="bg-primary text-white cursor-pointer rounded p-2 mr-3"
											onClick={() =>
												handleConfirmation(
													"Edit",
													item._id
												)
											}
										>
											<FaPenToSquare />
										</button>
										<button
											className="bg-red-500 text-white cursor-pointer rounded p-2"
											onClick={() =>
												handleConfirmation(
													"Delete",
													item._id
												)
											}
										>
											<FaTrashAlt />
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

export default ViewProducts;
