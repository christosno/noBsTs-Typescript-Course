import { type HTMLAttributes } from "react"

export function UL<T>({ items, render, itemClick }: {
	items: T[];
	render: (item: T) => React.ReactNode;
	itemClick: (item: T) => void;
} & HTMLAttributes<HTMLUListElement>) {

  return (
	<ul>
	  {items.map((item, index) => (
		  <li onClick={() => itemClick(item)} key={index}>{render(item)}</li>
	  ))}
	</ul>
  )
}


