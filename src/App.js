import "./App.css"
import NavBar from "./components/navbar"
import ContainerPrincipal from "./components/container"

function App() {
  return (
    <body>
      <header>
        <div className="App">
          <NavBar />
        </div>
      </header>
      <ContainerPrincipal />
    </body>
  )
}

export default App
