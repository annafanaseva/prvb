import React from "react";
import Hero from "~/components/hero/Hero";
import ServiceDescription from "~/components/service-description/ServiceDescription";
import RecruitmentFunnelOffer from "~/components/recruitment-funnel-offer/RecruitmentFunnelOffer";
import ServiceOverview from "~/components/service-overview/ServiceOverview";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import PerformanceMetrics from "~/components/performance-metrics/PerformanceMetrics";
import TelegramChannels from "~/components/telegram-channels/TelegramChannels";
import NewClient from "~/components/new-client/NewClient";
import ContactUs from "~/components/contact-us/ContactUs";
import heroImage from "./hero-image.jpg";
import howWeWorkImage from "./how-we-work.jpg";
import howWeWork2Image from "./how-we-work2.jpg";
import type { Route } from "./+types/tgNetworkService";

export const links: Route.LinksFunction = () => [
   { rel: "preload", href: heroImage, as: "image" },
];

function tgNetworkService() {
   return (
      <div className="tg-network-service">
         <Hero
            image={heroImage}
            showMetrics={false}
            subTitle="Telegram стремительно набирает обороты как эффективный инструмент рекрутинга"
         >
            <h1 className="hero__title">
               Размещение в сети{" "}
               <span className="highlight">
                  TG
                  <br /> каналов
               </span>{" "}
               Rabotnik
            </h1>
         </Hero>
         <ServiceDescription
            title={
               <>
                  Быстрый найм – это в{" "}
                  <span className="highlight">Telegram</span>
               </>
            }
            subTitle={
               <>
                  Быстрый найм за 15 минут:{" "}
                  <span className="highlight">живая аудитория,</span> прямой
                  отклик и доступ к кандидатам{" "}
                  <span className="highlight"> по всей России</span>
               </>
            }
         />
         <RecruitmentFunnelOffer
            headingIntro="Что вы получаете?"
            heading={
               <>
                  Инструмент, который работает на{" "}
                  <span className="highlight">результат</span>
               </>
            }
            lists={[
               "Четкий таргет — мы нацеливаемся на людей, которые активно ищут работу",
               "Скорость — размещение вакансии занимает всего 10 минут, а первые отклики могут поступить уже через 15 минут.",
               "Прямой контакт: общайтесь с кандидатами напрямую в реальном времени",
               "Доступ к «пассивным» кандидатам: мы привлекаем специалистов, которые не рассылают резюме",
               "Собранная аудитория: в одном месте находятся кандидаты, ищущие работу в конкретном городе",
            ]}
         />
         <HowWeWork
            sectionImage={howWeWorkImage}
            sectionHeading={
               <>
                  Преимущество{" "}
                  <span className="highlight"> Telegram-каналов</span> Rabotnik
               </>
            }
            sectionParagraph={
               <>
                  <span>
                     Telegram-каналы позволяют быстро находить активных
                     кандидатов и получать отклики уже в первые минуты после
                     размещения вакансии.{" "}
                  </span>
                  <span>
                     Они дают прямой контакт с соискателями, привлекают
                     «пассивных» специалистов и обеспечивают точное попадание в
                     целевую аудиторию по городам
                  </span>
               </>
            }
            sectionBottom={{
               heading: "Найдем кандидатов",
               text: "Прямой контакт с соискателями и точное попадание в целевую аудиторию — каждый отклик приносит результат",
            }}
         />
         <ServiceOverview
            boxOneTitle="Наши Telegram каналы"
            hrefBox1="#telegram-channels"
            boxTwoTitle="Как всё происходит?"
            boxTwoList={[
               "Создадим продающий текст",
               "Подготовим цепляющий креатив",
               "Разместим пост",
            ]}
            boxThreeText="Используйте возможности Telegram для эффективного подбора персонала с помощью Rabotnik!"
            boxFourTitle="Наши результаты"
            hrefBox4="#performance-metrics"
         />
         <HowWeWork
            sectionTitle="Кому мы помогаем ?"
            sectionImage={howWeWork2Image}
            sectionHeading={
               <>
                  <span className="highlight">Для кого </span>подходит услуга
               </>
            }
            sectionSubHeading="Где наш подход работает лучше всего?"
            sectionList={[
               "Крупные компании с массовым набором персонала",
               "HR и рекрутеры с высокой потребностью в откликах",
               "Малый и средний бизнес, ищущий быстрый найм",
               "Компании с разъездным или удалённым персоналом",
            ]}
         />
         <PerformanceMetrics
            sectionTitle={
               <>
                  Наши <span className="highlight">результаты</span>
               </>
            }
            metrics={[
               {
                  label: "Аудитория каналов",
                  value: {
                     initial: "1000",
                     countBy: "100",
                     countEnd: "25000",
                     suffix: "+",
                  },
                  description: "Подписчиков",
               },
               {
                  label: "Просмотры",
                  value: {
                     initial: "5",
                     countBy: "1",
                     countEnd: "50",
                     suffix: "%",
                  },
                  description: "От количества подписчиков ",
               },
               {
                  label: "Отклики",
                  value: {
                     initial: "1",
                     countBy: "1",
                     countEnd: "5",
                     suffix: "%",
                  },
                  description: "От количества подписчиков ",
               },
            ]}
         />
         <TelegramChannels />
         <NewClient
            title={
               <>
                  Для новых клиентов первый пост на канале
                  <span className="highlight"> - бесплатно!</span>
               </>
            }
            subTitle={
               <>
                  Ждем ваши посты с пометкой -{" "}
                  <span className="highlight">
                     новый клиент с сайта PRVB.ru
                  </span>
               </>
            }
         />
         <ContactUs title="Хотите результат?" subtitle="Оставьте заявку" />
      </div>
   );
}

export default tgNetworkService;
