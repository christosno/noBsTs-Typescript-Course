function printIngredient(quantity: string, ingerdient: string, extra?:string) {
	console.log(`${quantity} ${ingerdient} ${extra ? extra: ""}`);
}

printIngredient('1C', 'Flour');
printIngredient('1C', 'Flour', "sugar");

interface User {
	id: string;
	info?: {
		email?: string
	};
};

// not the best way
function getEmail(user: User): string {
	if (user.info) {
		// here typescript doesn't know that user.info is defined, so we need to add ! to tell typescript that it is defined
		return user.info.email!;
	}

	return "";
}

// better way
function getEmailEasy(user: User): string {
	return user?.info?.email ?? "";
}


console.log(getEmail({id: "1"}));
console.log(getEmail({ id: "1", info: { email: "test.gmail.com" } }));


function addWithCallback(x: number, y: number, callback?: () => void): void {
	console.log([x, y]);
	callback?.();
}