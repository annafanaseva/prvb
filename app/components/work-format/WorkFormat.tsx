import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./work-format.css";

function WorkFormat() {
   const containerRef = useRef<HTMLDivElement>(null);
   useGSAP(
      () => {
         gsap.from(".work-format__heading", {
            xPercent: 100,
            autoAlpha: 0,
            duration: 0.8,
            scrollTrigger: {
               trigger: ".work-format__heading",
               start: "top 70%",
            },
         });
         const items = gsap.utils.toArray<HTMLLIElement>(
            ".work-format__item-inner-list-item"
         );
         items.forEach((el, i) => {
            gsap.from(el, {
               yPercent: 50,
               autoAlpha: 0,
               stagger: 0.3,
               duration: 1,
               scrollTrigger: {
                  trigger: el.parentNode as HTMLElement,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
               },
            });
         });
      },
      { scope: containerRef }
   );
   return (
      <section className="work-format" id="work-format" ref={containerRef}>
         <div className="work-format__inner-wrapper">
            <div className="work-format__header-wrapper">
               <h3 className="work-format__title">
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
                  Форматы работы
               </h3>
               <h4
                  className="work-format__heading"
                  data-testid="work-format-heading"
               >
                  <span className="highlight">Форматы работы:</span> как мы
                  передаём вам кандидатов
               </h4>
            </div>
            <div className="work-format__body">
               <div className="work-format__list">
                  <div
                     className="work-format__item"
                     data-testid="work-format-list-item"
                  >
                     <h5 className="work-format__item-heading">&nbsp;</h5>
                     <h5 className="work-format__item-heading">
                        Базовый обзвон
                     </h5>
                     <h5 className="work-format__item-heading">
                        Расширенный ресечинг и запись
                     </h5>
                  </div>

                  <div
                     className="work-format__item"
                     data-testid="work-format-list-item"
                  >
                     <p className="work-format__item-inner-list-item">
                        Фиксация отклика
                     </p>
                     <p className="work-format__item-inner-list-item">+</p>
                     <p className="work-format__item-inner-list-item">+</p>
                  </div>

                  <div
                     className="work-format__item"
                     data-testid="work-format-list-item"
                  >
                     <p className="work-format__item-inner-list-item">
                        Фильтрация по нужным параметрам
                     </p>
                     <p className="work-format__item-inner-list-item">+</p>
                     <p className="work-format__item-inner-list-item">+</p>
                  </div>

                  <div
                     className="work-format__item"
                     data-testid="work-format-list-item"
                  >
                     <p className="work-format__item-inner-list-item">
                        Презентация вакансии
                     </p>
                     <p className="work-format__item-inner-list-item">-</p>
                     <p className="work-format__item-inner-list-item">+</p>
                  </div>

                  <div
                     className="work-format__item"
                     data-testid="work-format-list-item"
                  >
                     <p className="work-format__item-inner-list-item">
                        Назначение интервью
                     </p>
                     <p className="work-format__item-inner-list-item">-</p>
                     <p className="work-format__item-inner-list-item">+</p>
                  </div>

                  <div
                     className="work-format__item"
                     data-testid="work-format-list-item"
                  >
                     <p className="work-format__item-inner-list-item">
                        Передача в CRM
                     </p>
                     <p className="work-format__item-inner-list-item">+</p>
                     <p className="work-format__item-inner-list-item">+</p>
                  </div>

                  <div
                     className="work-format__item"
                     data-testid="work-format-list-item"
                  >
                     <p className="work-format__item-inner-list-item">
                        Подходит для
                     </p>
                     <p className="work-format__item-inner-list-item">
                        Горячие лиды, массовые вакансии, вахта
                     </p>
                     <p className="work-format__item-inner-list-item">
                        Массовые вакансии, найм в регионах, внутренние
                        HR-команды
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default WorkFormat;
