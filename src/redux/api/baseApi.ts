import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5000/api/",
		prepareHeaders: (headers) => {
			const token = localStorage.getItem("token");
			if (token) {
				headers.set("authorization", token);
			}
			return headers;
		},
	}),
	tagTypes: ["products", "categories"],
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: (searchTerm) => `products/get-products`,
			providesTags: ["products"],
		}),
		getAllCategories: builder.query({
			query: () => `products/get-categories`,
			providesTags: ["categories"],
		}),
		getProductsByCategory: builder.query({
			query: (category) => {
				return {
					url: `/products/getProductsByCategory/${category}`,
					method: "GET",
				};
			},
			providesTags: ["products"],
		}),
		getProductById: builder.query({
			query: (id) => {
				return {
					url: `/products/${id}`,
					method: "GET",
				};
			},
			providesTags: ["products"],
		}),
		addProduct: builder.mutation({
			query: (data) => ({
				url: "/products/create-product",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["products"],
		}),
		updateProduct: builder.mutation({
			query: (data) => ({
				url: `/products/${data.id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["products"],
		}),
		deleteProduct: builder.mutation({
			query: (id) => ({
				url: `/products/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const {
	useGetAllProductsQuery,
	useGetProductByIdQuery,
	useAddProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation,
	useGetAllCategoriesQuery,
	useGetProductsByCategoryQuery,
} = baseApi;
