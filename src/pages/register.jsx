import { Link } from 'react-router-dom';


function Register() {

    return (
    <>

        <div className = "inputs">
            <input id="usernameInputBox" placeholder="New Username/Email Address"/>  
        </div>

        <div className = "newinputs">
            <input id="newpwbox" placeholder="New Password"/>
            <input id="confirmpwbox" placeholder="Confirm Password"/>
        </div>

        <div className = "memory">
            <div className = "remember">
            <input type="checkbox" id="rememberMeBOX"/>
            <label htmlFor="rememberMe" id="rememberMe"> Remember Me</label>
            </div>
        </div>


        <div className = "register">

            <button type="button" id="logbutton"> Register</button>

        </div>

        <p className="have">Have an Account?</p>
        <Link to= "/login" id="loginhere">Log in here</Link>
  </>

    )
}

export default Register