import React from "react";
import { article } from "./article";
import img_1 from "../../images/image-currency.jpg";
import img_2 from "../../images/image-restaurant.jpg";
import img_3 from "../../images/image-plane.jpg";
import img_4 from "../../images/image-confetti.jpg";

function Articles() {
  return (
    <section className="feature article">
      <h1 className="head">Latest Articles</h1>
      <div className="posts feature-container">
        {article.map((post) => {
          const { id, author, title, description } = post;
          return (
            <div key={id} className="post">
              <figure>
                {id === 1 && <img src={img_1} alt="" />}
                {id === 2 && <img src={img_2} alt="" />}
                {id === 3 && <img src={img_3} alt="" />}
                {id === 4 && <img src={img_4} alt="" />}
              </figure>
              <div className="inner-detail">
                <figcaption>By {author}</figcaption>
                <a className="article-title" href="#">
                  <h2>{title}</h2>
                </a>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Articles;
