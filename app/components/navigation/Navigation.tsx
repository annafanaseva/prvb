import React, { useState, useRef, useCallback } from "react";
import { NavLink, Link } from "react-router";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../button/Button";
import MobileMenu from "../mobile-menu/MobileMenu";
import logo from "/rabotnik-logo.webp";
import "./navigation.css";

const navigationsList = [
   { name: "Услуги", href: "/#services" },
   { name: "Наша платформа", href: "/#platform" },
   { name: "О нас", href: "/#about-us" },
   { name: "Блог", href: "/blog" },
];

function Navigation() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const containerRef = useRef<HTMLElement>(null);
   const [tl, setTl] = useState<GSAPTimeline>();

   useGSAP(
      () => {
         const timeline = gsap
            .timeline({ defaults: { duration: "0.3" } })
            .to(".top-bar", {
               rotate: isMenuOpen ? 45 : 0,
               transformOrigin: "left top",
            })
            .to(".middle-bar", { opacity: isMenuOpen ? 0 : 1 }, "<")
            .to(
               ".bottom-bar",
               {
                  rotate: isMenuOpen ? -45 : 0,
                  transformOrigin: "left bottom",
               },
               "<"
            );
         setTl(timeline);
      },
      { scope: containerRef, dependencies: [isMenuOpen] }
   );

   const addAnimation = useCallback(
      (animation: GSAPTween) => {
         tl && tl.add(animation, "-=0.1");
      },
      [tl]
   );
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <header className="header" ref={containerRef}>
         <div className="header__inner-wrapper">
            <div className="header__logo-wrapper">
               <Link to="/">
                  <img
                     src={logo}
                     alt="Rabotnik Logo"
                     data-testid="navigation-logo-image"
                  />
               </Link>
            </div>
            <nav className="header__nav">
               <ul className="header__nav-container">
                  {navigationsList.map((nav) => (
                     <li key={nav.name} className="header__nav-item">
                        <NavLink
                           to={nav.href}
                           data-testid="navigation-menu-item"
                        >
                           {nav.name}
                        </NavLink>
                     </li>
                  ))}
               </ul>
            </nav>
            <div className="header__cta-button">
               <Button
                  color="orange"
                  label="Связаться"
                  type="link"
                  href="/contact"
               />
            </div>
            <button className="header__menu-bar" onClick={toggleMenu}>
               <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                     fill="#000000"
                     className="top-bar"
                  />
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                     fill="#000000"
                     className="middle-bar"
                  />
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                     fill="#000000"
                     className="bottom-bar"
                  />
               </svg>
            </button>
         </div>
         <MobileMenu
            navList={navigationsList}
            isActive={isMenuOpen}
            addAnimation={addAnimation}
            toggleMenu={toggleMenu}
         />
      </header>
   );
}

export default Navigation;
