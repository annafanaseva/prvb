import React from "react";
import { Link } from "react-router";
import {
   platforms,
   networkChannels,
   placementPrices,
   pricesUpdatedAt,
   geoPackages,
   platformIcons,
} from "./channels-list";
import "./network-channels.css";

interface NetworkChannelsProps {
   title: React.ReactNode;
   subTitle?: string;
}

const formatPrice = (value: number) => `${value.toLocaleString("ru-RU")} ₽`;

// MTV bundle: MAX + Telegram + VK, discount is applied to the sum of single posts
const periods: {
   id: "week" | "month";
   name: string;
   postsPerChannel: number;
   note: string;
   discount: string;
}[] = [
   {
      id: "week",
      name: "Неделя",
      postsPerChannel: 1,
      note: "1 пост в каждый канал, всего 3 поста",
      discount: "−30%",
   },
   {
      id: "month",
      name: "Месяц",
      postsPerChannel: 4,
      note: "4 поста в каждый канал, всего 12 постов",
      discount: "−40%",
   },
];

type Period = (typeof periods)[number];

// Original price: single posts in every channel of every geo, without any discounts
const packageBasePrice = (geo: string[], period: Period) =>
   geo.reduce((sum, city) => {
      const prices = placementPrices[city];
      if (!prices) return sum;
      const posts = platforms.reduce((total, platform) => total + prices[platform.id].post, 0);
      return sum + posts * period.postsPerChannel;
   }, 0);

// Package price: original price minus the package discount, so "13 400 ₽ −41%" is exactly 7 906 ₽
const packagePrice = (base: number, discount: number) =>
   Math.round((base * (100 - discount)) / 100);

const postsLabel = (count: number) => {
   const mod10 = count % 10;
   const mod100 = count % 100;
   const word =
      mod10 === 1 && mod100 !== 11
         ? "пост"
         : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)
           ? "поста"
           : "постов";
   return `${count} ${word}`;
};

const MtvLegend = () => (
   <>
      <b>M</b>AX + <b>T</b>elegram + <b>V</b>K
   </>
);

