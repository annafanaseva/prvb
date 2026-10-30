import ProcessingPersonalData from "~/components/processing-personal-data/processingPersonalData";
import JsonLd from "~/components/json-ld/JsonLd";
import { legalPageJsonLd } from "~/seo/json-ld";

function consentPage() {
   return (
      <div>
         {/* Meta */}
         <title>Согласие на обработку персональных данных</title>
         <meta
            property="og:title"
            content="Согласие на обработку персональных данных"
         />
         <meta
            name="description"
            content="Согласие на обработку персональных данных пользователей сайта."
         />
         <meta
            name="keywords"
            content="согласие на обработку персональных данных, персональные данные, обработка персональных данных"
         />
         <JsonLd data={legalPageJsonLd("Согласие на обработку персональных данных", "/consent-page")} />
         {/* Content */}
         <ProcessingPersonalData />;
      </div>
   );
}

export default consentPage;
