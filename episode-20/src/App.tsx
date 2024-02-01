import React, {useCallback} from 'react';
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


function App() {

  const onLiItemClick = useCallback((item: string) => {
    alert(item)
  }, [])

  return (
    <>
      <Heading title="Introduction" />
      <Box>
        Hello There
      </Box>
      <List
        items={["1", "2", "3"]}
        onClick={onLiItemClick}
      />
    </>
  )
}

export default App
