

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
	let str: T = initial;

	return [
		() => str,
		(v: T) => {
			str = v;
		}
	]
}


const [state1Getter, state1Setter] = simpleState("hello");
const [state2Getter, state2Setter] = simpleState(0);
const [state3Getter, state3Setter] = simpleState<number | null>(null);

console.log(state1Getter());
state1Setter("goodbye");
console.log(state1Getter());

console.log(state2Getter());
state2Setter(100);
console.log(state2Getter());

console.log(state3Getter());
state3Setter(100);
console.log(state3Getter());

console.log("---------------------");

interface Rank<RankItem> {
	item: RankItem;
	rank: number;
}


function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {

	
	const ranks: Rank<RankItem>[] = items.map((item) => ({
		item,
		rank: rank(item)
	}))

	ranks.sort((a, b) => a.rank - b.rank);

	return ranks.map((rank) => rank.item);
}

interface Pokemon {
	name: string;
	np: number;
}

const pokemon: Pokemon[] = [
	{
		name: "Bulbasaur",
		np: 1
	},
	{
		name: "Squirtle",
		np: 7
	},
	{
		name: "Charmander",
		np: 4
	}
]

const ranks = ranker(pokemon, ({ np }) => np);
console.log(ranks);