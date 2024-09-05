import { Link } from "react-router-dom";
import notFound from "../assets/images/404.jpg";

const NotFound = () => {
	return (
		<div className="grid place-content-center">
			<img src={notFound} alt="" />
			<Link to="/" className="flex justify-center">
				<h1 className="text-5xl text-center bg-slate-200 px-10 py-5 rounded-full mt-5">
					Go Home
				</h1>
			</Link>
		</div>
	);
};

export default NotFound;
