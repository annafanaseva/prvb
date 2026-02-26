import { test, describe, vi, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import AboutUs from "../AboutUs";

vi.mock("gsap");
vi.mock("@gsap/react");

describe("About us component", () => {
   test("render block title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <AboutUs />
         </MemoryRouter>
      );
      // Act
      const blockTitle = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(blockTitle).toBeInTheDocument();
      expect(blockTitle).toHaveTextContent("О нас");
   });

   test("render block heading text", () => {
      // Arrange
      render(
         <MemoryRouter>
            <AboutUs />
         </MemoryRouter>
      );
      // Act
      const blockHeadingText = screen.getByTestId("about-us-heading-text");

      // Assert
      expect(blockHeadingText).toBeInTheDocument();
   });
   test("render block sub heading text", () => {
      // Arrange
      render(
         <MemoryRouter>
            <AboutUs />
         </MemoryRouter>
      );
      // Act
      const blockSubHeadingText = screen.getByTestId(
         "about-us-sub-heading-text"
      );

      // Assert
      expect(blockSubHeadingText).toBeInTheDocument();
   });

   test("render block slide image list", () => {
      // Arrange
      render(
         <MemoryRouter>
            <AboutUs />
         </MemoryRouter>
      );
      // Act
      const blockSlideImageList = screen.getAllByTestId("about-us-slide-image");

      // Assert
      expect(blockSlideImageList).toHaveLength(13);
      for (const el of blockSlideImageList) {
         expect(el).toBeInTheDocument();
      }
   });
});
