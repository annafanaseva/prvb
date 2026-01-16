import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesList } from "./services-list";
import Button from "../button/Button";
import "./service-list-block.css";

function ServiceListBlock() {
   const containerRef = useRef<HTMLDivElement>(null);
   const { contextSafe } = useGSAP(
      () => {
         // Heading animation
         const split = SplitText.create(".service-list-block__body-heading", {
            type: "lines",
         });
         gsap.from(split.lines, {
            yPercent: 100,
            autoAlpha: 0,
            stagger: 0.2,
            ease: "sine.out",
            scrollTrigger: {
               trigger: ".service-list-block__body-heading",
               start: "top 90%",
               toggleActions: "play none none reverse",
            },
         });
         gsap.set(".service-list-block__list-item", {
            yPercent: 20,
            autoAlpha: 0,
         });
         ScrollTrigger.batch(".service-list-block__list-item", {
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
            ".service-list-block__list-item-shape-container"
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
            ".service-list-block__list-item-shape-container"
         );
         gsap.to(shapeContainer, {
            y: 100,
            ease: "power1.in",
         });
      }
   );

   return (
      <section className="service-list-block" ref={containerRef} id="services">
         <div className="service-list-block__inner-wrapper">
            <h3 className="service-list-block__title">
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
               Услуги
            </h3>
            <div className="service-list-block__body">
               <h4
                  className="service-list-block__body-heading"
                  data-testid="service-list-block-heading"
               >
                  Давайте начнем <br />
                  работу <span className="highlight">вместе!</span>
               </h4>
               <div className="service-list-block__list">
                  {servicesList.map((service) => (
                     <div
                        className="service-list-block__list-item"
                        key={service.label}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                     >
                        <div className="service-list-block__list-item-inner">
                           <div className="service-list-block__list-item-image-wrapper">
                              <img
                                 src={service.image}
                                 alt={service.label}
                                 data-testid="service-list-block-image"
                              />
                           </div>
                           <div className="service-list-block__list-item-icon">
                              {service.icon && (
                                 <img
                                    src={service.icon}
                                    alt="An icon place on the service image"
                                 />
                              )}
                           </div>
                           <div className="service-list-block__list-item-shape-container">
                              <div className="service-list-block__list-item-shape-inner">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    className="service-list-block__list-item-shape left"
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
                                    className="service-list-block__list-item-shape right"
                                 >
                                    <path
                                       d="M0 30C2.55414 30 5.7052 29.8662 8.99534 29.2308C18.8709 27.3234 29.9994 20.8963 30 0L30 30L0 30Z"
                                       fill="white"
                                    />
                                 </svg>
                                 <Button
                                    color="purple"
                                    label="Подробнее"
                                    type="link"
                                    href={service.href}
                                 />
                              </div>
                           </div>
                        </div>
                        <h5
                           className="service-list-block__list-item-label"
                           data-testid="service-list-block-label"
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
export default ServiceListBlock;
