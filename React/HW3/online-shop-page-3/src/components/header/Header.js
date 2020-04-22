import React from "react";
import headerStyle from "./HeaderStyle";
import { NavLink } from "react-router-dom";

function Header() {
  const style = headerStyle();
  return (
    <>
      <header className={style.header}>
        <NavLink exact to="/" className={style.logo}>
          EcoShop
        </NavLink>
        <div className={style["nav-bar"]}>
          <NavLink exact to="/catalog" className={style["header__link"]} activeClassName={style["header__link--active"]}>
            Catalog
          </NavLink>
          <NavLink exact to="/cart" className={style["header__link"]} activeClassName={style["header__link--active"]}>
            Cart
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
