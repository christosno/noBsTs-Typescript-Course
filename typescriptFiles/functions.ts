import { title } from "process";

function addNumbers(a: number, b: number): number {
	return a + b
}

export const addStrings = (str1: string, str2: string = "" ): string => `${str1} ${str2}`;


export const format = (title: string, param: string | number): string => {
	return `${title} ${param}`;
}

export const printFormat = (title: string, param: string | number): void => { 
	console.log(format(title, param));
}


export const fetchData = (url: string): Promise<string> => { 
	return Promise.resolve(`Data from ${url}`);
}

type Names = Array<string | number> 

export const introduce = (salutation: string, ...names: Names): string => { 
	return `${salutation} ${names.join(" ")}`;
}

export default  addNumbers;