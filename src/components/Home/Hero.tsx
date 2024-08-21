import { Carousel } from "antd";
import { Link } from "react-router-dom";

const Hero = () => (
	<Carousel autoplay>
		<Link to="/all-products">
			<img
				src="https://admin.dazzle.com.bd/assets/accounts/a_8037/pro_3_picture834.jpg"
				className="w-full"
			/>
		</Link>
		<Link to="/">
			<img
				src="https://admin.dazzle.com.bd/assets/accounts/a_8037/pro_2_picture819.jpg"
				className="w-full"
			/>
		</Link>
	</Carousel>
);

export default Hero;
