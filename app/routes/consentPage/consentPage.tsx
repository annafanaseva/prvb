import React from "react";
import ProcessingPersonalData from "~/components/processing-personal-data/processingPersonalData";
import type { Route } from "./+types/consentPage";

export const meta: Route.MetaFunction = () => {
   return [
      {
         title: "Согласие на обработку персональных данных",
      },
      {
         name: "description",
         content:
            "Согласие на обработку персональных данных пользователей сайта.",
      },
      {
         name: "keywords",
         content:
            "согласие на обработку персональных данных, персональные данные, обработка персональных данных",
      },
   ];
};

function consentPage() {
   return <ProcessingPersonalData />;
}

export default consentPage;
