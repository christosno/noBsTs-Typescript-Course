
enum LoadingState {
	beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded",
}


const englishLoadingState = {
	[LoadingState.beforeLoad]: "Before Load",
	[LoadingState.loading]: "Loading",
	[LoadingState.loaded]: "Loaded",
}

const isLoading = (state: LoadingState): boolean => {
	return state === LoadingState.loading;
}


// console.log(isLoading("dogs"));

// console.log(isLoading(beforeLoad));

console.log(isLoading(LoadingState.beforeLoad));

// Literal Types
function rollDice(dice: 1 | 2 | 3): number {
	let pip = 0
	for (let i = 0; i < dice; i++) {
		pip += (Math.floor(Math.random() * 5) + 1);
	}	
	return pip
};

// console.log(rollDice(4));
console.log(rollDice(3));

// literal string types
function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
	console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("addToCart", { productId: 123 });
sendEvent("checkout", { cartCount: 123 });