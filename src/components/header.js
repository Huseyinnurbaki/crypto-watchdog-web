import React from "react";
import Social from "./social";
import '../styles/global.css';

const Header = () => {
  return (
    <header>
      <img src={"https://i.imgur.com/CUhG8mC.png"} width='%33' height="100" alt="crypto-watchdog" />
      <Social />
    </header>
  );
}

export default Header;