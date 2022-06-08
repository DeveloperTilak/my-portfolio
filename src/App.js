import Navbar  from "./components/Navbar";
import { Route, Routes} from "react-router-dom";
// import Home from "./components/Pages/Home";
import HomePage from "./components/HomePage"
import Services from "./components/Pages/Services";
import Projects from "./components/Pages/Projects";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <div>
    <Navbar />

    <Routes>
      <Route exact path="/"  element={ <HomePage />} />
         
      <Route path="/services" element={<Services />} />
      <Route path="/projects"  element ={<Projects />} />
      <Route path="/about" element ={<About />} />
      <Route path="/contact" element ={<Contact />} />
    </Routes>
     
    </div>
  );
}

export default App;
