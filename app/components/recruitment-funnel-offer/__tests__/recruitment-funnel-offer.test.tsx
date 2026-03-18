import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import RecruitmentFunnelOffer from "../RecruitmentFunnelOffer";

const mockList = ["item one", "item 2", "item 3"];

describe("Recruitment funnel offer component", () => {
   test("render block title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <RecruitmentFunnelOffer
               lists={mockList}
               headingIntro="Что вы получаете?"
               heading={
                  <>
                     Полная воронка под ключ - от
                     <span className="highlight"> лида</span> до
                     <span className="highlight"> трудоустройства</span>
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

   test("render block list item", () => {
      // Arrange
      render(
         <MemoryRouter>
            <RecruitmentFunnelOffer
               lists={mockList}
               headingIntro="Что вы получаете?"
               heading={
                  <>
                     Полная воронка под ключ - от
                     <span className="highlight"> лида</span> до
                     <span className="highlight"> трудоустройства</span>
                  </>
               }
            />
         </MemoryRouter>
      );

      // Acts
      const blockListItems = screen.getAllByTestId(
         "recruitment-funnel-offer-list-item"
      );

      // Assert
      expect(blockListItems.length).toBeGreaterThan(0);
      for (const el of blockListItems) {
         expect(el).toBeInTheDocument();
      }
   });
});
