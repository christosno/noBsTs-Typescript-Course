// Partial - makes all properties in an object optional
interface MyUser {
	name: string;
	id: string | number;
	email?: string;
	phone?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides:MyUserOptionals): MyUser => {
	return {
		...user,
		...overrides
	}
}

console.log(merge({
	name: "Jack",
	id: "foo",
	email: "email"
}, {
	email: "email2"
}));

// Required - makes all properties in an object required
type RequiredMyUser = Required<MyUser>;


// Pick - constructs a type by picking the properties from an object type
type UserWithEmailAndMail = Pick<MyUser, "email" | "name">

// Record - constructs an object type whose property keys are Keys and whose property values are Type. 
// This utility can be used to map the properties of a type to another type.
// Omit - constructs a type by picking all properties from Type and then removing Keys
type userWithoutId = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], userWithoutId> => {
	return users.reduce((a, v) => {
		const { id, ...others} = v;
		return {
			...a,
			[id]: others
		}
	 }, {});
}

const users = [
	{ id: "foo", name: "Mr. Foo" },
	{ id: "bar", name: "Mrs. Bar" },
]
const users2 = [
	{ id: 2, name: "Mr. Foo" },
	{ id: 3, name: "Mrs. Bar" },
]

const mapedUsers = mapById(users);
const mapedUsers2 = mapById(users2);
console.log("mapedUsers", mapedUsers);
console.log("mapedUsers2", mapedUsers2);