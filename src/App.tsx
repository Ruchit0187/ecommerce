import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Shopping from "./Component/Shopping";
import Form from "./Component/Form";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
import Indivisual from "./Component/Indivisual";



function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />}/>
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shopping/:id" element={<Indivisual/>}/>
        </Routes>
    </>
  );
}

export default App;
