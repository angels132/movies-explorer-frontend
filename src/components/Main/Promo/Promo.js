// Импорт React и CSS стилей.
import React from "react";
import "./Promo.css";
// Импорт компонентов из react-router-dom для создания ссылок.
import { Link } from "react-router-dom";
// Импорт компонента NavTab.
import NavTab from "../NavTab/NavTab";

// Создание функционального компонента Promo.
const Promo = () => {
  // Функция возвращает JSX, который отображает информацию о проекте и навигационные вкладки.
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <NavTab />
    </section>
  );
};

// Экспорт компонента Promo, чтобы его можно было использовать в других файлах.
export default Promo;
