import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { signOut, getAuth } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();


  const logoutApp = () => {
    // alert('oke');
    const auth = getAuth();
    dispatch(logout());
    signOut(auth);
  }
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.svgrepo.com/show/81143/linkedin.svg" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id="" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar={true}
          title="me"
          onClick={logoutApp}
        />
      </div>
    </div>
  );
}

export default Header;
