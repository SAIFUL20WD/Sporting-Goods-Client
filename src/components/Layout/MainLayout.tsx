import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { ConfigProvider, Layout, Menu, MenuProps } from "antd";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const { Header, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
	{ key: 0, label: <Link to="/">Home</Link> },
	{ key: 1, label: <Link to="/all-products">All Prouducts</Link> },
	{ key: 2, label: <Link to="/manage-products">Manage Prouducts</Link> },
	{ key: 3, label: <Link to="/about-us">About Us</Link> },
	{
		key: 4,
		label: <Link to="/cart">Cart</Link>,
		icon: <ShoppingCartOutlined />,
	},
	{ key: 5, label: <Link to="/login">Login</Link>, icon: <UserOutlined /> },
];

const MainLayout = () => {
	const [current, setCurrent] = useState("0");

	const onClick: MenuProps["onClick"] = (e) => {
		setCurrent(e.key);
	};

	return (
		<ConfigProvider
			theme={{
				components: {
					Menu: {
						itemColor: "rgba(255, 255, 255, 1)",
						itemHoverBg: "rgba(255, 255, 255, 1)",
						itemHoverColor: "rgba(255, 255, 255, 1)",
						itemSelectedBg: "rgba(255, 255, 255, 1)",
						itemSelectedColor: "#ffffff",
						horizontalItemSelectedColor: "#ffffff",
						iconSize: 16,
					},
				},
			}}
		>
			<Layout className="container">
				<Header className="bg-black">
					<Menu
						theme="dark"
						mode="horizontal"
						items={items}
						onClick={onClick}
						selectedKeys={[current]}
						className="bg-black font-bold"
					/>
				</Header>
				<Content style={{ padding: "0 48px" }}>
					<Outlet />
				</Content>
				<Footer />
			</Layout>
		</ConfigProvider>
	);
};

export default MainLayout;
