import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const dummyProducts = [
	{
		_id: 1,
		name: "Cricket Ball - Pro Elite",
		description:
			"High-quality Cricket Ball with enhanced grip and durability, perfect for professional matches.",
		image: [
			"https://cdn-d03d5231-5b2e278c.mysagestore.com/cf738e9579802e6b988bb225ca6bc00c/contents/1A2465/1A2465M01-cricket-ball-county-league-white.jpg",
			"https://cdn-d03d5231-5b2e278c.mysagestore.com/cf738e9579802e6b988bb225ca6bc00c/contents/1A2465/1A2465M03-cricket-ball-county-league-pink.jpg",
		],
		price: 99.99,
		brand: "EliteSports",
		category: "Cricket",
		rating: 4.8,
		variants: [
			{ type: "Size", value: "Standard" },
			{ type: "Color", value: "Black/Red" },
		],
		inventory: {
			quantity: 150,
			inStock: true,
		},
	},
	{
		_id: 2,
		name: "Cricket Bat - Pro Stick",
		description:
			"Top-grade cricket bat made from premium English willow. Ideal for aggressive batting.",
		image: [
			"https://example.com/images/cricket_bat_pro_stick_1.jpg",
			"https://example.com/images/cricket_bat_pro_stick_2.jpg",
		],
		price: 179.99,
		brand: "CricketMasters",
		category: "Cricket",
		rating: 4.7,
		variants: [
			{ type: "Size", value: "Short Handle" },
			{ type: "Weight", value: "2.8 lbs" },
		],
		inventory: {
			quantity: 80,
			inStock: true,
		},
	},
	{
		_id: 3,
		name: "Football - Training Ball",
		description:
			"Durable training football designed for practice sessions and casual play.",
		image: [
			"https://example.com/images/football_training_ball_1.jpg",
			"https://example.com/images/football_training_ball_2.jpg",
		],
		price: 29.99,
		brand: "TrainingGear",
		category: "Football",
		rating: 4.5,
		variants: [
			{ type: "Size", value: "5" },
			{ type: "Color", value: "Red/Blue" },
		],
		inventory: {
			quantity: 200,
			inStock: true,
		},
	},
	{
		_id: 4,
		name: "Cricket Helmet - Pro Guard",
		description:
			"Advanced cricket helmet with full face guard and adjustable fit for maximum protection.",
		image: [
			"https://example.com/images/cricket_helmet_pro_guard_1.jpg",
			"https://example.com/images/cricket_helmet_pro_guard_2.jpg",
		],
		price: 89.99,
		brand: "SafePlay",
		category: "Cricket",
		rating: 4.6,
		variants: [
			{ type: "Size", value: "Medium" },
			{ type: "Color", value: "Steel Grey" },
		],
		inventory: {
			quantity: 120,
			inStock: true,
		},
	},
];

const Featured = () => (
	<section className="max-w-5xl mx-auto my-10">
		<h2 className="uppercase text-2xl text-center font-bold text-[#6b68e7] p-5 my-5">
			Featured Products
		</h2>
		<div>
			{dummyProducts.map((product) => {
				return (
					<div
						className="grid grid-cols-12 gap-10 mb-10 bg-white p-5 shadow-xl rounded-lg"
						key={product._id}
					>
						<div className="col-span-4">
							<img
								src={product.image[0]}
								alt=""
								className="rounded-lg"
							/>
						</div>
						<div className="col-span-8 mr-5">
							<div className="flex justify-between items-center mb-3">
								<h4 className="text-[#8c8b8b] font-semibold">
									{product.category}
								</h4>
								<p className="flex justify-center items-center gap-1">
									<FaStar className="text-yellow-400" />
									{product.rating}
								</p>
								<p>Stock: {product.inventory.quantity}</p>
								<h4 className="bg-slate-200 rounded-full px-3 py-1">
									{product.brand}
								</h4>
							</div>
							<h3 className="text-3xl font-bold text-zinc-700">
								{product.name}
							</h3>
							<p className="text-[17px] text-slate-600 my-2">
								{product.description}
							</p>
							<p className="text-xl font-semibold">
								${product.price}
							</p>
							<button className="text-white text-center px-10 py-3 my-5 rounded font-bold bg-gradient-to-r from-indigo-500 to-indigo-800">
								<Link to={`/product/${product._id}`}>
									View Details
								</Link>
							</button>
						</div>
					</div>
				);
			})}
		</div>
	</section>
);

export default Featured;
