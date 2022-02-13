import "./LogIn.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section class="Login page-width">
        {/*<Link to="/">BetterDays</Link> */}
        <h1>Log In</h1>

        <input placeholder='Email'></input>
      <input placeholder='Password'></input>
        <Link to="/dashboard" class="button">Log In</Link>
        <Link to="/signup" class="switch">Sign Up Instead</Link>
      </section>
    </>
  );
};

export default Login;
