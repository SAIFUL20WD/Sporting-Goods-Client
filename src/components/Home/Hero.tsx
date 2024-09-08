import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/images/banner/Flash_Sale_Banner.png";
import banner2 from "../../assets/images/banner/Shoes_Sale_Banner.png";
import banner3 from "../../assets/images/banner/Gym_Sale_Banner.png";

const Hero = () => {
	return (
		<Carousel>
			<div>
				<img src={banner1} />
			</div>
			<div>
				<img src={banner2} />
			</div>
			<div>
				<img src={banner3} />
			</div>
		</Carousel>
	);
};

export default Hero;
