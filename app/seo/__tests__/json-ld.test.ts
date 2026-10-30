import { describe, expect, test } from "vitest";
import {
   articleJsonLd,
   blogJsonLd,
   contactJsonLd,
   homeJsonLd,
   legalPageJsonLd,
   serviceJsonLd,
} from "../json-ld";

const nodes = (data: { "@graph": Record<string, unknown>[] }) => data["@graph"];

describe("JSON-LD markup", () => {
   test("full company card with requisites is only on the home page", () => {
      const home = JSON.stringify(homeJsonLd());
      expect(home).toContain("7725663390");
      expect(home).toContain("hasOfferCatalog");

      for (const data of [
         serviceJsonLd("/talent-flow"),
         contactJsonLd(),
         blogJsonLd(),
         articleJsonLd("/case-avito-ads"),
         legalPageJsonLd("Политика конфиденциальности", "/privacy-policy"),
      ]) {
         const json = JSON.stringify(data);
         expect(json).not.toContain("7725663390");
         expect(json).not.toContain("hasOfferCatalog");
         expect(json).toContain("https://prvb.ru/#organization");
      }
   });

   test("every service page describes its own service", () => {
      const talent = nodes(serviceJsonLd("/talent-flow"))[0];
      const network = nodes(serviceJsonLd("/rabotnik-network"))[0];

      expect(talent["@type"]).toBe("Service");
      expect(talent.url).toBe("https://prvb.ru/talent-flow");
      expect(network.name).toBe("Размещение вакансий в сети Rabotnik");
      expect(network.offers).toMatchObject({
         "@type": "AggregateOffer",
         priceCurrency: "RUB",
         lowPrice: 600,
         highPrice: 2500,
      });
      expect(talent.offers).toBeUndefined();
      expect(talent.provider).toMatchObject({
         "@id": "https://prvb.ru/#organization",
         telephone: "+7-499-380-89-16",
         email: "reclama@prvb.ru",
         address: { streetAddress: "улица Хавская, дом 11" },
      });
   });

   test("article page has breadcrumbs through the blog", () => {
      const [article, breadcrumbs] = nodes(articleJsonLd("/case-lead-generation"));

      expect(article["@type"]).toBe("BlogPosting");
      expect(
         (breadcrumbs.itemListElement as { name: string }[]).map((item) => item.name)
      ).toEqual([
         "Главная",
         "Блог",
         "Кадровая лидогенерация для подбора персонала: интервью эксперта",
      ]);
   });
});
