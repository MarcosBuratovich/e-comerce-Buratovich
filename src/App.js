import "./App.css"
import NavBar from "./components/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import ItemListDetail from "./pages/ItemListDetail/ItemListDetail"
import ItemListCategory from "./pages/ItemCategory/ItemCategory"

function App() {
  return (
    <body>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ItemListDetail />} />
          <Route path="/category/:type" element={<ItemListCategory />} />
        </Routes>
      </BrowserRouter>
    </body>
  )
}

export default App
