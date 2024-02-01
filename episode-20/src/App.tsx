import React, { useCallback, useEffect, useReducer, useState, useRef} from 'react';
import './App.css'


const Heading = ({ title }: { title: string }) => {
  return (
    <h2>{title}</h2>
  )
};

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div >
      {children}
    </div>
  )
};

const List: React.FunctionComponent<{
  items: string[],
  onClick?: (item: string) => void
}
> = ({ items, onClick }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return <li onClick={() => onClick?.(item) } key={index}>{item}</li>
      })}
    </ul>
  )
}


interface PayloadType {
  text: string;
}

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

function App() {

  const [payload, setPayload] = useState<PayloadType | null>(null)
  const inputValue = useRef<HTMLInputElement>(null)

  const onAddTodoBatonHandler = () => {
    // meed to add that condtion to avoid null type error
    if (inputValue && inputValue.current) {
      dispatch({ type: "ADD_TODO", text: inputValue.current.value })
      inputValue.current.value = ""
    }


  }

  const onLiItemClick = useCallback((item: string) => {
    alert(item)
  }, [])

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setPayload(data)
      })
  }, [])

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

  const [todos, dispatch] = useReducer(reducer, [])

  return (
    <>
      <Heading title="Introduction" />
      <Box>
        Hello There
      </Box>
      <List
        items={["One", "Two", "Three"]}
        onClick={onLiItemClick}
      />
      <Box>{JSON.stringify(payload)}</Box>
      <br/>
      <br/>
      <br/>
      <br />
      <Heading title="Todos" />
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <span onClick={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}>{todo.text}</span>
          </div>
        )
      })}
      <div>
      {/* <label htmlFor="todo">Add Todo: </label> */}
      <input ref={inputValue} name="todo" placeholder='Add a Todo' type='text'/>
      <button onClick={onAddTodoBatonHandler}>Add</button>
      </div>
    </>
  )
}

export default App
