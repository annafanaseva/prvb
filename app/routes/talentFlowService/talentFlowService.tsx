import Hero from "~/components/hero/Hero";
import ServiceDescription from "~/components/service-description/ServiceDescription";
import RecruitmentFunnelOffer from "~/components/recruitment-funnel-offer/RecruitmentFunnelOffer";
import ServiceOverview from "~/components/service-overview/ServiceOverview";
import ChannelOverview from "~/components/channel-overview/ChannelOverview";
import WorkStage from "~/components/work-stage/WorkStage";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import PerformanceMetrics from "~/components/performance-metrics/PerformanceMetrics";
import ContactUs from "~/components/contact-us/ContactUs";
import heroImage from "./hero-image.png";
import howWeWorkImage from "./how-we-work.png";
import "./talent-flow-service.css";
import type { Route } from "./+types/talentFlowService";

export const links: Route.LinksFunction = () => [
   { rel: "preload", href: heroImage, as: "image" },
];

const recruitmentFunnelList = [
   "Релевантные лиды по согласованным критериям",
   "Экономию времени рекрутера",
   "Гибкий подход: тестируем, масштабируем, оптимизируем",
   "Вы платите только за валидных кандидатов",
];
const channelOverviewList = [
   "Реклама в транспорте, баннеры, offline-носители",
   "SMS и голосовые рассылки",
   "Таргетированная реклама (ВКонтакте, myTarget, Telegram Ads)",
   "Прямые интеграции с HRM-платформами",
   "Контекстная реклама (Яндекс.Директ, Google Ads при необходимости)",
   "Чат-боты и автообзвон",
];
const workStages = [
   "Анализ вакансии, аудит ЦА",
   "Структура и UX (воронка конверсии)",
   "Копирайтинг, оформление УТП",
   "Дизайн + адаптив",
   "Верстка, настройка аналитики и форм",
   "Интеграция с рекламой и CRM/HRM",
];

export default function talentFlowService() {
   return (
      <div className="home-page">
         <Hero
            image={heroImage}
            showMetrics={false}
            subTitle="Приводим целевых кандидатов на ваши вакансии. Без шума, без воды — только валидные отклики."
         >
            <h1 className="hero__title">
               Генерация{" "}
               <span className="highlight">
                  кадрового
                  <br /> трафика
               </span>
            </h1>
         </Hero>
         <ServiceDescription
            title={
               <>
                  Мы не размещаем объявления — мы строим
                  <span className="highlight"> digital-воронки </span>найма
               </>
            }
            subTitle={
               <>
                  Мы знаем, как привлечь даже тех, кто сейчас не в поисках или
                  работает у ваших конкурентов
               </>
            }
         />
         <RecruitmentFunnelOffer
            lists={recruitmentFunnelList}
            headingIntro="Что вы получаете?"
            heading={
               <>
                  Полная воронка под ключ — от
                  <span className="highlight"> лида</span> до
                  <span className="highlight"> трудоустройства</span>
               </>
            }
         />
         <ServiceOverview
            hrefBox1="#performance-metrics"
            boxTwoTitle="Что такое генерация кадрового трафика?"
            boxTwoText="Это не просто реклама вакансии. Это система привлечения кандидатов по заданным критериям через digital-каналы, автоматизацию и обработку откликов"
            boxThreeText="Мы настраиваем поток валидных лидов с максимальным охватом и персонализацией под специфику вашего бизнеса"
         />
         <ChannelOverview
            title="Используемые каналы:"
            list={channelOverviewList}
         />
         <WorkStage list={workStages} />
         <HowWeWork
            sectionImage={howWeWorkImage}
            sectionHeading={
               <>
                  <span className="highlight">Для кого </span>подходит услуга
               </>
            }
            sectionSubHeading="Где наш подход работает лучше всего?"
            sectionList={[
               "Массовый подбор: логистика, ритейл, производство, склады",
               "Региональные и вахтовые вакансии",
               "Высокая текучесть и дефицитные позиции",
               "Низкая эффективность с Avito, HH и др.",
               "Нужен результат, а не «много просмотров»",
            ]}
            sectionBottom={{
               heading: "Там, где сложно — приходим мы!",
               text: "Массовый подбор, регионы, текучка. Ищем не просмотры, а людей.",
            }}
         />
         <PerformanceMetrics
            sectionTitle={
               <>
                  Наши <span className="highlight">кейсы</span>
               </>
            }
            metrics={[
               {
                  label: "Складские рабочие",
                  value: {
                     initial: "100",
                     countBy: "50",
                     countEnd: "1200",
                     suffix: "+",
                  },
                  description:
                     "За 3 недели закрыли 1200 позиций в 4 регионах для логистической сети. Массовый подбор с высокой точностью",
               },
               {
                  label: "Водители вахтой",
                  value: {
                     initial: "100",
                     countBy: "10",
                     countEnd: "500",
                     suffix: "+",
                  },
                  description:
                     "Подобрали более 500 вахтовых водителей за 45 дней. Применили мультиканальный подход и гео-таргетинг",
               },
               {
                  label: "Ритейл",
                  value: {
                     initial: "10",
                     countBy: "5",
                     countEnd: "85",
                     suffix: "%",
                  },
                  description:
                     "Достигли 85% релевантных откликов при массовом подборе в федеральную сеть ритейла — без «мусорного трафика»",
               },
            ]}
         />
         <ContactUs
            title="Оставьте заявку"
            subtitle="Узнайте, как мы закроем вашу вакансию через digital-маркетинг"
         />
      </div>
   );
}
