import { test, describe, vi, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import HowWeWork from "../HowWeWork";
import howWeWorkImage from "../../../routes/home/how-we-work.webp";

vi.mock("gsap");

describe("howWeWork component", () => {
   test("render block title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <HowWeWork
               sectionImage={howWeWorkImage}
               sectionTitle="Как мы работаем ?"
               sectionHeading="Чтобы наполнить вашу HR-воронку:"
               sectionSubHeading="Все лиды попадают в ваш Личный кабинет или интегрируются в HRM-систему"
               sectionList={[
                  "Используем 5+ каналов одновременно (таргет, контекст, рассылки: WA sms, e-mail, голосовы и чат-боты, online и offline реклама)",
                  "Настраиваем персонализированные кампании под вакансию",
                  "Охватываем даже тех, кто не ищет работу активно",
               ]}
               sectionBottom={{
                  heading: "Мы работаем не с резюме, a с историями!",
                  text: "За каждым откликом — человек. За каждой вакансией — живой бизнес. Мы соединяем одно с другим так, чтобы получался результат — честный, точный, вовремя",
               }}
            />
         </MemoryRouter>
      );
      // Act
      const blockTitle = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(blockTitle).toBeInTheDocument();
      expect(blockTitle).toHaveTextContent("Как мы работаем ?");
   });

   test("render block image", () => {
      // Arrange
      render(
         <MemoryRouter>
            <HowWeWork
               sectionImage={howWeWorkImage}
               sectionTitle="Как мы работаем ?"
               sectionHeading="Чтобы наполнить вашу HR-воронку:"
               sectionSubHeading="Все лиды попадают в ваш Личный кабинет или интегрируются в HRM-систему"
               sectionList={[
                  "Используем 5+ каналов одновременно (таргет, контекст, рассылки: WA sms, e-mail, голосовы и чат-боты, online и offline реклама)",
                  "Настраиваем персонализированные кампании под вакансию",
                  "Охватываем даже тех, кто не ищет работу активно",
               ]}
               sectionBottom={{
                  heading: "Мы работаем не с резюме, a с историями!",
                  text: "За каждым откликом — человек. За каждой вакансией — живой бизнес. Мы соединяем одно с другим так, чтобы получался результат — честный, точный, вовремя",
               }}
            />
         </MemoryRouter>
      );
      // Act
      const blockImage = screen.getByTestId("how-we-work-image");

      // Assert
      expect(blockImage).toBeInTheDocument();
   });

   test("render how we work list item", () => {
      // Arrange
      render(
         <MemoryRouter>
            <HowWeWork
               sectionImage={howWeWorkImage}
               sectionTitle="Как мы работаем ?"
               sectionHeading="Чтобы наполнить вашу HR-воронку:"
               sectionSubHeading="Все лиды попадают в ваш Личный кабинет или интегрируются в HRM-систему"
               sectionList={[
                  "Используем 5+ каналов одновременно (таргет, контекст, рассылки: WA sms, e-mail, голосовы и чат-боты, online и offline реклама)",
                  "Настраиваем персонализированные кампании под вакансию",
                  "Охватываем даже тех, кто не ищет работу активно",
               ]}
               sectionBottom={{
                  heading: "Мы работаем не с резюме, a с историями!",
                  text: "За каждым откликом — человек. За каждой вакансией — живой бизнес. Мы соединяем одно с другим так, чтобы получался результат — честный, точный, вовремя",
               }}
            />
         </MemoryRouter>
      );
      // Act
      const listItems = screen.getAllByTestId("how-we-work-text-list-item");

      // Assert
      for (const el of listItems) {
         expect(el).toBeInTheDocument();
      }
   });
});
