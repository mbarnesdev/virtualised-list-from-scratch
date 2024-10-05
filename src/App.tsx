import * as React from "react"
import { List } from "./components/list"

function ListRow() {
  return <div></div>
}

function App() {
  const [data] = React.useState([])

  return (
    <List
      height={150}
      itemHeight={35}
      itemCount={data.length}
      data={data}
    >
      {ListRow}
    </ List>
  )
}

export default App
