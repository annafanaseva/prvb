import PrivacyPolicy from "~/components/privacy-policy/PrivacyPolicy";

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
         {/* Content */}
         <PrivacyPolicy />;
      </div>
   );
}

export default PrivacyPolicyPage;
