import { useCallback, useReducer } from "react"


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

export const useTodos = (initialTodos: TodoType[]): {
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
