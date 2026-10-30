// JSON-LD (schema.org) разметка страниц prvb.ru.
// Полная карточка компании (реквизиты, контакты, услуги) есть только на главной,
// остальные страницы ссылаются на неё через @id и описывают только себя.
import { placementPrices, platforms } from "~/components/network-channels/channels-list";

export const SITE_URL = "https://prvb.ru";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

type JsonLdNode = Record<string, unknown>;

// Short reference to the company, used on every page except the home page
const organizationRef = {
   "@type": "Organization",
   "@id": ORGANIZATION_ID,
   name: "Работник",
   url: SITE_URL,
};

const address = {
   "@type": "PostalAddress",
   streetAddress: "улица Хавская, дом 11",
   addressLocality: "Москва",
   postalCode: "115162",
   addressCountry: "RU",
};

const contactPoint = {
   "@type": "ContactPoint",
   telephone: "+7-499-380-89-16",
   email: "reclama@prvb.ru",
   contactType: "sales",
   areaServed: "RU",
   availableLanguage: ["Russian"],
};

export type ServicePath =
   | "/talent-flow"
   | "/landing-service"
   | "/ad-management"
   | "/creative-ads"
   | "/rabotnik-network"
   | "/lead-processing";

const services: Record<ServicePath, { name: string; serviceType: string; description: string }> = {
   "/talent-flow": {
      name: "Генерация кадрового трафика",
      serviceType: "Генерация кадрового трафика",
      description:
         "Привлекаем целевых кандидатов через digital-каналы, рекламу и автоматизацию. Генерация кадрового трафика, массовый подбор персонала и валидные отклики для ваших вакансий.",
   },
   "/landing-service": {
      name: "Создание посадочных страниц и сайтов",
      serviceType: "Разработка HR-сайтов",
      description:
         "Создаём посадочные страницы для вакансий и HR-сайты под ключ. Больше откликов, ниже стоимость кандидата, интеграция с CRM и быстрый запуск от 1 дня.",
   },
   "/ad-management": {
      name: "Ведение рекламных кампаний",
      serviceType: "Реклама вакансий",
      description:
         "Запускаем рекламу вакансий за 24 часа: привлекаем релевантных кандидатов через VK, Telegram, контекст и ретаргетинг.",
   },
   "/creative-ads": {
      name: "Разработка креативных концепций и рекламных материалов",
      serviceType: "HR-креативы",
      description:
         "Разрабатываем креативные концепции и рекламные материалы для подбора персонала. Баннеры, сторис, тексты, видео и офлайн-носители для привлечения кандидатов.",
   },
   "/rabotnik-network": {
      name: "Размещение вакансий в сети Rabotnik",
      serviceType: "Размещение вакансий в соцсетях",
      description:
         "Размещаем вакансии в городских сообществах Rabotnik в Telegram, ВКонтакте и MAX. Охват соискателей по всей России, прямые отклики и точное попадание в аудиторию нужного города.",
   },
   "/lead-processing": {
      name: "Обработка лидов через call-центр",
      serviceType: "Обработка откликов кандидатов",
      description:
         "Не даём лидам остыть: звоним кандидатам в первые 15 минут, проверяем релевантность, мотивацию и готовность к собеседованию. Передаём валидные лиды в HR.",
   },
};

const breadcrumbs = (items: { name: string; path: string }[]) => ({
   "@type": "BreadcrumbList",
   itemListElement: [{ name: "Главная", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
   })),
});

const graph = (...nodes: JsonLdNode[]) => ({
   "@context": "https://schema.org",
   "@graph": nodes,
});

// Home page: the full company card and the catalog of services
export function homeJsonLd() {
   return graph(
      {
         "@type": "WebSite",
         "@id": WEBSITE_ID,
         url: SITE_URL,
         name: "Работник",
         inLanguage: "ru",
         publisher: { "@id": ORGANIZATION_ID },
      },
      {
         ...organizationRef,
         alternateName: ["Rabotnik", "ПРВБ"],
         legalName: "ООО «Правильный Выбор»",
         logo: `${SITE_URL}/logo.svg`,
         description:
            "Агентство генерации трафика кандидатов. Помогаем компаниям закрывать вакансии через трафик кандидатов: таргет, контекст, рассылки, чат-боты и интеграции с HRM-системами.",
         foundingDate: "2009",
         taxID: "7725663390",
         identifier: {
            "@type": "PropertyValue",
            propertyID: "ОГРН",
            value: "1097746031228",
         },
         address,
         email: contactPoint.email,
         telephone: contactPoint.telephone,
         contactPoint: [contactPoint],
         sameAs: ["https://t.me/rabota_vacansii_tg"],
         areaServed: { "@type": "Country", name: "Russia" },
         hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Услуги",
            itemListElement: (Object.keys(services) as ServicePath[]).map((path) => ({
               "@type": "Offer",
               itemOffered: {
                  "@type": "Service",
                  name: services[path].name,
                  url: `${SITE_URL}${path}`,
               },
            })),
         },
      }
   );
}

