import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";

import { posts } from "../components/blog/blogPost";

function SingleBlog() {
  const { id } = useParams();
  const specificPost = posts.filter((post) => JSON.stringify(post.id) === id);
  const count = 0;

  return (
    <>
      {specificPost.map((post) => {
        const { id, img, title, description, author, date } = post;
        return (
          <div className="specific-post" key={id}>
            <h1 className="title">{title}</h1>
            <p>
              <BiUserCircle /> {author}
            </p>
            <p>{date}</p>
            <figure>
              <img src={`../images/${img}`} alt="" />
            </figure>
            <p className="description">
              {description.split("\n\n").map((paragraph) => (
                <p className={`para-${count}`}>
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
