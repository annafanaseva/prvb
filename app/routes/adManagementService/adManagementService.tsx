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
import howWeWork2Image from "./how-we-work2.jpg";
import target from "./target.png";
import contekstnaya from "./contekstnaya.png";
import posting from "./posting.png";
import type { Route } from "./+types/adManagementService";

export const links: Route.LinksFunction = () => [
   { rel: "preload", href: heroImage, as: "image" },
];

function adManagementService() {
   return (
      <div>
         {/* Meta */}
         <title>Ведение кампаний под ключ</title>
         <meta property="og:title" content="Ведение кампаний под ключ" />
         <meta
            name="description"
            content="Запускаем рекламу вакансий за 24 часа: привлекаем релевантных кандидатов через VK, Telegram, контекст и ретаргетинг."
         />
         <meta
            name="keywords"
            content="реклама вакансий, ведение рекламных кампаний, HR-реклама, продвижение вакансий, привлечение кандидатов, таргетированная реклама, контекстная реклама, подбор персонала"
         />

         {/* Content */}
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
               sectionImage={contekstnaya}
               sectionHeading={
                  <>
                     <span className="highlight">Контекстная реклама </span>
                     для подбора персонала
                  </>
               }
               sectionSubHeading="Привлекаем кандидатов, которые уже ищут работу в поисковых системах. Настраиваем рекламные кампании в поиске и рекламных сетях, оптимизируем стоимость отклика и контролируем качество заявок."
               sectionList={[
                  "Анализ вакансий и целевой аудитории",
                  "Подбор ключевых запросов",
                  "Создание объявлений",
                  "Настройка аналитики",
                  "Оптимизация ставок и бюджета",
                  "Ежедневный контроль эффективности",
               ]}
               sectionBottom={{
                  heading: "Больше релевантных откликов",
                  text: "Контекстная реклама помогает находить кандидатов, которые уже ищут работу, сокращая время закрытия вакансий и стоимость найма",
               }}
            />
            <HowWeWork
               sectionImage={target}
               sectionHeading={
                  <>
                     <span className="highlight">Таргетированная реклама </span>
                     вакансий
                  </>
               }
               sectionSubHeading="Находим потенциальных кандидатов по интересам, профессии, географии и поведению в социальных сетях."
               sectionList={[
                  "Сегментация аудитории",
                  "Создание рекламных креативов",
                  "Настройка рекламных кабинетов",
                  "Ретаргетинг",
                  "A/B тестирование объявлений",
                  "Аналитика и отчётность",
               ]}
               sectionBottom={{
                  heading: "Расширяем охват кандидатов",
                  text: "Доставляем ваши вакансии нужной аудитории в социальных сетях, привлекая специалистов, которые могли бы не увидеть объявление на job-площадках",
               }}
            />
            <HowWeWork
               sectionImage={posting}
               sectionHeading={
                  <>
                     <span className="highlight">Постинг</span> в социальных
                     сетях
                  </>
               }
               sectionSubHeading="Размещаем вакансии и HR-контент в социальных сетях для формирования постоянного потока кандидатов и усиления HR-бренда компании."
               sectionList={[
                  "Подготовка контент-плана",
                  "Оформление вакансий",
                  "Публикация постов",
                  "Создание сторис и клипов",
                  "Работа с комментариями",
                  "Анализ вовлечённости",
               ]}
               sectionBottom={{
                  heading: "Усиливайте HR-бренд компании",
                  text: "Регулярный контент помогает повысить доверие к работодателю, увеличить охват вакансий и сформировать постоянный поток заинтересованных кандидатов",
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
                     <span className="highlight">Результаты</span> наших
                     клиентов
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
      </div>
   );
}

export default adManagementService;
