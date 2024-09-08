import { FormEvent, useState } from "react";
import contact from "../../assets/images/contact.png";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log("Form data submitted:", formData);
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	return (
		<section
			className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-md my-16 max-md:mx-5"
			id="contact"
		>
			<h2 className="uppercase text-2xl text-center font-bold mb-10 p-5 text-[#6b68e7]">
				Contact Us
			</h2>
			<div className="grid grid-cols-4 my-5 max-md:flex max-md:flex-col">
				<div className="col-span-2">
					<img
						src={contact}
						alt="contact"
						className="w-[700px] mt-20"
					/>
				</div>
				<div className="col-span-2">
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="mb-2.5 block font-medium text-black dark:text-white"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="email"
								className="mb-2.5 block font-medium text-black dark:text-white"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="subject"
								className="mb-2.5 block font-medium text-black dark:text-white"
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								required
								className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="message"
								className="mb-2.5 block font-medium text-black dark:text-white"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows={4}
								className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
							/>
						</div>

						<button
							type="submit"
							className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
