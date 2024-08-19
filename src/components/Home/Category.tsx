import React from "react";
import { Card } from "antd";

const gridStyle: React.CSSProperties = {
	width: "25%",
	textAlign: "center",
};

const Category = () => (
	<Card title="Category">
		<Card.Grid style={gridStyle}>Content</Card.Grid>
		<Card.Grid style={gridStyle}>Content</Card.Grid>
		<Card.Grid style={gridStyle}>Content</Card.Grid>
		<Card.Grid style={gridStyle}>Content</Card.Grid>
		<Card.Grid style={gridStyle}>Content</Card.Grid>
		<Card.Grid style={gridStyle}>Content</Card.Grid>
		<Card.Grid style={gridStyle}>Content</Card.Grid>
	</Card>
);

export default Category;
