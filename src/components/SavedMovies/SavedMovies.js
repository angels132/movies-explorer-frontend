import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MainApi } from '../../utils/MainApi';



function SavedMovies({
    loggedIn,
    savedMovies,
    onDeleteClick,
    onSubmit,
    isLoading,
    setErrorText,
    setErrorPopup,
    onToggleClick,
    setLoadingSavedMovies,
                       setSavedMovies,
                       shortsActive
}) {

    // useEffect(() => {
    //     setLoadingSavedMovies(true);
    //     MainApi.getInstance().getMyMovies()
    //       .then((userMovies) => {
    //         let processedMovies = userMovies
    //         /* Если короткометражка активна, производим фильтрацию */
    //         if (shortsActive) {
    //             processedMovies = filterShorts(processedMovies);
    //         }
    //         setSavedMovies(processedMovies);
    //         setLoadingSavedMovies(false);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }, [shortsActive]);

    useEffect(() => {
        setLoadingSavedMovies(true);
      
        // Предполагается, что MainApi.getInstance().getMyMovies() это функция, которая получает все сохраненные фильмы пользователя
        MainApi.getInstance().getMyMovies()
          .then((userMovies) => {
            // console.log(userMovies); // для проверки содержимого userMovies
            setSavedMovies(userMovies);
            setLoadingSavedMovies(false);
          })
          .catch((err) => {
            console.log(err); // обработка ошибок
          });
      
      }, []); // add dependency array to run effect once

//     useEffect(() => {
//         setLoadingSavedMovies(true);
//     const userMovies = JSON.parse(localStorage.getItem('savedMovies'));
//         setSavedMovies(userMovies);
//         setLoadingSavedMovies(false);
//   }, [shortsActive]);

    return (
        <main>
            <Header
                loggedIn={loggedIn}
            />

            <SearchForm
                onToggleClick={onToggleClick}
                onSubmit={onSubmit}
            />
            <MoviesCardList
                isLoading={isLoading}
                movies={savedMovies}
                setErrorPopup={setErrorPopup}
                setErrorText={setErrorText}
                onDeleteClick={onDeleteClick}
            />

            <Footer />

        </main>
    );
}

export default SavedMovies;
