import React from "react";
import Hero from "~/components/hero/Hero";
import ServiceDescription from "~/components/service-description/ServiceDescription";
import RecruitmentFunnelOffer from "~/components/recruitment-funnel-offer/RecruitmentFunnelOffer";
import ServiceOverview from "~/components/service-overview/ServiceOverview";
import ChannelOverview from "~/components/channel-overview/ChannelOverview";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import WorkStage from "~/components/work-stage/WorkStage";
import WorkFormat from "~/components/work-format/WorkFormat";
import ContactUs from "~/components/contact-us/ContactUs";
import heroImage from "./hero-image.jpg";
import howWeWorkImage from "./how-we-work.jpg";
import type { Route } from "./+types/leadProcessingService";

export const links: Route.LinksFunction = () => [
   { rel: "preload", href: heroImage, as: "image" },
];

function leadProcessingService() {
   return (
      <div className="lead-processing-page">
         <Hero
            image={heroImage}
            showMetrics={false}
            subTitle="Прозвон анкет — быстро и профессионально"
         >
            <h1 className="hero__title">
               Обработка лидов
               <br /> через
               <span className="highlight"> call-центр</span>
            </h1>
         </Hero>
         <ServiceDescription
            title={
               <>
                  Каждый отклик на вакансию —{" "}
                  <span className="highlight">это шанс</span>
               </>
            }
            subTitle={
               <>
                  Мы не даём лидам «остыть»  Мы создаём и отрабатываем их в
                  <span className="highlight"> первые 15 минут</span>, превращая
                  <span className="highlight"> заявки в собеседования</span>
               </>
            }
         />
         <ServiceOverview
            boxOneTitle="Форматы работы"
            hrefBox1="#work-format"
            boxTwoTitle="Что такое ресечинг?"
            boxTwoText="Это оперативная первичная валидация кандидатов"
            boxThreeList={[
               "Звонок / мессенджер в течение 15 минут после заявки",
               "Уточнение мотивации, готовности, требований",
               "Отсеивание нерелевантных откликов",
               "Передача верифицированных лидов в ваш отдел подбора",
            ]}
         />
         <HowWeWork
            sectionImage={howWeWorkImage}
            sectionHeading={
               <span className="highlight">Зачем нужен ресечинг?</span>
            }
            sectionSubHeading="Где наш подход работает лучше всего?"
            sectionList={[
               "Снижает количество нецелевых откликов в HR",
               "Ускоряет работу отдела подбора",
               "Повышает конверсию «лид → сотрудник»",
               "Создаёт позитивный опыт кандидата",
               "Позволяет вовремя «догреть» сомневающихся",
            ]}
         />
         <ChannelOverview
            title="Что мы проверяем?"
            list={[
               "Ключевые параметры по вакансии",
               "Мотивация работать",
               "Интерес к вакансии",
               "Регион и график",
               "Готовность к собеседованию или выезду (вахта, регионы)",
               "Контактность и адекватность",
            ]}
         />
         <WorkStage
            list={[
               "Получаем заявки с лендингов / вашей CRM",
               "Звоним кандидату в течение 15–30 минут",
               "Уточняем ключевые параметры",
               "Презентуем компанию",
               "Приглашаем на собеседование",
            ]}
         />
         <RecruitmentFunnelOffer
            headingIntro="Инструменты"
            heading={
               <>
                  <span className="highlight">Технологии,</span> которые
                  помогают нам
                  <span className="highlight"> закрывать вакансии</span>
               </>
            }
            lists={[
               "Автообзвон",
               "Ручной обзвон (сценарии под вакансию)",
               "Telegram / WhatsApp-боты",
               "Передача информации в CRM, Excel или Личный Кабинет",
               "Интеграции с платформами (Bitrix24, Skillaz, AMO CRM и т.п)",
            ]}
         />
         <WorkFormat />
         <ContactUs
            title="Заказать посадочную страницу"
            subtitle="Оставьте заявку"
         />
      </div>
   );
}

export default leadProcessingService;
