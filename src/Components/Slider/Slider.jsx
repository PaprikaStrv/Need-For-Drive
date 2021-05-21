import React from "react";
import Carousel from "nuka-carousel";

import slide from "../../Images/slider.png";
import slide1 from "../../Images/slide1.png";
import slide2 from "../../Images/slide2.png";
import slide3 from "../../Images/slide3.png";

import left_arrow from "../../Images/left_arrow.svg";
import right_arrow from "../../Images/right_arrow.svg";

import s from "./slide.module.scss";

const slides = [
  {
    img: slide,
    article: "Бесплатная парковка",
    text:
      "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
    buttonColor: "green",
  },
  {
    img: slide1,
    article: "Страховка",
    text: "Полная страховка автомобиля",
    buttonColor: "blue",
  },
  {
    img: slide2,
    article: "Бензин",
    text: "Полный бак на любой заправке города за наш счёт",
    buttonColor: "red",
  },
  {
    img: slide3,
    article: "Обслуживание",
    text: "Автомобиль проходит еженедельное ТО",
    buttonColor: "purple",
  },
];

const Slider = (props) => {
  return (
    <Carousel
      speed={150}
      renderBottomCenterControls={({ slideCount, currentSlide, goToSlide }) => (
        <div className={"slider-control-bottomcenter" + " " + s.slider_bottom}>
          <ul>
            {[...Array(slideCount)].map((e, key) => (
              <li
                className={currentSlide === key ? "active" : undefined}
                key={key}
              >
                <button
                  type="button"
                  aria-label="slide 1 bullet"
                  onClick={() => goToSlide(key)}
                >
                  <svg width="12" height="12">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      renderCenterLeftControls={({ previousSlide }) => (
        <button onClick={previousSlide} className={s.sliderButton}>
          <img alt="left" src={left_arrow} />
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide} className={s.sliderButton}>
          <img alt="right" src={right_arrow} />
        </button>
      )}
      width="50%"
      wrapAround={true}
      defaultControlsConfig={{
        containerClassName: s.buttonContainer,
        pagingDotsContainerClassName: s.paginationContainer,
        pagingDotsStyle: {
          fill: "white",
          opacity: "1",
        },
        pagingDotsClassName: s.dot,
      }}
    >
      {slides.map((slider, index) => {
        return (
          <div className={s.sliderItem} key={index}>
            <div className={s.sliderImgWrapper}>
              <img className={s.sliderImg} alt="slider" src={slider.img} />
            </div>

            <div className={s.sliderContent}>
              <h3>{slider.article}</h3>
              <p>{slider.text}</p>
              <button
                className={s[slider.buttonColor]}
              >
                Подробнее
              </button>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
