import { useParams } from "react-router-dom";
import {
	useGetAllProductsQuery,
	useGetProductsByCategoryQuery,
} from "../redux/api/baseApi";

const AllProductPage = ({ categoryStatus }) => {
	const { category } = useParams();

	const { data: products, isLoading, error } = useGetAllProductsQuery(null);
	const { data: categoryProducts } = useGetProductsByCategoryQuery(category);

	if (categoryStatus) {
		return <h3>Category</h3>;
	}
	return <div></div>;
};

export default AllProductPage;
