import ContactUs from "~/components/contact-us/ContactUs";
import Faq from "~/components/faq/Faq";
import TextSlider from "~/components/text-slider/TextSlider";
import { faqList } from "./faqList";
import type { Route } from "./+types/contact";

export const meta: Route.MetaFunction = () => {
   return [
      {
         title: "Оставить заявку на подбор персонала и HR-маркетинг",
      },
      {
         name: "description",
         content:
            "Нужны кандидаты на вакансии? Оставьте заявку и мы предложим решение для массового подбора персонала, HR-рекламы и генерации кадрового трафика.",
      },
   ];
};

export default function Contact() {
   return (
      <div className="contact-page">
         <ContactUs title="Готовы подключиться?" subtitle="Оставьте заявку" />
         <Faq faqList={faqList} />
         <TextSlider />
      </div>
   );
}
