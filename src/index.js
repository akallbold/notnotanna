/*!

=========================================================
* Paper Kit PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-pro-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import Sections from "views/Sections.js";
import Home from "views/Presentation.js";
import AboutUs from "views/examples/AboutUs.js";
import AddProduct from "views/examples/AddProduct.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import Discover from "views/examples/Discover.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Error404 from "views/examples/Error404.js";
import Error422 from "views/examples/Error422.js";
import Error500 from "views/examples/Error500.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import SearchWithSidebar from "views/examples/SearchWithSidebar.js";
import Settings from "views/examples/Settings.js";
import TwitterRedesign from "views/examples/TwitterRedesign.js";
import MarcusHaikuMain from "projects/06_marcus_haiku/MarcusHaikuMain.js"
import MainProjectViewContainer from 'projects/MainProjectViewContainer'
import CertificationsPage from 'views/presentation-sections/CertificationsPage'
import WorkPage from 'views/presentation-sections/WorkPage'
import EducationPage from 'views/presentation-sections/EducationPage'
// others

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* my stuff */}
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/presentation"
        render={(props) => <Home {...props} />}
      />
      <Route
        path="/certifications"
        render={(props) => <CertificationsPage {...props} />}
      />
      <Route
        path="/work"
        render={(props) => <WorkPage {...props} />}
      />
      <Route
        path="/education"
        render={(props) => <EducationPage {...props} />}
      />
      <Route path="/meditations" render={(props) => <MainProjectViewContainer project="meditations" />} />

{/* their stuff */}
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route path="/sections" render={(props) => <Sections {...props} />} />

      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Route
        path="/add-product"
        render={(props) => <AddProduct {...props} />}
      />

      <Route path="/blog-post" render={(props) => <BlogPost {...props} />} />
      <Route path="/blog-posts" render={(props) => <BlogPosts {...props} />} />
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route path="/discover" render={(props) => <Discover {...props} />} />
      <Route path="/e-commerce" render={(props) => <Ecommerce {...props} />} />
      <Route path="/error-404" render={(props) => <Error404 {...props} />} />
      <Route path="/error-422" render={(props) => <Error422 {...props} />} />
      <Route path="/error-500" render={(props) => <Error500 {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route
        path="/product-page"
        render={(props) => <ProductPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/search-with-sidebar"
        render={(props) => <SearchWithSidebar {...props} />}
      />
      <Route path="/settings" render={(props) => <Settings {...props} />} />
      <Route
        path="/twitter-redesign"
        render={(props) => <TwitterRedesign {...props} />}
      />
      {/* home route */}
        <Route
        path="/"
        render={(props) => <Home {...props} />}
      />
      <Redirect to="/presentation" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
