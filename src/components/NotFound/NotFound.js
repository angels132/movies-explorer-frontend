import React from "react"; // Импорт библиотеки React
import "./NotFound.css"; // Импорт стилей для данного компонента

// Определение функционального компонента NotFound
function NotFound() {
  return (
    <main>
    <section className="not-found">
      <p className="not-found__number">404</p>
      <p className="not-found__text">Страница не найдена</p>
      <a className="not-found__back" href="/">
        Назад
      </a>
    </section>
    </main>
  );
}

export default NotFound;
