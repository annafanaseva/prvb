import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import NetworkPlatforms, { NetworkPlatformsInline } from "../NetworkPlatforms";

describe("Network Platforms component", () => {
   test("render all social networks of the Rabotnik network", () => {
      render(<NetworkPlatforms label="Сеть Rabotnik:" href="#network" />);

      expect(screen.getByText("Сеть Rabotnik:")).toBeInTheDocument();
      const items = screen.getAllByTestId("network-platform");
      expect(items.map((item) => item.textContent)).toEqual([
         "Telegram",
         "ВКонтакте",
         "MAX",
      ]);
      expect(items[0]).toHaveAttribute("href", "#network");
   });
});

describe("Network Platforms inline component", () => {
   test("render social networks joined with plus signs", () => {
      const { container } = render(
         <p>
            <NetworkPlatformsInline />
         </p>
      );

      expect(screen.getAllByTestId("network-platform-inline")).toHaveLength(3);
      expect(container).toHaveTextContent("Telegram + ВКонтакте + MAX");
   });
});
