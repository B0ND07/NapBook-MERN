import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/userActions";
import Loader from "../components/Loader";
import { setLoading } from "../redux/slices/hotelSlice";
import { setError } from "../redux/slices/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.userState);
  const { isLoading } = useSelector((state) => state.hotelState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    dispatch(setLoading(false));
  }, [dispatch, isAuthenticated, navigate]);
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction({ username, password }));

    const timeout = setTimeout(() => {
      dispatch(setError(undefined));
    }, 5000);
    return () => clearTimeout(timeout);
  };

  const loginWithGoogle = () => {
    window.open("http://localhost:5006/auth/google/callback", "_self");
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 md:text-3xl">
              Login in to your account
            </h2>
          </div>
          
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <button className="flex w-full justify-center my-1"
              style={{
                cursor: "pointer",
                marginTop: "20px",
                padding: "12px 16px 12px 42px",
                border: "none",
                borderRadius: "3px",
                boxShadow:
                  "0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25)",
                color: "#757575",
                fontSize: "14px",
                fontWeight: "500",
                backgroundImage:
                  "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMiAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=)",
                backgroundColor: "white",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "12px 11px",
              }}
              onClick={loginWithGoogle}
            >
              Google
            </button>
            <span className="flex justify-center">OR</span>
            <form className="space-y-6" onSubmit={loginHandler}>
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                  <p>{error}</p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Login
                </button>
                
              </div>
            </form>
            


            
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link to="/register">
                <span className="font-semibold leading-6 text-red-500 hover:text-red-600">
                  Register Now
                </span>
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
