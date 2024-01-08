import React from 'react';
import "./TopBar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";



import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const TopBar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="topbarTOP">
      <div className="leftTOP">
        <Link to="/mainFeed/pubFeed" style={{ textDecoration: "none" }}>
          <span>Code Posts</span>
        </Link>
        <HomeOutlinedIcon/>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} style={{ cursor: 'pointer' }}/>
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} style={{ cursor: 'pointer' }}/>
        )}
        <GridViewOutlinedIcon />
        <div className="searchTOP">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="rightTOP">
        <PersonOutlinedIcon />
        <div className="user">
          <img
            src={currentUser.AvatarURL}
            alt=""
          />
          <span>{currentUser.Username}</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar