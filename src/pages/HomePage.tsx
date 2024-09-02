import Category from "../components/Home/Category";
import Contact from "../components/Home/Contact";
// import Featured from "../components/Home/Featured";
import Hero from "../components/Home/Hero";

const HomePage = () => {
	return (
		<>
			<Hero />
			{/* <Featured /> */}
			<Category />
			<Contact />
		</>
	);
};

export default HomePage;
