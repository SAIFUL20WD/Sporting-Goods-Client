import { Layout, Menu } from "antd";
// import Item from "antd/es/list/Item";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

// const items = new Array(15).fill(null).map((_, index) => ({
// 	key: index + 1,
// 	label: `nav ${index + 1}`,
// }));

const items = [
	{ key: 1, label: <a href="/all-product">All Prouduct</a> },
	{ key: 2, label: <a href="/manage-product">Manage Prouduct</a> },
	{ key: 3, label: <a href="/cart">Cart</a> },
	{ key: 4, label: <a href="/about-us">About Us</a> },
];

const MainLayout = () => {
	return (
		<Layout>
			{/*style={{ maxWidth: "90%", margin: "0 auto" }} */}
			<Header style={{ display: "flex", alignItems: "center" }}>
				<div className="demo-logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					items={items}
					style={{ flex: 1, minWidth: 0 }}
				/>
				{/* <Menu>
                <Item key="home">
                    <Link to="#home">Home</Link>
                </Item>
                </Menu> */}
			</Header>
			<Content style={{ padding: "0 48px" }}>
				<Outlet />
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Ant Design ©{new Date().getFullYear()} Created by Ant UED
			</Footer>
		</Layout>
	);
};

export default MainLayout;
