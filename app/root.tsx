import { useEffect } from "react";
import {
   useLocation,
   isRouteErrorResponse,
   Links,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./global.css";

// Global register gsap animation for all components and pages
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const links: Route.LinksFunction = () => [
   { rel: "preconnect", href: "https://fonts.googleapis.com" },
   {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
   },
   {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
   },
];

export function meta({}: Route.MetaArgs) {
   return [
      { title: "Правильный выбор" },
      {
         name: "description",
         content:
            "Настраиваем рекламу вакансий, продвигаем карьерный сайт и помогаем быстро находить нужных специалистов. Результат — поток релевантных лидов",
      },
   ];
}
export function Layout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="ru">
         <head>
            <meta charSet="utf-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <meta name="yandex-verification" content="2507a8803572ae5d" />
            <Meta />
            <Links />
         </head>
         <body>
            {children}
            {/* Yandex.Metrika counter */}
            <YandexMetrika />
            {/* /Yandex.Metrika counter */}
            <ScrollRestoration />
            <Scripts />
         </body>
      </html>
   );
}

const YM_ID = 101444747;

function YandexMetrika() {
   const location = useLocation();

   useEffect(() => {
      if (typeof window === "undefined") return;

      if ((window as any).ym) return;

      (function (m: any, e: any, t: any, r: any, i: any, k?: any, a?: any) {
         m[i] =
            m[i] ||
            function () {
               (m[i].a = m[i].a || []).push(arguments);
            };
         m[i].l = Date.now();
         for (let j = 0; j < e.scripts.length; j++) {
            if (e.scripts[j].src === r) return;
         }
         k = e.createElement(t);
         a = e.getElementsByTagName(t)[0];
         k.async = 1;
         k.src = r;
         a.parentNode.insertBefore(k, a);
      })(
         window,
         document,
         "script",
         "https://mc.yandex.ru/metrika/tag.js",
         "ym"
      );

      (window as any).ym(YM_ID, "init", {
         webvisor: true,
         clickmap: true,
         accurateTrackBounce: true,
         trackLinks: true,
      });
   }, []);

   useEffect(() => {
      if (typeof window === "undefined") return;
      const ym = (window as any).ym;
      if (!ym) return;

      const url = location.pathname + location.search + location.hash;
      ym(YM_ID, "hit", url, { referer: document.referrer });
   }, [location]);

   return (
      <noscript>
         <div>
            <img
               src={`https://mc.yandex.ru/watch/${YM_ID}`}
               style={{ position: "absolute", left: "-9999px" }}
               alt=""
            />
         </div>
      </noscript>
   );
}

export default function App() {
   return (
      <>
         <Navigation />
         <Outlet />
         <Footer />
      </>
   );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
   let message = "Oops!";
   let details = "An unexpected error occurred.";
   let stack: string | undefined;
   if (isRouteErrorResponse(error)) {
      message = error.status === 404 ? "404" : "Error";
      details =
         error.status === 404
            ? "The requested page could not be found."
            : error.statusText || details;
   } else if (import.meta.env.DEV && error && error instanceof Error) {
      details = error.message;
      stack = error.stack;
   }
   return (
      <main className="">
         <h1>{message}</h1>
         <p>{details}</p>
         {stack && (
            <pre className="">
               <code>{stack}</code>
            </pre>
         )}
      </main>
   );
}
