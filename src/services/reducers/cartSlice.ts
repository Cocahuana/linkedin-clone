// import {TESTING_TEXT} from "../actions/cart";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../store";
import {createSlice} from "@reduxjs/toolkit";

// To create your reducers, use the Redux Toolkit's createSlice function.

// You will need to set three properties in this function: name, initialState, and reducers.

// name: Used in action types (String)
// initialState: Initial state for the respective reducer (any)
// reducers: An object of reducer functions. Key names will be used to generate actions.(Object<string, function>)
interface CartState {
	products: [];
	text: string;
}

const initialState: CartState = {
	products: [],
	text: "",
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		getTestingText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
		},
	},
});

// Acá exportamos la action. En vez de tener actions y reducer separados, redux toolkit las combina y acá la exporta
export const {getTestingText} = cartSlice.actions;
// Other code such as selectors can use the imported `RootState` type

export default cartSlice.reducer;
