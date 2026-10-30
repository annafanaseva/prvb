import PrivacyPolicy from "~/components/privacy-policy/PrivacyPolicy";
import JsonLd from "~/components/json-ld/JsonLd";
import { legalPageJsonLd } from "~/seo/json-ld";

function PrivacyPolicyPage() {
   return (
      <div>
         {/* Meta */}
         <title>Политика конфиденциальности</title>
         <meta property="og:title" content="Политика конфиденциальности" />
         <meta
            name="description"
            content="Политика конфиденциальности и обработки персональных данных."
         />
         <meta
            name="keywords"
            content="политика конфиденциальности, персональные данные, обработка персональных данных"
         />
         <JsonLd data={legalPageJsonLd("Политика конфиденциальности", "/privacy-policy")} />
         {/* Content */}
         <PrivacyPolicy />;
      </div>
   );
}

export default PrivacyPolicyPage;