function NetworkChannels({ title, subTitle }: NetworkChannelsProps) {
   return (
      <section className="network-channels" id="network">
         <div className="network-channels__inner-wrapper">
            <h3 className="network-channels__title">{title}</h3>
            {subTitle && (
               <p className="network-channels__sub-title">{subTitle}</p>
            )}

            <div className="network-channels__table-wrapper">
               <table className="network-channels__table">
                  <thead>
                     <tr>
                        <th scope="col" rowSpan={2} className="network-channels__city">
                           Гео
                           <span className="network-channels__th-note">
                              нажмите на иконку,
                              <br />
                              чтобы открыть сообщество
                           </span>
                        </th>
                        {platforms.map((platform) => (
                           <th key={platform.id} scope="col" rowSpan={2}>
                              <span className="network-channels__platform">
                                 <img
                                    src={platformIcons[platform.id]}
                                    alt=""
                                    width={22}
                                    height={22}
                                    className="network-channels__platform-icon"
                                 />
                                 {platform.name}
                              </span>
                              <span className="network-channels__th-note">
                                 пост / 4 поста −30%
                              </span>
                           </th>
                        ))}
                        <th
                           scope="colgroup"
                           colSpan={2}
                           className="network-channels__bundle network-channels__bundle-head"
                        >
                           <span className="network-channels__mtv">Пакет MTV</span>
                           <span className="network-channels__th-note">
                              <MtvLegend /> сразу во всех соцсетях
                           </span>
                        </th>
                     </tr>
                     <tr>
                        {periods.map((period) => (
                           <th
                              key={period.id}
                              scope="col"
                              className="network-channels__bundle"
                           >
                              {period.name}{" "}
                              <span className="network-channels__discount">
                                 {period.discount}
                              </span>
                              <span className="network-channels__th-note">
                                 {period.note}
                              </span>
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     {networkChannels.map((item) => {
                        const prices = placementPrices[item.city];

                        return (
                           <tr key={item.city} data-testid="network-channel-row">
                              <th scope="row" className="network-channels__city">
                                 {item.city}
                                 <span className="network-channels__links">
                                    {platforms.map((platform) => (
                                       <Link
                                          key={platform.id}
                                          to={item.links[platform.id]}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="network-channels__link"
                                          aria-label={`${platform.name}: ${item.city}`}
                                          title={`Открыть ${platform.name}: ${item.city}`}
                                          data-testid="network-channel-link"
                                       >
                                          <img
                                             src={platformIcons[platform.id]}
                                             alt=""
                                             width={28}
                                             height={28}
                                          />
                                       </Link>
                                    ))}
                                 </span>
                              </th>
                              {platforms.map((platform) => (
                                 <td key={platform.id}>
                                    {prices ? formatPrice(prices[platform.id].post) : "-"}
                                    {prices && (
                                       <span className="network-channels__pack">
                                          {formatPrice(prices[platform.id].pack)}
                                       </span>
                                    )}
                                 </td>
                              ))}
                              {periods.map((period) => (
                                 <td
                                    key={period.id}
                                    className="network-channels__bundle"
                                    data-testid="network-mtv-price"
                                 >
                                    {prices ? (
                                       <>
                                          <s className="network-channels__old-price">
                                             {formatPrice(
                                                platforms.reduce(
                                                   (sum, platform) =>
                                                      sum + prices[platform.id].post,
                                                   0
                                                ) * period.postsPerChannel
                                             )}
                                          </s>
                                          {formatPrice(prices.bundle[period.id])}
                                       </>
                                    ) : (
                                       "-"
                                    )}
                                 </td>
                              ))}
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </div>

            <h4 className="network-channels__packages-title">
               Пакеты MTV на <span className="highlight">несколько гео</span>
            </h4>
            <p className="network-channels__packages-text">
               MAX + Telegram + VK сразу в нескольких гео. Скидка указана от
               стоимости отдельных постов. Чем больше гео, тем выгоднее
            </p>
            <ul className="network-channels__packages">
               {geoPackages.map((item) => (
                  <li
                     key={item.id}
                     className={[
                        "network-channels__package",
                        item.featured ? "featured" : "",
                     ].join(" ")}
                     data-testid="network-geo-package"
                  >
                     {item.featured && (
                        <span className="network-channels__package-label">
                           Выгоднее всего
                        </span>
                     )}
                     <div className="network-channels__package-head">
                        <span className="network-channels__package-name">
                           {item.name}
                        </span>
                        <span className="network-channels__discount">
                           до −
                           {Math.max(item.discount.week, item.discount.month)}%
                        </span>
                     </div>
                     <p className="network-channels__package-tagline">
                        {item.tagline}
                     </p>
                     <p className="network-channels__package-geo">
                        {item.geo.length} гео:{" "}
                        {item.featured ? "все города сети" : item.geo.join(", ")}
                     </p>
                     <div className="network-channels__package-prices">
                        {periods.map((period) => {
                           const base = packageBasePrice(item.geo, period);
                           const discount = item.discount[period.id];
                           const price = packagePrice(base, discount);

                           return (
                              <div
                                 key={period.id}
                                 className="network-channels__package-price"
                              >
                                 <span className="network-channels__package-period">
                                    {period.name}
                                    <span>
                                       {postsLabel(period.postsPerChannel)} в
                                       Telegram, ВКонтакте и MAX в каждом из{" "}
                                       {item.geo.length} гео
                                    </span>
                                    <span className="network-channels__package-total">
                                       Всего{" "}
                                       {postsLabel(
                                          period.postsPerChannel *
                                             platforms.length *
                                             item.geo.length
                                       )}
                                    </span>
                                 </span>
                                 <span className="network-channels__package-amount">
                                    <s className="network-channels__old-price">
                                       {formatPrice(base)}
                                       <span className="network-channels__package-percent">
                                          −{discount}%
                                       </span>
                                    </s>
                                    {formatPrice(price)}
                                 </span>
                              </div>
                           );
                        })}
                     </div>
                     <span className="network-channels__package-saving">
                        Экономия{" "}
                        {formatPrice(
                           packageBasePrice(item.geo, periods[1]) -
                              packagePrice(
                                 packageBasePrice(item.geo, periods[1]),
                                 item.discount.month
                              )
                        )}{" "}
                        в месяц
                     </span>
                     <a href="#contact-form" className="network-channels__package-button">
                        Выбрать пакет
                     </a>
                  </li>
               ))}
            </ul>

            <p className="network-channels__price-date">
               Цены актуальны на {pricesUpdatedAt}
            </p>
         </div>
      </section>
   );
}

export default NetworkChannels;
