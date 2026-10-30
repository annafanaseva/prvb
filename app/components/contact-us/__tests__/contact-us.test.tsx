import { test, describe, expect, vi, afterEach } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactUs from "../ContactUs";

describe("Contant us component", () => {
   const props = {
      title: "Связаться",
      subtitle: "Заполните форму и мы вам перезвоним",
   };

   test("render block title", () => {
      render(
         <MemoryRouter>
            <ContactUs {...props} />
         </MemoryRouter>
      );

      const blockTitle = screen.getByTestId("contact-us-form-title");
      expect(blockTitle).toBeInTheDocument();
      expect(blockTitle).toHaveTextContent("Связаться");
   });

   test("render block form title", () => {
      render(
         <MemoryRouter>
            <ContactUs {...props} />
         </MemoryRouter>
      );

      const blockFormTitle = screen.getByTestId("contact-us-form-title");
      expect(blockFormTitle).toBeInTheDocument();
   });

   test("render block form sub title", () => {
      render(
         <MemoryRouter>
            <ContactUs {...props} />
         </MemoryRouter>
      );

      const blockFormSubTitle = screen.getByTestId("contact-us-sub-form-title");
      expect(blockFormSubTitle).toBeInTheDocument();
   });

   test("render block form inputs", () => {
      render(
         <MemoryRouter>
            <ContactUs {...props} />
         </MemoryRouter>
      );

      const blockFormInputs = screen.getAllByTestId("contact-us-form-input");
      expect(blockFormInputs).toHaveLength(4);
   });

   test("updates controlled input", async () => {
      render(
         <MemoryRouter>
            <ContactUs {...props} />
         </MemoryRouter>
      );
      const user = userEvent.setup();

      const nameInput = screen.getByPlaceholderText("Имя");
      const telephoneInput = screen.getByPlaceholderText("Телефон");
      const companyInput = screen.getByPlaceholderText("Компания");

      await user.type(nameInput, "John Doe");
      await user.type(telephoneInput, "1234567890");
      await user.type(companyInput, "ExampleCorp");

      expect(nameInput).toHaveValue("John Doe");
      expect(telephoneInput).toHaveValue("1234567890");
      expect(companyInput).toHaveValue("ExampleCorp");
   });

   describe("Yandex Metrika goal", () => {
      const ym = vi.fn();

      const renderForm = () =>
         render(
            <MemoryRouter>
               <Routes>
                  <Route path="/" element={<ContactUs {...props} />} />
                  <Route path="/thanks" element={<p>thanks page</p>} />
               </Routes>
            </MemoryRouter>
         );

      const fillAndSubmit = async () => {
         const user = userEvent.setup();
         await user.type(screen.getByPlaceholderText("Имя"), "Иван");
         await user.type(
            screen.getByPlaceholderText("Телефон"),
            "+79990000000"
         );
         await user.type(screen.getByPlaceholderText("Почта"), "ivan@test.ru");
         await user.type(screen.getByPlaceholderText("Компания"), "Тест");
         await user.click(screen.getByRole("button", { name: /Отправить/ }));
      };

      const mockCrmResponse = (body: object) => {
         vi.stubGlobal(
            "fetch",
            vi.fn().mockResolvedValue({ json: () => Promise.resolve(body) })
         );
      };

      afterEach(() => {
         vi.unstubAllGlobals();
         vi.restoreAllMocks();
         ym.mockReset();
      });

      test("reaches 'lead' goal after lead is created in CRM", async () => {
         vi.stubGlobal("ym", ym);
         mockCrmResponse({ result: 123 });
         renderForm();

         await fillAndSubmit();

         expect(await screen.findByText("thanks page")).toBeInTheDocument();
         expect(ym).toHaveBeenCalledTimes(1);
         expect(ym).toHaveBeenCalledWith(101444747, "reachGoal", "lead");
      });

      test("does not reach goal when CRM returns an error", async () => {
         vi.stubGlobal("ym", ym);
         vi.spyOn(window, "alert").mockImplementation(() => {});
         mockCrmResponse({ error: "ERROR" });
         renderForm();

         await fillAndSubmit();

         expect(window.alert).toHaveBeenCalled();
         expect(ym).not.toHaveBeenCalled();
      });

      test("does not submit or reach goal when fields are empty", async () => {
         vi.stubGlobal("ym", ym);
         mockCrmResponse({ result: 123 });
         renderForm();

         await userEvent
            .setup()
            .click(screen.getByRole("button", { name: /Отправить/ }));

         expect(fetch).not.toHaveBeenCalled();
         expect(ym).not.toHaveBeenCalled();
      });

      test("still redirects when Metrika is blocked", async () => {
         mockCrmResponse({ result: 123 });
         renderForm();

         await fillAndSubmit();

         expect(await screen.findByText("thanks page")).toBeInTheDocument();
      });
   });

   describe("Form validation", () => {
      const renderForm = () =>
         render(
            <MemoryRouter>
               <ContactUs {...props} />
            </MemoryRouter>
         );

      const fill = async (values: {
         name?: string;
         telephone?: string;
         mail?: string;
         company?: string;
      }) => {
         const user = userEvent.setup();
         const fields = {
            name: "Имя",
            telephone: "Телефон",
            mail: "Почта",
            company: "Компания",
         };
         for (const [key, placeholder] of Object.entries(fields)) {
            const value = values[key as keyof typeof values];
            if (value)
               await user.type(screen.getByPlaceholderText(placeholder), value);
         }
         return user;
      };

      afterEach(() => {
         vi.unstubAllGlobals();
      });

      test("shows errors for empty fields on submit", async () => {
         vi.stubGlobal("fetch", vi.fn());
         renderForm();

         await userEvent
            .setup()
            .click(screen.getByRole("button", { name: /Отправить/ }));

         expect(screen.getAllByText("Заполните поле")).toHaveLength(4);
         expect(fetch).not.toHaveBeenCalled();
      });

      test("shows errors for invalid phone and email", async () => {
         vi.stubGlobal("fetch", vi.fn());
         renderForm();

         const user = await fill({
            name: "Иван",
            telephone: "12345",
            mail: "ivan@test",
            company: "Тест",
         });
         await user.click(screen.getByRole("button", { name: /Отправить/ }));

         expect(
            screen.getByText("Введите телефон в формате +7 999 123-45-67")
         ).toBeInTheDocument();
         expect(
            screen.getByText("Введите почту в формате name@example.ru")
         ).toBeInTheDocument();
         expect(screen.getByPlaceholderText("Телефон")).toHaveAttribute(
            "aria-invalid",
            "true"
         );
         expect(fetch).not.toHaveBeenCalled();
      });

      test("shows email error on blur", async () => {
         renderForm();

         const user = await fill({ mail: "not-an-email" });
         await user.tab();

         expect(
            screen.getByText("Введите почту в формате name@example.ru")
         ).toBeInTheDocument();
      });

      test("removes error once the value is fixed", async () => {
         renderForm();

         const user = await fill({ telephone: "123" });
         await user.tab();
         expect(
            screen.getByTestId("contact-us-form-error")
         ).toBeInTheDocument();

         const phoneInput = screen.getByPlaceholderText("Телефон");
         await user.clear(phoneInput);
         await user.type(phoneInput, "+7 (999) 123-45-67");

         expect(screen.queryByTestId("contact-us-form-error")).toBeNull();
      });

      test.each([
         "+7 999 123-45-67",
         "8 (999) 123 45 67",
         "89991234567",
         "9991234567",
      ])("accepts phone %s", async (telephone) => {
         renderForm();

         const user = await fill({ telephone });
         await user.tab();

         expect(screen.queryByTestId("contact-us-form-error")).toBeNull();
      });
   });
});
