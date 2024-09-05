import { useState } from "react";
import {
	incrementDecrement,
	removeFromCart,
} from "../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import toast, { Toaster } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
	const cart = useAppSelector((state: RootState) => state.cart.cart);
	const dispatch = useAppDispatch();

	const [subTotal, setSubTotal] = useState(0);

	const handleDelete = (id: string) => {
		toast((t) => (
			<span>
				Are You Sure to Remove This Product From Cart?
				<br />
				<button
					onClick={() => {
						toast.dismiss(t.id);
						dispatch(removeFromCart(id));
						toast.success("Product removed successfully");
					}}
					className="p-1 bg-red-500 text-white rounded mr-2"
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

	const handleIncreaseDecrease = (operation: string, id: string) => {
		if (operation === "+") {
			dispatch(incrementDecrement({ op: "+", id: id }));
		}
		if (operation === "-") {
			dispatch(incrementDecrement({ op: "-", id: id }));
		}
	};

	const subTotalCalc = () => {
		const total = cart.reduce(
			(acc, curr) => acc + curr.price * curr.qty,
			0
		);
		const tax = total * 0.15;
		const totalWithTax = Math.round(total + tax);
		setSubTotal(totalWithTax);
	};

	return (
		<section className="max-w-6xl mx-auto my-10" onLoad={subTotalCalc}>
			<Toaster />
			<h3 className="text-3xl text-center font-semibold uppercase my-5">
				Shopping Cart
			</h3>
			<div className="grid place-content-center">
				<table className="table-auto bg-white rounded shadow-lg">
					<thead>
						<tr className="[&>*]:p-5 border-b-2 border-slate-400">
							<th>No</th>
							<th>Image</th>
							<th>Product Name</th>
							<th>Quantity</th>
							<th>Unit Price</th>
							<th>Total</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{cart.map((item, i) => {
							return (
								<tr
									key={item._id}
									className="[&>*]:p-5 text-center"
								>
									<td>{i + 1}</td>
									<td>
										<img
											src={item?.image[0]}
											alt=""
											className="w-16"
										/>
									</td>
									<td>{item.name}</td>
									<td>
										<span
											className="bg-white px-3 py-1 border cursor-pointer"
											onClick={() =>
												handleIncreaseDecrease(
													"+",
													item._id
												)
											}
										>
											+
										</span>
										<span className="bg-slate-100 px-3 py-1 border">
											{item.qty}
										</span>
										<span
											className="bg-white px-3 py-1 border cursor-pointer"
											onClick={() =>
												handleIncreaseDecrease(
													"-",
													item._id
												)
											}
										>
											-
										</span>
									</td>
									<td>{item.price}</td>
									<td>{item.price * item.qty}</td>
									<td className="flex mt-3">
										<button
											className="bg-red-500 text-white cursor-pointer rounded p-2"
											onClick={() =>
												handleDelete(item._id)
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
				<div className="flex justify-end my-10">
					<p className="text-xl font-bold text-zinc-700">
						Sub Total including 15% TAX:{" "}
						<span className="text-[#6b68e7]">${subTotal}</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default CartPage;