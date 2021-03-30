import React from "react";
import Logo from "../../../assets/img/LISquare.png";
import HeaderOption from "./headerOption";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";

export default function Header({}) {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <img className="logo" src={Logo} />
          <div className="header-search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header-right">
          <HeaderOption text="Home" Icon={HomeIcon} />
          <HeaderOption text="Network" Icon={SupervisorAccountIcon} />
          <HeaderOption text="Jobs" Icon={BusinessCenterIcon} />
          <HeaderOption text="Messages" Icon={SmsIcon} />
          <HeaderOption text="Notifications" Icon={NotificationsIcon} />
          <HeaderOption
            text="Me"
            avatar="https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2019/06/egg-1278x834.jpg"
          />
        </div>
      </div>
    </header>
  );
}
