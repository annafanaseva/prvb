import CaseListBlock from "~/components/case-list-block/CaseListBlock";
import JsonLd from "~/components/json-ld/JsonLd";
import { blogJsonLd } from "~/seo/json-ld";

function Blog() {
   return (
      <div>
         {/* Meta */}
         <title>
            Кейсы по подбору персонала и HR-маркетингу | Блог компании
         </title>
         <meta
            property="og:title"
            content="Кейсы по подбору персонала и HR-маркетингу | Блог компании"
         />
         <meta
            name="description"
            content="Реальные кейсы массового подбора персонала, лидогенерации кандидатов и HR-рекламы. Разбор инструментов, результатов и практических решений."
         />
         <meta
            name="keywords"
            content="блог HR-маркетинг, подбор персонала, рекрутинг, кадровый маркетинг, привлечение кандидатов, HR-кейсы, статьи для HR"
         />

         <JsonLd data={blogJsonLd()} />

         {/* Content */}
         <div className="contact-page">
            <CaseListBlock />
         </div>
      </div>
   );
}
export default Blog;
