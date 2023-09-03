import Pokemon from "../components/Pokemon";

function App() {
	const pokemons = ["bulbasaur", "pikachu", "ditto", "charmander"];

	return (
		<div className="App">
			{pokemons.map((name, i) => (
				<Pokemon name={name} key={i} />
			))}
		</div>
	);
}
export default App;
