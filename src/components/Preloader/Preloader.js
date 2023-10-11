import React from "react"; // Импортируем React
import "./Preloader.css"; // Импортируем файл со стилями для данного компонента

// Определяем функциональный компонент Preloader
const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader; // Экспортируем компонент Preloader для использования в других частях
