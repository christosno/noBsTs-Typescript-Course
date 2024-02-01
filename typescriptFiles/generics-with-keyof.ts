function pluk<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
	return items.map(item => item[key]);
}

const dogs = [
	{ name: 'Mimi', age: 12 },
	{ name: 'LG', age: 13 },
	{ name: 'LG', age: 14 },
];

const returnedValue = pluk(dogs, 'name');
console.log(returnedValue);


interface BaseEvent {
	time: number;
	user: string;
}

interface EventMap {
	addToCart: BaseEvent & { quantity: number; productID: string };
	chcekout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
	console.log([name, data]);
}

sendEvent("addToCart", { time: 500, user: "bob", quantity: 1, productID: "foo" });
sendEvent("chcekout", {time: 600, user: "Christos"})