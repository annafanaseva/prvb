import Hero from "~/components/hero/Hero";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import MetricsBlock from "~/components/metrics-block/MetricsBlock";
import ServiceListBlock from "~/components/service-list-block/ServiceListBlock";
import OurPlatform from "~/components/our-platform/OurPlatform";
import AboutUs from "~/components/about-us-block/AboutUs";
import ContactUs from "~/components/contact-us/ContactUs";
import Faq from "~/components/faq/Faq";
import TextSlider from "~/components/text-slider/TextSlider";
import heroImage from "./hero-image.jpg";
import howWeWorkImage from "./how-we-work.jpg";
import { faqList } from "./faqList.";
import "./home.css";
import type { Route } from "./+types/home";

export const links: Route.LinksFunction = () => [
   { rel: "preload", href: heroImage, as: "image" },
];

export default function Home() {
   return (
      <div className="home-page">
         <Hero
            image={heroImage}
            showMetrics={true}
            subTitle="Помогаем вовремя закрывать вакансии "
         >
            <h1 className="hero__title">
               Агентство генерации
               <br />
               <span className="highlight">трафика кандидатов</span>
            </h1>
         </Hero>
         <HowWeWork
            sectionImage={howWeWorkImage}
            sectionTitle="Как мы работаем ?"
            sectionHeading="Как мы работаем, чтобы наполнить вашу HR-воронку:"
            sectionSubHeading="Все лиды попадают в ваш Личный кабинет или интегрируются в HRM-систему"
            sectionList={[
               "Используем 5+ каналов одновременно (таргет, контекст, рассылки: whatsapp, sms, e-mail, голосовые и чат-боты)",
               "Настраиваем персонализированные кампании под вакансию",
               "Охватываем даже тех, кто не ищет работу активно",
            ]}
            sectionBottom={{
               heading: "Мы работаем не с резюме, a с историями!",
               text: "За каждым откликом — человек. За каждой вакансией — живой бизнес. Мы соединяем одно с другим так, чтобы получался результат — честный, точный, вовремя",
            }}
         />
         <MetricsBlock />
         <ServiceListBlock />
         <OurPlatform />
         <div id="about-us">
            <AboutUs />
         </div>
         <ContactUs title="Готовы подключиться?" subtitle="Оставьте заявку" />
         <Faq faqList={faqList} />
         <TextSlider />
      </div>
   );
}
