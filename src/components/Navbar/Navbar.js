import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <nav className={classes.NavbarItems}>
        <div className={classes.menu_icon}>
          <img src="./logo.png" />
        </div>
        <ul className={classes.ul}>
          {MenuItems.map((item, index) => {
            return (
              <li className={classes.li} key={index}>
                <a className={classes.nav_links} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
