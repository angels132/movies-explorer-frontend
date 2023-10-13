// Импортируем React и навигационный хук из библиотеки 'react-router-dom'
import React from "react";
import { useNavigate } from "react-router-dom";
// Импортируем стили страницы для входа
import "./Login.css";

// Компонент страницы входа
function Login() {
  // Используем хук useNavigate, чтобы получить возможность переходить по маршрутам
  const navigate = useNavigate();

  // Отображаем элементы управления для входа в учетную запись
  return (
    <main>
      <section className="login">
        <div className="login__logo" onClick={() => navigate("/")}></div>
        <h2 className="login__title">Рады видеть!</h2>
        <div className="login__input-container">
          <p className="login__input-name">E-mail</p>
          <input
            className="login__input"
            type="text"
            required
            placeholder="E-mail"
          ></input>
          <span className="login__input-error">Что-то пошло не так...</span>
        </div>
        <div className="login__input-container">
          <p className="login__input-name">Пароль</p>
          <input
            className="login__input"
            type="password"
            required
            placeholder="Пароль"
          ></input>
          <span className="login__input-error">Что-то пошло не так...</span>
        </div>
        <button className="login__button">Войти</button>
        <div className="login__already-container">
          <p className="login__already-text">Ещё не зарегистрированы?</p>
          <a className="login__already-link" href="/signup">
            Регистрация
          </a>
        </div>
      </section>
    </main>
  );
}

// Экспорт компонента Login для дальнейшего использования в проекте
export default Login;
