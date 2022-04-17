import { React } from "react";
import { createRoot } from "react-dom/client";
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
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

// GraphQL logic
const link = createHttpLink({
  uri: "https://admin.maysengreenwood.me/graphql",
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: "no-cors",
  },
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
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
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/cv" element={<MaysenCV />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route
          path="/admin"
          element={() => {
            window.location.href = "https://admin.maysengreenwood.me";
            return null;
          }}
        />
        <Route path="*" component={<Navigate from="*" to="/" />} />
      </Routes>
    </ApolloProvider>

    <Footer />
  </Router>
);
