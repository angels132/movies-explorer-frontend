import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies({
  isSearched,
  loggedIn,
  movies,
  onSaveClick,
  onDeleteClick,
  onSubmit,
  isLoading,
  setErrorText,
  setErrorPopupOpen,
  onToggleClick,
  shortsActive = false,
}) {
  return (
    <main>
      <Header loggedIn={loggedIn} />

      <SearchForm
        onSubmit={onSubmit}
        onToggleClick={onToggleClick}
        shortsActive={shortsActive}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          isSearched={isSearched}
          movies={movies}
          onSaveClick={onSaveClick}
          onDeleteClick={onDeleteClick}
          setErrorPopupOpen={setErrorPopupOpen}
          setErrorText={setErrorText}
        />
      )}

      <Footer />
    </main>
  );
}

export default Movies;
