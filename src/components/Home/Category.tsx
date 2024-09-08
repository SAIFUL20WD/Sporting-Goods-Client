import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/api/baseApi";

const Category = () => {
	const { data } = useGetAllCategoriesQuery(null);
	return (
		<section className="max-w-7xl mx-auto">
			<h2 className="uppercase text-2xl text-center font-bold mb-10 p-5 text-[#6b68e7]">
				Categories
			</h2>
			<div className="grid grid-cols-12 gap-5 mx-5">
				{data?.data?.map((item, i) => {
					return (
						<Link
							to={`all-products/${item}`}
							key={i}
							className="max-sm:col-span-6 max-lg:col-span-4 col-span-2 bg-[#eee] rounded shadow hover:shadow-lg duration-200 p-5"
						>
							<h3 className="text-center font-semibold text-zinc-800">
								{item}
							</h3>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default Category;
