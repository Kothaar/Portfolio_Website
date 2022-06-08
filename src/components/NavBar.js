import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <header className="bg-zinc">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className={
              "inline-flex name-text text-3xl py-8 px-3 mr-4 tracking-widest font-bold name-text hover:text-green"
            }
          >
            Kelly Burton
          </NavLink>
          <NavLink
            to="/about"
            className={
              "inline-flex items-center text-2xl p-5 m-3 hover:text-green rounded"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={
              "inline-flex items-center text-2xl p-5 m-3 hover:text-green rounded"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={
              "inline-flex  items-center text-2xl p-5 m-3 hover:text-green rounded"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/blog"
            className={
              "inline-flex items-center text-2xl p-5 m-3 hover:text-green rounded"
            }
          >
            Blog
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/kburton501"
            className="mr-4"
            target="_blank"
            fgColor="#d99f59"
            bgColor="#455052"
            style={{ height: 35, width: 45 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/kellyb501/"
            className="mr-4"
            target="_blank"
            fgColor="#d99f59"
            bgColor="#455052"
            style={{ height: 35, width: 45 }}
          />
          <SocialIcon
            url=""
            className="mr-4"
            target="_blank"
            fgColor="#d99f59"
            bgColor="#455052"
            style={{ height: 35, width: 45 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
