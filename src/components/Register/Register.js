import React from "react"; // Импортируем React
import "./Register.css"; // Импортируем стили для этого компонента
import { useNavigate } from "react-router-dom"; // Импортируем хук useNavigate из react-router-dom для программного перенаправления пользователей

function Register() {
  const navigate = useNavigate(); // Инициализируем navigate для использования в компоненте
  return (
    <main>
      <section className="register">
        <div className="register__logo" onClick={() => navigate("/")}></div>
        <h2 className="register__title">Добро пожаловать!</h2>
        <div className="register__input-container">
          <p className="register__input-name">Имя</p>
          <input
            className="register__input"
            type="text"
            required
            placeholder="Имя"
          ></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </div>
        <div className="register__input-container">
          <p className="register__input-name">E-mail</p>
          <input
            className="register__input"
            type="text"
            required
            placeholder="E-mail"
          ></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </div>
        <div className="register__input-container">
          <p className="register__input-name">Пароль</p>
          <input
            className="register__input"
            type="password"
            required
            placeholder="Пароль"
          ></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </div>
        <button className="register__button">Зарегестрироваться</button>
        <div className="register__already-container">
          <p className="register__already-text">Уже зарегистрированы?</p>
          <a className="register__already-link" href="/signin">
            Войти
          </a>
        </div>
      </section>
    </main>
  );
}
// Экспортируем компонент для использования в других частях приложения
export default Register;
