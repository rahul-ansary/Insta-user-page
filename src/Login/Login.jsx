
import './Login.css';
import logo from '../assets/logo.png';

function Login({ onTogglePage }) {


  return (
    <main className="main-section">

      <form action="#" id="users" method="GET" target="_blank">

        <img id='logo-img' src={logo} alt="Logo" />

        <input type="email" id="Email" name="myEmail" placeholder="Email or Mobile number" />

        <input type="password" id="Password" name="myPassword" placeholder="Password" />


        <button className="form-button" type="submit">Log in</button>

        <div id='or-section'>
          <div id='left-line'></div>
          <div>OR</div>
          <div id='right-line'></div>
        </div>

        <button id='fb-button'>Log in with Facebook</button>

        <p>Forgot password?</p>

      </form>
      <div className="footer">
        <h3>Don't have account?</h3>
        <button className="login-button" onClick={onTogglePage}>Sign up</button>
      </div>

    </main>
  )


};



export default Login;