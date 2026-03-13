// CaseAvitoAds.tsx
import Hero from "~/components/hero/Hero";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import ContactUs from "~/components/contact-us/ContactUs";
import ServiceDescription from "~/components/service-description/ServiceDescription";
import ExpertComment from "~/components/expert-comment/expertComment";

import heroImage from "./hero-image.png";
import leadGeneration from "./lead-generation.jpg";
import avitoPro from "./avito-pro.png";
import avitoAds from "./avito-ads.jpg";
import expertImg from "./expert.jpg";

import "./сase-avito-ads.css";

function CaseAvitoAds() {
   return (
      <div className="case">
         <Hero
            image={heroImage}
            showMetrics={false}
            subTitle="Avito Pro и Avito Ads в массовом рекрутменте: в чем разница и что эффективнее?"
         >
            <h1 className="hero__title">
               <span className="highlight">Avito Pro и Avito Ads</span>
            </h1>
         </Hero>

         <HowWeWork
            sectionImage={leadGeneration}
            sectionHeading={
               <>
                  Платформа Avito сегодня{" "}
                  <span className="highlight">
                     один из ключевых источников кандидатов для массового
                     рекрутмента:
                  </span>{" "}
                  розница, логистика, склады, производство, сервис.
               </>
            }
            sectionParagraph={
               <>
                  <span>
                     Но внутри Avito есть два принципиально разных инструмента:
                     <br />
                     <br />
                  </span>
               </>
            }
            sectionList={[
               "Avito Pro — управление вакансиями",
               "Avito Ads — таргетированная реклама",
            ]}
         />

         <div className="intro">
            <h5 className="intro__text">
               <span className="intro__space" />
               <span className="highlight">
                  Разберем разницу именно с точки зрения массового подбора!
               </span>
            </h5>
         </div>

         {/* Avito Pro */}
         <section className="feat">
            <div className="feat__wrap">
               <div className="feat__media">
                  <img
                     className="feat__img"
                     src={avitoPro}
                     alt="Avito Pro"
                     loading="lazy"
                  />
               </div>

               <div className="feat__content">
                  <h2 className="feat__title">
                     <span className="highlight">Avito Pro</span> — управление
                     размещениями
                  </h2>

                  <p className="feat__lead">
                     Avito Pro — это профессиональный кабинет работодателя. Он
                     позволяет:
                  </p>

                  <ul className="feat__list">
                     <li className="feat__item">
                        <CheckIcon />
                        Массово размещать вакансии
                     </li>
                     <li className="feat__item">
                        <CheckIcon />
                        Управлять объявлениями
                     </li>
                     <li className="feat__item">
                        <CheckIcon />
                        Получать отклики
                     </li>
                     <li className="feat__item">
                        <CheckIcon />
                        Видеть базовую аналитику
                     </li>
                     <li className="feat__item">
                        <CheckIcon />
                        Работать с несколькими регионами
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         <div className="intro">
            <h5 className="intro__text">
               <span className="intro__space" />
               <span className="highlight">
                  Для массового рекрутмента это база — без него сложно управлять
                  десятками и сотнями вакансий.
               </span>
            </h5>
         </div>

         {/* Поисковый спрос */}
         <section className="note">
            <div className="note__wrap">
               <div className="note__body">
                  <div className="note__text">
                     <h4 className="note__title">
                        Однако важно понимать{" "}
                        <span className="highlight">механику</span>
                     </h4>

                     <p className="note__subtitle">
                        Вакансии показываются в поиске, когда кандидат вводит
                        соответствующий запрос.
                     </p>

                     <div className="note__rule">
                        <span className="note__ruleIcon">📌</span>
                        <p className="note__p">
                           То есть работает принцип:
                           <span className="note__quote">
                              «Есть поисковый спрос — есть показы».
                           </span>
                        </p>
                     </div>

                     <ul className="note__list">
                        <li className="note__li">
                           <CheckIcon />
                           Если в конкретном регионе спрос низкий, охват будет
                           ограничен.
                        </li>
                        <li className="note__li">
                           <CheckIcon />
                           По редким или узким должностям количество показов
                           тоже будет ниже.
                        </li>
                     </ul>
                  </div>

                  <ExpertComment
                     sectionTitle="Комментарий эксперта"
                     sectionImage={expertImg}
                     alt="Анна Карабаджак"
                     comment="«Avito Pro отлично решает операционные задачи — управление объемом вакансий, автоматизация. Но он не расширяет аудиторию сам по себе. Он работает внутри существующего спроса»."
                     name="— Анна Карабаджак, специалист по таргетированной рекламе"
                  />
               </div>
            </div>
         </section>

         {/* Avito Ads */}
         <section className="feat">
            <div className="feat__wrap">
               <div className="feat__media">
                  <img
                     className="feat__img"
                     src={avitoAds}
                     alt="Avito Ads"
                     loading="lazy"
                  />
               </div>

               <div className="feat__content">
                  <h2 className="feat__title">
                     <span className="highlight">Avito Ads</span> — работа с
                     аудиторией кандидатов
                  </h2>

                  <p className="feat__lead">
                     Avito Ads — это рекламный инструмент внутри экосистемы
                     Avito. В отличие от Pro, он позволяет:
                  </p>

                  <ul className="feat__list">
                     <li className="feat__item">
                        <CheckIcon />
                        Настраивать показы по аудиториям, таргетироваться по
                        географии
                     </li>
                     <li className="feat__item">
                        <CheckIcon />
                        Работать с интересами и поведением пользователей
                     </li>
                     <li className="feat__item">
                        <CheckIcon />
                        Запускать ретаргетинг
                     </li>
                     <li className="feat__item">
                        <CheckIcon />
                        Масштабировать охват
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         {/* Другая логика */}
         <section className="note">
            <div className="note__wrap">
               <div className="note__body">
                  <div className="note__text">
                     <h4 className="note__title">
                        Здесь <span className="highlight">логика другая</span>
                     </h4>

                     <p className="note__p">
                        <span className="note__quote">
                           «Есть аудитория — мы её находим и показываем
                           вакансию».
                        </span>
                     </p>

                     <p className="note__subtitle">
                        Это особенно важно в массовом подборе, где:
                     </p>

                     <ul className="note__list">
                        <li className="note__li">
                           <CheckIcon />
                           часть кандидатов — пассивные
                        </li>
                        <li className="note__li">
                           <CheckIcon />
                           нужно быстро закрывать объём
                        </li>
                        <li className="note__li">
                           <CheckIcon />
                           высокая конкуренция за линейный персонал
                        </li>
                     </ul>
                  </div>

                  <ExpertComment
                     sectionTitle="Комментарий эксперта"
                     sectionImage={expertImg}
                     alt="Анна Карабаджак"
                     comment="«Через Avito Ads мы можем выйти за рамки поисковой выдачи. Это позволяет привлекать не только тех, кто уже ищет работу, но и тех, кто готов рассмотреть предложение при правильной подаче»."
                     name="— Анна Карабаджак, специалист по таргетированной рекламе"
                  />
               </div>
            </div>
         </section>

         {/* Сравнение */}
         <section className="note">
            <div className="note__wrap">
               <div className="cmp">
                  <h3 className="cmp__title">
                     Главное различие на примере Avito
                  </h3>

                  <div className="cmp__grid">
                     <article className="cmp__card cmp__card--pro">
                        <div className="cmp__head">
                           <span className="cmp__badge">Поиск</span>
                           <h4 className="cmp__name">Avito Pro</h4>
                        </div>

                        <ul className="cmp__list">
                           <li className="cmp__item">
                              <span className="cmp__icon">🔎</span>
                              Работа в поисковой выдаче
                           </li>
                           <li className="cmp__item">
                              <span className="cmp__icon">📈</span>
                              Реакция на существующий спрос
                           </li>
                           <li className="cmp__item">
                              <span className="cmp__icon">↔️</span>
                              Ограничение поисковым трафиком
                           </li>
                           <li className="cmp__item">
                              <span className="cmp__icon">⚙️</span>
                              Больше операционный инструмент
                           </li>
                        </ul>
                     </article>

                     <article className="cmp__card cmp__card--ads">
                        <div className="cmp__head">
                           <span className="cmp__badge">Охват</span>
                           <h4 className="cmp__name">Avito Ads</h4>
                        </div>

                        <ul className="cmp__list">
                           <li className="cmp__item">
                              <span className="cmp__icon">🎯</span>
                              Работа по аудиториям
                           </li>
                           <li className="cmp__item">
                              <span className="cmp__icon">✨</span>
                              Формирование дополнительного спроса
                           </li>
                           <li className="cmp__item">
                              <span className="cmp__icon">🚀</span>
                              Масштабируемый охват
                           </li>
                           <li className="cmp__item">
                              <span className="cmp__icon">🧠</span>
                              Стратегический инструмент привлечения
                           </li>
                        </ul>
                     </article>
                  </div>
               </div>
            </div>
         </section>

         {/* Гибрид */}
         <section className="note">
            <div className="note__wrap">
               <div className="note__body">
                  <div className="note__text">
                     <h3 className="note__title">
                        Почему в массовом рекрутменте важна комбинация
                     </h3>

                     <p className="note__subtitle">
                        В реальной практике эффективнее всего работает гибридная
                        модель:
                     </p>

                     <ul className="note__list">
                        <li className="note__li">
                           <span className="note__emoji">📌</span>
                           <span>
                              <strong>Avito Pro</strong> — для управления всеми
                              вакансиями и обработки откликов
                           </span>
                        </li>
                        <li className="note__li">
                           <span className="note__emoji">🎯</span>
                           <span>
                              <strong>Avito Ads</strong> — для масштабирования и
                              привлечения дополнительного потока
                           </span>
                        </li>
                     </ul>
                  </div>

                  <ExpertComment
                     sectionTitle="Комментарий эксперта"
                     sectionImage={expertImg}
                     alt="Анна Карабаджак"
                     comment="«Когда мы комбинируем Avito Pro и Avito Ads, мы получаем управляемую воронку: охват → клики → отклики → найм. И можем влиять на стоимость отклика и скорость закрытия вакансий»."
                     name="— Анна Карабаджак, специалист по таргетированной рекламе"
                  />
               </div>
            </div>
         </section>

         <ServiceDescription
            title={<span className="highlight">Вывод</span>}
            subTitle={
               <>
                  Если использовать только{" "}
                  <span className="highlight">Avito Pro</span> — вы зависите от
                  текущего спроса. Если подключать{" "}
                  <span className="highlight">Avito Ads</span> — вы можете
                  влиять на объем входящего потока.
               </>
            }
         />

         <section className="note">
            <div className="note__wrap">
               <div className="note__body">
                  <div className="note__text">
                     <h3 className="note__title">
                        В условиях высокой конкуренции за массовый персонал
                        выигрывает тот, кто не просто размещает вакансии, а{" "}
                        <span className="highlight">
                           строит систему привлечения кандидатов.
                        </span>
                     </h3>
                  </div>
               </div>
            </div>
         </section>

         <ContactUs
            title="Обсудим?"
            subtitle="Оставьте заявку на консультацию — и наша команда предложит персональное решение!"
         />
      </div>
   );
}

export default CaseAvitoAds;

function CheckIcon() {
   return (
      <svg
         width="20"
         height="20"
         viewBox="0 0 20 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true"
      >
         <circle cx="10" cy="10" r="10" fill="#D8BEFF" />
         <path
            d="M6 10L8.5 12.5L14 7"
            stroke="#252527"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
}
