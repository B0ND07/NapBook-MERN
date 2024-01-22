import React from "react";
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';

const DisplayHotels = () => {

  // const [data, setData] = useState([])
  
  // const fetchApi=async()=>{
  // const res = await axios.get("http://localhost:5006/api/hotels/");
  // console.log(res.data)
  // setData(res.data)
  // }
  // useEffect(() => {
  //   fetchApi();
  // }, []);

  return (
    // <div className=" bg-gray-200">
    //   {data.map((display)=>(
    //   <div className="ml-8 flex flex-wrap gap-20 rounded-md my-4 py-8 md:items-center w-full">
    //     <div className=" md:w-1/5">
    //       <img
    //         src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
    //         alt=""
    //         className="w-full h-full object-cover"
    //       />
    //       <Link to='/link'><span>{display.name}</span><br></br></Link>
    //       <span>Madrid</span>
    //       <span>Starting from $120</span>
    //       <div>
    //         <button>8.9</button>
    //         <span>Excellent</span>
    //       </div>
    //     </div>
    //   </div>))}
    // </div>
<div>
  {/* map this */}
    <div className="flex flex-col md:flex-row md:min-h-60 gap-8 bg-gray-200 rounded-md my-4 md:items-center">
            <div className="md:w-2/6 h-full">
              
                    <div className="h-60 md:-mr-[21.33px]">
                        <img src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1' alt="Not available" className="w-full h-full object-fill" />
                    </div>
                
            </div >
            <div className="md:w-4/6 mx-4 md:my-6 mb-6">
                <Link to='/link' className="text-xl capitalize font-semibold">hotel name</Link>
                <h4 className="font-medium">location</h4>
                <p className="my-3">description</p>
                <span className="font-medium text-gray-700"><LocationOnIcon className="mb-1" /></span>
                <div className="flex gap-4 flex-wrap mt-6">
                    {/* {hotel.specification?.map((spec) => ( */}
                        <div  className="py-2 px-3 bg-gray-100 rounded-lg">
                            <AddIcon className="mr-2" />
                            <span>dspec</span>
                        </div>
                    
                </div>
            </div>
            
        </div >
        <div className="flex flex-col md:flex-row md:min-h-60 gap-8 bg-gray-200 rounded-md my-4 md:items-center">
        <div className="md:w-2/6 h-full">
          
                <div className="h-60 md:-mr-[21.33px]">
                    <img src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1' alt="Not available" className="w-full h-full object-fill" />
                </div>
            
        </div >
        <div className="md:w-4/6 mx-4 md:my-6 mb-6">
            <Link to='/link' className="text-xl capitalize font-semibold">hotel name</Link>
            <h4 className="font-medium">location</h4>
            <p className="my-3">description</p>
            <span className="font-medium text-gray-700"><LocationOnIcon className="mb-1" /></span>
            <div className="flex gap-4 flex-wrap mt-6">
                {/* {hotel.specification?.map((spec) => ( */}
                    <div  className="py-2 px-3 bg-gray-100 rounded-lg">
                        <AddIcon className="mr-2" />
                        <span>dspec</span>
                    </div>
                
            </div>
        </div>
        
    </div >
    </div>
  );
};

export default DisplayHotels;
