import React from "react";
import "./interview.css";

interface InterviewProps {
   question: React.ReactNode;
   answer?: React.ReactNode;
}

const Interview: React.FC<InterviewProps> = ({ question, answer }) => {
   return (
      <section className="interview">
         <h3 className="interview__question">{question}</h3>
         <div className="interview__answer">
            <div className="interview__answer-text">{answer}</div>
         </div>
      </section>
   );
};

export default Interview;
