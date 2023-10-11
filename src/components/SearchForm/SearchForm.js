// Импортируем React для создания компонентов
import React from "react";

// Импортируем внешний CSS-файл для стилизации нашего компонента
import "./SearchForm.css";

// Определяем компонент SearchForm как функциональный компонент
const SearchForm = () => {
  // JSX возвращает форму поиска
  return (
    // определение формы
    <form className="search-form">
      <div className="search-form__input-container">
        <input className="search-form__input" placeholder="Фильм" required></input>
        <button className="search-form__button_type_search"></button>
      </div>
      <div className="search-form__filter">
        <label className="search-form__switch">
          <input
            type="checkbox"
            className="search-form__checkbox"
            required
          ></input>
          <span className="search-form__slider search-form__round"></span>
        </label>

        <p className="search-form__input__filter">Короткометражки</p>
      </div>
      <div className="search-form__line"></div>
    </form>
  );
};
// Экспортируем SearchForm как модуль, который может быть использован в других файлах
export default SearchForm;
