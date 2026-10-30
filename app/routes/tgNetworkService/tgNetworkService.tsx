import React from "react";
import Hero from "~/components/hero/Hero";
import ServiceDescription from "~/components/service-description/ServiceDescription";
import RecruitmentFunnelOffer from "~/components/recruitment-funnel-offer/RecruitmentFunnelOffer";
import ServiceOverview from "~/components/service-overview/ServiceOverview";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import PerformanceMetrics from "~/components/performance-metrics/PerformanceMetrics";
import NetworkChannels from "~/components/network-channels/NetworkChannels";
import NetworkPlatforms, {
   NetworkPlatformsInline,
} from "~/components/network-platforms/NetworkPlatforms";
import NewClient from "~/components/new-client/NewClient";
import ContactUs from "~/components/contact-us/ContactUs";
import heroImage from "./hero-image.jpg";
import howWeWorkImage from "./how-we-work.jpg";
import howWeWork2Image from "./how-we-work2.jpg";
import type { Route } from "./+types/tgNetworkService";
import JsonLd from "~/components/json-ld/JsonLd";
import { serviceJsonLd } from "~/seo/json-ld";

export const links: Route.LinksFunction = () => [
   { rel: "preload", href: heroImage, as: "image" },
];

function tgNetworkService() {
   return (
      <div>
         {/* Meta */}
         <title>
            Размещение вакансий в Telegram, ВКонтакте и MAX | сеть Rabotnik
         </title>
         <meta
            property="og:title"
            content="Размещение вакансий в Telegram, ВКонтакте и MAX | сеть Rabotnik"
         />
         <meta
            name="description"
            content="Размещаем вакансии в городских сообществах Rabotnik в Telegram, ВКонтакте и MAX. Охват соискателей по всей России, прямые отклики и точное попадание в аудиторию нужного города."
         />
         <meta
            name="keywords"
            content="размещение вакансий, вакансии в Telegram, вакансии ВКонтакте, вакансии в MAX, сеть Rabotnik, сообщества с вакансиями, подбор персонала в соцсетях, реклама вакансий, поиск сотрудников"
         />
         <JsonLd data={serviceJsonLd("/rabotnik-network")} />
         {/* Content */}
         <div className="tg-network-service">
            <Hero
               image={heroImage}
               showMetrics={false}
               subTitle="Больше площадок, больше охват, больше кандидатов"
               subTitleExtra={
                  <NetworkPlatforms label="Сеть Rabotnik:" href="#network" />
               }
            >
               <h1 className="hero__title">
                  Размещение вакансий
                  <br />в сети <span className="highlight">Rabotnik</span>
               </h1>
            </Hero>
            <ServiceDescription
               title={
                  <>
                     Быстрый найм с <span className="highlight">Rabotnik</span>
                  </>
               }
               subTitle={
                  <>
                     Размещаем вакансию там, где есть ваши кандидаты:{" "}
                     <span className="highlight">
                        сразу в нескольких соцсетях
                     </span>{" "}
                     и в городских сообществах{" "}
                     <span className="highlight">по всей России</span>
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
                  "Четкий таргет: размещаем вакансии в сообществах с аудиторией конкретного города или региона",
                  "Прямой контакт: кандидаты сразу видят предложение работодателя и могут быстро связаться с вами",
                  "Дополнительный охват: Telegram, ВКонтакте и MAX позволяют охватить разные сегменты аудитории и не зависеть от одной площадки",
                  "Доступ к пассивным кандидатам: вашу вакансию увидят не только те, кто прямо сейчас просматривает сайты поиска работы",
                  "Городская аудитория: отдельные сообщества Rabotnik помогают показывать вакансии кандидатам именно в нужном регионе",
               ]}
            />
            <HowWeWork
               sectionImage={howWeWorkImage}
               sectionHeading={
                  <>
                     Преимущество <span className="highlight">сети Rabotnik</span>
                  </>
               }
               sectionParagraph={
                  <>
                     <span>
                        Одна вакансия, несколько каналов привлечения
                        кандидатов.
                     </span>
                     <span>
                        Сеть Rabotnik объединяет городские сообщества с
                        аудиторией соискателей по всей России. Используем
                        Telegram, ВКонтакте и MAX, чтобы увеличить охват
                        вакансии и встретиться с кандидатом на той площадке,
                        которой он пользуется каждый день.
                     </span>
                  </>
               }
               sectionBottom={{
                  heading: "Найдем кандидатов",
                  text: "Больше точек контакта с соискателями и точное попадание в аудиторию нужного города",
                  showIcon: false,
               }}
            />
            <ServiceOverview
               boxOneTitle="Наша сеть"
               hrefBox1="#network"
               boxTwoTitle="Как всё происходит?"
               boxTwoList={[
                  "Вы передаете нам вакансию",
                  "Создаем продающий текст",
                  "Подготавливаем цепляющий креатив",
                  "Подбираем подходящие площадки и города",
                  "Размещаем вакансию в сети Rabotnik",
               ]}
               boxThreeText={
                  <>
                     Используйте сразу несколько каналов привлечения
                     кандидатов: <NetworkPlatformsInline />
                  </>
               }
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
               sectionList={[
                  {
                     title: "Крупным компаниям с массовым набором персонала",
                     text: "Когда требуется регулярно привлекать большое количество кандидатов",
                  },
                  {
                     title: "HR и рекрутерам с высокой потребностью в откликах",
                     text: "Дополнительный источник кандидатов к классическим job-сайтам",
                  },
                  {
                     title: "Малому и среднему бизнесу",
                     text: "Когда сотрудника нужно найти быстро и без сложной рекламной кампании",
                  },
                  {
                     title: "Компаниям с разъездным или удаленным персоналом",
                     text: "Курьеры, склады, ритейл, доставка, офис, подработка, удаленная работа и другие направления",
                  },
               ]}
            />
            <NetworkChannels
               title={
                  <>
                     Площадки <span className="highlight">и цены</span>
                  </>
               }
               subTitle="Сообщества Rabotnik в крупнейших городах России. Стоимость размещения одной вакансии в каждой соцсети и пакетом сразу во всех"
            />
            <PerformanceMetrics
               sectionTitle={
                  <>
                     Наши <span className="highlight">результаты</span>
                  </>
               }
               metrics={[
                  {
                     label: "Аудитория сети",
                     value: {
                        initial: "1000",
                        countBy: "100",
                        countEnd: "55000",
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
                     description: "От количества подписчиков",
                  },
                  {
                     label: "Отклики",
                     value: {
                        initial: "1",
                        countBy: "1",
                        countEnd: "5",
                        suffix: "%",
                     },
                     description: "От количества подписчиков",
                  },
               ]}
            />
            <NewClient
               title={
                  <>
                     Для новых клиентов первый пост{" "}
                     <span className="highlight">бесплатно!</span>
                  </>
               }
               subTitle="Попробуйте размещение в сети Rabotnik и оцените результат"
            />
            <ContactUs title="Хотите результат?" subtitle="Оставьте заявку" />
         </div>
      </div>
   );
}

export default tgNetworkService;
