type Name = {
	first: string;
	last: string;
};

function addFullName(name: Name): Name & { fullName: string } {
	return {
		...name,
		fullName: `${name.first} ${name.last}`
	}
}


console.log(addFullName({ first: 'Bob', last: 'Smith' }));

// T extends (...args: any[]) => any --> Guaranty that T is a function, it is needed to use Parameters<T> once the Parameters type is a built-in type that only works with functions
// Parameters<T> --> Returns the parameters of a function type T as a tuple type, that why we ust the Parameters<T>[0][] to get the first parameter of the function in that case and the only parameter 
// ReturnType<T> --> Returns the return type of a function type T, in that case we use ReturnType<T>[] to get the return type of the function.
function permuteRows<T extends (...args: any[]) => any>(iteratorFunc: T, data: Parameters<T>[0][]): ReturnType<T>[] {
	return data.map(iteratorFunc);
}

console.log((
	permuteRows(
		addFullName,
		[
			{ first: 'Bob', last: 'Smith' },
			{ first: 'Alice', last: 'Smith' },
			{ first: 'CCC', last: 'NNN' },
			{ first: 'OPOP', last: 'CACA' },
		]
	)
));