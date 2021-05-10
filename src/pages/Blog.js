import React from "react";

import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Posts from "../components/blog/Posts";

function Blog() {
  return (
    <>
      <Navbar />
      <Posts />
      <Footer />
    </>
  );
}

export default Blog;
