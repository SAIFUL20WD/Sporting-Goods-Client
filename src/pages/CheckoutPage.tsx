import { useNavigate } from "react-router-dom";
import { emptyCart } from "../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { FormEvent, useState } from "react";
import { RootState } from "../redux/store";
import {
	useCreateOrderMutation,
	useUpdateProductMutation,
} from "../redux/api/baseApi";
import toast, { Toaster } from "react-hot-toast";

const CheckoutPage = () => {
	const cart = useAppSelector((state: RootState) => state.cart.cart);
	const [updateProduct] = useUpdateProductMutation();
	const [createOrder] = useCreateOrderMutation();
	const [billingDetails, setBillingDetails] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		payment: "",
	});
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const total = cart.reduce(
			(acc, curr) => acc + curr.price * curr.qty,
			0
		);
		const tax = total * 0.15;
		const totalWithTax = Math.round(total + tax);

		const res = await createOrder({
			user: { ...billingDetails },
			products: cart.map((product) => {
				return {
					productId: product._id,
					qty: product.qty,
				};
			}),
			totalPrice: totalWithTax,
		}).unwrap();

		if (res?.data?.payment_url) {
			toast.success("Redirecting to payment gateway");
			window.location.href = res.data.payment_url;
		}

		if (billingDetails.payment === "cash") {
			dispatch(emptyCart());
			navigate("/success");
		}
	};

	return (
		<section className="max-w-7xl mx-auto p-8">
			<Toaster />
			<div className="col-span-8 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
				<div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
					<h3 className="font-medium text-black dark:text-white">
						Billing Details
					</h3>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="p-8">
						<div className="mb-4.5">
							<label
								htmlFor="name"
								className="mb-2.5 block text-black dark:text-white"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
								placeholder="Enter Your Name"
								required
								onBlur={(e) =>
									setBillingDetails({
										...billingDetails,
										[e.target.name]: e.target.value,
									})
								}
							/>
						</div>

						<div className="mb-4.5">
							<label
								htmlFor="email"
								className="mb-2.5 block text-black dark:text-white"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
								placeholder="Enter Your Email"
								required
								onBlur={(e) =>
									setBillingDetails({
										...billingDetails,
										[e.target.name]: e.target.value,
									})
								}
							/>
						</div>

						<div className="mb-4.5">
							<label
								htmlFor="phone"
								className="mb-2.5 block text-black dark:text-white"
							>
								Phone
							</label>
							<input
								type="number"
								id="phone"
								name="phone"
								className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
								placeholder="Enter Your Phone Number"
								required
								onBlur={(e) =>
									setBillingDetails({
										...billingDetails,
										[e.target.name]: e.target.value,
									})
								}
							/>
						</div>

						<div className="mb-4.5">
							<label
								htmlFor="address"
								className="mb-2.5 block text-black dark:text-white"
							>
								Delivery Address
							</label>
							<input
								type="text"
								id="address"
								name="address"
								className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
								placeholder="Enter Your Delivery Address"
								required
								onBlur={(e) =>
									setBillingDetails({
										...billingDetails,
										[e.target.name]: e.target.value,
									})
								}
							/>
						</div>

						<p className="my-2">Payment Method</p>
						<div className="mb-4.5">
							<input
								type="radio"
								id="cash"
								name="payment"
								value="cash"
								checked={billingDetails.payment === "cash"}
								required
								onChange={(e) =>
									setBillingDetails({
										...billingDetails,
										[e.target.name]: e.target.value,
									})
								}
							/>
							<label htmlFor="cash" className="mx-3 mb-1">
								Cash on Delivery
							</label>
							<input
								type="radio"
								id="online"
								name="payment"
								value="online"
								checked={billingDetails.payment === "online"}
								required
								onChange={(e) =>
									setBillingDetails({
										...billingDetails,
										[e.target.name]: e.target.value,
									})
								}
							/>
							<label htmlFor="online" className="mx-3 mb-1">
								Online Payment
							</label>
						</div>

						<button className="uppercase flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
							Place Order
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default CheckoutPage;
