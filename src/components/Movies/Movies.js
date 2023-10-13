// Импортируем React для создания компонентов
import React from "react";
// Импортируем необходимые компоненты
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// Импортируем данные фильмов
import films from "../../data/filmsData";

// Определяем компонент Movies как функциональный компонент
// Этот компонент представляет собой страницу с фильмами
const Movies = () => {
  // Создаем состояние для контроля загрузки данных
  const [isLoading] = React.useState(false);

  // Возвращаем JSX
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList cards={films} saved={false} isLoading={isLoading} />
      </main>
      <Footer />
    </>
  );
};
// Экспортируем Movies для использования в других файлах
export default Movies;
