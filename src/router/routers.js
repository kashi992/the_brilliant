import { Routes,Route} from "react-router-dom"
import Home from "../pages/home/index"
import About from "../pages/about"
import Shop from "../pages/shop"

const Routers = () => {
  return (
  <Routes>
    <Route index element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/shop" element={<Shop/>} />
  </Routes>
  )
}

export default Routers
