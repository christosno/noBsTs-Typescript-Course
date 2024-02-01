// implement the forEach function using a reducer
function myForEach<T>(arr: T[], callback: (item: T) => void): void {
	(arr).reduce((_, cur) => { 
		callback(cur);
		return null;
	}, null)
}

myForEach([1, 2, 3, 4, 5], (item) => {
	console.log(item);
});
myForEach(["a", "b", 3, 4, 5], (item) => {
	console.log(item);
});


// implement the filter function using a reducer
function myFilter<T>(arr: T[], callback: (item: T) => boolean): T[] {
	return arr.reduce((acc: T[], cur) => (callback(cur) ? [...acc, cur] : acc), [])
}

const fiteredArray = myFilter([1, 2, 3, 4, 5], (item) => { return item === 2 });
const fiteredArray2 = myFilter(["a", "b", "c", "d", "e"], (item) => { return (item === "a" || item === "b")});
console.log(fiteredArray);
console.log(fiteredArray2);

// implement the map function using a reducer
function myMap<T, K>(arr: T[], callback: (item: T) => K): K[] {
	return arr.reduce((acc: K[], cur) => {
		// acc.push(callback(cur));
		// return acc
		return [...acc, callback(cur)];
	}, [])
}

const mappedArray = myMap([1, 2, 3, 4, 5], (item) => { return item * 2 });
const mappedArray2 = myMap([1, 2, 3, 4, 5], (item) => { return `${item}`});
console.log(mappedArray);
console.log(mappedArray2);