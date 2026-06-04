import React from "react";
import PrivacyPolicy from "~/components/privacy-policy/PrivacyPolicy";
import type { Route } from "./+types/privacyPolicy";

export const meta: Route.MetaFunction = () => {
   return [
      {
         title: "Политика конфиденциальности",
      },
      {
         name: "description",
         content:
            "Политика конфиденциальности и обработки персональных данных.",
      },
   ];
};

function PrivacyPolicyPage() {
   return <PrivacyPolicy />;
}

export default PrivacyPolicyPage;
