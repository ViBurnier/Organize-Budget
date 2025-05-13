import "./App.css";
import Config from "./components/Config";
import { Link } from "react-router";
import Home from "./pages/Home";
import List from "./pages/List";



import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="space-y-10">
      
      <nav className="text-xl font-medium text-white h-19 flex items-center justify-between">

        <div className="flex w-25 justify-around">
          <Link to="/" className="flex">

            <img src={Config.logo} alt="" className="h-10 w-10" /> 
            <p>{Config.title}</p>

          </Link>
        </div>

        <div className="flex justify-around w-60">
          <Link to="/List">List</Link>
          
            
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/List" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
