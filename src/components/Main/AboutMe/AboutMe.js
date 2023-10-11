// Импорт React, функции useEffect для управления side-effects и useState для управления state.
import React, { useEffect, useState } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  // Используем useState для хранения ширины окна
  const [width, setWidth] = useState(0);

  // Функция для определения текущей ширины экрана
  function getWidth() {
    const display = window.innerWidth;
    setWidth(display);
    console.log(width);
  }

  // Используем useEffect для определения ширины экрана при загрузке
  useEffect(() => {
    getWidth();
  }, []);

  // Устанавливаем обработчик изменения размера окна после монтирования компонента
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", getWidth);
    }, 500);
  });

  return (
    <section className="about-me" id="student">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__line"></div>
      {width > 450 ? (
        <div className="about-me__info">
          <div className="about-me__info-text">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__job-and-age">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="about-me__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              className="about-me__link-to-github"
              href="https://github.com/angels132"
            >
              Github
            </a>
          </div>
          <div className="about-me__photo"></div>
        </div>
      ) : (
        <div className="about-me__info">
          <div className="about-me__photo"></div>
          <div className="about-me__info-text">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__job-and-age">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="about-me__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              className="about-me__link-to-github"
              href="https://github.com/angels132"
            >
              Github
            </a>
          </div>
        </div>
      )}
      <h3 className="about-me__portfolio-title">Портфолио</h3>
      <div className="about-me__app-container">
        <a
          className="about-me__app"
          href="https://github.com/angels132/how-to-learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Статичный сайт
        </a>
        <div className="about-me__arrow"></div>
      </div>
      <div className="about-me__line about-me__line_type_grey"></div>
      <div className="about-me__app-container">
        <a
          className="about-me__app"
          href="https://github.com/angels132/russian-travel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Адаптивный сайт
        </a>
        <div className="about-me__arrow"></div>
      </div>
      <div className="about-me__line about-me__line_type_grey"></div>
      <div className="about-me__app-container">
        <a
          className="about-me__app"
          href="https://github.com/angels132/react-mesto-api-full-gha"
          target="_blank"
          rel="noopener noreferrer"
        >
          Одностраничное приложение
        </a>
        <div className="about-me__arrow"></div>
      </div>
    </section>
  );
};

export default AboutMe;
