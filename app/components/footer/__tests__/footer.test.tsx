import { test, describe, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Foorer component", () => {
   test("render footer title", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Footer />
         </MemoryRouter>
      );
      // Act
      const footerTitle = screen.getByRole("heading", { level: 3 });

      // Assert
      expect(footerTitle).toBeInTheDocument();
      expect(footerTitle).toHaveTextContent("Нужен хороший трафик?");
   });

   test("render footer heading", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Footer />
         </MemoryRouter>
      );
      // Act
      const footerHeading = screen.getByRole("heading", { level: 1 });

      // Assert
      expect(footerHeading).toBeInTheDocument();
      expect(footerHeading).toHaveTextContent("Давайте работать вместе!");
   });

   test("render footer logo image", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Footer />
         </MemoryRouter>
      );
      // Act
      const footerLogoImage = screen.getByTestId("footer-logo-image");

      // Assert
      expect(footerLogoImage).toBeInTheDocument();
   });

   test("render footer link list", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Footer />
         </MemoryRouter>
      );
      // Act
      const footerLinkList = screen.getAllByTestId("footer-link-list");

      // Assert
      expect(footerLinkList).toHaveLength(5);
      for (const el of footerLinkList) {
         expect(el).toBeInTheDocument();
      }
   });

   test("render footer contact list", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Footer />
         </MemoryRouter>
      );
      // Act
      const footerContactEmail = screen.getByTestId("footer-contact-email");
      const footerContactNumber = screen.getByTestId("footer-contact-number");
      const footerContactAddress = screen.getByTestId("footer-contact-address");

      // Assert
      expect(footerContactEmail).toBeInTheDocument();
      expect(footerContactEmail).toHaveTextContent("reclama@prvb.ru");

      expect(footerContactNumber).toBeInTheDocument();
      expect(footerContactNumber).toHaveTextContent("+7 (499) 380-89-16");

      expect(footerContactAddress).toBeInTheDocument();
      expect(footerContactAddress).toHaveTextContent(
         "115093, г. Москва, ул. Павловская, д.27, стр.1"
      );
   });

   test("render footer social links", () => {
      // Arrange
      render(
         <MemoryRouter>
            <Footer />
         </MemoryRouter>
      );
      // Act
      const footerSocialLinks = screen.getAllByTestId(
         "footer-contact-social-link"
      );

      // Assert
      expect(footerSocialLinks).toHaveLength(5);
      for (const el of footerSocialLinks) {
         expect(el).toBeInTheDocument();
      }
   });
});
