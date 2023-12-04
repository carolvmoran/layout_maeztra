import React, { useState, useEffect } from "react";

import { TopBar } from "./topBar/TopBar";
import { MenuItems } from "./menu/menuItems";
import { MainHeader } from "./mainHeader/MainHeader";

const Header = () => {
  const device = window.innerWidth >= 1025 ? "desktop" : "mobile";
  const [menuDevice, setMenuDevice] = useState(window.innerWidth >= 1025);
  useEffect(() => {
    const handleResize = () => {
      setMenuDevice(window.innerWidth >= 1025);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <header>
      <TopBar />
      <MainHeader device={device} />
      {menuDevice ? <MenuItems device={device} /> : <></>}
    </header>
  );
};

export { Header };
