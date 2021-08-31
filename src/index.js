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
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import Index from "views/Index.js";
import Home from "views/Presentation.js";
import CertificationsPage from 'views/presentation-sections/CertificationsPage'
import WorkPage from 'views/presentation-sections/WorkPage'
import EducationPage from 'views/presentation-sections/EducationPage'
import Stickers from 'views/examples/Stickers'
import ErrorSummary from 'views/examples/ErrorSummary'
import ErrorPage from 'views/examples/ErrorPage'
import MarcusHaikuMain from "projects/marcus_haiku/MarcusHaikuMain";
import FavoriteThings from "projects/favorite_things/FavoriteThings";

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

ReactDOM.render(
  <HashRouter onUpdate={hashLinkScroll}>
    <Switch>
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
        path="/error-page"
        render={(props) => <ErrorPage {...props} />}
      />
      <Route path="/error-summary" render={(props) => <ErrorSummary {...props} />} />
      <Route
        path="/work"
        render={(props) => <WorkPage {...props} />}
      />
          <Route
        path="/stickers"
        render={(props) => <Stickers {...props} />}
      />
      <Route
        path="/education"
        render={(props) => <EducationPage {...props} />}
      />
      <Route path="/meditations" render={(props) => <MarcusHaikuMain {...props}/>} />
      {/* <Route path="/livewire-summary" render={(props) => <LiveWireSummary  {...props}/>} /> */}
      <Route path="/favorite-things" render={(props) => <FavoriteThings  {...props}/>} />
        <Route
        path="/"
        render={(props) => <Home {...props} />}
      />
      <Redirect to="/presentation" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
