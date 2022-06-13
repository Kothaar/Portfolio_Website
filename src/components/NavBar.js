import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <header className="">
      <div className=" flex flex-col md:flex-row justify-around md:grow text-white">
        <nav className="inline-flex ">
          <NavLink
            to="/"
            exact
            className={
              "inline-flex name-text underline decoration-2 decoration-solid underline-offset-8 hover:no-underline text-3xl p-3 md:py-8 md:px-3 md:mx-5 tracking-widest font-bold name-text hover:text-green"
            }
          >
            Kelly Burton
          </NavLink>
        </nav>
        <nav className="text-xl lg:text-2xl justify-center ">
          <NavLink
            to="/about"
            className={
              "inline-flex p-2 lg:p-5 lg:m-3 hover:text-green rounded hover:underline"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={
              "inline-flex p-2 lg:p-5 lg:m-3 hover:text-green rounded hover:underline"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={
              "inline-flex p-2 lg:p-5 lg:m-3 hover:text-green rounded hover:underline"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/test"
            className={
              "inline-flex p-2 lg:p-5 lg:m-3 hover:text-green rounded hover:underline"
            }
          >
            Test
          </NavLink>
        </nav>
        <div className="inline-flex justify-center lg:py-3 lg:px-3 lg:my-6">
          <SocialIcon
            url="https://github.com/kburton501"
            className="mr-4"
            target="_blank"
            fgColor="white"
            bgColor="#131313"
            style={{ height: 35, width: 45 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/kellyb501/"
            className="mr-4"
            target="_blank"
            fgColor="white"
            bgColor="#131313"
            style={{ height: 35, width: 45 }}
          />
          <SocialIcon
            url=""
            className="mr-4"
            target="_blank"
            fgColor="white"
            bgColor="#131313"
            style={{ height: 35, width: 45 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
