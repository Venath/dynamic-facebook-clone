import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navBarBox">
      <div className="navBarLeft">
        <span className="logo">
            Facebook
        </span>
      </div>
      <div className="navBarCenter">
        <div className="searchBarBox">
            <SearchIcon className="searchIcon"/>
            <input placeholder="Search For Your Friend" className="searchInput" />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarLinks">
            <span className="navBarLink">Home Page</span>
            <span className="navBarLink">Profile</span>
        </div>
        <div className="navBarIcons">
            <div className="navBarIcon">
                <PersonIcon/>
                <span className="iconTag">3</span>
            </div>
            <div className="navBarIcon">
                <MessageIcon/>
                <span className="iconTag">10</span>
            </div>
            <div className="navBarIcon">
                <SettingsIcon/>
                <span className="iconTag">1</span>
            </div>
        </div>
        <div className="pic">
            <img src="/images/1.jpg" alt="" className="profilePic" />
        </div>
      </div>
    </div>
  );
}
