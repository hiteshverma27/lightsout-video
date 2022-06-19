import React from "react";
import { categories } from "../../backend/db/categories";
import { accountLinks } from "../../backend/db/accountLinks";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../contexts";
import "./Footer.css";

function FooterLink({ title, _id }) {
  const { setCategoriesToFilter } = useVideo();
  const navigate = useNavigate();
  const categoryClickHandler = (category) => {
    setCategoriesToFilter([category]);
    navigate("/explore");
  };
  return (
    <li className="my-1" key={_id}>
      <button
        className="footer-nav-links"
        onClick={(e) => categoryClickHandler(title)}
      >
        {title}
      </button>
    </li>
  );
}
function AccountLink({ title, _id, route }) {
  const navigate = useNavigate();
  return (
    <li className="my-1" key={_id}>
      <button className="footer-nav-links" onClick={(e) => navigate(route)}>
        {title}
      </button>
    </li>
  );
}
function Footer() {
  return (
    <footer className="w-100vw pb-2 footer">
      <div className="mx-5 flex flex-wrap flex-space_between-center">
        <div className="mb-auto my-5 footer-links">
          <a href="https://github.com/index.html">
            <h2>LightsOut</h2>
          </a>
          <p>Its LightsOut and away we go...</p>
          <p className="mt-8">
            Made by Hitesh, supercharged by{" "}
            <a
              href="https://github.com/ttps://orcaui.netlify.app/"
              className="font-size-larger bold text-underline"
            >
              Orca UI.
            </a>
          </p>
          <p>© 2022, All rights reserved</p>
          <hr className="mt-2 hr-color-accent" />
          <a href="https://twitter.com/hitesh27v">
            <img
              className="m-1 mt-3 ml-0"
              src="https://raw.githubusercontent.com/hiteshverma27/LightsOut-Store/3ebd7f90cec2ba41fb8d818fa62ac7603fdc3233/Assets/twitter.svg"
              alt="twitter"
            />
          </a>
          <a href="https://github.com/ttps://github.com/hiteshverma27">
            <img
              className="m-1 mt-3"
              src="https://raw.githubusercontent.com/hiteshverma27/LightsOut-Store/3ebd7f90cec2ba41fb8d818fa62ac7603fdc3233/Assets/github.svg"
              alt="github"
            />
          </a>
          <a href="https://github.com/ttps://www.linkedin.com/in/hitesh-verma-8727921b2/">
            <img
              className="m-1 mt-3"
              src="https://raw.githubusercontent.com/hiteshverma27/LightsOut-Store/3ebd7f90cec2ba41fb8d818fa62ac7603fdc3233/Assets/linkedin.svg"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="mb-auto my-5">
          <h2>Catagory</h2>
          <hr className="my-2 hr-color-accent" />
          <ul className="font-size-large font-color-grey">
            {categories.map(({ categoryName, link, _id }) => (
              <FooterLink title={categoryName} link={link} key={_id} />
            ))}
          </ul>
        </div>
        <div className="mb-auto my-5">
          <h2>Account</h2>
          <hr className="my-2 hr-color-accent" />
          <ul className="font-size-large font-color-grey">
            {accountLinks.map(({ title, _id, route }) => (
              <AccountLink title={title} key={_id} route={route} />
            ))}
          </ul>
        </div>
        <div className="mb-auto my-5 pr-3">
          <h2>Contact</h2>
          <hr className="my-2 hr-color-accent" />
          <ul className="font-size-large font-color-grey">
            <li className="my-1">
              <button
                className="footer-nav-links"
              >
                +91-9888888888
              </button>
            </li>
            <li className="my-1">
              <button
                className="footer-nav-links"
              >
                team@hitesh.com
              </button>
            </li>
            <li className="my-1">
              <button
                className="footer-nav-links"
              >
                Indore, India
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
