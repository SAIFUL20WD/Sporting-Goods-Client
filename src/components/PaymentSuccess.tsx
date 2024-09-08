import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
	return (
		<section className="max-w-3xl mx-auto text-center my-20">
			<div className="flex justify-center items-center">
				<FaCheckCircle color="green" size={50} />
			</div>
			<h4 className="text-2xl text-green-500 font-semibold my-3">
				You Payment is Successful!
			</h4>
			<p>
				Your Order Has Been Placed. Thank You For Your Payment. We Will
				Contact You Soon
			</p>
			<Link to="/" className="flex justify-center">
				<h1 className="text-3xl text-center bg-green-500 text-white px-10 py-5 rounded-full mt-5">
					Go Home
				</h1>
			</Link>
		</section>
	);
};

export default PaymentSuccess;
