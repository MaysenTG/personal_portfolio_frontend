import { React } from "react";
import ReactDOM from "react-dom";
import "./styling/bootstrap.min.css";
import Homepage from "./PageComponents/Homepage";
import Footer from "./PageComponents/Footer";
import MyProjects from "./PageComponents/MyProjects";
import ContactMe from "./PageComponents/ContactMe";
import MaysenCV from "./PageComponents/cv";
import PrivacyPolicy from "./PageComponents/PrivacyPolicy";

import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

// GraphQL logic
const link = createHttpLink({
  uri: "https://personal-portfolio-admin-api.herokuapp.com/graphql"
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors',
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <nav
      className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient"
      aria-label="Main website navigation"
    >
      <div className="container">
        <StyledLink className="navbar-brand logo" to="/">
          Maysen Greenwood
        </StyledLink>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navbarNav"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" id="navigationContainer">
            <li className="nav-item">
              <StyledLink className="nav-link active" to="/">
                Home
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink
                className="nav-link active"
                id="projects-nav-btn"
                to="/my-projects"
              >
                Projects
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink className="nav-link active" to="/cv">
                CV
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink className="nav-link active" to="/contact">
                Contact me
              </StyledLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/my-projects">
          <MyProjects />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
        <Route path="/cv">
          <MaysenCV />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route
          path="/admin"
          component={() => {
            window.location.href =
              "https://maysentg.github.io/personal-portfolio-admin/";
            return null;
          }}
        />
        <Route path="*">
          <Redirect from="*" to="/" />
        </Route>
      </Switch>
    </ApolloProvider>

    <Footer />
  </Router>,
  rootElement
);