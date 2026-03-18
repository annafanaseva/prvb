import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import PerformanceMetrics from "../PerformanceMetrics";

vi.mock("@gsap/react");

describe("Perfomance metric component", () => {
   test("render component title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <PerformanceMetrics
               sectionTitle={
                  <>
                     Наши <span className="highlight">кейсы</span>
                  </>
               }
               metrics={[
                  {
                     label: "Складские рабочие",
                     value: {
                        initial: "500",
                        countBy: "100",
                        countEnd: "1200",
                        suffix: "+",
                     },
                     description:
                        "За 3 недели закрыли 1200 позиций в 4 регионах для логистической сети. Массовый подбор с высокой точностью",
                  },
                  {
                     label: "Водители вахтой",
                     value: {
                        initial: "100",
                        countBy: "100",
                        countEnd: "500",
                        suffix: "+",
                     },
                     description:
                        "Подобрали более 500 вахтовых водителей за 45 дней. Применили мультиканальный подход и гео-таргетинг",
                  },
                  {
                     label: "Ритейл",
                     value: {
                        initial: "10",
                        countBy: "5",
                        countEnd: "85",
                        suffix: "%",
                     },
                     description:
                        "Достигли 85% релевантных откликов при массовом подборе в федеральную сеть ритейла - без «мусорного трафика»",
                  },
               ]}
            />
         </MemoryRouter>
      );

      // Act
      const title = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent("Наши кейсы");
   });

   test("render perfomance metrics heading", () => {
      // Arrange
      render(
         <MemoryRouter>
            <PerformanceMetrics
               sectionTitle={
                  <>
                     Наши <span className="highlight">кейсы</span>
                  </>
               }
               metrics={[
                  {
                     label: "Складские рабочие",
                     value: {
                        initial: "500",
                        countBy: "100",
                        countEnd: "1200",
                        suffix: "+",
                     },
                     description:
                        "За 3 недели закрыли 1200 позиций в 4 регионах для логистической сети. Массовый подбор с высокой точностью",
                  },
                  {
                     label: "Водители вахтой",
                     value: {
                        initial: "100",
                        countBy: "100",
                        countEnd: "500",
                        suffix: "+",
                     },
                     description:
                        "Подобрали более 500 вахтовых водителей за 45 дней. Применили мультиканальный подход и гео-таргетинг",
                  },
                  {
                     label: "Ритейл",
                     value: {
                        initial: "10",
                        countBy: "5",
                        countEnd: "85",
                        suffix: "%",
                     },
                     description:
                        "Достигли 85% релевантных откликов при массовом подборе в федеральную сеть ритейла - без «мусорного трафика»",
                  },
               ]}
            />
         </MemoryRouter>
      );

      // Act
      const metricsHeading = screen.getAllByTestId(
         "performance-metrics-item-heading"
      );

      // Assert
      expect(metricsHeading.length).toBeGreaterThan(0);
      for (const el of metricsHeading) {
         expect(el).toBeInTheDocument();
      }
   });

   test("render perfomance metrics value", () => {
      // Arrange
      render(
         <MemoryRouter>
            <PerformanceMetrics
               sectionTitle={
                  <>
                     Наши <span className="highlight">кейсы</span>
                  </>
               }
               metrics={[
                  {
                     label: "Складские рабочие",
                     value: {
                        initial: "500",
                        countBy: "100",
                        countEnd: "1200",
                        suffix: "+",
                     },
                     description:
                        "За 3 недели закрыли 1200 позиций в 4 регионах для логистической сети. Массовый подбор с высокой точностью",
                  },
                  {
                     label: "Водители вахтой",
                     value: {
                        initial: "100",
                        countBy: "100",
                        countEnd: "500",
                        suffix: "+",
                     },
                     description:
                        "Подобрали более 500 вахтовых водителей за 45 дней. Применили мультиканальный подход и гео-таргетинг",
                  },
                  {
                     label: "Ритейл",
                     value: {
                        initial: "10",
                        countBy: "5",
                        countEnd: "85",
                        suffix: "%",
                     },
                     description:
                        "Достигли 85% релевантных откликов при массовом подборе в федеральную сеть ритейла - без «мусорного трафика»",
                  },
               ]}
            />
         </MemoryRouter>
      );

      // Act
      const metricsValue = screen.getAllByTestId(
         "performance-metrics-item-value"
      );

      // Assert
      expect(metricsValue.length).toBeGreaterThan(0);
      for (const el of metricsValue) {
         expect(el).toBeInTheDocument();
      }
   });

   test("render perfomance metrics description", () => {
      // Arrange
      render(
         <MemoryRouter>
            <PerformanceMetrics
               sectionTitle={
                  <>
                     Наши <span className="highlight">кейсы</span>
                  </>
               }
               metrics={[
                  {
                     label: "Складские рабочие",
                     value: {
                        initial: "500",
                        countBy: "100",
                        countEnd: "1200",
                        suffix: "+",
                     },
                     description:
                        "За 3 недели закрыли 1200 позиций в 4 регионах для логистической сети. Массовый подбор с высокой точностью",
                  },
                  {
                     label: "Водители вахтой",
                     value: {
                        initial: "100",
                        countBy: "100",
                        countEnd: "500",
                        suffix: "+",
                     },
                     description:
                        "Подобрали более 500 вахтовых водителей за 45 дней. Применили мультиканальный подход и гео-таргетинг",
                  },
                  {
                     label: "Ритейл",
                     value: {
                        initial: "10",
                        countBy: "5",
                        countEnd: "85",
                        suffix: "%",
                     },
                     description:
                        "Достигли 85% релевантных откликов при массовом подборе в федеральную сеть ритейла - без «мусорного трафика»",
                  },
               ]}
            />
         </MemoryRouter>
      );

      // Act
      const metricsDescription = screen.getAllByTestId(
         "performance-metrics-item-description"
      );

      // Assert
      expect(metricsDescription.length).toBeGreaterThan(0);
      for (const el of metricsDescription) {
         expect(el).toBeInTheDocument();
      }
   });
});
