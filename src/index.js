import React from "react"; // Импортирует библиотеку React.

import ReactDOM from "react-dom/client"; // Импортирует ReactDOM, который предоставляет DOM-специфичные методы, которые могут быть использованы на верхнем уровне приложения.

import "./index.css"; // Импортирует глобальные CSS-стили.

import App from "./components/App/App"; // Импортирует главный компонент который обычно содержит всю структуру и логику.

import reportWebVitals from "./reportWebVitals"; // Импортирует функцию для отчета об веб-виталах. Web Vitals - это инициатива Google, целью которой является предоставление объединенного набора метрик, который помогает количественно оценить опыт пользователей на веб-сайте.

import { BrowserRouter } from "react-router-dom"; // Импортирует BrowserRouter из библиотеки react-router-dom, который используется для включения маршрутизации в приложении React.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
