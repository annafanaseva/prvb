import Hero from "~/components/hero/Hero";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import ContactUs from "~/components/contact-us/ContactUs";
import heroImage from "./hero-image.png";
import leadGeneration from "./lead-generation.jpg";
import avitoPro from "./avito-pro.png";
import avitoAds from "./avito-ads.jpg";
import "./сaseAvitoAds.css";
import ServiceDescription from "~/components/service-description/ServiceDescription";

function СaseAvitoAds() {
   return (
      <div className="contact-page">
         <Hero
            image={heroImage}
            showMetrics={false}
            subTitle="Avito Pro и Avito Ads в массовом рекрутменте: в чем разница и
                  что эффективнее?"
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
               "Avito Pro - управление вакансиями",
               "Avito Ads - таргетированная реклама",
            ]}
         />
         <div className="main-text_wrapper">
            <h5 className="main-text_wrapper-intro">
               <span className="space"></span>
               <span className="highlight">
                  Разберем разницу именно с точки зрения массового подбора!
               </span>
            </h5>
         </div>
         <HowWeWork
            sectionImage={avitoPro}
            sectionHeading={
               <span className="highlight">
                  Avito Pro - управление размещениями
               </span>
            }
            sectionSubHeading="Avito Pro - это профессиональный кабинет работодателя. Он позволяет: "
            sectionList={[
               "Массово размещать вакансии",
               "Управлять объявлениями",
               "Получать отклики",
               "Видеть базовую аналитику",
               "Работать с несколькими регионами",
            ]}
         />
         <div className="main-text_wrapper">
            <h5 className="main-text_wrapper-intro">
               <span className="space"></span>
               <span className="highlight">
                  Для массового рекрутмента это база - без него сложно управлять
                  десятками и сотнями вакансий.
               </span>
            </h5>
         </div>
         <div className="search-demand-note">
            <div className="search-demand-note__inner-wrapper">
               <div className="search-demand-note__body">
                  <div className="search-demand-note__text-wrapper">
                     <h4 className="search-demand-note__text-title">
                        Однако важно понимать{" "}
                        <span className="highlight">механику</span>
                     </h4>

                     <p className="search-demand-note__text-sub-title">
                        Вакансии показываются в поиске, когда кандидат вводит
                        соответствующий запрос.
                     </p>

                     <div className="search-demand-note__principle">
                        <span className="search-demand-note__principle-icon">
                           📌
                        </span>
                        <p className="search-demand-note__paragraph">
                           То есть работает принцип:
                           <span className="search-demand-note__quote">
                              «Есть поисковый спрос — есть показы».
                           </span>
                        </p>
                     </div>

                     <ul className="search-demand-note__text-list">
                        <li className="search-demand-note__text-list-item">
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
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
                           Если в конкретном регионе спрос низкий, охват будет
                           ограничен.
                        </li>
                        <li className="search-demand-note__text-list-item">
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
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
                           По редким или узким должностям количество показов
                           тоже будет ниже.
                        </li>
                     </ul>
                  </div>

                  <div className="search-demand-note__bottom">
                     <h5 className="search-demand-note__bottom-title">
                        <span>💬</span> Комментарий эксперта
                     </h5>
                     <p className="search-demand-note__bottom-body">
                        «Avito Pro отлично решает операционные задачи —
                        управление объемом вакансий, автоматизация. Но он не
                        расширяет аудиторию сам по себе. Он работает внутри
                        существующего спроса».
                     </p>
                     <p className="search-demand-note__bottom-author">
                        — Анна Карабаджак, специалист по таргетированной рекламе
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <HowWeWork
            sectionImage={avitoAds}
            sectionHeading={
               <span className="highlight">
                  Avito Ads - работа с аудиторией кандидатов
               </span>
            }
            sectionSubHeading="Avito Ads - это рекламный инструмент внутри экосистемы Avito. В отличие от Pro, он позволяет: "
            sectionList={[
               "Настраивать показы по аудиториям таргетироваться по географии",
               "Работать с интересами и поведением пользователей",
               "Запускать ретаргетинг",
               "Масштабировать охват",
            ]}
         />
         <div className="search-demand-note">
            <div className="search-demand-note__inner-wrapper">
               <div className="search-demand-note__body">
                  <div className="search-demand-note__text-wrapper">
                     <h4 className="search-demand-note__text-title">
                        Здесь <span className="highlight">логика другая</span>
                     </h4>

                     <p className="search-demand-note__paragraph">
                        <span className="search-demand-note__quote">
                           «Есть аудитория - мы её находим и показываем
                           вакансию».
                        </span>
                     </p>

                     <p className="search-demand-note__text-sub-title">
                        Это особенно важно в массовом подборе, где:
                     </p>

                     <ul className="search-demand-note__text-list">
                        <li className="search-demand-note__text-list-item">
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
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
                           часть кандидатов — пассивные
                        </li>

                        <li className="search-demand-note__text-list-item">
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
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
                           нужно быстро закрывать объём
                        </li>

                        <li className="search-demand-note__text-list-item">
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
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
                           высокая конкуренция за линейный персонал
                        </li>
                     </ul>
                  </div>

                  <div className="search-demand-note__bottom">
                     <h5 className="search-demand-note__bottom-title">
                        <span>💬</span> Комментарий эксперта
                     </h5>

                     <p className="search-demand-note__bottom-body">
                        «Через Avito Ads мы можем выйти за рамки поисковой
                        выдачи. Это позволяет привлекать не только тех, кто уже
                        ищет работу, но и тех, кто готов рассмотреть предложение
                        при правильной подаче».
                     </p>

                     <p className="search-demand-note__bottom-author">
                        — Анна Карабаджак, специалист по таргетированной рекламе
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="search-demand-note">
            <div className="search-demand-note__inner-wrapper">
               <div className="search-demand-note__compare search-demand-note__compare--cards">
                  <h3 className="search-demand-note__compare-title">
                     Главное различие на примере Avito
                  </h3>

                  <div className="search-demand-note__compare-grid">
                     <article className="search-demand-note__compare-card search-demand-note__compare-card--pro">
                        <div className="search-demand-note__compare-card-head">
                           <span className="search-demand-note__compare-badge">
                              Поиск
                           </span>
                           <h4 className="search-demand-note__compare-heading">
                              Avito Pro
                           </h4>
                        </div>

                        <ul className="search-demand-note__compare-list">
                           <li className="search-demand-note__compare-item">
                              <span className="search-demand-note__compare-icon">
                                 🔎
                              </span>
                              <span>Работа в поисковой выдаче</span>
                           </li>
                           <li className="search-demand-note__compare-item">
                              <span className="search-demand-note__compare-icon">
                                 📈
                              </span>
                              <span>Реакция на существующий спрос</span>
                           </li>
                           <li className="search-demand-note__compare-item">
                              <span className="search-demand-note__compare-icon">
                                 ↔️
                              </span>
                              <span>Ограничение поисковым трафиком</span>
                           </li>
                           <li className="search-demand-note__compare-item">
                              <span className="search-demand-note__compare-icon">
                                 ⚙️
                              </span>
                              <span>Больше операционный инструмент</span>
                           </li>
                        </ul>
                     </article>

                     <article className="search-demand-note__compare-card search-demand-note__compare-card--ads">
                        <div className="search-demand-note__compare-card-head">
                           <span className="search-demand-note__compare-badge">
                              Охват
                           </span>
                           <h4 className="search-demand-note__compare-heading">
                              Avito Ads
                           </h4>
                        </div>

                        <ul className="search-demand-note__compare-list">
                           <li className="search-demand-note__compare-item">
                              <span className="search-demand-note__compare-icon">
                                 🎯
                              </span>
                              <span>Работа по аудиториям</span>
                           </li>
                           <li className="search-demand-note__compare-item">
                              <span className="search-demand-note__compare-icon">
                                 ✨
                              </span>
                              <span>Формирование дополнительного спроса</span>
                           </li>
                           <li className="search-demand-note__compare-item">
                              <span className="search-demand-note__compare-icon">
                                 🚀
                              </span>
                              <span>Масштабируемый охват</span>
                           </li>
                           <li className="search-demand-note__compare-item">
                              <span className="search-demand-note__compare-icon">
                                 🧠
                              </span>
                              <span>Стратегический инструмент привлечения</span>
                           </li>
                        </ul>
                     </article>
                  </div>
               </div>
            </div>
         </div>
         <div className="search-demand-note">
            <div className="search-demand-note__inner-wrapper">
               <div className="search-demand-note__body">
                  <div className="search-demand-note__text-wrapper">
                     <h3 className="search-demand-note__text-title">
                        Почему в массовом рекрутменте важна комбинация
                     </h3>

                     <p className="search-demand-note__text-sub-title">
                        В реальной практике эффективнее всего работает гибридная
                        модель:
                     </p>

                     <ul className="search-demand-note__text-list">
                        <li className="search-demand-note__text-list-item">
                           <span className="search-demand-note__emoji">📌</span>
                           <span>
                              <strong>Avito Pro</strong> - для управления всеми
                              вакансиями и обработки откликов
                           </span>
                        </li>

                        <li className="search-demand-note__text-list-item">
                           <span className="search-demand-note__emoji">🎯</span>
                           <span>
                              <strong>Avito Ads</strong> - для масштабирования и
                              привлечения дополнительного потока
                           </span>
                        </li>
                     </ul>
                  </div>

                  <div className="search-demand-note__bottom">
                     <h4 className="search-demand-note__bottom-title">
                        <span>💬</span> Комментарий эксперта
                     </h4>

                     <p className="search-demand-note__bottom-body">
                        «Когда мы комбинируем Avito Pro и Avito Ads, мы получаем
                        управляемую воронку: охват → клики → отклики → найм. И
                        можем влиять на стоимость отклика и скорость закрытия
                        вакансий».
                     </p>

                     <p className="search-demand-note__bottom-author">
                        — Анна Карабаджак, специалист по таргетированной рекламе
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <ServiceDescription
            title={
               <>
                  <span className="highlight">Вывод</span>
               </>
            }
            subTitle={
               <>
                  Если использовать только{" "}
                  <span className="highlight"> Avito Pro </span>- вы зависите от
                  текущего спроса. Если подключать{" "}
                  <span className="highlight"> Avito Ads </span>- вы можете
                  влиять на объем входящего потока.
               </>
            }
         />

         <div className="search-demand-note">
            <div className="search-demand-note__inner-wrapper">
               <div className="search-demand-note__body">
                  <div className="search-demand-note__text-wrapper">
                     <h3 className="search-demand-note__text-title">
                        В условиях высокой конкуренции за массовый персонал
                        выигрывает тот, кто не просто размещает вакансии, а
                        <span className="highlight">
                           {" "}
                           строит систему привлечения кандидатов.
                        </span>
                     </h3>
                  </div>
               </div>
            </div>
         </div>

         <ContactUs
            title="Обсудим?"
            subtitle="Оставьте заявку на консультацию - и наша команда предложит персональное решение!"
         />
      </div>
   );
}
export default СaseAvitoAds;
