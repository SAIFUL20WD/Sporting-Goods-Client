import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/baseApi";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const SingleProductPage = () => {
	const { id } = useParams();
	const { data } = useGetProductByIdQuery(id);

	const [quantity, setQuantity] = useState(1);
	const [disable, setDisable] = useState(false);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (data) {
			const stock = data?.data?.inventory?.quantity;
			if (quantity > stock) {
				setDisable(true);
			} else {
				setDisable(false);
			}
		}
	}, [data, quantity]);

	const handleIncreaseDecrease = (operation: string) => {
		if (operation === "inc") {
			setQuantity((prev) => prev + 1);
		}
		if (operation === "dec" && quantity > 1) {
			setQuantity((prev) => prev - 1);
		}
	};

	const handleAddToCart = () => {
		const productData = { ...data.data, qty: quantity };
		dispatch(addToCart(productData));
		toast.success("Product added to cart");
	};

	if (data) {
		const {
			name,
			description,
			image,
			brand,
			category,
			price,
			rating,
			inventory,
		} = data.data;

		return (
			<section className="max-w-5xl mx-auto my-20">
				<Toaster />
				<div className="grid grid-cols-2">
					<div className="col-span-1">
						<PhotoProvider>
							<div className="w-100">
								<PhotoView src={image[0]}>
									<img src={image[0]} alt="" />
								</PhotoView>
							</div>
						</PhotoProvider>
					</div>
					<div className="col-span-1">
						<div className="pb-5 border-b border-zinc-200">
							<h3 className="text-lg font-bold">{brand}</h3>
							<h2 className="text-3xl font-semibold my-3">
								{name}
							</h2>
							<p className="text-3xl text-[#6b68e7] font-bold">
								${price}
							</p>
						</div>
						<div className="py-5 border-b border-zinc-200">
							<p>
								Availability:{" "}
								{inventory.quantity > 0 ? (
									<span className="text-orange-500">
										In Stock
									</span>
								) : (
									<span className="text-red-500">
										Out of Stock
									</span>
								)}
							</p>
							<p>Stock: {inventory.quantity}</p>
							<p>Category: {category} </p>
							<Rating
								style={{ maxWidth: 80, marginTop: "10px" }}
								value={rating}
								readOnly
							/>
						</div>
						<div className="my-5">
							<label
								htmlFor="quantity"
								className="mr-3 text-black"
							>
								Quantity:
							</label>
							<span
								className="bg-primary text-white text-xl p-2 cursor-pointer"
								onClick={() => handleIncreaseDecrease("inc")}
							>
								+
							</span>
							<input
								type="number"
								id="quantity"
								min={1}
								max={inventory.quantity}
								value={quantity}
								disabled={true}
								className="text-center w-20 rounded border-[1.5px] border-stroke bg-transparent py-2 px-3 text-black outline-none transition focus:border-primary active:border-primary"
							/>
							<span
								className="bg-red-500 text-white text-xl p-2 cursor-pointer"
								onClick={() => handleIncreaseDecrease("dec")}
							>
								-
							</span>
						</div>
						<button
							className={`uppercase flex w-full justify-center rounded p-3 font-medium hover:bg-opacity-90 ${
								disable
									? "bg-slate-200 cursor-not-allowed"
									: "bg-primary text-gray"
							}`}
							onClick={handleAddToCart}
							disabled={disable}
						>
							Add To Cart
						</button>
					</div>
				</div>
				<div className="bg-slate-100 py-5 px-10 my-10 shadow">
					<h4 className="text-2xl my-1">Description</h4>
					<p>{description}</p>
				</div>
			</section>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default SingleProductPage;
