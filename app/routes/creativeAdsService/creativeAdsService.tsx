import React from "react";
import Hero from "~/components/hero/Hero";
import ServiceDescription from "~/components/service-description/ServiceDescription";
import RecruitmentFunnelOffer from "~/components/recruitment-funnel-offer/RecruitmentFunnelOffer";
import CreativeSlider from "~/components/creativeSlider/CreativeSlider";
import ChannelOverview from "~/components/channel-overview/ChannelOverview";
import WorkStage from "~/components/work-stage/WorkStage";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import ContactUs from "~/components/contact-us/ContactUs";
import Faq from "~/components/faq/Faq";
import heroImage from "./hero-image.jpg";
import howWeWorkImage from "./how-we-work.jpg";
import { faqList } from "./faqList.";
import "./creative-ads.css";
import type { Route } from "./+types/creativeAdsService";

export const links: Route.LinksFunction = () => [
   { rel: "preload", href: heroImage, as: "image" },
];

function creativeAdsService() {
   return (
      <div className="creative-ads-service">
         <Hero
            image={heroImage}
            showMetrics={false}
            subTitle="Превращаем трафик в отклики, а вакансии — в поток кандидатов"
         >
            <h1 className="hero__title">
               Разработка креативных
               <br /> концепций и{" "}
               <span className="highlight">
                  рекламных
                  <br /> материалов
               </span>
            </h1>
         </Hero>
         <ServiceDescription
            title={
               <>
                  Кандидат
                  <span className="highlight"> реагирует на эмоцию,</span>{" "}
                  оформление и смысл
               </>
            }
            subTitle={
               <>
                  Мы <span className="highlight">разрабатываем креатив,</span>{" "}
                  который выделяет вас среди 100 объявлений и
                  <span className="highlight"> превращает внимание</span> в
                  отклик
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
               "Внимание аудитории с первых секунд",
               "Целевое сообщение — без лишнего текста",
               "Повышение CTR, снижение стоимости лида",
               "Конкурентное преимущество — вас запоминают",
               "Универсальные материалы под все каналы",
            ]}
         />
         <CreativeSlider />
         <ChannelOverview
            title="Что входит в услугу:"
            list={[
               "Креативная концепция",
               "Дизайн баннеров для соцсетей и таргета",
               " Адаптации под форматы: сторис, лендинг, баннеры, офлайн",
               "Тексты под рекламу: кратко, по делу, с УТП",
               "Сценарии и монтаж видео-объявлений",
               "Офлайн-носители: листовки, постеры, транспорт, ТВ, наружная реклама",
            ]}
         />
         <WorkStage
            list={[
               "Анализ вакансии, аудитории и каналов",
               "Генерация идей",
               "Разработка визуальных и текстовых решений",
               "Адаптация под форматы / платформы",
               "Согласование и передача готовых материалов",
               "Тестируем гипотезы",
            ]}
         />
         <HowWeWork
            sectionImage={howWeWorkImage}
            sectionHeading={
               <span className="highlight">Почему это важно?</span>
            }
            sectionSubHeading="Где наш подход работает лучше всего?"
            sectionList={[
               "Кандидаты не читают — они смотрят",
               "Выделиться среди конкурентов → больше внимания",
               "Правильный визуал + сообщение → выше конверсия",
               "Один креатив — разные платформы (VK, Telegram, YouTube, Авито и др.)",
            ]}
            sectionBottom={{
               heading: "Заставим кандидата сказать «Хочу у вас работать!»",
               text: "От идеи до отклика — каждая деталь нацелена на конверсию",
            }}
         />
         <section className="creative-ads-service__benefit-text-wrapper">
            <h3 className="creative-ads-service__benefit-heading">
               Правильный креатив =
               <span className="highlight"> эффективная реклама</span>
            </h3>
            <p className="creative-ads-service__benefit-text">
               <span className="space"></span>
               Мы создаём материалы, которые{" "}
               <span className="highlight">
                  цепляют, объясняют и побуждают
               </span>{" "}
               к действию
            </p>
         </section>
         <ContactUs
            title="Хотите заказать креатив?"
            subtitle="Мы разработаем креатив, который работает на найм, а не на лайк"
         />
         <Faq faqList={faqList} />
      </div>
   );
}

export default creativeAdsService;
