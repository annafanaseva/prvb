import { test, describe, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import ServiceDescription from "../ServiceDescription";

describe("Service description block", () => {
   test("render block title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ServiceDescription
               title={
                  <>
                     Мы не размещаем объявления - мы строим
                     <span className="highlight"> digital-воронки </span>найма
                  </>
               }
               subTitle={
                  <>
                     Вам нужны не просмотры, а люди. Мы знаем, где найти даже
                     тех, кто не ищет работу.
                  </>
               }
            />
         </MemoryRouter>
      );

      // Acts
      const blockTitle = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(blockTitle).toBeInTheDocument();
   });

   test("render block icon", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ServiceDescription
               title={
                  <>
                     Мы не размещаем объявления - мы строим
                     <span className="highlight"> digital-воронки </span>
                     найма
                  </>
               }
               subTitle={
                  <>
                     Вам нужны не просмотры, а люди. Мы знаем, где найти даже
                     тех, кто не ищет работу.
                  </>
               }
            />
         </MemoryRouter>
      );

      // Acts
      const blockIcon = screen.getByTestId("service-description-icon");

      // Assert
      expect(blockIcon).toBeInTheDocument();
   });

   test("render block sub title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <ServiceDescription
               title={
                  <>
                     Мы не размещаем объявления - мы строим
                     <span className="highlight"> digital-воронки </span>
                     найма
                  </>
               }
               subTitle={
                  <>
                     Вам нужны не просмотры, а люди. Мы знаем, где найти даже
                     тех, кто не ищет работу.
                  </>
               }
            />
         </MemoryRouter>
      );

      // Acts
      const blockSubTitle = screen.getByTestId("service-description-sub-title");

      // Assert
      expect(blockSubTitle).toBeInTheDocument();
   });
});
