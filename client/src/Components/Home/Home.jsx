import { React } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const date = new Date().getFullYear;
  return (
    <div className="main_content">
      <div className="main_description">
        <h1 className="sub_title">Pokemon Search App</h1>
        <p className="intro">
          Search among the most famous pokemons, find their features, compare
          their <span className="marked">power</span> and create your own
          pokemon. Choose between an <span className="marked">attack</span>{" "}
          level and <span className="marked">4</span> additional features, and
          get the best pokemon in Pallet <span className="marked">Town</span>!
        </p>
        <div className="main_link">
          <Link to="/main">
            <button className="main_btn">
              Get Started
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        </div>
        <img
          src="images/landing-image1.png"
          alt="ash-picture"
          className="main_picture"
        />
      </div>
    </div>
  );
};
