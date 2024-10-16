import React from "react";
import "./Layout.css";
import data from "../data.json";
import { Link, useLocation } from "react-router-dom";

// import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const navItems = data.navbar;
  const location = useLocation();
  const developedBy = data.footer.developed;
  const copyright = data.footer.title;
  const phone = data.footer.phone;
  const year = new Date().getFullYear();

  return (
    <div>
      <header></header>
      <main>{children}</main>
      <footer>
        <div>
          <img id="logo" src="images/Logo.svg" alt="" />
          <div className="footer-menu">
            <ul>
              {navItems.slice(0, 6).map((item) => (
                <li key={item.id} className="items">
                  <Link
                    className={location.pathname === item.url ? "active" : ""}
                    to={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <img id="line-footer" src="images/Linefooter.svg" alt="" />
          </div>
          <div className="footer-contact">
            <div className="email-phone">
              <img src="images/icon-email.svg" alt="" />
              <a href="mailto:letihbeauty@gmail.com">letihbeauty@gmail.com</a>
            </div>
            <div className="email-phone">
              <img src="images/icon-phone.svg" alt="" />
              <p>{phone}</p>
            </div>
          </div>
        </div>
        <p id="copyright">
          COPYRIGHT © <span>{year}</span> {copyright}
          <br></br>
          <span>{developedBy.title}</span>{" "}
          <a href={developedBy.url} target="_blank" rel="noreferrer">
            {developedBy.name}
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
