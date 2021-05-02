import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";

import { posts } from "../components/blog/blogPost";

function PostArticle({ id, img, title, author }) {
  return (
    <>
      <div className="post">
        <figure>
          <img src={`../images/${img}`} alt={author} />
        </figure>
        <div className="inner-detail">
          <Link className="article-title" to={`/article/${id}`}>
            <h3>{title}</h3>
          </Link>
          <figcaption>By {author}</figcaption>
        </div>
      </div>
    </>
  );
}

function SingleBlog() {
  const { id } = useParams();
  const specificPost = posts.filter((post) => JSON.stringify(post.id) === id);
  const nextPost = posts.filter(
    (post) => JSON.stringify(post.id) === JSON.stringify(parseInt(id) + 1)
  );
  const previousPost = posts.filter(
    (post) => JSON.stringify(post.id) === JSON.stringify(parseInt(id) - 1)
  );

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
      <div className="other-post">
        <div className="previous-post">
          {previousPost.map((item) => {
            const { id, img, title, author } = item;
            return (
              <PostArticle
                key={id}
                id={id}
                img={img}
                title={title}
                author={author}
              />
            );
          })}
        </div>
        {nextPost.map((item) => {
          const { id, img, title, author } = item;
          return (
            <PostArticle
              key={id}
              id={id}
              img={img}
              title={title}
              author={author}
            />
          );
        })}
        <div className="next-post"></div>
      </div>
    </>
  );
}

export default SingleBlog;
