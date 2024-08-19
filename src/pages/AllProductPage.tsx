import { useGetAllProductsQuery } from "../redux/api/baseApi";

const AllProductPage = () => {
	const { data, isLoading, error } = useGetAllProductsQuery(null);
	console.log(data);
	return <div></div>;
};

export default AllProductPage;
