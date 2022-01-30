import "./Landing.scss";
import BillboardImage from "../Media/billboard-img.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [getStartedShown, setGetStartedShown] = useState(true);

  return (
    <>
      <section class="billboard page-width">
        <header>{/*<span>BetterDays</span>*/}</header>
        <div>
          <img src={BillboardImage}></img>
          <h1>
            Escape To Your <br></br>World of Calm
          </h1>
          <p>Lorem ipsum dolor sit amet elit </p>
        </div>
        {getStartedShown ? (
          <a class="button" onClick={() => setGetStartedShown(false)}>
            Get Started
          </a>
        ) : (
          <div class="log-in-container">
            <Link to="/login" class="button">
              Log In
            </Link>
            <Link to="/signup" class="button">
              Sign Up
            </Link>
          </div>
        )}
      </section>

      <div class="custom-shape-divider-top-1643284700">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <section class="about"></section>
    </>
  );
};

export default Landing;
