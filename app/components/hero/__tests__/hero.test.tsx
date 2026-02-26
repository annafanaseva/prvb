import { test, describe, vi, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import image from "../../../routes/home/hero-image.webp";
import Hero from "../Hero";

vi.mock("gsap");
vi.mock("gsap/SplitText");
vi.mock("@gsap/react");

describe("Hero component", () => {
   test("render hero title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Hero
               image={image}
               showMetrics={true}
               subTitle="Помогаем вовремя закрывать вакансии "
            >
               <h1 className="hero__title">
                  Агентство генерации
                  <br />
                  <span className="highlight"> трафика кандидатов</span>
               </h1>
            </Hero>
         </MemoryRouter>
      );
      // Act
      const heroTitle = screen.getByRole("heading", { level: 1 });

      // Assert
      expect(heroTitle).toBeInTheDocument();
      expect(heroTitle).toHaveTextContent(
         "Агентство генерации трафика кандидатов"
      );
   });

   test("render hero sub title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Hero
               image={image}
               showMetrics={true}
               subTitle="Помогаем вовремя закрывать вакансии "
            >
               <h1 className="hero__title">
                  Агентство генерации
                  <br />
                  <span className="highlight"> трафика кандидатов</span>
               </h1>
            </Hero>
         </MemoryRouter>
      );

      // Act
      const heroSubTitle = screen.getByTestId("hero-sub-title");

      // Assert
      expect(heroSubTitle).toBeInTheDocument();
      expect(heroSubTitle).toHaveTextContent(
         "Помогаем вовремя закрывать вакансии"
      );
   });

   test("render hero image", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Hero
               image={image}
               showMetrics={true}
               subTitle="Помогаем вовремя закрывать вакансии "
            >
               <h1 className="hero__title">
                  Агентство генерации
                  <br />
                  <span className="highlight"> трафика кандидатов</span>
               </h1>
            </Hero>
         </MemoryRouter>
      );

      // Act
      const heroImage = screen.getByTestId("hero-image");

      // Assert
      expect(heroImage).toBeInTheDocument();
   });

   test("render all hero metrics text", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Hero
               image={image}
               showMetrics={true}
               subTitle="Помогаем вовремя закрывать вакансии "
            >
               <h1 className="hero__title">
                  Агентство генерации
                  <br />
                  <span className="highlight"> трафика кандидатов</span>
               </h1>
            </Hero>
         </MemoryRouter>
      );

      // Act
      const heroMetrics = screen.getAllByTestId("hero-metric");

      // Assert
      for (const el of heroMetrics) {
         expect(el).toBeInTheDocument();
      }
   });
});
