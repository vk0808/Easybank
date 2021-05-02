import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";

import { posts } from "../components/blog/blogPost";

function SingleBlog() {
  const { id } = useParams();
  const specificPost = posts.filter((post) => JSON.stringify(post.id) === id);

  return (
    <>
      {specificPost.map((post) => {
        const { id, img, photo, title, description, author, date } = post;
        return (
          <div className="specific-post" key={id}>
            <h1 className="title">{title}</h1>
            <div className="author-details">
              <p>
                <span>by </span>
                <BiUserCircle /> {author}
              </p>
              <p className="date">{date}</p>
            </div>
            <figure>
              <img src={`../images/${img}`} alt="" />
              <figcaption>Photo by {photo}</figcaption>
            </figure>
            <p className="description">
              {description.split("\n\n").map((paragraph) => (
                <p className="para">
                  {paragraph
                    .split("\n")
                    .reduce((total, line) => [total, <br />, line])}
                </p>
              ))}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default SingleBlog;
