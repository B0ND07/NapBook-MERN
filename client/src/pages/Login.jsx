import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GloginAction, loginAction } from "../redux/actions/userActions";
import Loader from "../components/Loader";
import { setLoading } from "../redux/slices/hotelSlice";
import { setError } from "../redux/slices/userSlice";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

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

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <GoogleLogin type="standard" width={384}
              onSuccess={(credentialResponse) => {
                const token = credentialResponse.credential; 
                const decoded = jwtDecode(token);
                const email = decoded.email; 
                dispatch(GloginAction({ email }));
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            <span className="flex justify-center mt-2">OR</span>
            

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
