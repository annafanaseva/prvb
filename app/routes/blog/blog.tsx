import CaseListBlock from "~/components/case-list-block/CaseListBlock";
import type { Route } from "./+types/blog";

export const meta: Route.MetaFunction = () => {
   return [
      {
         title: "Кейсы по подбору персонала и HR-маркетингу | Блог компании",
      },
      {
         name: "description",
         content:
            "Реальные кейсы массового подбора персонала, лидогенерации кандидатов и HR-рекламы. Разбор инструментов, результатов и практических решений.",
      },
   ];
};

function Blog() {
   return (
      <div className="contact-page">
         <CaseListBlock />
      </div>
   );
}
export default Blog;
