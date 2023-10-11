// Импорт React и CSS стилей.
import React from "react";
import "./NavTab.css";

// Создание функционального компонента NavTab.
const NavTab = () => {
  // Функция компонента возвращает JSX (или код разметки) для отображения.
  return (
    <ul className="navtab">
      <li>
        <a className="navtab__link" href="#about-project">
          О проекте
        </a>
      </li>
      <li>
        <a className="navtab__link" href="#techs">
          Технологии
        </a>
      </li>
      <li>
        <a className="navtab__link" href="#student">
          Студент
        </a>
      </li>
    </ul>
  );
};

// Экспорт компонента NavTab, чтобы его можно было импортировать и использовать в других файлах.
export default NavTab;
