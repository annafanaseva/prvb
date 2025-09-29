import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesList } from "./case-list";
import { Link } from "react-router";
import Button from "../button/Button";
import "./case-list-block.css";

function CaseListBlock() {
   const containerRef = useRef<HTMLDivElement>(null);
   const { contextSafe } = useGSAP(
      () => {
         // Heading animation
         const split = SplitText.create(".case-list-block__body-heading", {
            type: "lines",
         });
         gsap.from(split.lines, {
            yPercent: 100,
            autoAlpha: 0,
            stagger: 0.2,
            ease: "sine.out",
            scrollTrigger: {
               trigger: ".case-list-block__body-heading",
               start: "top 90%",
               toggleActions: "play none none reverse",
            },
         });
         gsap.set(".case-list-block__list-item", {
            yPercent: 20,
            autoAlpha: 0,
         });
         ScrollTrigger.batch(".case-list-block__list-item", {
            onEnter: (batch) => {
               gsap.to(batch, {
                  yPercent: 0,
                  autoAlpha: 1,
                  ease: "sine.out",
                  duration: 1,
                  stagger: 0.2,
               });
            },
            onLeaveBack: (batch) => {
               gsap.to(batch, { yPercent: 20, autoAlpha: 0, ease: "sine.out" });
            },
            start: "top 90%",
         });
      },
      { scope: containerRef }
   );

   const handleMouseEnter = contextSafe(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
         const shapeContainer = e.currentTarget.querySelector(
            ".case-list-block__list-item-shape-container"
         );
         gsap.to(shapeContainer, {
            y: 0,
            ease: "power1.out",
         });
      }
   );
   const handleMouseLeave = contextSafe(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
         const shapeContainer = e.currentTarget.querySelector(
            ".case-list-block__list-item-shape-container"
         );
         gsap.to(shapeContainer, {
            y: 100,
            ease: "power1.in",
         });
      }
   );

   return (
      <section className="case-list-block" ref={containerRef} id="services">
         <div className="case-list-block__inner-wrapper">
            <div className="case-list-block__body">
               <h4
                  className="case-list-block__body-heading"
                  data-testid="case-list-block-heading"
               >
                  Будьте в курсе <br />
                  последних <span className="highlight">новостей!</span>
               </h4>
               <div className="case-list-block__list">
                  {servicesList.map((service) => (
                     <div
                        className="case-list-block__list-item"
                        key={service.label}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                     >
                        <div className="case-list-block__list-item-inner">
                           <div className="case-list-block__list-item-image-wrapper">
                              <img
                                 src={service.image}
                                 alt={service.label}
                                 data-testid="case-list-block-image"
                              />
                           </div>
                           <div className="case-list-block__list-item-icon">
                              {service.icon && (
                                 <img
                                    src={service.icon}
                                    alt="An icon place on the service image"
                                 />
                              )}
                           </div>
                           <div className="case-list-block__list-item-shape-container">
                              <div className="case-list-block__list-item-shape-inner">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    className="case-list-block__list-item-shape left"
                                 >
                                    <path
                                       d="M0 30C2.55414 30 5.7052 29.8662 8.99534 29.2308C18.8709 27.3234 29.9994 20.8963 30 0L30 30L0 30Z"
                                       fill="white"
                                    />
                                 </svg>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    className="case-list-block__list-item-shape right"
                                 >
                                    <path
                                       d="M0 30C2.55414 30 5.7052 29.8662 8.99534 29.2308C18.8709 27.3234 29.9994 20.8963 30 0L30 30L0 30Z"
                                       fill="white"
                                    />
                                 </svg>
                                 <Button
                                    color="purple"
                                    label="Читать"
                                    type="link"
                                    href={service.href}
                                 />
                              </div>
                           </div>
                        </div>
                        <h5
                           className="case-list-block__list-item-label"
                           data-testid="case-list-block-label"
                        >
                           {service.label}
                        </h5>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
export default CaseListBlock;
