import "./App.css"
import ResponsiveAppBar from "./components/navbar/index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import ItemListDetail from "./pages/ItemListDetail/ItemListDetail"
import ItemListCategory from "./pages/ItemCategory/ItemCategory"
import Checkout from "./pages/checkout/CheckoutCart"
import { CartProvider } from "./components/context/CartContext"

function App() {
  return (
    <body>
      <CartProvider>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<ItemListDetail />} />
            <Route path="/category/:type" element={<ItemListCategory />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </body>
  )
}

export default App
