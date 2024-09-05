import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TVariant = {
	type: string;
	value: string;
};

type TInventory = {
	quantity: number;
	inStock: boolean;
};

type TProduct = {
	_id: string;
	name: string;
	description: string;
	image: string[];
	price: number;
	brand: string;
	category: string;
	rating: number;
	tag: string;
	qty: number;
	variants: TVariant[];
	inventory: TInventory;
};

type TInitialState = {
	cart: TProduct[];
};

// Define the initial state using that type
const initialState: TInitialState = {
	cart: [],
};

export const cartSlice = createSlice({
	name: "cart",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState: initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<TProduct>) => {
			const duplicate = state.cart.find(
				(product) => product._id === action.payload._id
			);
			if (duplicate) {
				const newCart = state.cart.map((product) => {
					if (product._id === action.payload._id) {
						return { ...product, qty: product.qty + 1 };
					} else {
						return product;
					}
				});
				state.cart = [...newCart];
			} else {
				state.cart.push(action.payload);
			}
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			state.cart = state.cart.filter(
				(item) => item._id !== action.payload
			);
		},
		incrementDecrement: (
			state,
			action: PayloadAction<{ op: string; id: string }>
		) => {
			const selectedProduct = state.cart.filter((product) => {
				if (product._id === action.payload.id) {
					if (
						action.payload.op === "+" &&
						product.inventory.quantity > product.qty
					) {
						product.qty += 1;
					}
					if (action.payload.op === "-" && product.qty > 1) {
						product.qty -= 1;
					}
					return product;
				}
			});
			const otherProducts = state.cart.filter(
				(product) => product._id !== action.payload.id
			);
			state.cart = [...selectedProduct, ...otherProducts];
		},
	},
});

export const { addToCart, removeFromCart, incrementDecrement } =
	cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
