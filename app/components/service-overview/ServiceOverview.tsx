import React from "react";
import { Link } from "react-router";
import "./service-overview.css";

interface ServiceOverviewProps {
   boxOneTitle?: string;
   boxTwoTitle: string;
   boxTwoText?: string;
   boxTwoList?: string[];
   boxThreeTitle?: string;
   boxThreeText?: React.ReactNode;
   boxThreeList?: string[];
   boxFourTitle?: string;
   hrefBox1?: string;
   hrefBox4?: string;
}

function ServiceOverview({
   boxOneTitle,
   boxTwoTitle,
   boxTwoText,
   boxTwoList,
   boxThreeTitle,
   boxThreeText,
   boxThreeList,
   boxFourTitle,
   hrefBox1,
   hrefBox4,
}: ServiceOverviewProps) {
   return (
      <section className="service-overview">
         <div className="service-overview__list">
            <div className="service-overview__list-row">
               <div className="service-overview__list-item box1">
                  <h3 className="service-overview__list-item-title">
                     {boxOneTitle || "Примеры кейсов"}
                  </h3>
                  <Link
                     to={hrefBox1 || "/contact"}
                     className="service-overview__list-item-link"
                  >
                     <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M12.9562 0L14 0L14.0087 12.5256H11.9211L11.9149 3.56197L2.22294 13.265L1.48409 14.0043L0.00869689 12.5256L0.747544 11.7863L10.4395 2.0876L1.47582 2.0876L1.47437 0L12.9562 0Z"
                           fill="white"
                        />
                     </svg>
                  </Link>
               </div>
               <div className="service-overview__list-item box2">
                  <h3 className="service-overview__list-item-heading">
                     {boxTwoTitle}
                  </h3>
                  {boxTwoList && (
                     <ul className="service-overview__list-item-inner-list">
                        {boxTwoList?.map((list) => (
                           <li
                              key={list}
                              className="service-overview__list-item-inner-list-item"
                           >
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
                              {list}
                           </li>
                        ))}
                     </ul>
                  )}
                  {boxTwoText && (
                     <p className="service-overview__list-item-text">
                        {boxTwoText}
                     </p>
                  )}
               </div>
            </div>
            <div className="service-overview__list-row">
               <div className="service-overview__list-item box3">
                  {boxThreeTitle && (
                     <h3 className="service-overview__list-item-heading">
                        {boxThreeTitle}
                     </h3>
                  )}
                  {boxThreeText && (
                     <p className="service-overview__list-item-text">
                        {boxThreeText}
                     </p>
                  )}
                  {boxThreeList && (
                     <ul className="service-overview__list-item-inner-list">
                        {boxThreeList?.map((list) => (
                           <li
                              key={list}
                              className="service-overview__list-item-inner-list-item"
                           >
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
                              {list}
                           </li>
                        ))}
                     </ul>
                  )}
               </div>
               <div className="service-overview__list-item box4">
                  <h3 className="service-overview__list-item-title">
                     {boxFourTitle || "Этапы работы"}
                  </h3>
                  <Link
                     to={hrefBox4 || "#work-stage"}
                     className="service-overview__list-item-link"
                  >
                     <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M12.9562 0L14 0L14.0087 12.5256H11.9211L11.9149 3.56197L2.22294 13.265L1.48409 14.0043L0.00869689 12.5256L0.747544 11.7863L10.4395 2.0876L1.47582 2.0876L1.47437 0L12.9562 0Z"
                           fill="white"
                        />
                     </svg>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
}
export default ServiceOverview;
