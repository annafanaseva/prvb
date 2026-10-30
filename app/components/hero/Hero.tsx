import React, { useRef } from "react";
import Button from "../button/Button";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import "./hero.css";

interface HeroProps {
   image: string;
   showMetrics: boolean;
   subTitle: string;
   subTitleExtra?: React.ReactNode;
   children: React.ReactNode;
}
function Hero({
   image,
   showMetrics,
   subTitle,
   subTitleExtra,
   children,
}: HeroProps) {
   const containerRef = useRef<HTMLDivElement>(null);
   useGSAP(
      () => {
         const tl = gsap.timeline({
            defaults: { duration: 1, ease: "power1.out", autoAlpha: 0 },
         });
         const split = SplitText.create(".hero__title", { type: "lines" });
         tl.from(split.lines, {
            yPercent: 40,
            stagger: 0.2,
         })
            .from(
               ".hero__sub-title",
               {
                  yPercent: 30,
               },
               ">-0.7"
            )
            .from(
               ".hero__button_large",
               {
                  duration: 1.5,
                  xPercent: -20,
                  ease: "back.out(3)",
               },
               "<"
            )
            .from(
               ".hero__metrics-item",
               {
                  yPercent: 20,
                  stagger: 0.2,
                  duration: 0.5,
               },
               ">-1.5"
            );
      },
      { scope: containerRef }
   );
   return (
      <section className="hero" ref={containerRef}>
         <div className="hero__inner-wrapper">
            <div className="hero__image-wrapper">
               <img
                  src={image}
                  alt="An Hero Image on display"
                  data-testid="hero-image"
               />
            </div>
            <div className="hero__shapes-wrapper">
               <div className="hero__title-wrapper">
                  {children}
                  <svg
                     width="30"
                     height="30"
                     viewBox="0 0 30 30"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="hero__title-shape"
                  >
                     <path
                        d="M30 -1.66893e-06C27.4459 -1.66893e-06 24.2948 0.133773 21.0047 0.76923C11.1291 2.67657 0.000629361 9.10373 4.19617e-05 30L0 4.98295e-05L30 -1.66893e-06Z"
                        fill="#f6f6f6"
                     />
                  </svg>
               </div>
               <div className="hero__sub-title-wrapper">
                  <h3 className="hero__sub-title" data-testid="hero-sub-title">
                     {subTitle}
                  </h3>
                  {subTitleExtra}
                  <svg
                     width="30"
                     height="30"
                     viewBox="0 0 30 30"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="hero__sub-title-shape"
                  >
                     <path
                        d="M30 -1.66893e-06C27.4459 -1.66893e-06 24.2948 0.133773 21.0047 0.76923C11.1291 2.67657 0.000629361 9.10373 4.19617e-05 30L0 4.98295e-05L30 -1.66893e-06Z"
                        fill="#f6f6f6"
                     />
                  </svg>
               </div>
               <div className="hero__button-wrapper">
                  <div className="hero__button_large">
                     <Button
                        label="Оставить заявку"
                        color="purple"
                        type="link"
                        href="/contact"
                     />
                  </div>
                  <div className="hero__button_small">
                     <Button
                        label="Связаться"
                        color="purple"
                        href="/contact"
                        type="link"
                     />
                  </div>
                  <svg
                     width="30"
                     height="30"
                     viewBox="0 0 30 30"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="hero__button-wrapper-shape left"
                  >
                     <path
                        d="M30 -1.66893e-06C27.4459 -1.66893e-06 24.2948 0.133773 21.0047 0.76923C11.1291 2.67657 0.000629361 9.10373 4.19617e-05 30L0 4.98295e-05L30 -1.66893e-06Z"
                        fill="#f6f6f6"
                     />
                  </svg>
                  <svg
                     width="30"
                     height="30"
                     viewBox="0 0 30 30"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="hero__button-wrapper-shape right"
                  >
                     <path
                        d="M30 -1.66893e-06C27.4459 -1.66893e-06 24.2948 0.133773 21.0047 0.76923C11.1291 2.67657 0.000629361 9.10373 4.19617e-05 30L0 4.98295e-05L30 -1.66893e-06Z"
                        fill="#f6f6f6"
                     />
                  </svg>
               </div>
            </div>
            <div
               className={[
                  "hero__metrics-wrapper",
                  !showMetrics ? "hide" : "",
               ].join(" ")}
            >
               <div className="hero__metrics-item">
                  <h3 className="hero__metrics-text" data-testid="hero-metric">
                     <span className="highlight">15 лет на рынке</span>
                     <br /> кадровой рекламы
                  </h3>
               </div>
               <div className="hero__metrics-item">
                  <h3 className="hero__metrics-text" data-testid="hero-metric">
                     <span className="highlight">Сильная экспертиза</span> в
                     массовом подборе, включая вахтовый метод
                  </h3>
               </div>
               <div className="hero__metrics-item">
                  <h3 className="hero__metrics-text" data-testid="hero-metric">
                     Работаем с компаниями из разных отраслей
                     <span className="highlight"> по всей России</span>
                  </h3>
               </div>
            </div>
         </div>
      </section>
   );
}
export default Hero;
