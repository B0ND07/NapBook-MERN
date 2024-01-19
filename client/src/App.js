import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 min-h-screen">
        <Navbar />
        <hr className="border-t border-grey-400" />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
