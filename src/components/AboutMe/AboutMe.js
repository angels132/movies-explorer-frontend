import React from "react";
import './AboutMe.css';
import photo from '../../images/pic__COLOR_pic.png';

function AboutMe() {
    return (
        <section className="about-me" id="abouteMe">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__column">
                <div className="about-me__info">
                    <h3 className="about-me__name">Илья</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 26 лет</p>
                    <p className="about-me__text">Я родился и живу в Прокопьевске, закончил факультет Экономической безопасности. Я люблю слушать музыку. С 2022 начал кодить. С 2020 работал экономистом.
                        После того, как прошёл курс по веб-разработке, хочу найти новую работу и
                        заниматься делом которое мне нравится.</p>
                    <a className="about-me__link" href="https://github.com/angels132">Github</a>
                </div>
                <img className="about-me__photo" src={photo} alt="Фото студента" />
            </div>
        </section>
    );
}

export default AboutMe;