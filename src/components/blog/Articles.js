import React from "react";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";

import { article } from "../intro/article";

function Articles({ query }) {
  const filterPosts = (article, query) => {
    if (!query) {
      return article;
    }

    return article.filter((post) => {
      const postName = post.title.toLowerCase();
      const postAuthor = post.author.toLowerCase();
      return postName.includes(query) || postAuthor.includes(query);
    });
  };
  const filteredPosts = filterPosts(article, query);

  return (
    <section className="feature article">
      <div className="posts feature-container">
        {filteredPosts.length !== 0 ? (
          filteredPosts.map((post) => {
            const { id, img, author, title, description } = post;
            return (
              <div key={id} className="post">
                <figure>
                  <img src={`.${img}`} alt={author} />
                </figure>
                <div className="inner-detail">
                  <Link className="article-title" to={`/article/${id}`}>
                    <h2>{title}</h2>
                  </Link>
                  <figcaption>By {author}</figcaption>
                  <p>
                    <LinesEllipsis
                      style={{ display: "inline" }}
                      text={description}
                      maxLine="2"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-post">
            <p>
              Can't find the post with <p>{query}</p>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Articles;
