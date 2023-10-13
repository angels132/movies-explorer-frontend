// Импорт React для создания компонентов
import React from "react";

// Импорт различных компонентов для использования в этом компоненте
import Header from "../Header/Header"; // верхняя часть страницы / навигационная панель
import Footer from "../Footer/Footer"; // нижняя часть страницы / подвал
import MoviesCardList from "../MoviesCardList/MoviesCardList"; // список карточек фильмов
import films from "../../data/filmsData"; // данные, используемые для создания карточек фильмов
import SearchForm from "../SearchForm/SearchForm"; // форма поиска фильмов

// Определение компонента SavedMovies как функционального компонента
const SavedMovies = () => {
  // JSX возвращает разметку страницы сохраненных фильмов
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList cards={films} isSavedFilms={true} />
      </main>
      <Footer />
    </>
  );
};
// Экспорт компонента SavedMovies для его использования в других файлах
export default SavedMovies;
