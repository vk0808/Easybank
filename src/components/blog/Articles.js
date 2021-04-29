import React from "react";
import { Link } from "react-router-dom";

import { posts } from "./blogPost";
import img_1 from "../../images/image-currency.jpg";
import img_2 from "../../images/image-restaurant.jpg";
import img_3 from "../../images/image-plane.jpg";
import img_4 from "../../images/image-confetti.jpg";

function Articles({ query }) {
  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const postName = post.title.toLowerCase();
      return postName.includes(query);
    });
  };
  const filteredPosts = filterPosts(posts, query);

  return (
    <section className="feature article">
      <div className="posts feature-container">
        {filteredPosts.length !== 0 ? (
          filteredPosts.map((post) => {
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
                  <Link className="article-title" to={`/blog/${id}`}>
                    <h2>{title}</h2>
                  </Link>
                  <figcaption>By {author}</figcaption>
                  <p>{description}</p>
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
