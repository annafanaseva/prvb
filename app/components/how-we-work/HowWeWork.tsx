import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../button/Button";
import "./how-we-work.css";

interface HowWeWorkProps {
   sectionImage: string;
   sectionTitle?: string;
   sectionHeading: React.ReactNode;
   sectionSubHeading?: string;
   sectionList?: string[];
   sectionParagraph?: React.ReactNode;
   sectionBottom?: { heading: string; text?: string };
}
function HowWeWork({
   sectionImage,
   sectionTitle,
   sectionHeading,
   sectionSubHeading,
   sectionList,
   sectionParagraph,
   sectionBottom,
}: HowWeWorkProps) {
   const containerRef = useRef<HTMLDivElement>(null);
   useGSAP(
      () => {
         gsap.set(".how-we-work__bottom-button", {
            xPercent: 100,
            autoAlpha: 0,
         });
         gsap.to(".how-we-work__bottom-button", {
            duration: 1,
            xPercent: 0,
            autoAlpha: 1,
            ease: "back.out(1)",
            scrollTrigger: {
               trigger: ".how-we-work__bottom-button",
               start: "top 80%",
               toggleActions: "play none none reverse",
            },
         });
      },
      { scope: containerRef }
   );

   return (
      <section className="how-we-work" ref={containerRef}>
         <div className="how-we-work__inner-wrapper">
            {sectionTitle && (
               <h3 className="how-we-work__title">
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
                  {sectionTitle}
               </h3>
            )}
            <div className="how-we-work__body">
               <div className="how-we-work__image-wrapper">
                  <img
                     src={sectionImage}
                     alt="An image of an offcie with a chair and a computer"
                     data-testid="how-we-work-image"
                  />
               </div>
               <div className="how-we-work__text-wrapper">
                  <h4 className="how-we-work__text-title">{sectionHeading}</h4>
                  {sectionSubHeading && (
                     <h5 className="how-we-work__text-sub-title">
                        {sectionSubHeading}
                     </h5>
                  )}
                  {sectionParagraph && (
                     <p className="how-we-work__paragraph">
                        {sectionParagraph}
                     </p>
                  )}
                  {sectionList && (
                     <ul className="how-we-work__text-list">
                        {sectionList.map((list) => (
                           <li
                              className="how-we-work__text-list-item"
                              data-testid="how-we-work-text-list-item"
                              key={list}
                           >
                              <svg
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    fill="#D8BEFF"
                                 />
                                 <path
                                    d="M9.78796 14.8174L17.4609 7.26726C17.642 7.08909 17.8532 7 18.0946 7C18.3361 7 18.5473 7.08909 18.7284 7.26726C18.9095 7.44543 19 7.65716 19 7.90245C19 8.14774 18.9095 8.35917 18.7284 8.53675L10.4217 16.7327C10.2406 16.9109 10.0294 17 9.78796 17C9.54653 17 9.33528 16.9109 9.15421 16.7327L5.26116 12.902C5.08009 12.7238 4.99317 12.5124 5.00042 12.2677C5.00766 12.023 5.10212 11.8113 5.2838 11.6325C5.46547 11.4537 5.68065 11.3647 5.92932 11.3653C6.17799 11.3658 6.39286 11.4549 6.57393 11.6325L9.78796 14.8174Z"
                                    fill="white"
                                 />
                              </svg>
                              <span>{list}</span>
                           </li>
                        ))}
                     </ul>
                  )}
               </div>
               {sectionBottom && (
                  <div className="how-we-work__bottom">
                     <h4 className="how-we-work__bottom-title">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="25"
                           height="17"
                           viewBox="0 0 25 17"
                           fill="none"
                        >
                           <path
                              d="M5.274 6.5C6.31235 6.5 7.32739 6.80791 8.19074 7.38478C9.0541 7.96166 9.72701 8.7816 10.1244 9.74091C10.5217 10.7002 10.6257 11.7558 10.4231 12.7742C10.2206 13.7926 9.72054 14.7281 8.98631 15.4623C8.25208 16.1965 7.31662 16.6966 6.29822 16.8991C5.27982 17.1017 4.22422 16.9977 3.26491 16.6004C2.3056 16.203 1.48566 15.5301 0.908785 14.6667C0.331907 13.8034 0.024 12.7884 0.024 11.75L0 11C0 8.21523 1.10625 5.54451 3.07538 3.57538C5.04451 1.60625 7.71523 0.5 10.5 0.5V3.5C9.51465 3.49735 8.53856 3.69006 7.62815 4.067C6.71774 4.44393 5.89109 4.9976 5.196 5.696C4.9258 5.96561 4.67658 6.25545 4.4505 6.563C4.7195 6.52 4.9935 6.4985 5.2725 6.4985L5.274 6.5ZM18.774 6.5C19.8124 6.5 20.8274 6.80791 21.6907 7.38478C22.5541 7.96166 23.227 8.7816 23.6244 9.74091C24.0217 10.7002 24.1257 11.7558 23.9231 12.7742C23.7206 13.7926 23.2205 14.7281 22.4863 15.4623C21.7521 16.1965 20.8166 16.6966 19.7982 16.8991C18.7798 17.1017 17.7242 16.9977 16.7649 16.6004C15.8056 16.203 14.9857 15.5301 14.4088 14.6667C13.8319 13.8034 13.524 12.7884 13.524 11.75L13.5 11C13.5 8.21523 14.6062 5.54451 16.5754 3.57538C18.5445 1.60625 21.2152 0.5 24 0.5V3.5C23.0147 3.49735 22.0386 3.69006 21.1282 4.067C20.2177 4.44393 19.3911 4.9976 18.696 5.696C18.4258 5.96561 18.1766 6.25545 17.9505 6.563C18.2195 6.52 18.494 6.5 18.774 6.5Z"
                              fill="black"
                           />
                        </svg>
                        {sectionBottom.heading}
                     </h4>
                     <p className="how-we-work__bottom-body">
                        {sectionBottom.text}
                     </p>
                     <div className="how-we-work__bottom-shapes">
                        <div className="how-we-work__bottom-shape-wrapper">
                           <div className="how-we-work__bottom-button">
                              <Button
                                 label="Оставить заявку"
                                 color="black"
                                 href="/contact"
                                 type="link"
                              />
                           </div>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              className="how-we-work__bottom-shape left"
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
                              className="how-we-work__bottom-shape right"
                           >
                              <path
                                 d="M0 30C2.55414 30 5.7052 29.8662 8.99534 29.2308C18.8709 27.3234 29.9994 20.8963 30 0L30 30L0 30Z"
                                 fill="white"
                              />
                           </svg>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </section>
   );
}
export default HowWeWork;
