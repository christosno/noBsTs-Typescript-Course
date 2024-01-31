import axios from "axios";

interface PokemonResults {
	count: number;
	next?: string;
	previous?: string;
	results: {
		name: string;
		url: string;
	}[];
}

type FetchPokemonResult<T> = T extends undefined ? Promise<PokemonResults> : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(url: string, cb?: T): FetchPokemonResult<T> {

	if (cb) {
		axios(url)
			.then(response => response.data)
			.then(cb as (data: PokemonResults) => void);
		return undefined as FetchPokemonResult<T>;
	} else {
		return axios(url) as FetchPokemonResult<T>;
	}

}

// fetchPokemon("https://pokeapi.co/api/v2/pokemon", (data) => {
// 	data.results.forEach(result => {
// 		console.log(result.name);
// 	});
// });


(async function () {
	const data = await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10");
	console.log(data);
})()