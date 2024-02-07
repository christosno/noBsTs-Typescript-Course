import { useCallback, useReducer, createContext, useContext, type ReactNode } from "react"


interface TodoType {
	id: number;
	text: string;
	done: boolean;
  };

type ActionType = {
	type: "ADD_TODO";
	text: string;
  } | {
	type: "REMOVE_TODO";
	id: number
}

///  Context
////////////
type UseTodosManagersType = ReturnType<typeof useTodosManager>
  
const TodoContext = createContext<UseTodosManagersType>({
	todos: [],
	addTodo: () => { },
	removeTodo: () => { }
});

export const TodosProvider = ({ initialTodos, children }: {
	initialTodos: TodoType[], children: ReactNode}) => {

	const value = useTodosManager(initialTodos)
	
	return (
		<TodoContext.Provider value={value}>
			{children}
		</TodoContext.Provider>
	)

}

////////////
////////////



const useTodosManager = (initialTodos: TodoType[]): {
	todos: TodoType[];
	addTodo: (text: string) => void;
	removeTodo: (id: number) => void;
} => {

	const reducer = (todosList: TodoType[], action: ActionType) => {
		switch (action.type) {
		  case "ADD_TODO":
			return [
			  ...todosList, 
			  {
				id: Math.random(),
				text: action.text,
				done: false
			  }
			]
		  case "REMOVE_TODO": 
			return todosList.filter((todo) => todo.id !== action.id)
		  default:
			throw new Error("Action type not found")
		}
	  }
	
	const [todos, dispatch] = useReducer(reducer, initialTodos)


	const addTodo = useCallback((text: string) => {
		dispatch({ type: "ADD_TODO", text })
	}, [dispatch])

	const removeTodo = useCallback((id: number) => {
		dispatch({ type: "REMOVE_TODO", id })
	}, [dispatch])
	
	return {
		todos,
		addTodo,
		removeTodo
	}
}


export const useTodos = (): TodoType[] => {
	const ctx = useContext(TodoContext)

	return ctx.todos
}
export const useAddTodos = (): UseTodosManagersType["addTodo"] => {
	const ctx = useContext(TodoContext)

	return ctx.addTodo
}

export const useRemoveTodos = (): UseTodosManagersType["removeTodo"] => {
	const ctx = useContext(TodoContext)

	return ctx.removeTodo
}
