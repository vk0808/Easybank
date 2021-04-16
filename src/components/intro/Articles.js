import React from "react";
import { article } from "./article";
import img_1 from "../../images/image-currency.jpg";
import img_2 from "../../images/image-restaurant.jpg";
import img_3 from "../../images/image-plane.jpg";
import img_4 from "../../images/image-confetti.jpg";

function Articles() {
  return (
    <section className="article">
      <h1 className="head">Latest Articles</h1>
      {article.map((post) => {
        const { id, img, author, title, description } = post;
        return (
          <div key={id} className="post">
            <figure>
              {id === 1 && <img src={img_1} alt="" />}
              {id === 2 && <img src={img_2} alt="" />}
              {id === 3 && <img src={img_3} alt="" />}
              {id === 4 && <img src={img_4} alt="" />}
              <figcaption>By {author}</figcaption>
            </figure>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Articles;
