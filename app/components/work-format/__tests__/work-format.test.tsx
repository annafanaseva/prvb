import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import WorkFormat from "../WorkFormat";

vi.mock("@gsap/react");

describe("Work format component block", () => {
   test("render component title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <WorkFormat />
         </MemoryRouter>
      );

      // Acts
      const title = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent("Форматы работы");
   });

   test("render component heading text", () => {
      // Arrange
      render(
         <MemoryRouter>
            <WorkFormat />
         </MemoryRouter>
      );

      // Acts
      const heading = screen.getByTestId("work-format-heading");

      // Assert
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(
         "Форматы работы: как мы передаём вам кандидатов"
      );
   });

   test("render component list items", () => {
      // Arrange
      render(
         <MemoryRouter>
            <WorkFormat />
         </MemoryRouter>
      );

      // Acts
      const listItems = screen.getAllByTestId("work-format-list-item");

      // Assert
      expect(listItems).toHaveLength(7);
      for (const el of listItems) {
         expect(el).toBeInTheDocument();
      }
   });
});
