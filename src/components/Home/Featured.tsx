import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const dummyProducts = [
	{
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
	<section className="my-10">
		<h2 className="my-5 inline-block text-transparent bg-clip-text text-3xl font-bold font-serif bg-gradient-to-r from-indigo-500 to-indigo-800">
			Featured
		</h2>
		<Row gutter={16}>
			{dummyProducts.map((product) => {
				return (
					<Col span={8} className="my-5" key={product.name}>
						<Card
							title={product.name}
							cover={<img src={product.image[0]} alt="" />}
						>
							<div>
								<h3>Category</h3>
								<h3>Brand</h3>
								<p>Stock</p>
								<p>Rating</p>
								<p>Price</p>
								<p>Details</p>
								<button className="text-white text-center px-10 py-3 rounded font-bold bg-gradient-to-r from-indigo-500 to-indigo-800">
									<Link to="/product/:id">View Details</Link>
								</button>
							</div>
						</Card>
					</Col>
				);
			})}
		</Row>
	</section>
);

export default Featured;
