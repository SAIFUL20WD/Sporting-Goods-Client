import { useEffect, useState } from "react";
import {
	incrementDecrement,
	removeFromCart,
} from "../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import toast, { Toaster } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
	const cart = useAppSelector((state: RootState) => state.cart.cart);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [subTotal, setSubTotal] = useState(0);
	const [disable, setDisable] = useState(false);

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

	const handleProceedToCheckout = () => {
		navigate("/checkout");
	};

	useEffect(() => {
		subTotalCalc();
		let flag = false;
		cart.forEach((product) => {
			const newDBQuantity = product.inventory.quantity - product.qty;
			if (newDBQuantity < 0) {
				flag = true;
			}
		});
		if (flag) {
			setDisable(true);
		} else {
			setDisable(false);
		}
	}, [cart]);

	return (
		<section
			className="max-w-7xl mx-auto my-10 min-h-screen"
			onLoad={subTotalCalc}
		>
			<Toaster />
			<h3 className="text-3xl text-center text-[#6b68e7] font-semibold uppercase my-5">
				Cart
			</h3>
			{cart.length === 0 ? (
				<h4 className="text-3xl text-center text-[#6b68e7] font-semibold uppercase my-5">
					Your Cart is Empty
				</h4>
			) : (
				<>
					<div className="grid grid-cols-12 gap-10 mx-8">
						<table className="col-span-12 table-auto bg-white rounded shadow-lg">
							<thead>
								<tr className="[&>*]:p-5 border-b-2 border-slate-400 uppercase">
									<th>No</th>
									<th>Image</th>
									<th>Product</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Subtotal</th>
								</tr>
							</thead>
							<tbody>
								{cart.map((item, i) => {
									return (
										<tr
											key={item._id}
											className="[&>*]:p-5 text-center border-b border-zinc-300"
										>
											<td>{i + 1}</td>
											<td>
												<img
													src={item?.image[0]}
													alt=""
													className="w-16"
												/>
											</td>
											<td className="font-semibold">
												{item.name}
											</td>
											<td>${item.price}</td>
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

											<td>${item.price * item.qty}</td>
											<td>
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
					</div>
					<div className=" p-5 m-3">
						<p className="text-xl text-end font-bold text-zinc-700 mb-3">
							Total:{" "}
							<span className="text-[#6b68e7]">${subTotal}</span>
							<span className="text-sm"> (15% VAT Included)</span>
						</p>
						<button
							className={`uppercase flex w-full justify-center rounded p-3 font-medium hover:bg-opacity-90 ${
								disable
									? "bg-gray cursor-not-allowed"
									: "bg-primary text-gray"
							}`}
							onClick={handleProceedToCheckout}
							disabled={disable}
						>
							Proceed To Checkout
						</button>
					</div>
				</>
			)}
		</section>
	);
};

export default CartPage;
