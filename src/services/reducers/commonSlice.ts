import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../store";
import {createSlice} from "@reduxjs/toolkit";

interface CommonState {
	validProp: String;
	posts: [{id: Number; title: String; content: String}];
}

const initialState: CommonState = {
	validProp: "",
	posts: [{id: 0, title: "", content: ""}],
};

export const commonSlice = createSlice({
	name: "common",
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<any>) {
			let post = action.payload;
			console.log("Action post: ", post);
			const isFour: string = post.id === 4 ? "It is four" : "It not 4";
			post.title = isFour;
			state.posts = [post];
		},
	},
});

// Acá exportamos la action. En vez de tener actions y reducer separados, redux toolkit las combina y acá la exporta
export const {addTodo} = commonSlice.actions;
//Acá lo exportamos para combinarlo en el store mediante configureStore
export default commonSlice.reducer;
