import React, { useState } from "react";
import Button from "../button/Button";
import { Link, useNavigate } from "react-router";
import image from "/contact-us-image.jpg";
import "./contact-us.css";

interface ContactUsProps {
   title: string;
   subtitle: string;
}

type FormField = "name" | "telephone" | "company" | "mail";
type FormErrors = Partial<Record<FormField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Russian numbers: +7 / 8 / without prefix, 10 digits after it
const PHONE_PATTERN = /^(\+?7|8)?\d{10}$/;

function validateField(field: FormField, value: string): string | undefined {
   const trimmed = value.trim();
   if (!trimmed) return "Заполните поле";

   if (field === "telephone") {
      const hasOnlyPhoneChars = /^[\d\s()+-]+$/.test(trimmed);
      const normalized = trimmed.replace(/[\s()-]/g, "");
      if (!hasOnlyPhoneChars || !PHONE_PATTERN.test(normalized)) {
         return "Введите телефон в формате +7 999 123-45-67";
      }
   }
   if (field === "mail" && !EMAIL_PATTERN.test(trimmed)) {
      return "Введите почту в формате name@example.ru";
   }
   return undefined;
}

function ContactUs({ title, subtitle }: ContactUsProps) {
   const initialState = {
      name: "",
      telephone: "",
      company: "",
      mail: "",
   };
   const [formState, setFormState] = useState(initialState);
   const [errors, setErrors] = useState<FormErrors>({});
   const navigate = useNavigate();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormState((prvState) => ({
         ...prvState,
         [name]: value,
      }));
      // Re-check only fields that already show an error, so it disappears once fixed
      if (errors[name as FormField]) {
         setErrors((prev) => ({
            ...prev,
            [name]: validateField(name as FormField, value),
         }));
      }
   };

   const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      // Don't nag about empty fields until the user tries to submit
      if (!value.trim()) return;
      setErrors((prev) => ({
         ...prev,
         [name]: validateField(name as FormField, value),
      }));
   };
   // console.log(import.meta.env.VITE_TEST_API);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newErrors: FormErrors = {};
      (Object.keys(formState) as FormField[]).forEach((field) => {
         const error = validateField(field, formState[field]);
         if (error) newErrors[field] = error;
      });
      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) return;

      try {
         const response = await fetch(import.meta.env.VITE_TEST_API, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               fields: {
                  TITLE: `Лид с сайта (${formState.name})`,
                  NAME: formState.name,
                  PHONE: [{ VALUE: formState.telephone, VALUE_TYPE: "WORK" }],
                  EMAIL: [{ VALUE: formState.mail, VALUE_TYPE: "WORK" }],
                  COMPANY_TITLE: formState.company,
               },
               params: { REGISTER_SONET_EVENT: "Y" },
            }),
         });

         const result = await response.json();
         // console.log("Lead created:", result);
         if (result.result) {
            // Yandex Metrika goal: fires only after the lead is created in CRM
            (window as any).ym?.(101444747, "reachGoal", "lead");
            setFormState(initialState);
            navigate("/thanks");
         } else {
            console.log("Error occur here");
            alert("Ошибка при отправке, попробуйте снова.");
         }
      } catch (err) {
         console.error("Ошибка отправки:", err);
         alert("Не удалось отправить заявку.");
      }
   };

   return (
      <section className="contact-us" id="contact-form">
         <div className="contact-us__inner-wrapper">
            <div className="contact-us__body">
               <div className="contact-us__image-wrapper">
                  <img
                     src={image}
                     alt="An image showing a laptop on the table with a chair"
                  />
               </div>
               <div>
                  <h4
                     className="contact-us__form-title"
                     data-testid="contact-us-form-title"
                  >
                     {title}
                  </h4>
                  <h5
                     className="contact-us__form-sub-title"
                     data-testid="contact-us-sub-form-title"
                  >
                     {subtitle}
                  </h5>
                  <form
                     className="contact-us__form"
                     onSubmit={handleSubmit}
                     noValidate
                  >
                     <label htmlFor="name">
                        <input
                           type="text"
                           id="name"
                           name="name"
                           value={formState.name}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                           aria-invalid={!!errors.name}
                           aria-describedby={
                              errors.name ? "name-error" : undefined
                           }
                           className={[
                              "contact-us__form-input",
                              errors.name ? "invalid" : "",
                           ].join(" ")}
                           placeholder="Имя"
                           data-testid="contact-us-form-input"
                        />
                        {errors.name && (
                           <span
                              id="name-error"
                              className="contact-us__form-error"
                              data-testid="contact-us-form-error"
                           >
                              {errors.name}
                           </span>
                        )}
                     </label>
                     <label htmlFor="telephone">
                        <input
                           type="tel"
                           id="telephone"
                           name="telephone"
                           value={formState.telephone}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                           aria-invalid={!!errors.telephone}
                           aria-describedby={
                              errors.telephone ? "telephone-error" : undefined
                           }
                           className={[
                              "contact-us__form-input",
                              errors.telephone ? "invalid" : "",
                           ].join(" ")}
                           placeholder="Телефон"
                           data-testid="contact-us-form-input"
                        />
                        {errors.telephone && (
                           <span
                              id="telephone-error"
                              className="contact-us__form-error"
                              data-testid="contact-us-form-error"
                           >
                              {errors.telephone}
                           </span>
                        )}
                     </label>
                     <label htmlFor="mail">
                        <input
                           type="email"
                           id="mail"
                           name="mail"
                           value={formState.mail}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                           aria-invalid={!!errors.mail}
                           aria-describedby={
                              errors.mail ? "mail-error" : undefined
                           }
                           className={[
                              "contact-us__form-input",
                              errors.mail ? "invalid" : "",
                           ].join(" ")}
                           placeholder="Почта"
                           data-testid="contact-us-form-input"
                        />
                        {errors.mail && (
                           <span
                              id="mail-error"
                              className="contact-us__form-error"
                              data-testid="contact-us-form-error"
                           >
                              {errors.mail}
                           </span>
                        )}
                     </label>
                     <label htmlFor="company">
                        <input
                           type="text"
                           id="company"
                           name="company"
                           value={formState.company}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           required
                           aria-invalid={!!errors.company}
                           aria-describedby={
                              errors.company ? "company-error" : undefined
                           }
                           className={[
                              "contact-us__form-input",
                              errors.company ? "invalid" : "",
                           ].join(" ")}
                           placeholder="Компания"
                           data-testid="contact-us-form-input"
                        />
                        {errors.company && (
                           <span
                              id="company-error"
                              className="contact-us__form-error"
                              data-testid="contact-us-form-error"
                           >
                              {errors.company}
                           </span>
                        )}
                     </label>
                     <div className="contact-us__form-footer">
                        <Button
                           label="Отправить"
                           color="orange"
                           type="submit"
                        />
                        <p className="contact-us__form-term">
                           Нажимая кнопку "Отправить", я даю согласие на
                           <Link
                              className="contact-us__form-term__link"
                              to="/consent-page"
                           >
                              {" "}
                              обработку моих персональных данных
                           </Link>
                        </p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ContactUs;
