import React from "react";
import { render } from "@testing-library/react";
import Pokemon from "../components/Pokemon";

describe("Pokemon Component", () => {
	test("Pokemon Component", () => {
		const pokemon = render(
			<>
				<h3>Pikachu</h3>
				<img src="./images/pikachu.png" alt="Pikachu" />
			</>
		);

		expect(pokemon).toBeTruthy;
	});
});
