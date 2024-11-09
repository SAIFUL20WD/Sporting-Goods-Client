import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://sporting-goods-server-nine.vercel.app/api/",
		prepareHeaders: (headers) => {
			const token = localStorage.getItem("token");
			if (token) {
				headers.set("authorization", token);
			}
			return headers;
		},
	}),
	tagTypes: ["products", "categories", "brands"],
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: (query) => `products/get-products?${query}`,
			providesTags: ["products"],
		}),
		getAllCategories: builder.query({
			query: () => `products/get-categories`,
			providesTags: ["categories"],
		}),
		getAllBrands: builder.query({
			query: () => `products/get-brands`,
			providesTags: ["brands"],
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
		getProductsByTag: builder.query({
			query: (tag) => {
				return {
					url: `/products/getProductsByTag/${tag}`,
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
		createOrder: builder.mutation({
			query: (data) => ({
				url: "/orders/create-order",
				method: "POST",
				body: data,
			}),
		}),
		getAllUsers: builder.query({
			query: () => ({
				url: "/users/get-all-users",
				method: "GET",
			}),
		}),
		getAllOrders: builder.query({
			query: () => ({
				url: "/orders/get-all-orders",
				method: "GET",
			}),
		}),
		getAllPayments: builder.query({
			query: () => ({
				url: "/payments/get-all-payments",
				method: "GET",
			}),
		}),
		getStatistics: builder.query({
			query: () => ({
				url: "/orders/get-statistics",
				method: "GET",
			}),
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
	useGetAllBrandsQuery,
	useGetProductsByCategoryQuery,
	useGetProductsByTagQuery,
	useCreateOrderMutation,
	useGetAllUsersQuery,
	useGetAllOrdersQuery,
	useGetAllPaymentsQuery,
	useGetStatisticsQuery,
} = baseApi;
