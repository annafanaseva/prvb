import Hero from "~/components/hero/Hero";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import ContactUs from "~/components/contact-us/ContactUs";
import heroImage from "./hero-image.png";
import leadGeneration from "./lead-generation.jpg";
import "./сaseAvitoAds.css";

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
         <ContactUs
            title="Хотите узнать, как это может работать именно для вашей компании?"
            subtitle="Оставьте заявку на консультацию — и наша команда предложит персональное решение!"
         />
      </div>
   );
}
export default СaseAvitoAds;
