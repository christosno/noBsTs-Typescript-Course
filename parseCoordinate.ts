interface Coordinate {
	x: number;
	y: number;
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str:string): Coordinate
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
	let coord: Coordinate = {
		x: 0,
		y:0
	}

	if (typeof arg1 === "object") {
		coord = {
			...arg1 as Coordinate
		}
	} else if (typeof arg1 === "string") {
		// const coordX = Number(arg1.split(",")[0].split(":")[1])
		// const coordY = Number(arg1.split(",")[1].split(":")[1])
		// coord = {
		// 	x: coordX,
		// 	y: coordY
		// }
		(arg1).split(",").forEach(str => {
			const [key, value] = str.split(":")
			const objKey = key.trim()
			coord[objKey as "x" | "y"] = Number(value);
		})
	} else {
		coord = {
			x: arg1 as number,
			y: arg2 as number 
		}
	}

	return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({x: 100, y: 200}));
console.log(parseCoordinate("x:11,       y:21"));