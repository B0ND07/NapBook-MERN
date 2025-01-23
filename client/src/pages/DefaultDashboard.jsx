import { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useMediaQuery,
} from "@mui/material";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MapsHomeWorkSharpIcon from "@mui/icons-material/MapsHomeWorkSharp";
import AddHomeWorkSharpIcon from "@mui/icons-material/AddHomeWorkSharp";
import BookmarkAddedSharpIcon from "@mui/icons-material/BookmarkAddedSharp";

import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";

const DefaultDashboard = () => {
  const [first, setFirst] = useState(true);
  const open = first;
  const dispatch = useDispatch();
  const isMobileDevice = useMediaQuery("(max-width:0px)");

  useEffect(() => {
    if (isMobileDevice) {
      setFirst(false);
    }
  }, [isMobileDevice, dispatch]);

  return (
    <div className="flex justify-center mt-[10%]">
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <Tooltip title={open ? "" : "All Users"} placement="right">
            <NavLink to="/admin/users">
              {({ isActive }) => (
                <ListItemButton
                  selected={isActive}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <PeopleAltIcon className="text-red-400" />
                  </ListItemIcon>

                  <ListItemText
                    className="text-red-400 font-semibold"
                    primary="All Users"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              )}
            </NavLink>
          </Tooltip>
        </ListItem>

        <ListItem disablePadding sx={{ display: "block" }}>
          <Tooltip title={open ? "" : "All Hotels"} placement="right">
            <NavLink to="/admin/hotels">
              {({ isActive }) => (
                <ListItemButton
                  selected={isActive}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <MapsHomeWorkSharpIcon className="text-red-400" />
                  </ListItemIcon>
                  <ListItemText
                    className="text-red-400 font-semibold"
                    primary="All Hotels"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              )}
            </NavLink>
          </Tooltip>
        </ListItem>

        <ListItem disablePadding sx={{ display: "block" }}>
          <Tooltip title={open ? "" : "Create Hotel"} placement="right">
            <NavLink to="/admin/hotel/create">
              {({ isActive }) => (
                <ListItemButton
                  selected={isActive}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AddHomeWorkSharpIcon className="text-red-400" />
                  </ListItemIcon>
                  <ListItemText
                    className="text-red-400 font-semibold"
                    primary="Create Hotel"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              )}
            </NavLink>
          </Tooltip>
        </ListItem>

        <ListItem disablePadding sx={{ display: "block" }}>
          <Tooltip title={open ? "" : "Bookings"} placement="right">
            <NavLink to="/admin/bookings">
              {({ isActive }) => (
                <ListItemButton
                  selected={isActive}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <BookmarkAddedSharpIcon className="text-red-400" />
                  </ListItemIcon>
                  <ListItemText
                    className="text-red-400 font-semibold"
                    primary="All Bookings"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              )}
            </NavLink>
          </Tooltip>
        </ListItem>
      </List>
    </div>
  );
};

export default DefaultDashboard;
