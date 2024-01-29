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
import Booking from "./pages/Booking";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import UpdateProfile from "./pages/UpdateProfile";
import AdminDashboard from "./pages/AdminDashboard";
import AllUsers from "./pages/AllUsers";
import AllHotels from "./pages/AllHotels";
import Allbookings from "./pages/Allbookings";
import UpdateHotel from "./pages/UpdateHotel";
import CreateHotel from "./pages/CreateHotel";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="bg-slate-50 min-h-screen">
        <Navbar />
        <hr className="border-t border-grey-400" />
        <Routes>

           <Route path="/test" element={<CreateHotel/>}/> 


          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotel/:id" element={<Hotel />} />
          <Route path="/room/:id/book" element={<><Booking /></>}/>
          <Route path="/account" element={<Account />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/me/update" element={<UpdateProfile />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AllUsers />} />
          <Route path="/admin/hotels" element={<AllHotels />} />
          <Route path="/admin/bookings" element={<Allbookings />} />
          <Route path="/admin/hotel/:id/update" element={<UpdateHotel />} />
          <Route path="/admin/hotel/create" element={<CreateHotel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
