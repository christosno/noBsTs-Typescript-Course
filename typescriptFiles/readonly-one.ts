interface Cat {
	name: string; 
	breed: string;
};

type ReadonlyCat = Readonly<Cat>;

function makeCata(name: string, breed: string): ReadonlyCat {
	return { name, breed };
}


const usul = makeCata('Usul', 'Tabby');

// could not change any property
// usul.name = "Piter"

console.log(usul); 

function makeCoordinate(x: number, y: number, z: number): readonly [number, number, number] {
	return [x, y, z];
}

const tup = makeCoordinate(1, 2, 3)
// could not change any item in tuple, because the readonly.
// tup[2] = 4;
console.log(tup);

const realyConst = [1, 2, 3] as const;
// could not change any item in array, because the as const.
// realyConst[0] = 4;