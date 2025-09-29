import React, { useRef } from "react";
import image from "/service-description-icon.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./new-client.css";
import Button from "../button/Button";

interface ServiceDescriptionProps {
   title: React.ReactNode;
   subTitle: React.ReactNode;
}
function NewClient({ title, subTitle }: ServiceDescriptionProps) {
   const iconContainerRef = useRef<HTMLDivElement>(null);
   useGSAP(() => {
      gsap.to(iconContainerRef.current, {
         duration: 10,
         rotate: 360,
         ease: "none",
         repeat: -1,
      });
   });
   return (
      <section className="new-client">
         <h3 className="new-client__title">{title}</h3>
         <div className="new-client__body">
            <div className="new-client__image-wrapper" ref={iconContainerRef}>
               <img
                  src={image}
                  alt="An Orange cirle rotating"
                  data-testid="new-client-icon"
               />
            </div>
            <div className="new-client__text-wrapper">
               <h4
                  className="new-client__sub-title"
                  data-testid="new-client-sub-title"
               >
                  <span className="space"></span>
                  {subTitle}
               </h4>
               <Button
                  label="Написать"
                  color="purple"
                  href="https://t.me/+79035520555"
                  target="_blank"
                  type="link"
               />
            </div>
         </div>
      </section>
   );
}
export default NewClient;
