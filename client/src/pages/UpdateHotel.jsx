import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  styled,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setIsHotelUpdated } from "../redux/slices/hotelSlice";
import {
  getHotelAction,
  updateHotelAction,
} from "../redux/actions/hotelActions";
import axios from "axios";

import AdminDashboard from "./AdminDashboard";

const availableSpecifications = ["Parking", "Restaurant", "Wi-fi"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const CustomSelect = styled(Select)(() => ({
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid rgb(156 163 175)",
    },
    "&:hover fieldset": {
      border: "1px solid rgb(156 163 175)",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid rgb(156 163 175)",
    },
  },
}));

const UpdateHotel = () => {
  const [file, setFile] = useState("");
  const [specification, setSpecification] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [rooms, setRoom] = useState("");
  const [description, setDescription] = useState("");
  const { isHotelUpdated, hotel } = useSelector((state) => state.hotelState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getHotelAction(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (hotel) {
      setName(hotel.name);
      setCity(hotel.city);
      setRoom(hotel.rooms);
      setDescription(hotel.description);
      setSpecification(hotel.specification);
    }
  }, [hotel]);

  useEffect(() => {
    if (isHotelUpdated) {
      navigate("/admin/hotels");
      dispatch(setIsHotelUpdated(false));
    }
  }, [isHotelUpdated, dispatch, navigate]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setSpecification(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let secure_url = null;
    if (file) {
      const formDataFile = new FormData();
      formDataFile.append("file", file);
      formDataFile.append("upload_preset", "upload");

      var uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/db6qtb2bu/image/upload",
        formDataFile,
        { withCredentials: false }
      );
    }

    secure_url = uploadRes?.data;

    const formData = {
      name,
      city,
      rooms,
      description,
      specification,
      photos: secure_url,
    };

    dispatch(updateHotelAction(id, formData));
  };

  const setRoomValue = (value) => {
    const roomNumbersArray = value.split(",").map((num) => Number(num.trim()));
    setRoom(roomNumbersArray);
  };

  return (
    <Fragment>
      <div title="Update Hotel" />
      <div className="flex">
        <AdminDashboard />

        <div className="px-4 md:px-10 lg:px-20 xl:px-48 mx-auto">
          <h2 className="text-2xl font-medium text-center my-8">
            Update Hotel
          </h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="border border-solid border-gray-400 py-3 px-5 rounded">
              <FormatColorTextIcon className="text-gray-600" />
              <input
                type="text"
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Hotel Name"
                className="w-40 sm:w-60 md:w-80 ml-3 outline-none bg-transparent"
              />
            </div>

            <div className="border border-solid border-gray-400 py-3 px-5 rounded">
              <LocationOnIcon className="text-gray-600" />
              <input
                type="text"
                required={true}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="city"
                className="w-40 sm:w-60 md:w-80 ml-3 outline-none bg-transparent"
              />
            </div>

            <div className="border border-solid border-gray-400 py-3 px-5 rounded">
              <AirlineStopsIcon className="text-gray-600" />
              <input
                type="text"
                required={true}
                value={Array.isArray(rooms) ? rooms.join(", ") : ""}
                onChange={(e) => setRoomValue(e.target.value)}
                placeholder="Rooms (comma-separated)"
                className="w-40 sm:w-60 md:w-80 ml-3 outline-none bg-transparent"
              />
            </div>

            <FormControl className="md:w-[25rem] w-60 sm:w-80">
              <InputLabel
                id="demo-multiple-checkbox-label"
                className="!text-gray-400"
              >
                Specifications
              </InputLabel>

              <CustomSelect
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={specification}
                onChange={handleChange}
                input={<OutlinedInput label="Specifications" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {availableSpecifications.map((spec) => (
                  <MenuItem key={spec} value={spec}>
                    <Checkbox checked={specification?.indexOf(spec) > -1} />
                    <ListItemText primary={spec} />
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>

            <textarea
              required={true}
              placeholder="Hotel Description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-solid border-gray-400 py-3 px-5 rounded resize-none focus:outline-none bg-transparent"
            />

            <Button component="label">
              <FileUploadIcon color="action" fontSize="large" />

              <input
                multiple
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Button>

            <Button
              variant="contained"
              type="submit"
              className="!bg-red-400 !py-4"
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default UpdateHotel;
