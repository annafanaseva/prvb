import { MemoryRouter } from "react-router";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import NetworkChannels from "../NetworkChannels";
import { networkChannels, geoPackages } from "../channels-list";

describe("Network Channels component", () => {
   const renderComponent = () =>
      render(
         <MemoryRouter>
            <NetworkChannels title="Площадки и цены" />
         </MemoryRouter>
      );

   test("render component title", () => {
      renderComponent();

      const title = screen.getByRole("heading", { level: 3 });
      expect(title).toHaveTextContent("Площадки и цены");
   });

   test("render a row for every city with links to all platforms", () => {
      renderComponent();

      const rows = screen.getAllByTestId("network-channel-row");
      expect(rows).toHaveLength(networkChannels.length);

      const links = within(rows[0]).getAllByTestId("network-channel-link");
      expect(links.map((link) => link.getAttribute("href"))).toEqual([
         networkChannels[0].links.telegram,
         networkChannels[0].links.vk,
         networkChannels[0].links.max,
      ]);
   });

   test("show post, package and bundle prices for a city", () => {
      renderComponent();

      const cells = within(screen.getAllByTestId("network-channel-row")[0]).getAllByRole(
         "cell"
      );
      expect(cells.map((cell) => cell.textContent?.replace(/\s/g, ""))).toEqual([
         "1500₽4200₽",
         "2500₽7000₽",
         "1200₽3360₽",
         "5200₽3640₽",
         "20800₽12480₽",
      ]);
   });

   test("show full price crossed out next to MTV discounted price", () => {
      renderComponent();

      const [week, month] = screen.getAllByTestId("network-mtv-price");
      expect(week.querySelector("s")).toHaveTextContent(/5\s200\s₽/);
      expect(month.querySelector("s")).toHaveTextContent(/20\s800\s₽/);
   });

   test("render geo packages with prices as original price minus the shown percent", () => {
      renderComponent();

      const packages = screen.getAllByTestId("network-geo-package");
      expect(packages).toHaveLength(geoPackages.length);

      // Capitals week: single posts 5 200 + 4 200 + 4 000 = 13 400 ₽, −41% → exactly 7 906 ₽
      expect(packages[0]).toHaveTextContent("Столицы");
      expect(packages[0]).toHaveTextContent(/13\s400\s₽−41%7\s906\s₽/);
      // Capitals month: 53 600 ₽ −49% → 27 336 ₽
      expect(packages[0]).toHaveTextContent(/53\s600\s₽−49%27\s336\s₽/);
      expect(packages[0]).toHaveTextContent(
         "1 пост в Telegram, ВКонтакте и MAX в каждом из 3 гео"
      );
      expect(packages[0]).toHaveTextContent("Всего 9 постов");
      expect(packages[0]).toHaveTextContent("Всего 36 постов");
      // Millionniki week: 1 × 3 × 8 = 24
      expect(packages[1]).toHaveTextContent("Всего 24 поста");
   });
});
