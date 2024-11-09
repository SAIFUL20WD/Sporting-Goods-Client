import Category from "../components/Home/Category";
import Featured from "../components/Home/Featured";
import Hero from "../components/Home/Hero";
import Newsletter from "../components/Home/Newsletter";

const HomePage = () => {
	return (
		<>
			<Hero />
			<Featured />
			<Category />
			<Newsletter />
		</>
	);
};

export default HomePage;
