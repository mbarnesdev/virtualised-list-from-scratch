import * as React from "react"

interface ListProps<T> {
  height: number
  itemHeight: number
  itemCount: number
  data: T[]
  children: () => React.ReactNode
}

export function List<T>(props: ListProps<T>) {
  console.log(props)

  return <div>List</div>
}
