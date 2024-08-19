// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
	tagTypes: ["products"],
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: (searchTerm) => `products/get-products`,
		}),
		getTodos: builder.query({
			query: (priority) => {
				const params = new URLSearchParams();
				if (priority) {
					params.append("priority", priority);
				}
				return {
					url: `/tasks`,
					method: "GET",
					params: params,
				};
			},
			providesTags: ["products"],
		}),
		addTodo: builder.mutation({
			query: (data) => ({
				url: "/task",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["products"],
		}),
		updateTodo: builder.mutation({
			query: (options) => ({
				url: `/task/${options.id}`,
				method: "PUT",
				body: options.data,
			}),
			invalidatesTags: ["products"],
		}),
		deleteTodo: builder.mutation({
			query: (id) => ({
				url: `/task/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = baseApi;
