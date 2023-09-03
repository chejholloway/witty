import React from "react";
import { useGetPokemonByNameQuery } from "../services/api";

export default function Pokemon({ name }) {
	const { data, error, isLoading, isSuccess, isError } =
		useGetPokemonByNameQuery(name);

	return (
		<div>
			{isLoading && "Loading..."}
			{isError && error.message}
			{isSuccess && data && (
				<>
					<h3>{data.species.name}</h3>
					<img src={data.sprites.front_shiny} alt={data.species.name} />
				</>
			)}
		</div>
	);
}
