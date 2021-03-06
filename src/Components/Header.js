import React from "react";
import "../assets/css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ExpandMore, HomeWork } from "@material-ui/icons";
import logo from "../assets/images/rental.PNG";
import { Link } from "react-router-dom";
import MenuListComposition from "./Menu/MenuBar";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={logo} alt="" />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <Link to="/admin/auth" className="admin__login">
          <p>Rent your Houses</p>
        </Link>
        <HomeWork />
        <ExpandMore />
        {/* <Link to="users/auth"> */}

        <MenuListComposition />

        {/* </Link> */}
      </div>
    </div>
  );
}

export default Header;
