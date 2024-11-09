import { Link } from "react-router-dom";
import { useGetProductsByTagQuery } from "../../redux/api/baseApi";
import { Rating } from "@smastrom/react-rating";
import { motion, AnimatePresence } from "framer-motion";

const Featured = () => {
	const { data } = useGetProductsByTagQuery("featured", {
		pollingInterval: 30000,
	});

	return (
		<section className="max-w-5xl mx-auto my-5">
			<h2 className="uppercase text-2xl text-center font-bold text-[#6b68e7] p-5 my-5">
				Featured Products
			</h2>
			<AnimatePresence mode={"wait"}>
				<motion.div
					key={"featuerd"}
					initial="initialState"
					animate="animateState"
					exit="exitState"
					transition={{
						type: "tween",
						duration: 2,
					}}
					variants={{
						initialState: {
							scale: 1.2,
							opacity: 0,
						},
						animateState: {
							scale: 1,
							opacity: 1,
						},
						exitState: {
							opacity: 0,
						},
					}}
					className=""
				>
					{data?.data?.map((product) => {
						return (
							<div
								className="grid grid-cols-12 max-md:grid-cols-4 max-md:mx-5 mx-5 gap-10 mb-10 bg-white p-5 shadow-xl rounded-lg hover:scale-105 hover:shadow-2xl duration-300"
								key={product._id}
							>
								<div className="col-span-4">
									<img
										src={product.image[0]}
										alt=""
										className="rounded-lg"
									/>
								</div>
								<div className="col-span-8">
									<h4 className="inline-block bg-slate-200 rounded-full px-3 py-1 my-2">
										{product.brand}
									</h4>
									<h3 className="text-3xl font-bold text-zinc-700">
										{product.name}
									</h3>
									<p className="text-[17px] text-slate-600 my-2">
										{product.description}
									</p>
									<h4 className="text-[#8c8b8b] text-lg my-3 font-semibold">
										{product.category}
									</h4>

									<p className="font-bold my-3">
										Stock: {product.inventory.quantity}
									</p>
									<Rating
										style={{
											maxWidth: 80,
											margin: "8px 0px",
										}}
										value={product.rating}
										readOnly
									/>
									<p className="text-xl font-semibold">
										${product.price}
									</p>
									<Link to={`/product/${product._id}`}>
										<button className="text-white text-center px-10 py-3 my-5 rounded font-bold bg-gradient-to-r from-indigo-500 to-indigo-800">
											Order Now
										</button>
									</Link>
								</div>
							</div>
						);
					})}
				</motion.div>
			</AnimatePresence>
		</section>
	);
};

export default Featured;
