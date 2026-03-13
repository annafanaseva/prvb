import React from "react";
import "./expert-comment.css";

interface ExpertCommentProps {
   sectionTitle: string;
   sectionImage: string;
   comment: string;
   name: string;
   alt?: string;
}

function ExpertComment({
   sectionTitle,
   sectionImage,
   comment,
   name,
   alt,
}: ExpertCommentProps) {
   return (
      <div className="expert-comment">
         <h5 className="expert-comment__title">
            <img
               className="expert-comment__photo"
               src={sectionImage}
               alt={alt ? alt : sectionTitle}
               loading="lazy"
            />
            {sectionTitle}
         </h5>

         <p className="expert-comment__text">{comment}</p>

         <p className="expert-comment__author">{name}</p>
      </div>
   );
}

export default ExpertComment;
