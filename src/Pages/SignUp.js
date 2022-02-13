import './SignUp.scss'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section class="SignUp page-width">
      <Link to="/">BetterDays</Link>
      <h1>Sign Up</h1>
      <input placeholder='Name'></input>
      <input placeholder='Email'></input>
      <input placeholder='Password'></input>
      <a class="button">Sign Up</a>
      <Link to="/login" class="switch">Log In Instead</Link> 
    </section>
  );
};

export default SignUp;
