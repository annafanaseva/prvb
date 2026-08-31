import ContactUs from "~/components/contact-us/ContactUs";
import Faq from "~/components/faq/Faq";
import TextSlider from "~/components/text-slider/TextSlider";
import { faqList } from "./faqList";

export default function Contact() {
   return (
      <div>
         {/* Meta */}
         <title>Оставить заявку на подбор персонала и HR-маркетинг</title>
         <meta
            property="og:title"
            content="Оставить заявку на подбор персонала и HR-маркетинг"
         />
         <meta
            name="description"
            content="Нужны кандидаты на вакансии? Оставьте заявку и мы предложим решение для массового подбора персонала, HR-рекламы и генерации кадрового трафика."
         />
         <meta
            name="keywords"
            content="контакты, подбор персонала, HR-маркетинг, привлечение кандидатов, кадровый трафик, рекрутинг"
         />
         {/* Content */}
         <div className="contact-page">
            <ContactUs
               title="Готовы подключиться?"
               subtitle="Оставьте заявку"
            />
            <Faq faqList={faqList} />
            <TextSlider />
         </div>
      </div>
   );
}
