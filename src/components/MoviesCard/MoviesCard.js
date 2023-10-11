// Импортируем React для создания компонентов
import React from "react";

// Импортируем внешний CSS-файл для стилизации нашего компонента
import "./MoviesCard.css";

// Определяем компонент MoviesCard как функциональный компонент, который получает свойства card и saved
// Компонент представляет собой карточку фильма
function MoviesCard({ card, saved }) {
  // Формирование класса для кнопки сохранения в зависимости от того, сохранен ли фильм или нет
  const cardSaveButtonClass = `${
    card.saved
      ? "movies-card__save-button movies-card__save-button_active"
      : "movies-card__save-button"
  }`;

  // Возвращаем JSX
  return (
    <li className="movies-card">
      <img className="movies-card__image" alt={card.nameRU} src={card.link} />
      <div className="movies-card__info-container">
        <h3 className="movies-card__text">{card.nameRU}</h3>
        <p className="movies-card__time">{card.duration}</p>
      </div>

      {saved ? (
        <button className="movies-card__delete-button"></button>
      ) : (
        <button className={cardSaveButtonClass}>Сохранить</button>
      )}
    </li>
  );
}
// Экспортируем MoviesCard для использования в других файлах
export default MoviesCard;
