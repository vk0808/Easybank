import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Privacy from "./components/privacy/Privacy";
import Terms from "./components/privacy/Terms";
import SingleBlog from "./pages/SingleBlog";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/career">
          <Career />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/privacy_policy">
          <Privacy />
        </Route>
        <Route path="/article/:id" children={<SingleBlog />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
