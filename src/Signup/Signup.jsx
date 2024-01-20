import './Signup.css';
import logo from '../assets/logo.png';

function Signup({ onTogglePage }) {

    return (

        <main className="main-section">
            <form action="#" id="users" method="GET" target="_blank" >

                <img src={logo} alt="Logo" />

                <h3>Sign up to see photos and videos from your friends.</h3>

                <button id='fb-signup'>Log in with Facebook</button>

                <div id='or-section'>
                    <div id='left-line'></div>
                    <div>OR</div>
                    <div id='right-line'></div>
                </div>

                <input type="email" id="Email" name="myEmail" placeholder="Mobile number or Email " />

                <input type="text" id="Name" name="myName" placeholder="Full name" />

                <input type="text" id="Username" name="myUsername" placeholder="Username" />

                <input type="password" id="Password" name="myPassword" placeholder="Password" />

                <button className="form-button" type="submit">Sign up</button>

            </form>

            <div className="footer">
                <h3>Have an account?</h3>
                <button className="login-button" onClick={onTogglePage} >Log in</button>
            </div>

        </main>
    );

};




export default Signup;
