import React, { useState } from "react";
import "./header.scss";
import Menu from "../menu/Menu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const items = [
    { value: "Обратная связь", href: "../src/pages/feedback" },
    { value: "Посты", href: "/post" },
    { value: "Услуги", href: "/services" },
  ];

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="line"></div>
        <div className="header-main">
          <a href="index.html">
            <div className="logo">
              <img src="/img/icon/logo.svg" alt="Екатерина Славная" />
            </div>
          </a>
          <div className="line"></div>
          <nav>
            <div
              className="burger-btn"
              onClick={() => setMenuActive(!menuActive)}
            >
              {/*добавь класс active при клике к menu__btn */}
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
        <div className="line"></div>
      </div>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Бургер меню"}
        items={items}
      />
    </header>
  );
};

export default Header;