// Rabotnik network: price range of a single post across all geo and platforms
function rabotnikNetworkOffers() {
   const postPrices = Object.values(placementPrices).flatMap((prices) =>
      platforms.map((platform) => prices[platform.id].post)
   );
   return {
      "@type": "AggregateOffer",
      priceCurrency: "RUB",
      lowPrice: Math.min(...postPrices),
      highPrice: Math.max(...postPrices),
      offerCount: postPrices.length,
   };
}

// Service page: what the service is, who provides it and where
export function serviceJsonLd(path: ServicePath) {
   const service = services[path];
   return graph(
      {
         "@type": "Service",
         "@id": `${SITE_URL}${path}#service`,
         name: service.name,
         serviceType: service.serviceType,
         description: service.description,
         url: `${SITE_URL}${path}`,
         provider: {
            ...organizationRef,
            address,
            telephone: contactPoint.telephone,
            email: contactPoint.email,
         },
         areaServed: { "@type": "Country", name: "Russia" },
         ...(path === "/rabotnik-network" && { offers: rabotnikNetworkOffers() }),
      },
      breadcrumbs([{ name: service.name, path }])
   );
}

// Contact page: how to reach the company
export function contactJsonLd() {
   return graph(
      {
         "@type": "ContactPage",
         name: "Оставить заявку на подбор персонала и HR-маркетинг",
         url: `${SITE_URL}/contact`,
         mainEntity: { ...organizationRef, address, contactPoint: [contactPoint] },
      },
      breadcrumbs([{ name: "Контакты", path: "/contact" }])
   );
}

const blogPosts = [
   {
      headline: "Кадровая лидогенерация для подбора персонала: интервью эксперта",
      description:
         "Что такое кадровая лидогенерация и почему компании используют HR-маркетинг для подбора персонала. Практические советы и мнение эксперта.",
      path: "/case-lead-generation",
   },
   {
      headline: "Avito Pro и Avito Ads для рекрутмента: сравнение инструментов",
      description:
         "Сравнение Avito Pro и Avito Ads для подбора персонала. Узнайте, какой инструмент подходит для массового найма, рекламы вакансий и привлечения кандидатов.",
      path: "/case-avito-ads",
   },
] as const;

export type BlogPostPath = (typeof blogPosts)[number]["path"];

// Blog page: list of articles
export function blogJsonLd() {
   return graph(
      {
         "@type": "Blog",
         name: "Кейсы по подбору персонала и HR-маркетингу",
         url: `${SITE_URL}/blog`,
         publisher: organizationRef,
         blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.headline,
            url: `${SITE_URL}${post.path}`,
         })),
      },
      breadcrumbs([{ name: "Блог", path: "/blog" }])
   );
}

// Article page: one blog post
export function articleJsonLd(path: BlogPostPath) {
   const post = blogPosts.find((item) => item.path === path)!;
   return graph(
      {
         "@type": "BlogPosting",
         headline: post.headline,
         description: post.description,
         url: `${SITE_URL}${path}`,
         mainEntityOfPage: `${SITE_URL}${path}`,
         inLanguage: "ru",
         author: organizationRef,
         publisher: organizationRef,
      },
      breadcrumbs([
         { name: "Блог", path: "/blog" },
         { name: post.headline, path },
      ])
   );
}

// Legal pages: plain web page with breadcrumbs
export function legalPageJsonLd(name: string, path: string) {
   return graph(
      {
         "@type": "WebPage",
         name,
         url: `${SITE_URL}${path}`,
         publisher: organizationRef,
      },
      breadcrumbs([{ name, path }])
   );
}
