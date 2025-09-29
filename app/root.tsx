import {
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
      { title: "Rabotnik" },
      { name: "description", content: "Welcome to our landing page" },
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
            <ScrollRestoration />
            <Scripts />
         </body>
      </html>
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
