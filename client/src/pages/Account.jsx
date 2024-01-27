

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { logoutAction } from '../redux/actions/userActions';
import { Fragment } from 'react';


const Account = () => {
    const { user } = useSelector((state) => state.userState);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutAction());
        navigate("/")
    }

    return (
        <Fragment>
            <div title={user.name}/>
            <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-48 mt-4 flex flex-col md:flex-row justify-between pb-6 h-[calc(100vh-115px)]">
                <div className="w-full h-full mb-6 bg-slate-100 border border-solid border-gray-300 rounded flex flex-col">
                    <img src='' alt="avatar" className="w-32 h-32 mx-auto mt-6" />
                    <h2 className="capitalize text-center text-2xl font-semibold mt-6">{user?.name}</h2>
                    <p className="text-center"><span className="font-semibold">Email:</span> {user?.email}</p>
                    <hr className="mt-3 border-b border-dashed border-gray-300 mx-2" />
                    <div className="h-12 flex items-center justify-between px-6 border-b border-solid border-gray-400">
                        <Link to="/me/update" className=" text-blue-600" >Account Setting</Link>
                        <ArrowForwardIosIcon fontSize="small" className="text-blue-600" />
                    </div>
                    <div className="h-12 flex items-center justify-between px-6 border-b border-solid border-gray-400">
                        <button onClick={() => navigate("/admin/dashboard")} className=" text-blue-600 disabled:text-blue-400" disabled={user?.role !== "admin" ? true : false}>Admin Panel</button>
                        <ArrowForwardIosIcon fontSize="small" className={user?.role !== "admin" ? "text-blue-400" : "text-blue-600"} />
                    </div>
                    <div className="h-12 flex items-center justify-between px-6 border-b border-solid border-gray-400 mb-2">
                        <Link to="/bookings" className=" text-blue-600" >Your Bookings</Link>
                        <ArrowForwardIosIcon fontSize="small" className="text-blue-600" />
                    </div>
                    <div className="mt-auto self-center mb-2 sm:mb-2 md:mb-6">
                        <button onClick={logoutHandler} className="bg-red-400 hover:bg-red-500 py-2 rounded-lg w-48 text-center text-gray-50 transition duration-200 ">Log out</button>
                    </div>
                </div>
               
            </div>
        </Fragment>
    )
}
export default Account;