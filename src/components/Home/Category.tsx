import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const gridStyle: React.CSSProperties = {
	width: "25%",
	textAlign: "center",
};

const categories = [
	{ id: 1, name: "Category 1" },
	{ id: 2, name: "Category 2" },
	{ id: 3, name: "Category 3" },
	{ id: 4, name: "Category 4" },
	{ id: 5, name: "Category 5" },
	{ id: 6, name: "Category 6" },
];

const Category = () => (
	<Card title="Categories" className="text-center mb-16">
		{categories.map((item) => {
			return (
				<Card.Grid style={gridStyle} key={item.id}>
					<Link to={`/all-products/${item.name}`}>{item.name}</Link>
				</Card.Grid>
			);
		})}
	</Card>
);

export default Category;
