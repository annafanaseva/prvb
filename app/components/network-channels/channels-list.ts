import telegramIcon from "./icons/telegram.png";
import vkIcon from "./icons/vk.png";
import maxIcon from "./icons/max.png";

export type Platform = "telegram" | "vk" | "max";

export const platformIcons: Record<Platform, string> = {
   telegram: telegramIcon,
   vk: vkIcon,
   max: maxIcon,
};

export const platforms: { id: Platform; name: string }[] = [
   { id: "telegram", name: "Telegram" },
   { id: "vk", name: "ВКонтакте" },
   { id: "max", name: "MAX" },
];

export const networkChannels: { city: string; links: Record<Platform, string> }[] =
   [
      {
         city: "Москва",
         links: {
            telegram: "https://t.me/rabotnik_vakansii_rabota_v_msk",
            vk: "https://vk.com/rabotnik_vakansii_rabota_msk",
            max: "https://max.ru/join/gwCuOvJE25oWL3CTp5uAeKQu9eIE58DaSNvim0DNr30",
         },
      },
      {
         city: "Московская область",
         links: {
            telegram: "https://t.me/rabotnik_vakansii_rabota_v_mo",
            vk: "https://vk.com/rabotnik_mo",
            max: "https://max.ru/join/jorpwPXfu5qSNQ-Pf1IKGC1ZUyCpOEmRgiurOML6Mk0",
         },
      },
      {
         city: "Санкт-Петербург и ЛО",
         links: {
            telegram: "https://t.me/rabotnik_vakansii_rabota_v_spb",
            vk: "https://vk.com/rabotnik_spb78",
            max: "https://max.ru/join/zJLYI-VMe4JjA4v63iTS3ULbxVPsjrSyDiaWyuecQDs",
         },
      },
      {
         city: "Краснодар",
         links: {
            telegram: "https://t.me/vakansii_rabota_v_krasnodare",
            vk: "https://vk.com/rabotnik_krasnodar",
            max: "https://max.ru/join/GaY8g0z1N3dHWfav9ped5GcJuHcYUzXDDfLb85_aceg",
         },
      },
      {
         city: "Екатеринбург",
         links: {
            telegram: "https://t.me/rabotnik_vakansii_rabota_v_ekate",
            vk: "https://vk.com/rabotnik_ekat",
            max: "https://max.ru/join/CSjXlXWaW7cJ2KLaxnuj4ehk4hCR6534bDCQ1FQ4bMA",
         },
      },
      {
         city: "Ростов-на-Дону",
         links: {
            telegram: "https://t.me/vakansii_rabota_v_rostove",
            vk: "https://vk.com/rabotnik_rostov",
            max: "https://max.ru/join/dThL1bWZMm_G9OJQXcABKiIuHSAYskgZaSBj8wx3tDQ",
         },
      },
      {
         city: "Новосибирск",
         links: {
            telegram: "https://t.me/vakansii_rabota_v_novosibirske",
            vk: "https://vk.com/rabotnik_novosib",
            max: "https://max.ru/join/3Y5ieXuAnLKwGbzvKXsCTHL-ZHm98kAtiajY-MBd4PQ",
         },
      },
      {
         city: "Нижний Новгород",
         links: {
            telegram: "https://t.me/vakansii_rabota_v_nizhnem_nov",
            vk: "https://vk.com/rabotnik_nn52",
            max: "https://max.ru/join/ayWygp-mifUuQZIw2Ypg-JrXmhmJVv6ARnGXLAr-dJs",
         },
      },
      {
         city: "Волгоград",
         links: {
            telegram: "https://t.me/vakansii_rabota_v_volgograde",
            vk: "https://vk.com/rabotnik_volgograd",
            max: "https://max.ru/join/ecXGH4--7MZacN82wFXJm-yBkxMCseelAiYLObfTkC0",
         },
      },
      {
         city: "Омск",
         links: {
            telegram: "https://t.me/rabotnik_vakansii_rabota_v_omske",
            vk: "https://vk.com/rabotnik_omsk",
            max: "https://max.ru/join/97vbhpTlq58I7KJ6r_KX9wJLzhpxNh730ljvd4GTgeo",
         },
      },
      {
         city: "Тверь",
         links: {
            telegram: "https://t.me/rabotnik_vakansii_rabota_v_tveri",
            vk: "https://vk.com/rabotnik_tver",
            max: "https://max.ru/join/1dLATxkO-9KHsGqtuVrzymN-9aPs7CfLEi1e9TyYSAY",
         },
      },
      {
         city: "Самара",
         links: {
            telegram: "https://t.me/vakansii_rabota_v_samare",
            vk: "https://vk.com/rabotnik_samara",
            max: "https://max.ru/join/ASiJi-rI92oahH5Ai8RD_hQEoV-BrQ3m2LDkA56mLUA",
         },
      },
      {
         city: "Вся Россия",
         links: {
            telegram: "https://t.me/rabotnik_rabota_i_vakansii",
            vk: "https://vk.com/rabotnik_beta",
            max: "https://max.ru/id7725663390_biz",
         },
      },
   ];

