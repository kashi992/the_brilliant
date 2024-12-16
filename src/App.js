import Routers from "./router/routers";
import bgImg from "./assets/images/mainBg.jpg";
import "./app.css"

function App() {
  return (
    <>
    <div className="bgImg">
      <img src={bgImg} alt="" />
    </div>
      <Routers />
    </>
  );
}

export default App;
