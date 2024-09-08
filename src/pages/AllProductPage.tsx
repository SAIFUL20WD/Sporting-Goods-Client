import { useNavigate, useParams } from "react-router-dom";
import {
	useGetAllBrandsQuery,
	useGetAllCategoriesQuery,
	useGetAllProductsQuery,
} from "../redux/api/baseApi";
import { FaSearch } from "react-icons/fa";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";

const AllProductPage = () => {
	const { category } = useParams();
	const navigate = useNavigate();
	const searchRef = useRef<HTMLInputElement>(null);
	const [query, setQuery] = useState("");

	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("");
	const [categories, setCategories] = useState<string[]>([]);
	const [brands, setbrands] = useState<string[]>([]);
	const [ratings, setRatings] = useState<number[]>([]);

	const { data: productsData, refetch } = useGetAllProductsQuery(query);
	const { data: categoriesData } = useGetAllCategoriesQuery(null);
	const { data: brandsData } = useGetAllBrandsQuery(null);
	const ratingData = [1, 2, 3, 4, 5];

	const handleCategoryChange = (e, ctg) => {
		const duplicate = categories.find((category) => category === ctg);
		if (duplicate) {
			const newCategories = categories.filter((ele) => ele !== ctg);
			setCategories(newCategories);
		} else {
			setCategories([...categories, ctg]);
		}
	};

	const handleBrandChange = (e, brand) => {
		const duplicate = brands.find((ele) => ele === brand);
		if (duplicate) {
			const newBrands = brands.filter((ele) => ele !== brand);
			setbrands(newBrands);
		} else {
			setbrands([...brands, brand]);
		}
	};

	const handleRatingChange = (e, rating) => {
		const duplicate = ratings.find((ele) => ele === rating);
		if (duplicate) {
			const newRatings = ratings.filter((ele) => ele !== rating);
			setRatings(newRatings);
		} else {
			setRatings([...ratings, rating]);
		}
	};

	const handleClearFilter = () => {
		setSort("");
		setCategories([]);
		setbrands([]);
		setRatings([]);
		const checkInputs = document.querySelectorAll('input[type="checkbox"]');
		checkInputs.forEach((input) => {
			input.checked = false;
		});
	};

	useEffect(() => {
		let categoryList;
		if (category) {
			categoryList = category;
		} else {
			categoryList = categories?.join(",");
		}
		const brandList = brands?.join(",");
		const ratingList = ratings?.join(",");
		const customQuery = `name=${search}&categories=${categoryList}&brands=${brandList}&ratings=${ratingList}&sort=${sort}`;
		setQuery(customQuery);
		if (query) {
			refetch();
		}
	}, [search, categories, brands, ratings, sort, refetch, query, category]);

	return (
		<section className="max-w-7xl mx-auto my-10">
			<div className="flex max-sm:flex-col max-sm:ml-10 justify-between">
				<div className="mb-4.5 relative">
					<input
						type="text"
						id="name"
						name="name"
						className="min-w-80 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
						placeholder="Enter Product Name"
						ref={searchRef}
						required
					/>
					<FaSearch
						className="absolute top-4 left-72 cursor-pointer text-xl"
						onClick={() => setSearch(searchRef.current.value)}
					/>
				</div>
				<div>
					<label htmlFor="sort" className="font-bold">
						Sort By:{" "}
					</label>
					<select
						name="sort"
						id="sort"
						className="p-3 outline-2"
						onChange={(e) => setSort(e.target.value)}
					>
						<option value="default">Default</option>
						<option value="price-asc">Price Low to High</option>
						<option value="price-desc">Price High to Low</option>
					</select>
				</div>
			</div>
			<div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
				<aside className="flex-shrink-0 w-full md:w-1/4 p-4 border-r border-gray-200 bg-gray-50">
					<div className="flex justify-between">
						<h3 className="text-xl font-bold p-2">Filters</h3>
						<button
							className="bg-red-500 text-white px-5 rouned"
							onClick={handleClearFilter}
						>
							Clear Filter
						</button>
					</div>
					<div className="my-3">
						<h4 className="text-xl font-semibold p-3 border-b mb-5">
							Price Range
						</h4>
						<RangeSlider />
					</div>
					<div className="my-3">
						<h4 className="text-xl font-semibold p-3 border-b">
							{category ? "" : "Categories"}
						</h4>
						{category
							? ""
							: categoriesData?.data?.map((item) => {
									return (
										<div
											className="flex items-center my-2"
											key={item}
										>
											<input
												type="checkbox"
												id={item}
												className="h-4 w-4 mr-2"
												onChange={(e) =>
													handleCategoryChange(
														e,
														item
													)
												}
											/>
											<label htmlFor={item}>{item}</label>
										</div>
									);
							  })}
					</div>
					<div className="my-3">
						<h4 className="text-xl font-semibold p-3 border-b">
							Brands
						</h4>
						{brandsData?.data?.map((item) => {
							return (
								<div
									className="flex items-center my-2"
									key={item}
								>
									<input
										type="checkbox"
										id={item}
										className="h-4 w-4 mr-2"
										onChange={(e) =>
											handleBrandChange(e, item)
										}
									/>
									<label htmlFor={item}>{item}</label>
								</div>
							);
						})}
					</div>

					<div className="my-3">
						<h4 className="text-xl font-semibold p-3 border-b">
							Rating
						</h4>
						{ratingData.map((item) => {
							return (
								<div
									className="flex items-center my-2"
									key={item}
								>
									<input
										type="checkbox"
										id={item.toString()}
										className="h-4 w-4 mr-2"
										onChange={(e) =>
											handleRatingChange(e, item)
										}
									/>
									<label htmlFor={item.toString()}>
										{item}
									</label>
								</div>
							);
						})}
					</div>
				</aside>
				<div className="grid grid-cols-12">
					{productsData ? (
						productsData?.data?.map((product) => {
							return (
								<div
									key={product._id}
									className="col-span-4 max-h-125 max-sm:col-span-12 max-lg:col-span-6 m-5 max-sm:ml-10 text-center flex flex-col justify-center items-center shadow-lg rounded-xl p-5 hover:shadow-2xl hover:scale-x-105 duration-300 max-w-xs"
								>
									<div className="w-60">
										<img src={product.image[0]} alt="" />
									</div>
									<h4 className="text-lg font-semibold mt-3 mb-1">
										{product.name}
									</h4>
									<p className="text-lg text-purple-500 font-bold my-2">
										${product.price}
									</p>
									<button
										className="uppercase text-white text-center px-10 py-3 rounded-lg font-bold bg-gradient-to-r from-indigo-500 to-indigo-800"
										onClick={() =>
											navigate(`/product/${product._id}`)
										}
									>
										View Details
									</button>
								</div>
							);
						})
					) : (
						<Loader />
					)}
				</div>
			</div>
		</section>
	);
};

export default AllProductPage;
