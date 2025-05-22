//import Header from "../components/header.jsx";
import facebookLogo from "../assets/facebookLogo.png";
import linkedin from "../assets/linkedin.png";
import googleLogo from "../assets/googleLogo.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';



function Login() {

    //    const userReference = useRef();
        const navigateSuccess = useNavigate();
        const errorReference = useRef();
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [errorDisplay, setErrorDisplay] = useState('');
        const [successDisplay, setSuccessDisplay] = useState(false);


     //  useEffect(() => {
      //      userReference.current.focus();
     //   }, [])

        useEffect(() => {
            setErrorDisplay('');        //empty out prexisting error messge after user starts changing their incorrect username and password input
        }, [username, password])

        const SubmitFunc = async (e) => {
            e.preventDefault();
            console.log(username, password);
            setUsername('');
            setPassword('');

            navigateSuccess('/Success')
            setSuccessDisplay(true);

            
        }

     

    return (
    <>
  
        <section>
            <p ref={errorReference} className={errorDisplay ? "errordisplay" : "hideErrordsplay" } > {errorDisplay} </p>
        </section>

        <div className="techbodyparent">
            <div className="techsidebodyleft"> </div>
            <div className="techsidebodyright"> </div>
            
        </div>

        <div className="body">
            <div className = "centercircuitbg">

         
                <div className="content">

                    <form onSubmit = {SubmitFunc}>
                                <div className = "inputs">
                                    <input

                                        id="usernameInputBox"
                                        //ref={userReference}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        value={username}
                                        placeholder="Username/Email Address"
                                    />  

                                    <input 
                                        type ="password" 
                                        id="passwordInputBox" 
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        value={password}
                                        placeholder="password"
                                    />

                                </div>




                            <div className = "memory">
                                <div className = "remember">
                                <input type="checkbox" id="rememberMe"/>
                                <label htmlFor="rememberMe" id="rememberMe"> Remember Me</label>
                                </div>
                                <Link to= "/forgotpw" id="forgotPass"> Forgot Password?</Link>
                            </div>


                            <div className = "log">
                                

                            
                                <button type="submit" id="logbutton"> Log-In </button> 
                                    <p className="orLoginWith"> Or log in with:</p><br></br>

                                    <div className ="loginOptions"> 
                                    <img src= {facebookLogo} alt="facebook logo" className="smlogos"></img>
                                    <img src= {linkedin} alt="linkedin logo" className="smlogos"></img>
                                    <img src= {googleLogo} alt="google logo" className="smlogos"></img>
                                    </div>

                            <p className="newUser">New User?</p>
                            <Link to= "/register" id="signup">Sign up for free</Link>
                            
                            </div>
                    </form>
                    

                </div>
            </div>
        </div>
   



    </>

        )

}

export default Login



