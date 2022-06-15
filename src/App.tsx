import React from "react"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.scss"
import { Attribution } from "./components/Attribution/Attribution"
import { Balance } from "./components/Balance/Balance"
import { Graph } from "./components/Graph/Graph"

function App() {
  return (
    <div className="app__wrap">
      <Balance />
      <Graph />
      <Attribution />
    </div>
  )
}

export default App