export interface CityPrices extends Record<Platform, { post: number; pack: number }> {
   bundle: { week: number; month: number };
}

const price = (
   [tgPost, tgPack]: number[],
   [vkPost, vkPack]: number[],
   [maxPost, maxPack]: number[],
   [week, month]: number[]
): CityPrices => ({
   telegram: { post: tgPost, pack: tgPack },
   vk: { post: vkPost, pack: vkPack },
   max: { post: maxPost, pack: maxPack },
   bundle: { week, month },
});

// Prices from the Rabotnik price list, updated 31.08.2026
export const pricesUpdatedAt = "31.08.2026";

export const placementPrices: Record<string, CityPrices> = {
   Москва: price([1500, 4200], [2500, 7000], [1200, 3360], [3640, 12480]),
   "Московская область": price([1500, 4200], [1500, 4200], [1200, 3360], [2940, 10080]),
   "Санкт-Петербург и ЛО": price([1500, 4200], [1500, 4200], [1000, 2800], [2800, 9600]),
   Краснодар: price([1500, 4200], [1500, 4200], [1200, 3360], [2940, 10080]),
   Екатеринбург: price([1500, 4200], [1500, 4200], [1200, 3360], [2940, 10080]),
   "Ростов-на-Дону": price([1000, 2800], [1500, 4200], [800, 2240], [2310, 7920]),
   Новосибирск: price([1500, 4200], [1500, 4200], [1200, 3360], [2940, 10080]),
   "Нижний Новгород": price([900, 2520], [800, 2240], [800, 2240], [1750, 6000]),
   Волгоград: price([900, 2520], [800, 2240], [700, 1960], [1680, 5760]),
   Омск: price([900, 2520], [800, 2240], [700, 1960], [1680, 5760]),
   Тверь: price([700, 1960], [600, 1680], [600, 1680], [1330, 4560]),
   Самара: price([900, 2520], [900, 2520], [700, 1960], [1750, 6000]),
   "Вся Россия": price([1500, 4200], [1500, 4200], [1200, 3360], [2940, 10080]),
};

// MTV packages for several geo: discount in percent from the original price (single posts without any discounts)
export interface GeoPackage {
   id: string;
   name: string;
   tagline: string;
   geo: string[];
   discount: { week: number; month: number };
   featured?: boolean;
}

const capitals = ["Москва", "Московская область", "Санкт-Петербург и ЛО"];
const millionCities = [
   "Екатеринбург",
   "Новосибирск",
   "Краснодар",
   "Ростов-на-Дону",
   "Нижний Новгород",
   "Самара",
   "Омск",
   "Волгоград",
];

export const geoPackages: GeoPackage[] = [
   {
      id: "capitals",
      name: "Столицы",
      tagline: "Самые большие аудитории: Москва, область и Петербург",
      geo: capitals,
      discount: { week: 41, month: 49 },
   },
   {
      id: "millions",
      name: "Миллионники",
      tagline: "8 крупнейших городов за пределами столиц",
      geo: millionCities,
      discount: { week: 44, month: 52 },
   },
   {
      id: "network",
      name: "Вся сеть",
      tagline: "Все 13 гео Rabotnik: максимальный охват по России",
      geo: networkChannels.map((item) => item.city),
      discount: { week: 48, month: 55 },
      featured: true,
   },
];

