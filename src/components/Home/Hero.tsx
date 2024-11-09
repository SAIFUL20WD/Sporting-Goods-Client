import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/images/banner/Flash_Sale_Banner.png";
import banner2 from "../../assets/images/banner/Shoes_Sale_Banner.png";
import banner3 from "../../assets/images/banner/Gym_Sale_Banner.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	const naviagate = useNavigate();
	return (
		<Carousel className="max-h-[600px]">
			<div
				className="cursor-pointer"
				onClick={() => naviagate("/all-products")}
			>
				<img src={banner1} className="w-full max-h-[500px]" />
			</div>
			<div
				className="cursor-pointer"
				onClick={() => naviagate("/all-products")}
			>
				<img src={banner2} className="w-full max-h-[500px]" />
			</div>
			<div
				className="cursor-pointer"
				onClick={() => naviagate("/all-products")}
			>
				<img src={banner3} className="w-full max-h-[500px]" />
			</div>
		</Carousel>
	);
};

export default Hero;
