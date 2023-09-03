import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../services/api";

export const store = configureStore({
	reducer: {
		// Add the generated reducer as a specific top-level slice
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokemonApi.middleware),
});
