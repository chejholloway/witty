import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../services/api";
import App from "../app/App";

describe("App Loads w/o crashing", () => {
	const initialState = ["bulbasaur", "pikachu", "ditto", "charmander"];
	const mockStore = configureStore({
		reducer: { [pokemonApi.reducerPath]: pokemonApi.reducer },
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(pokemonApi.middleware),
	});
	let store;

	test("App gets displayed correctly", () => {
		store = mockStore;
		const app = render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		expect(app).toBeTruthy;
	});
});
