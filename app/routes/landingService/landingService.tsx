import React from "react";
import Hero from "~/components/hero/Hero";
import ServiceDescription from "~/components/service-description/ServiceDescription";
import RecruitmentFunnelOffer from "~/components/recruitment-funnel-offer/RecruitmentFunnelOffer";
import ServiceOverview from "~/components/service-overview/ServiceOverview";
import ChannelOverview from "~/components/channel-overview/ChannelOverview";
import WorkStage from "~/components/work-stage/WorkStage";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import ContactUs from "~/components/contact-us/ContactUs";
import LandingListBlock from "~/components/landing-list-block/LandingListBlock";
import Faq from "~/components/faq/Faq";
import heroImage from "./hero-image.jpg";
import howWeWorkImage from "./how-we-work.jpg";
import { faqList } from "./faqList.";
import type { Route } from "./+types/landingService";

export const links: Route.LinksFunction = () => [
   { rel: "preload", href: heroImage, as: "image" },
];

function landingService() {
   return (
      <div className="landing-service-page">
         <Hero
            image={heroImage}
            showMetrics={false}
            subTitle="Превращаем трафик в отклики, а вакансии — в поток кандидатов"
         >
            <h1 className="hero__title">
               <span className="highlight">Создание</span> посадочных
               <br /> страниц и <span className="highlight">сайтов</span>
            </h1>
         </Hero>
         <ServiceDescription
            title={
               <>Цифровой HR без посадочной страницы — как найм без резюме</>
            }
            subTitle={
               <>
                   Мы создаём <span className="highlight">лендинги</span> под
                  вакансии, которые повышают конверсию и превращают посетителей
                  в <span className="highlight">реальных кандидатов</span>
               </>
            }
         />
         <RecruitmentFunnelOffer
            lists={[
               "Повышение конверсии с рекламы до 25–30%",
               "Готовый инструмент, не зависящий от job-сайтов",
               "Снижение стоимости лида за счёт оптимизации",
               "Все отклики сразу в ЛК / CRM",
               "Хостинг на защищённых российских серверах",
            ]}
            headingIntro="Что вы получаете?"
            heading={
               <>
                  Инструмент, который работает на
                  <span className="highlight"> результат</span>
               </>
            }
         />
         <ServiceOverview
            hrefBox1="#landings-list"
            boxTwoTitle="Что мы делаем?"
            boxTwoList={[
               "Лендинг под одну вакансию",
               "Многостраничный Landing page",
               "Сайты любого уровня",
            ]}
            boxThreeText="Мы не просто делаем сайты — мы создаем инструмент, который помогает нанимать быстрее, дешевле и эффективнее"
         />
         <ChannelOverview
            title="Особенности наших решений:"
            list={[
               "Адаптивность — отлично работают на телефонах",
               "Формы с автоотправкой и антиспамом",
               "Поддержка FSTEK/ФСБ-сертифицированных платформ",
               "Быстрая загрузка (Lighthouse > 90)",
               "Полное SEO-оформление и микроразметка",
               "Интеграции: Telegram, Bitrix24, Excel, чат-боты",
            ]}
         />
         <LandingListBlock />
         <WorkStage
            list={[
               "Анализ вакансии, аудит ЦА",
               "Структура и UX (воронка конверсии)",
               "Копирайтинг, оформление УТП",
               "Дизайн + адаптив",
               "Верстка, настройка аналитики и форм",
               "Интеграция с рекламой и CRM/HRM",
            ]}
         />
         <HowWeWork
            sectionImage={howWeWorkImage}
            sectionHeading={
               <>
                  <span className="highlight">Для кого </span>подходит услуга
               </>
            }
            sectionSubHeading="Где наш подход работает лучше всего?"
            sectionList={[
               "Вахтовый подбор",
               "Массовый набор в ритейл",
               "HR-брендинг",
            ]}
            sectionBottom={{
               heading: "Убедим соискателя откликнуться",
               text: "Правильный текст, дизайн, структура — всё работает на цель",
            }}
         />
         <ContactUs
            title="Заказать посадочную страницу"
            subtitle="Срок разработки от 1 дня"
         />
         <Faq faqList={faqList} />
      </div>
   );
}

export default landingService;
