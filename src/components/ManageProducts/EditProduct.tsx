import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import {
	useGetProductByIdQuery,
	useUpdateProductMutation,
} from "../../redux/api/baseApi";
import { useNavigate, useParams } from "react-router-dom";
import useDisableNumberInputScroll from "../../hooks/useDisableNumberInputScroll";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditProduct = () => {
	const { id } = useParams();
	const { data } = useGetProductByIdQuery(id);
	useDisableNumberInputScroll();
	const navigate = useNavigate();

	const [product, setProduct] = useState({});
	const [updateProduct] = useUpdateProductMutation();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		updateProduct(product);
		toast.success("Product updated successfully");
		navigate("/manage-products/view-products");
	};

	const handleImageUpload = async (e) => {
		const toastId = toast.loading("Uploading");

		const file = e.target.files[0];

		const formData = new FormData();
		formData.append("image", file);

		const res = await fetch(image_hosting_api, {
			method: "post",
			body: formData,
		});
		const data = await res.json();

		if (data.success) {
			setProduct({
				...product,
				image: [data.data.url],
			});
			toast.success("Image uploaded!", { id: toastId, duration: 2000 });
		} else {
			toast.error("Image upload failed!", {
				id: toastId,
				duration: 2000,
			});
		}
	};

	if (!data) {
		<div>Loading...</div>;
	} else {
		return (
			<div
				className="grid-cols-9 sm:grid-cols-2 -ml-20 p-10 bg-slate-100"
				onLoad={() => setProduct({ ...product, id: id })}
			>
				<div className="flex flex-col gap-9">
					<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
						<div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
							<h3 className="font-medium text-black dark:text-white">
								Edit Product
							</h3>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="py-10 px-20">
								<div className="mb-4.5">
									<label
										htmlFor="name"
										className="mb-2.5 block text-black dark:text-white"
									>
										Product Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
										defaultValue={data.data.name}
										onBlur={(e) =>
											setProduct({
												...product,
												[e.target.name]: e.target.value,
											})
										}
										required
									/>
								</div>

								<div className="mb-6">
									<label
										htmlFor="description"
										className="mb-2.5 block text-black dark:text-white"
									>
										Description
									</label>
									<textarea
										id="description"
										name="description"
										className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
										defaultValue={data.data.description}
										onBlur={(e) =>
											setProduct({
												...product,
												[e.target.name]: e.target.value,
											})
										}
										required
									></textarea>
								</div>

								<div className="mb-4.5">
									<label
										htmlFor="category"
										className="mb-2.5 block text-black dark:text-white"
									>
										Cateogry
									</label>
									<input
										type="text"
										id="category"
										name="category"
										className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
										defaultValue={data.data.category}
										onBlur={(e) =>
											setProduct({
												...product,
												[e.target.name]: e.target.value,
											})
										}
										required
									/>
								</div>

								<div className="mb-4.5">
									<label
										htmlFor="brand"
										className="mb-2.5 block text-black dark:text-white"
									>
										Brand
									</label>
									<input
										type="text"
										id="brand"
										name="brand"
										className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
										defaultValue={data.data.brand}
										onBlur={(e) =>
											setProduct({
												...product,
												[e.target.name]: e.target.value,
											})
										}
										required
									/>
								</div>

								<div className="mb-4.5">
									<label
										htmlFor="price"
										className="mb-2.5 block text-black dark:text-white"
									>
										Price
									</label>
									<input
										type="number"
										id="price"
										name="price"
										className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
										defaultValue={data.data.price}
										min={1}
										onBlur={(e) =>
											setProduct({
												...product,
												[e.target.name]: parseInt(
													e.target.value
												),
											})
										}
										required
									/>
								</div>

								<div className="mb-4.5">
									<label
										htmlFor="quantity"
										className="mb-2.5 block text-black dark:text-white"
									>
										Quantity
									</label>
									<input
										type="number"
										id="quantity"
										name="quantity"
										className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
										defaultValue={
											data.data.inventory.quantity
										}
										min={1}
										onBlur={(e) =>
											setProduct({
												...product,
												inventory: {
													quantity: parseInt(
														e.target.value
													),
													inStock: true,
												},
											})
										}
										required
									/>
								</div>

								<div className="mb-4.5">
									<label
										htmlFor="rating"
										className="mb-2.5 block text-black dark:text-white"
									>
										Rating
									</label>
									<input
										type="number"
										id="rating"
										name="rating"
										className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
										defaultValue={data.data.rating}
										min={1}
										max={5}
										onBlur={(e) =>
											setProduct({
												...product,
												[e.target.name]: parseInt(
													e.target.value
												),
											})
										}
										required
									/>
								</div>

								<div className="mb-4.5">
									<h3 className="font-medium text-black dark:text-white">
										Product Image
									</h3>
									<div>
										<img
											src={data.data.image[0]}
											className="w-20 mb-3"
										/>
									</div>
									<div
										id="FileUpload"
										className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
									>
										<input
											type="file"
											accept="image/*"
											className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
											onChange={handleImageUpload}
										/>
										<div className="flex flex-col items-center justify-center space-y-3">
											<span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
														fill="#3C50E0"
													/>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
														fill="#3C50E0"
													/>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
														fill="#3C50E0"
													/>
												</svg>
											</span>
											<p>
												<span className="text-primary">
													Click to upload
												</span>
											</p>
											<p className="mt-1.5">
												PNG / JPG or Other Image Format
											</p>
										</div>
									</div>
								</div>

								<button className="uppercase flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
									Update Product
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
};

export default EditProduct;
