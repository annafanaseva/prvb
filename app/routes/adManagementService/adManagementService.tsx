import React from "react";
import Hero from "~/components/hero/Hero";
import ServiceDescription from "~/components/service-description/ServiceDescription";
import RecruitmentFunnelOffer from "~/components/recruitment-funnel-offer/RecruitmentFunnelOffer";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import ServiceOverview from "~/components/service-overview/ServiceOverview";
import WorkStage from "~/components/work-stage/WorkStage";
import PerformanceMetrics from "~/components/performance-metrics/PerformanceMetrics";
import ContactUs from "~/components/contact-us/ContactUs";
import Faq from "~/components/faq/Faq";
import { faqList } from "./faqList.";
import heroImage from "./hero-image.jpg";
import howWeWorkImage from "./how-we-work.jpg";
import howWeWork2Image from "./how-we-work2.jpg";
import type { Route } from "./+types/adManagementService";

export const links: Route.LinksFunction = () => [
   { rel: "preload", href: heroImage, as: "image" },
];

function adManagementService() {
   return (
      <div className="ad-management-service">
         <Hero
            image={heroImage}
            showMetrics={false}
            subTitle="Настраиваем и ведём рекламу, которая приводит нужных кандидатов"
         >
            <h1 className="hero__title">
               Ведение{" "}
               <span className="highlight">
                  рекламных
                  <br /> кампаний
               </span>
            </h1>
         </Hero>
         <ServiceDescription
            title={<>Больше никаких пустых откликов и слива бюджета</>}
            subTitle={
               <>
                  Мы не просто запускаем объявления Мы строим
                  <span className="highlight"> рекламную воронку, </span>
                  которая приводит{" "}
                  <span className="highlight"> релевантных кандидатов </span>
                  под ваши вакансии
               </>
            }
         />
         <RecruitmentFunnelOffer
            headingIntro="Что вы получаете?"
            heading={
               <>
                  Инструмент, который работает на{" "}
                  <span className="highlight"> результат</span>
               </>
            }
            lists={[
               "Поток откликов под каждую вакансию",
               "Упаковку вакансии под digital",
               "Ежедневную оптимизацию под конверсии",
               "Подробную аналитику и отчёты",
               "Настройку ретаргетинга / догрева",
            ]}
         />
         <HowWeWork
            sectionImage={howWeWorkImage}
            sectionHeading={
               <>
                  Контекстная реклама{" "}
                  <span className="highlight">с результатом</span>
               </>
            }
            sectionParagraph={
               <>
                  <span>
                     Первые результаты увидите уже через 1-3 дня после запуска
                     проекта
                  </span>
                  <span>
                     В команде только опытные сертифицированные специалисты
                  </span>
                  <span>
                     Объявления будут показаны только тем пользователям, которые
                     уже ищут ваш товар или услугу.
                  </span>
               </>
            }
            sectionBottom={{
               heading: "Приведём клиентов быстро",
               text: "Точечная настройка рекламы и контроль бюджета — каждый клик работает на вашу прибыль",
            }}
         />
         <ServiceOverview
            boxOneTitle="Результаты наших клиентов"
            hrefBox1="#performance-metrics"
            boxTwoTitle="Реклама в социальных сетях"
            boxTwoList={[
               "Ведение кампаний в VK, Telegram",
               "Создаём вовлекающий контент под формат платформы",
               "Подходит для повышения HR-бренда и воронки лояльности",
            ]}
            boxThreeTitle="Форматы:"
            boxThreeList={[
               "Сторис и клипы",
               "Посты с призывом откликнуться",
               "Ретаргетинг по аудитории, просмотревшей вакансию",
            ]}
         />
         <WorkStage
            list={[
               "Вы присылаете нам вакансию",
               "Мы подбираем каналы и формат",
               "Согласуем медиаплан, креатив, текст и бюджет",
               "Запускаем рекламу",
               "Генерим отклики и передаём лиды вам в систему",
            ]}
         />
         <HowWeWork
            sectionImage={howWeWork2Image}
            sectionHeading={
               <>
                  <span className="highlight">Для кого </span>подходит услуга
               </>
            }
            sectionSubHeading="Где наш подход работает лучше всего?"
            sectionList={[
               "Массовый найм в регионах",
               "Вахтовый метод",
               "Периодические всплески потребности в людях",
               "Бизнес, уставший от Avito, HH, SJ и др.",
               "Компании с минимальным внутренним HR-маркетингом",
            ]}
         />
         <PerformanceMetrics
            sectionTitle={
               <>
                  <span className="highlight">Результаты</span> наших клиентов
               </>
            }
            metrics={[
               {
                  label: "Складской персонал",
                  value: {
                     initial: "100",
                     countBy: "50",
                     countEnd: "700",
                     suffix: "+",
                  },
                  description:
                     "За 10 дней закрыли 700 позиций для логистической сети. Массовый подбор с высокой точностью",
               },
               {
                  label: "Водители",
                  value: {
                     initial: "10",
                     countBy: "10",
                     countEnd: "120",
                     suffix: "+",
                  },
                  description:
                     "Подобрали более 120  водителей за 3 недели  для логистической сети. Применили мультиканальный подход и гео-таргетинг",
               },
               {
                  label: "Ритейл",
                  value: {
                     initial: "5",
                     countBy: "1",
                     countEnd: "35",
                     suffix: "%",
                  },
                  description:
                     "Уменьшение CPL на 35% за счёт смены каналов и A/B",
               },
            ]}
         />
         <ContactUs
            title="Хотите результат?"
            subtitle="Запустим кампанию под вашу задачу за 24 часа"
         />
         <Faq faqList={faqList} />
      </div>
   );
}

export default adManagementService;
