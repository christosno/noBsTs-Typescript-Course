// ///////////////////////////////
/////////////////////////////////
// Video 1 / Typescript Basics

let userName: string = 'John';
let hasLoggedIn: boolean = true;

userName += ' Herrighton';

console.log(userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;


//arrays
const names: string[] = userName.split(' ');
const myValues: Array<number> = [1, 2, 3, 4, 5];

// objects

interface Person {
	first: string;
	last: string;
}

const myPerson: Person = {
	first: "John",
	last: "Herrighton"
}



const ids: Record<number, string> = {
	10: "a",
	20: "b"
}

ids[30] = "c";


type stringOrNumber = string | number;

const myMapObject: Record<stringOrNumber, string> = {
	10: "a",
	twenty : "b"
}


myMapObject[30] = "c";

console.log("myMapObject", myMapObject);

[1, 5, 10].forEach((i) => console.log(i));

const multByTwo: string[] = [1, 5, 10].map((i) => `${i * 2}`)

console.log("multByTwo", multByTwo);




