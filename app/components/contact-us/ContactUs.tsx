import React, { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router";
import image from "/contact-us-image.jpg";
import "./contact-us.css";

interface ContactUsProps {
   title: string;
   subtitle: string;
}

function ContactUs({ title, subtitle }: ContactUsProps) {
   const initialState = {
      name: "",
      telephone: "",
      company: "",
      mail: "",
   };
   const [formState, setFormState] = useState(initialState);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormState((prvState) => ({
         ...prvState,
         [name]: value,
      }));
   };
   // console.log(import.meta.env.VITE_TEST_API);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

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
            // console.log("Спасибо! Ваша заявка отправлена.");
            alert("Спасибо! Ваша заявка отправлена.");
            setFormState(initialState);
         } else {
            // console.log("Ошибка при отправке, попробуйте снова.");
            alert("Ошибка при отправке, попробуйте снова.");
         }
      } catch (err) {
         console.error("Ошибка отправки:", err);
         alert("Не удалось отправить заявку.");
      }
   };

   return (
      <section className="contact-us">
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
                  <form className="contact-us__form" onSubmit={handleSubmit}>
                     <label htmlFor="name">
                        <input
                           type="text"
                           id="name"
                           name="name"
                           value={formState.name}
                           onChange={handleChange}
                           className="contact-us__form-input"
                           placeholder="Имя"
                           data-testid="contact-us-form-input"
                        />
                     </label>
                     <label htmlFor="telephone">
                        <input
                           type="text"
                           id="telephone"
                           name="telephone"
                           value={formState.telephone}
                           onChange={handleChange}
                           className="contact-us__form-input"
                           placeholder="Телефон"
                           data-testid="contact-us-form-input"
                        />
                     </label>
                     <label htmlFor="mail">
                        <input
                           type="mail"
                           id="mail"
                           name="mail"
                           value={formState.mail}
                           onChange={handleChange}
                           className="contact-us__form-input"
                           placeholder="Почта"
                           data-testid="contact-us-form-input"
                        />
                     </label>
                     <label htmlFor="company">
                        <input
                           type="text"
                           id="company"
                           name="company"
                           value={formState.company}
                           onChange={handleChange}
                           className="contact-us__form-input"
                           placeholder="Компания"
                           data-testid="contact-us-form-input"
                        />
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
