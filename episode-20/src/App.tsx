import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useTodos } from './useTodos';

import { UL } from './GenericComponent';

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

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button style={{
    backgroundColor: "blue",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.2rem",
    margin: "10px"
  }} {...rest}>
    {children}
  </button>
)

/////////////////////////////////////////////
// Give type to setter function of useState
const useNumber = (initialValue: number) => useState<number>(initialValue);

type UseNumberValue = ReturnType<typeof useNumber>[0];
type UseNumberSetValue = ReturnType<typeof useNumber>[1];

////////////////////////////////////////

const Incrementer: React.FC<{
  value: UseNumberValue;
  setValue: UseNumberSetValue;
}> = ({value, setValue}) => (
  <Button onClick={() => setValue(value + 1)}>
    Add - {value}
  </Button>
)



function App() {

  const [payload, setPayload] = useState<PayloadType | null>(null)
  const inputValue = useRef<HTMLInputElement>(null)

  const { todos, addTodo, removeTodo } = useTodos([
    { id: 1, text: "Buy Milk", done: false },
    { id: 2, text: "Meeting with boss", done: false },
    { id: 3, text: "Dentist appointment", done: false }
  ])

  const onAddTodoBatonHandler = () => {
    // meed to add that condtion to avoid null type error
    if (inputValue && inputValue.current) {
      addTodo(inputValue.current.value )
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

  const [value, setValue] = useNumber(0)

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
      <br />
      <Incrementer value={value} setValue={setValue} />
      <br/>
      <br />
      <Heading title="Todos" />
      {/* {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <span onClick={() => removeTodo(todo.id )}>{todo.text}</span>
          </div>
        )
      })} */}
      <UL
        items={todos}
        render={(todo) => <span>{todo.text}</span>}
        itemClick={(todo) => removeTodo(todo.id)}
        className='todo-list'
      />
      <div>
      {/* <label htmlFor="todo">Add Todo: </label> */}
      <input ref={inputValue} name="todo" placeholder='Add a Todo' type='text'/>
      <Button onClick={onAddTodoBatonHandler}>Add</Button>
      </div>
    </>
  )
}

export default App
