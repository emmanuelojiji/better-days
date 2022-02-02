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
            Escape to your world of calm
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
            <Link to="/signup" class="button sign-up">
              Sign Up
            </Link>
          </div>
        )}
      </section>

    </>
  );
};

export default Landing;
