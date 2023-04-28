import React from "react";
import Troll from "../assets/troll-face.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Troll} alt="Logo" className="logo" />
      <h1 className="header-title">Meme Generator</h1>
    </header>
  );
};

export default Header;
