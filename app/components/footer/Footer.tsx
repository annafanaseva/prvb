import React from "react";
import { Link } from "react-router";
import Button from "../button/Button";
import logo from "/rabotnik-logo.webp";
import "./footer.css";

function Footer() {
   const navLinks = [
      { name: "Услуги", href: "/#services" },
      { name: "О нас", href: "/#about" },
      { name: "Платформа", href: "/#platform" },
      { name: "Связаться", href: "/contact" },
   ];

   return (
      <footer className="footer">
         <div className="footer__inner-wrapper">
            <div className="footer__shape-container">
               <div className="footer__shape-container-inner">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="30"
                     height="30"
                     viewBox="0 0 30 30"
                     fill="none"
                     className="footer__shape left"
                  >
                     <path
                        d="M30 -1.90735e-06C27.4459 -1.90735e-06 24.2948 0.133774 21.0047 0.76923C11.1291 2.67657 0.000629425 9.10373 4.19617e-05 30L0 4.95911e-05L30 -1.90735e-06Z"
                        fill="white"
                     />
                  </svg>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="30"
                     height="30"
                     viewBox="0 0 30 30"
                     fill="none"
                     className="footer__shape right"
                  >
                     <path
                        d="M30 -1.90735e-06C27.4459 -1.90735e-06 24.2948 0.133774 21.0047 0.76923C11.1291 2.67657 0.000629425 9.10373 4.19617e-05 30L0 4.95911e-05L30 -1.90735e-06Z"
                        fill="white"
                     />
                  </svg>
                  <ul className="footer__social-list">
                     <li className="footer__social-link">
                        <Link
                           target="_blank"
                           to="tel:+74993808916"
                           data-testid="footer-contact-social-link"
                        >
                           <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M3.51667 6.99167C4.71667 9.35 6.65 11.275 9.00833 12.4833L10.8417 10.65C11.0667 10.425 11.4 10.35 11.6917 10.45C12.625 10.7583 13.6333 10.925 14.6667 10.925C15.125 10.925 15.5 11.3 15.5 11.7583V14.6667C15.5 15.125 15.125 15.5 14.6667 15.5C6.84167 15.5 0.5 9.15833 0.5 1.33333C0.5 0.875 0.875 0.5 1.33333 0.5H4.25C4.70833 0.5 5.08333 0.875 5.08333 1.33333C5.08333 2.375 5.25 3.375 5.55833 4.30833C5.65 4.6 5.58333 4.925 5.35 5.15833L3.51667 6.99167Z"
                                 fill="white"
                              />
                           </svg>
                        </Link>
                     </li>
                     <li className="footer__social-link">
                        <Link
                           target="_blank"
                           to="https://wa.me/+79685933779"
                           data-testid="footer-contact-social-link"
                        >
                           <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M14.8757 3.09301C14.1115 2.32144 13.2015 1.70965 12.1986 1.29332C11.1956 0.876979 10.1199 0.664416 9.03398 0.668014C4.48398 0.668014 0.775651 4.37635 0.775651 8.92635C0.775651 10.3847 1.15898 11.8013 1.87565 13.0513L0.708984 17.3347L5.08398 16.1847C6.29232 16.843 7.65065 17.193 9.03398 17.193C13.584 17.193 17.2923 13.4847 17.2923 8.93468C17.2923 6.72635 16.434 4.65135 14.8757 3.09301ZM9.03398 15.793C7.80065 15.793 6.59232 15.4597 5.53398 14.8347L5.28398 14.6847L2.68398 15.368L3.37565 12.8347L3.20898 12.5763C2.52361 11.4822 2.15976 10.2174 2.15898 8.92635C2.15898 5.14301 5.24232 2.05968 9.02565 2.05968C10.859 2.05968 12.584 2.77635 13.8757 4.07635C14.5153 4.7129 15.0223 5.47013 15.367 6.30412C15.7118 7.13811 15.8875 8.03225 15.884 8.93468C15.9007 12.718 12.8173 15.793 9.03398 15.793ZM12.8007 10.6597C12.5923 10.5597 11.5757 10.0597 11.3923 9.98468C11.2007 9.91801 11.0673 9.88468 10.9257 10.0847C10.784 10.293 10.3923 10.7597 10.2757 10.893C10.159 11.0347 10.034 11.0513 9.82565 10.943C9.61732 10.843 8.95065 10.618 8.16732 9.91801C7.55065 9.36801 7.14232 8.69301 7.01732 8.48468C6.90065 8.27635 7.00065 8.16801 7.10898 8.05968C7.20065 7.96801 7.31732 7.81801 7.41732 7.70135C7.51732 7.58468 7.55898 7.49301 7.62565 7.35968C7.69232 7.21801 7.65898 7.10135 7.60898 7.00135C7.55898 6.90135 7.14232 5.88468 6.97565 5.46801C6.80898 5.06801 6.63398 5.11801 6.50898 5.10968H6.10898C5.96732 5.10968 5.75065 5.15968 5.55898 5.36801C5.37565 5.57635 4.84232 6.07635 4.84232 7.09301C4.84232 8.10968 5.58398 9.09301 5.68398 9.22635C5.78398 9.36801 7.14232 11.4513 9.20898 12.343C9.70065 12.5597 10.084 12.6847 10.384 12.7763C10.8757 12.9347 11.3257 12.9097 11.684 12.8597C12.084 12.8013 12.909 12.3597 13.0757 11.8763C13.2507 11.393 13.2507 10.9847 13.1923 10.893C13.134 10.8013 13.009 10.7597 12.8007 10.6597Z"
                                 fill="white"
                              />
                           </svg>
                        </Link>
                     </li>
                     <li className="footer__social-link">
                        <Link
                           target="_blank"
                           to="https://t.me/rabota_vacansii_tg"
                           data-testid="footer-contact-social-link"
                        >
                           <svg
                              width="19"
                              height="15"
                              viewBox="0 0 19 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M15.4167 13.668L17.5 1.16797L7.5 8.2513"
                                 stroke="white"
                                 strokeWidth="1.66667"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                              <path
                                 d="M17.4993 1.16797L1.66602 7.41797"
                                 stroke="white"
                                 strokeWidth="1.66667"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                              <path
                                 d="M15.4167 13.6667L7.5 8.25"
                                 stroke="white"
                                 strokeWidth="1.66667"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                              <path
                                 d="M1.66602 7.41797L7.49935 8.2513"
                                 stroke="white"
                                 strokeWidth="1.66667"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                              <path
                                 d="M10 10.3333L7.5 12.8333V8.25"
                                 stroke="white"
                                 strokeWidth="1.66667"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                           </svg>
                        </Link>
                     </li>
                     <li className="footer__social-link">
                        <Link
                           target="_blank"
                           to="mailto:reclama@prvb.ru"
                           data-testid="footer-contact-social-link"
                        >
                           <svg
                              width="18"
                              height="14"
                              viewBox="0 0 18 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M2.33268 13.6654C1.87435 13.6654 1.48213 13.5023 1.15602 13.1762C0.829905 12.8501 0.666571 12.4576 0.666016 11.9987V1.9987C0.666016 1.54036 0.829349 1.14814 1.15602 0.822031C1.48268 0.49592 1.8749 0.332587 2.33268 0.332031H15.666C16.1243 0.332031 16.5168 0.495364 16.8435 0.822031C17.1702 1.1487 17.3332 1.54092 17.3327 1.9987V11.9987C17.3327 12.457 17.1696 12.8495 16.8435 13.1762C16.5174 13.5029 16.1249 13.6659 15.666 13.6654H2.33268ZM15.666 3.66536L9.43685 7.5612C9.3674 7.60286 9.29463 7.63425 9.21852 7.65536C9.1424 7.67648 9.06935 7.68675 8.99935 7.6862C8.92935 7.68564 8.85657 7.67536 8.78102 7.65536C8.70546 7.63536 8.6324 7.60398 8.56185 7.5612L2.33268 3.66536V11.9987H15.666V3.66536ZM8.99935 6.16536L15.666 1.9987H2.33268L8.99935 6.16536ZM2.33268 3.8737V2.64453V2.66536V2.65536V3.8737Z"
                                 fill="white"
                              />
                           </svg>
                        </Link>
                     </li>
                     {/* <li className="footer__social-link">
                        <Link
                           target="_blank"
                           to="#"
                           data-testid="footer-contact-social-link"
                        >
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M1.55 1.55C0.5 2.61 0.5 4.305 0.5 7.7V8.3C0.5 11.69 0.5 13.385 1.55 14.45C2.61 15.5 4.305 15.5 7.7 15.5H8.3C11.69 15.5 13.385 15.5 14.45 14.45C15.5 13.39 15.5 11.695 15.5 8.3V7.7C15.5 4.31 15.5 2.615 14.45 1.55C13.39 0.5 11.695 0.5 8.3 0.5H7.7C4.31 0.5 2.615 0.5 1.55 1.55ZM3.03 5.065H4.75C4.805 7.925 6.065 9.135 7.065 9.385V5.065H8.68V7.53C9.665 7.425 10.705 6.3 11.055 5.06H12.665C12.5336 5.70185 12.2714 6.30972 11.8946 6.84568C11.5178 7.38163 11.0345 7.83416 10.475 8.175C11.0995 8.48572 11.6511 8.92536 12.0932 9.46489C12.5353 10.0044 12.858 10.6316 13.04 11.305H11.265C10.885 10.12 9.935 9.2 8.68 9.075V11.305H8.48C5.06 11.305 3.11 8.965 3.03 5.065Z"
                                 fill="white"
                              />
                           </svg>
                        </Link>
                     </li> */}
                  </ul>
               </div>
            </div>
            <div className="footer__top-section">
               <div className="footer__title-wrapper">
                  <h3 className="footer__title">Нужен хороший трафик?</h3>
                  <Button
                     color="orange"
                     label="Обсудим детали?"
                     type="link"
                     href="/contact"
                  />
               </div>
               <div className="footer__link-contact-wrapper">
                  <ul className="footer__link-list">
                     {navLinks.map((nav) => (
                        <li
                           key={nav.name}
                           className="footer__link-list-item"
                           data-testid="footer-link-list"
                        >
                           <Link to={nav.href}>{nav.name}</Link>
                        </li>
                     ))}
                  </ul>
                  <div className="footer__contact-wrapper">
                     <h5 className="footer__contact-title">Будем на связи!</h5>
                     <ul className="footer__contact-list">
                        <li className="footer__contact-list-item">
                           <span>
                              <svg
                                 width="12"
                                 height="12"
                                 viewBox="0 0 12 12"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M0 0.749994L3.37497 0L5.24996 3.37497L3.28591 4.94527C4.132 6.54838 5.44917 7.86556 7.05463 8.71399L8.62493 6.74994L11.9999 8.62493L11.2499 11.9999H10.4999C4.70152 11.9999 0 7.29838 0 1.49999V0.749994Z"
                                    fill="#F25900"
                                 />
                              </svg>
                           </span>
                           <Link
                              to="tel:+74993808916"
                              data-testid="footer-contact-number"
                           >
                              +7 (499) 380-89-16
                           </Link>
                        </li>
                        <li className="footer__contact-list-item">
                           <span>
                              <svg
                                 width="12"
                                 height="10"
                                 viewBox="0 0 12 10"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M0 0.351562H11.9999V2.22655L5.99995 6.35151L0 2.22655V0.351562ZM0 9.35149V3.13591L5.57573 6.97026L5.99995 7.26088L6.42417 6.96791L11.9999 3.13591V9.35149H0Z"
                                    fill="#F25900"
                                 />
                              </svg>
                           </span>
                           <Link
                              to="mailto:reclama@prvb.ru"
                              data-testid="footer-contact-email"
                           >
                              reclama@prvb.ru
                           </Link>
                        </li>
                        <li
                           className="footer__contact-list-item"
                           data-testid="footer-contact-address"
                        >
                           <span>
                              <svg
                                 width="10"
                                 height="13"
                                 viewBox="0 0 10 13"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M5.13475 12.8516C5.13475 12.8516 9.63668 7.97656 9.63668 5.35156C9.63668 2.86719 7.62019 0.851562 5.13475 0.851562C2.6493 0.851562 0.632812 2.86719 0.632812 5.35156C0.632812 7.97656 5.13475 12.8516 5.13475 12.8516ZM5.13475 3.85156C5.53274 3.85156 5.91444 4.0096 6.19586 4.2909C6.47729 4.57221 6.63539 4.95374 6.63539 5.35156C6.63539 5.74939 6.47729 6.13092 6.19586 6.41222C5.91444 6.69353 5.53274 6.85156 5.13475 6.85156C4.73675 6.85156 4.35506 6.69353 4.07363 6.41222C3.79221 6.13092 3.6341 5.74939 3.6341 5.35156C3.6341 4.95374 3.79221 4.57221 4.07363 4.2909C4.35506 4.0096 4.73675 3.85156 5.13475 3.85156Z"
                                    fill="#F25900"
                                 />
                              </svg>
                           </span>
                           г. Москва, Духовской переулок, 17
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="footer__bottom-section">
               <h1 className="footer__bottom-heading">
                  Давайте работать вместе!
               </h1>
               <div className="footer__bottom-logo-wrapper">
                  <div className="footer__bottom-logo">
                     <img
                        src={logo}
                        alt="A logo of Rabotnik company"
                        data-testid="footer-logo-image"
                     />
                  </div>
                  <Link to="/privacy-policy" className="footer__bottom-text">
                     Политика конфиденциальности
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
