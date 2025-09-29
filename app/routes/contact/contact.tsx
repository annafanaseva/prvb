import ContactUs from "~/components/contact-us/ContactUs";
import Faq from "~/components/faq/Faq";
import TextSlider from "~/components/text-slider/TextSlider";
import { faqList } from "./faqList";

export default function Contact() {
   return (
      <div className="contact-page">
         <ContactUs title="Готовы подключиться?" subtitle="Оставьте заявку" />
         <Faq faqList={faqList} />
         <TextSlider />
      </div>
   );
}
