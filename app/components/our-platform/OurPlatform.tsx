import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router";
import rabotnikImage from "/rabotnik-logo.webp";
import Button from "../button/Button";
import "./our-platform.css";

function OurPlatform() {
   const containerRef = useRef<HTMLDivElement>(null);
   useGSAP(
      () => {
         gsap.set(".our-platform__bottom-list-item", {
            yPercent: 50,
            autoAlpha: 0,
         });
         gsap.to(".our-platform__bottom-list-item", {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
               trigger: ".our-platform__bottom-content-right",
               start: "top 80%",
            },
         });
         const split = SplitText.create(".our-platform__bottom-content-text", {
            type: "lines",
         });
         const animations: {
            target: gsap.TweenTarget;
            initialVars: gsap.TweenVars;
            animateVars: gsap.TweenVars;
         }[] = [
            {
               target: ".our-platform__body-heading",
               animateVars: { yPercent: 0, autoAlpha: 1 },
               initialVars: { yPercent: 40, autoAlpha: 0 },
            },
            {
               target: ".our-platform__icon-wrapper",
               animateVars: { xPercent: 0, autoAlpha: 1 },
               initialVars: { xPercent: -50, autoAlpha: 0 },
            },
            {
               target: ".our-platform__body-intro",
               animateVars: { yPercent: 0, autoAlpha: 1, stagger: 0.3 },
               initialVars: { yPercent: 30, autoAlpha: 0 },
            },
            {
               target: ".our-platform__feature-text-wrapper",
               animateVars: { xPercent: 0, autoAlpha: 1 },
               initialVars: { xPercent: 100, autoAlpha: 0 },
            },
            {
               target: split.lines,
               animateVars: { yPercent: 0, autoAlpha: 1, stagger: 0.3 },
               initialVars: { yPercent: 30, autoAlpha: 0 },
            },
         ];

         animations.forEach(({ target, animateVars, initialVars }) => {
            gsap.set(target as HTMLElement, { ...initialVars });
            ScrollTrigger.batch(target as HTMLElement, {
               onEnter: (batch) => {
                  gsap.to(batch, {
                     ...animateVars,
                     duration: 1,
                  });
               },
               start: "top 80%",
            });
         });
      },
      { scope: containerRef }
   );
   return (
      <section className="our-platform" ref={containerRef} id="platform">
         <div className="our-platform__inner-wrapper">
            <h3 className="our-platform__title">
               <span>
                  <svg
                     width="10"
                     height="10"
                     viewBox="0 0 10 10"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2Z"
                        fill="#252527"
                     />
                  </svg>
               </span>
               Наша платформа
            </h3>
            <div className="our-platform__body">
               <h4
                  className="our-platform__body-heading"
                  data-testid="our-platform-heading"
               >
                  Мы - аккредитованная{" "}
                  <span className="highlight">IT-компания</span>
               </h4>
               <div className="our-platform__icon-wrapper">
                  <img src={rabotnikImage} alt="Rabotnik logo" />
               </div>
               <div className="our-platform__body-intro-wrapper">
                  <h5 className="our-platform__body-intro">
                     <span className="space"></span>
                     Это платформа для массового подбора персонала.
                     <span className="highlight"> Заказывай трафик </span>
                     кандидатов и получай лиды
                     <span className="highlight"> в Личный кабинет</span> уже
                     сегодня!
                  </h5>
               </div>
               <div className="our-platform__features-wrapper">
                  <div className="our-platform__features-shape-wrapper">
                     <div className="our-platform__features-shape-inner">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="30"
                           height="30"
                           viewBox="0 0 30 30"
                           fill="none"
                           className="our-platform__features-shape left"
                        >
                           <path
                              d="M30 -1.66893e-06C27.4459 -1.66893e-06 24.2948 0.133773 21.0047 0.76923C11.1291 2.67657 0.000629361 9.10373 4.19617e-05 30L0 4.98295e-05L30 -1.66893e-06Z"
                              fill="white"
                           />
                        </svg>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="30"
                           height="30"
                           viewBox="0 0 30 30"
                           fill="none"
                           className="our-platform__features-shape right"
                        >
                           <path
                              d="M30 -1.66893e-06C27.4459 -1.66893e-06 24.2948 0.133773 21.0047 0.76923C11.1291 2.67657 0.000629361 9.10373 4.19617e-05 30L0 4.98295e-05L30 -1.66893e-06Z"
                              fill="white"
                           />
                        </svg>
                     </div>
                  </div>
                  <div className="our-platform__features-button">
                     <Button
                        color="orange"
                        label="Оставить заявку"
                        type="link"
                        href="/contact"
                     />
                  </div>
                  <ul className="our-platform__feature-list">
                     <li
                        className="our-platform__feature-list-item"
                        data-testid="our-platform-feature-item"
                     >
                        <span>
                           <svg
                              width="15"
                              height="q5"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2Z"
                                 fill="#FFFFFF"
                              />
                           </svg>
                        </span>
                        <span>
                           Включена в{" "}
                           <Link
                              target="_blank"
                              to="https://reestr.digital.gov.ru/reestr/?tab=registry_active&PROD_NAME=&PROD_REESTR_NUM=21655&CLASSIFIER=&OWNER_NAME=&OWNER_INN=&OWNER_STATUS=&PROD_DES_NUM=&PROD_DES_DATE=&REQ_REG_NUM=&REQ_REG_DATE="
                           >
                              <span className="bold">
                                 Реестр российского ПО (№21655 от 20.02.2024)
                              </span>
                           </Link>
                        </span>
                     </li>

                     <li
                        className="our-platform__feature-list-item"
                        data-testid="our-platform-feature-item"
                     >
                        <span>
                           <svg
                              width="15"
                              height="q5"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2Z"
                                 fill="#FFFFFF"
                              />
                           </svg>
                        </span>
                        <span>
                           Поддерживает интеграции с{" "}
                           <span className="bold">HR-системами</span> и
                           <span className="bold"> Личными кабинетами</span>
                        </span>
                     </li>
                     <li
                        className="our-platform__feature-list-item"
                        data-testid="our-platform-feature-item"
                     >
                        <span>
                           <svg
                              width="15"
                              height="q5"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2Z"
                                 fill="#FFFFFF"
                              />
                           </svg>
                        </span>
                        <span>
                           Использует сертифицированные{" "}
                           <span className="bold">ФСТЭК/ФСБ </span>
                           технологии
                        </span>
                     </li>
                     <li
                        className="our-platform__feature-list-item"
                        data-testid="our-platform-feature-item"
                     >
                        <span>
                           <svg
                              width="15"
                              height="q5"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2Z"
                                 fill="#FFFFFF"
                              />
                           </svg>
                        </span>
                        <span>
                           Отвечает высоким требованиям надежности,
                           <span className="bold">
                              {" "}
                              безопасности и сложности
                           </span>
                        </span>
                     </li>
                  </ul>
               </div>
               <div className="our-platform__feature-text-wrapper">
                  <p className="our-platform__feature-text">
                     Мы инвестируем в цифровую экосистему и обеспечиваем
                     соответствие{" "}
                     <span className="bold">
                        государственным стандартам качества и безопасности
                     </span>
                  </p>
               </div>
            </div>
            <div className="our-platform__bottom">
               <h4
                  className="our-platform__bottom-heading"
                  data-testid="our-platform-bottom-heading"
               >
                  Личный кабинет
               </h4>
               <div className="our-platform__bottom-content">
                  <div className="our-platform__bottom-content-left">
                     <p
                        className="our-platform__bottom-content-text"
                        data-testid="our-platform-bottom-content-text"
                     >
                        Платформа <span className="highlight">отфильтрует</span>{" "}
                        весь неактуальный поток по вашим фильтрам и{" "}
                        <span className="highlight">удалит дубли.</span>
                     </p>
                  </div>
                  <div className="our-platform__bottom-content-right">
                     <ul className="our-platform__bottom-list">
                        <li
                           className="our-platform__bottom-list-item"
                           data-testid="our-platform-bottom-list-item"
                        >
                           <span className="gray">01</span> Пол
                        </li>
                        <li
                           className="our-platform__bottom-list-item"
                           data-testid="our-platform-bottom-list-item"
                        >
                           <span className="gray">02</span> Возраст
                        </li>
                        <li
                           className="our-platform__bottom-list-item"
                           data-testid="our-platform-bottom-list-item"
                        >
                           <span className="gray">03</span> Гео
                        </li>
                        <li
                           className="our-platform__bottom-list-item"
                           data-testid="our-platform-bottom-list-item"
                        >
                           <span className="gray">04</span> Опыт
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
export default OurPlatform;
