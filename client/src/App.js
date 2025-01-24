import Home from "./components/home/Home";
import Hotel from "./components/hotel/Hotel";
import Navbar from "./components/app/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getUserAction } from "./redux/actions/userActions";
import Booking from "./pages/Booking";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import UpdateProfile from "./pages/UpdateProfile";

import AllUsers from "./pages/admin/AllUsers";
import AllHotels from "./pages/admin/AllHotels";
import AllBookings from "./pages/admin/AllBookings";
import UpdateHotel from "./pages/UpdateHotel";
import CreateHotel from "./pages/CreateHotel";
import DefaultDashboard from "./pages/DefaultDashboard";
import ProtectedRoute from "./components/app/ProtectedRoute";
import NotFound from "./pages/NotFound";
import AdminRoute from "./components/admin/AdminRoute";
import Body from "./components/home/Body";
import Search from "./components/app/Search";
import Footer from "./components/app/Footer";
import Hotels from "./components/hotel/Hotels";


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
          <Route
            path="/search"
            element={
              <Search />
            }
          />

          <Route
            path="/hotels"
            element={
              <Hotels />
            }
          />

          <Route
            path="/"
            element={
              <>
                <Home />
                <Body /><Footer />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotel/:id" element={<Hotel />} />

          <Route
            path="/room/:id/book"
            element={
              <>
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              </>
            }
          />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          <Route
            path="/bookings"
            element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            }
          />

          <Route
            path="/me/update"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />

          <Route path="/admin/dashboard" element={<AdminRoute><DefaultDashboard /></AdminRoute>} />

          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <AllUsers />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/hotels"
            element={
              <AdminRoute>
                <AllHotels />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/bookings"
            element={
              <AdminRoute>
                <AllBookings />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/hotel/:id/update"
            element={
              <AdminRoute>
                <UpdateHotel />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/hotel/create"
            element={
              <AdminRoute>
                <CreateHotel />
              </AdminRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
