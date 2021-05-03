import React from "react";
import { Link } from "react-router-dom";

import { article } from "./article";

function Articles() {
  return (
    <section className="feature article">
      <h1 className="head">Latest Articles</h1>
      <div className="posts feature-container">
        {article.map((post) => {
          const { id, img, author, title, description } = post;
          return (
            <div key={id} className="post">
              <figure>
                <img src={img} alt="" />
              </figure>
              <div className="inner-detail">
                <figcaption>By {author}</figcaption>
                <Link className="article-title" to={`/article/${id}`}>
                  <h2>{title}</h2>
                </Link>
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
