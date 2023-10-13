// Импорт необходимых библиотек и файлов стилей.
import React, { useEffect, useState } from "react";
import "./AboutProject.css";

// Создание компонента AboutProject.
const AboutProject = () => {
  // Использование хука состояния для установки и получения ширины окна.
  const [width, setWidth] = useState(0);

  // Функция для получения текущей ширины окна.
  function getWidth() {
    const display = window.innerWidth;
    setWidth(display);
    console.log(width);
  }

  // Использование хука эффекта для вызова функции, получающей ширину окна при монтировании компонента.
  useEffect(() => {
    getWidth();
  }, []);

  // Использование хука эффекта для добавления прослушивания события изменения размера окна.
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", getWidth);
    }, 500);
  });

  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__line"></div>
      {width > 450 ? (
        <div className="about-project__info">
          <p className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      ) : (
        <div className="about-project__info">
          <p className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
          <p className="about-project__subtitle about-project__subtitle-extra-margin">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
        
      )}


      <div className="about-project__timeline">
        <p className="about-project__time about-project__time_type_green">
          1 неделя
        </p>
        <p className="about-project__time about-project__time_type_grey">
          4 недели
        </p>
        <p className="about-project__techs">Back-end</p>
        <p className="about-project__techs">Front-end</p>
      </div>
    </section>
  );
};
// Экспорт компонента AboutProject.
export default AboutProject;
