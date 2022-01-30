import './SignUp.scss'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section class="SignUp page-width">
      <Link to="/">BetterDays</Link>
      <h1>Sign Up</h1>
      <input></input>
      <input></input>
      <a class="button">Sign Up</a>
      <Link to="/login">Log In Instead</Link>
    </section>
  );
};

export default SignUp;
