import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useAddProductMutation } from "../../redux/api/baseApi";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
	const [product, setProduct] = useState({});
	const navigate = useNavigate();
	const [addProduct, { isLoading, isError, isSuccess }] =
		useAddProductMutation();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		addProduct(product);
		toast.success("Product added successfully");
		navigate("/manage-products");
	};

	const handleImageUpload = async (e: any) => {
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

	return (
		<div className="col-span-6 bg-slate-200 p-5 rounded">
			<form onSubmit={handleSubmit} className="p-5">
				<label htmlFor="name" className="block text-base font-medium">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className="w-full h-10 outline-indigo-500 p-1 mb-2 border-2 border-indigo-700 rounded"
					placeholder="Enter Product Name"
					onBlur={(e) =>
						setProduct({
							...product,
							[e.target.name]: e.target.value,
						})
					}
					required
				/>

				<label
					htmlFor="description"
					className="block text-base font-medium"
				>
					Description
				</label>
				<textarea
					id="description"
					name="description"
					className="w-full outline-indigo-500 p-1 mb-2 border-2 border-indigo-700 rounded"
					rows={5}
					placeholder="Enter Product Description"
					onBlur={(e) =>
						setProduct({
							...product,
							[e.target.name]: e.target.value,
						})
					}
					required
				></textarea>

				<label
					htmlFor="category"
					className="block text-base font-medium"
				>
					Cateogry
				</label>
				<input
					type="text"
					id="category"
					name="category"
					className="w-full h-10 outline-indigo-500 p-1 mb-2 border-2 border-indigo-700 rounded"
					placeholder="Enter Product Category"
					onBlur={(e) =>
						setProduct({
							...product,
							[e.target.name]: e.target.value,
						})
					}
					required
				/>

				<label htmlFor="brand" className="block text-base font-medium">
					Brand
				</label>
				<input
					type="text"
					id="brand"
					name="brand"
					className="w-full h-10 outline-indigo-500 p-1 mb-2 border-2 border-indigo-700 rounded"
					placeholder="Enter Product Brand"
					onBlur={(e) =>
						setProduct({
							...product,
							[e.target.name]: e.target.value,
						})
					}
					required
				/>

				<label htmlFor="price" className="block text-base font-medium">
					Price
				</label>
				<input
					type="number"
					id="price"
					name="price"
					className="w-full h-10 outline-indigo-500 p-1 mb-2 border-2 border-indigo-700 rounded"
					placeholder="Enter Product Price"
					min={1}
					onBlur={(e) =>
						setProduct({
							...product,
							[e.target.name]: parseInt(e.target.value),
						})
					}
					required
				/>

				<label
					htmlFor="quantity"
					className="block text-base font-medium"
				>
					Quantity
				</label>
				<input
					type="number"
					id="quantity"
					name="quantity"
					className="w-full h-10 outline-indigo-500 p-1 mb-2 border-2 border-indigo-700 rounded"
					placeholder="Enter Product Quantity"
					min={1}
					onBlur={(e) =>
						setProduct({
							...product,
							inventory: {
								quantity: parseInt(e.target.value),
								inStock: true,
							},
						})
					}
					required
				/>

				<label htmlFor="rating" className="block text-base font-medium">
					Rating
				</label>
				<input
					type="number"
					id="rating"
					name="rating"
					className="w-full outline-indigo-500 p-1 mb-2 border-2 border-indigo-700 rounded"
					placeholder="Enter Product Rating"
					min={1}
					max={5}
					onBlur={(e) =>
						setProduct({
							...product,
							[e.target.name]: parseInt(e.target.value),
						})
					}
					required
				/>

				<label htmlFor="image" className="block text-base font-medium">
					Image
				</label>
				<input
					type="file"
					id="image"
					name="image"
					accept=".jpg, .jpeg, .png"
					onChange={handleImageUpload}
					required
				/>
				<br />
				<button className="text-white text-center px-10 py-3 my-5 rounded font-bold bg-gradient-to-r from-indigo-500 to-indigo-800">
					Add Product
				</button>
			</form>
		</div>
	);
};

export default AddProduct;
