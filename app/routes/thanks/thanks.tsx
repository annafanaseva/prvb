import Button from "~/components/button/Button";
import "./thanks.css";

function Thanks() {
   return (
      <div>
         {/* Meta */}
         <title>Спасибо за заявку</title>
         <meta name="robots" content="noindex, nofollow" />

         {/* Content */}
         <section className="thanks-page">
            <div className="thanks-page__inner-wrapper">
               <h1 className="thanks-page__title" data-testid="thanks-title">
                  Спасибо!
                  <br />
                  <span className="highlight">Ваша заявка отправлена</span>
               </h1>
               <p className="thanks-page__text">
                  Мы свяжемся с вами в ближайшее время, чтобы обсудить
                  детали.
               </p>
               <Button
                  label="Вернуться на сайт"
                  color="orange"
                  type="link"
                  href="/"
               />
            </div>
         </section>
      </div>
   );
}
export default Thanks;
