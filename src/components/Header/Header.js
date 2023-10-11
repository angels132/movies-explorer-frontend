// Импортируем React и необходимые хуки
import React, { useEffect, useState } from "react";
// Импортируем стили
import "./Header.css";
// Импортируем хук useNavigate для программного перенаправления
import { useNavigate } from "react-router-dom";
// Импортируем компоненты навигации
import NavigationLoggedIn from "../Navigation/NavigationLoggedIn/NavigationLoggedIn";
import NavigationNotLoggedIn from "../Navigation/NavigationNotLoggedIn/NavigationNotLoggedIn";
import NavigationProfile from "../Navigation/NavigationProfile/NavigationProfile";

// Эта переменная представляет собой состояние авторизации пользователя
const loggedIn = true;

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  const [width, setWidth] = useState(0);

  function getWidth() {
    const display = window.innerWidth;
    setWidth(display);
    console.log(width);
  }
  useEffect(() => {
    getWidth();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", getWidth);
    }, 500);
  });

  const navigate = useNavigate();
  return (
    <>
      {!loggedIn ? (
        <header className="header">
          <div className="header__logo" onClick={() => navigate("/")}></div>
          {width < 769 ? (
            <div className="header__burger">
              <button
                className="header__burger-button"
                onClick={handleOpen}
              ></button>

              {isClicked ? (
                <div className="header__popup">
                  <div className="header__burger-container">
                    <button
                      className="header__burger-close"
                      onClick={handleClose}
                    ></button>
                    <NavigationNotLoggedIn />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <>
              <NavigationNotLoggedIn />
            </>
          )}
        </header>
      ) : (
        <header className="header">
          <div className="header__logo" onClick={() => navigate("/")}></div>
          {width < 769 ? (
            <div className="header__burger">
              <button
                className="header__burger-button"
                onClick={handleOpen}
              ></button>

              {isClicked ? (
                <div className="header__popup">
                  <div className="header__burger-container">
                    <button
                      className="header__burger-close"
                      onClick={handleClose}
                    ></button>
                    <NavigationLoggedIn />
                    <NavigationProfile />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <>
              <NavigationLoggedIn />
              <NavigationProfile />
            </>
          )}
        </header>
      )}
    </>
  );
};

// Экспортируем компонент Header для использования в других местах программы
export default Header;
