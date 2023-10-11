// Импортируем React для использования его функциональности
import React from "react";
// Импортируем файл стилей для этого компонента
import "./Footer.css";
// Импортируем Link из react-router-dom для использования внутренних ссылок
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <footer className="footer">
      <h2 className="footer__copyright">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__line"></div>
      <div className="footer__info">
        <p className="footer__year">© 2023</p>
        <div className="footer__links">
          <a className="footer__link">Яндекс.Практикум</a>
          <a className="footer__link">Github</a>
        </div>
      </div>
    </footer>
  );
};

// Экспортирование компонента About для использования его в другом месте
export default About;
