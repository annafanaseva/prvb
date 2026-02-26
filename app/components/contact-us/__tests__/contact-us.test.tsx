import { test, describe, expect } from "vitest";
import { MemoryRouter } from "react-router";
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
});
