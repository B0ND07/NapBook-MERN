import Home from "./components/Home";
import Hotel from "./components/Hotel";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/slices/userSlice";
import { getUserAction } from "./redux/actions/userActions";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAction());
}, [dispatch])

  return (
    <BrowserRouter>
      <div className="bg-slate-50 min-h-screen">
        <Navbar />
        <hr className="border-t border-grey-400" />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/link" element={<Hotel/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

        </Routes>
  
      </div>
    </BrowserRouter>
  );
}

export default App;