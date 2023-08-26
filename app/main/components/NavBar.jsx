import Image from "next/image";
import React from "react";
import "../style/NavBar.css";
import logo from "../../../public/assets/images/tyranoLogo.png";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src={logo} alt="Picture of the author" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="contactBtn">
        <div class="radiusBtn">
          <div class="contactUs">
            <p className="BtnText">Contact Us</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
