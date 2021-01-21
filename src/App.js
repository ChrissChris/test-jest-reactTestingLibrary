import React, { useState } from "react"
import "./App.css"

const defautlItems = [
  {
    name: "Item A",
  },
  { name: "Item B" },
  { name: "Item C" },
]

function App() {
  const [name, setName] = useState("")
  const [items, setItems] = useState(defautlItems)

  const addItem = () => {
    setItems([...items, { name }])
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Please add you item..."
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      {items.map((item) => {
        return <div>{item.name}</div>
      })}
    </div>
  )
}

export default App
