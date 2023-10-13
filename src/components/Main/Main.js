import React from "react";
import Header from "../Header/Header"; // Импорт Header компонента
import Cover from "./Promo/Promo"; // Импорт Promo компонента
import AboutProject from "./AboutProject/AboutProject"; // Импорт AboutProject компонента
import Techs from "./Techs/Techs"; // Импорт Techs компонента
import AboutMe from "./AboutMe/AboutMe"; // Импорт AboutMe компонента
import Footer from "../Footer/Footer"; // Импорт Footer компонента
const Main = () => {
  return (
    <>
      <Header />
      <main>
      <Cover />
      <AboutProject />
      <Techs />
      <AboutMe />
      </main>
      <Footer />
    </>
  );
};

export default Main;
