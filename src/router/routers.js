import { Routes,Route} from "react-router-dom"
import Home from "../pages/home/index"
import About from "../pages/about"

const Routers = () => {
  return (
  <Routes>
    <Route index element={<Home/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
  )
}

export default Routers
