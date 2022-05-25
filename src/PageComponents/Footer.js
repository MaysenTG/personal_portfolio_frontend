import { React, useState } from "react";
import { Link } from "react-router-dom";

const dropdownLinkStyle = {
  maxWidth: "92%",
};

const buttonToDropdown = {
  all: "unset",
  fontSize: "18px",
  cursor: "pointer",
  margin: "0px 10px",
  hover: {
    color: "#0a58ca",
  },
};

function Footer() {
  const [hover, setHover] = useState(false);
  
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="links">
          <Link to="/">About me</Link>
          <Link to="/contact">Contact me</Link>
          <Link to="/my-projects">Projects</Link>

          <button
            className="dropdown-toggle"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            type="button"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            style={{
              ...buttonToDropdown,
              ...(hover ? buttonToDropdown.hover : null),
            }}
          >
            <span style={{textDecoration: 'underline' }}>Other</span>
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="https://admin.maysengreenwood.me" style={dropdownLinkStyle}>
              Admin
            </a>
            <Link className="dropdown-item" to="/privacy-policy" style={dropdownLinkStyle}>
              Privacy policy
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <a
          href="https://www.facebook.com/maysen.greenwood"
          target="_blank"
          rel="noreferrer"
        >
          <i style={{ content: "url('https://ik.imagekit.io/maysentg/icons8-facebook-240.png')" }} className="icon"></i>
        </a>
        <a
          href="https://www.instagram.com/maysengreenwood/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <i style={{ content: "url('https://ik.imagekit.io/maysentg/tr:f-png/icons8-instagram-240.png')" }} className="icon"></i>
        </a>
        <a href="https://github.com/MaysenTG" target="_blank" rel="noreferrer">
        <i style={{ content: "url('https://ik.imagekit.io/maysentg/tr:f-png/icons8-github-256.png')" }} className="icon"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
