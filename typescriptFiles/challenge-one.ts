import houses from "./houses";

interface House {
	name: string;
	planets: string | string[]
}

interface HouseWithID extends House{
	id: number;
}



	
function findHouses(houses: string): HouseWithID[];
function findHouses(
	houses: string,
	filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
	houses: House[],
	filter: (house: House) => boolean
): HouseWithID[];
function findHouses(input: string | House[], filter?: (house: House) => boolean) {
	const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

	const addId = (houses: House[]): HouseWithID[] => { 
		return houses.map((house: House, index) => {
			return {
				id: index, 
				...house
			}
		})
	}

	const houseWithId = addId(houses);

	if (filter) {
		return houseWithId.filter(filter);
	}
	else {
		return houseWithId
	}
}
	
console.log(
	  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
	);
	
console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
console.log(findHouses(houses));