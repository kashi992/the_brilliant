import Routers from "./router/routers";
import bgImg from "./assets/images/mainBg.jpg";
import "./app.css"
import Footer from "./layout/footer";
import Navbar from "./layout/navbar";

function App() {
  return (
    <>
    {/* <div className="bgImg">
      <img src={bgImg} alt="" />
    </div> */}
    <Navbar/>
      <Routers />
      <Footer/>
    </>
  );
}

export default App;
