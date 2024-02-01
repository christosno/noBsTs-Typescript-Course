import addNumbers, {addStrings, introduce} from "./functions";

console.log(addNumbers(1, 2));
console.log(addNumbers(1, 5));

console.log(addStrings("John", "Herrighton"));
console.log(addStrings("John"));


console.log(introduce("Mr", "John", "Herrighton", "III"));
console.log(introduce("Mr", 1 ,3, 45));
console.log(introduce("Mr", 1 ,"five", 45));