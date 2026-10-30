import { Fragment } from "react";
import { platforms, platformIcons } from "../network-channels/channels-list";
import "./network-platforms.css";

interface NetworkPlatformsProps {
   label: string;
   href: string;
}

// Social networks included in the Rabotnik network, shown as an accent next to a page title
function NetworkPlatforms({ label, href }: NetworkPlatformsProps) {
   return (
      <div className="network-platforms">
         <span className="network-platforms__label">{label}</span>
         <ul className="network-platforms__list">
            {platforms.map((platform) => (
               <li key={platform.id}>
                  <a
                     href={href}
                     className="network-platforms__item"
                     data-testid="network-platform"
                  >
                     <img
                        src={platformIcons[platform.id]}
                        alt=""
                        width={24}
                        height={24}
                        className="network-platforms__icon"
                     />
                     {platform.name}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
}

// Inline variant for running text: "[icon] Telegram + [icon] ВКонтакте + [icon] MAX"
export function NetworkPlatformsInline() {
   return (
      <>
         {platforms.map((platform, index) => (
            <Fragment key={platform.id}>
               {index > 0 && " + "}
               <span className="network-platforms__inline" data-testid="network-platform-inline">
                  <img
                     src={platformIcons[platform.id]}
                     alt=""
                     width={20}
                     height={20}
                     className="network-platforms__inline-icon"
                  />
                  {platform.name}
               </span>
            </Fragment>
         ))}
      </>
   );
}

export default NetworkPlatforms;
