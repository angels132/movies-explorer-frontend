import React from "react";

import PortfolioProject from "../PortfolioProject/PortfolioProject";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Портфолио</h2>
      <ul className="portfolio__wrapper">
        <PortfolioProject
          url={'https://github.com/angels132/how-to-learn'}
          heading={'Статичный сайт'}
        />
        <PortfolioProject
          url={'https://github.com/angels132/russian-travel'}
          heading={'Адаптивный сайт'}
        />
        <PortfolioProject
          url={'https://github.com/angels132/react-mesto-api-full-gha'}
          heading={'Одностраничное приложение'}
        />
      </ul>
    </section>
  )
}

export default Portfolio;
