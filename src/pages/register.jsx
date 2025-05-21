import { Link } from 'react-router-dom';
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from '../api/axios';


const usernameRqments = /^[a-zA-Z0-9]{4,30}$/;
const passwordRqments = /^.{4,12}$/;
const registrationURL = '/register';




function Register() {

    const userReference = useRef();
    const errorReference = useRef();


    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);


    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);


    const [confirmPassword, setConfirmPassword] = useState('');
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);


    const [errorDisplay, setErrorDisplay] = useState('');
    const [successDisplay, setSuccessDisplay] = useState(false);
    
    useEffect(() => {
        const userAnswer = usernameRqments.test(username)
        console.log(userAnswer);
        console.log(username);
        setValidUsername(userAnswer);
    }, [username])

    useEffect(() => {
        const pwdAnswer = passwordRqments.test(password)
        console.log(pwdAnswer);
        console.log(password);
        setValidPassword(pwdAnswer);
        const matched = password === confirmPassword;
        setValidConfirmPassword(matched);
    }, [password, confirmPassword])

    useEffect(() => {
        setErrorDisplay('');
    }, [username, password, confirmPassword])   // if user changes any of these parts, then the error message is cleared cuz user is now adjusting


    const submitFunc = async (e) => {
        e.preventDefault();
        const a = usernameRqments.test(username);
        const b = passwordRqments.test(password);
        if (!a || !b) 
        {
            setErrorDisplay("Invalid Input");
            return;
        }
        
        try {
            const response = await axios.post(registrationURL,
                JSON.stringify({user: username, password}),
                {
                    headers: {'Content-Type':'application/json'},
                    withCredentials: true
                }
            );

            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response));
            setSuccessDisplay(true);

        } catch (err) {
            if (!err?.response) {
                setErrorDisplay('No Server Response');
            }

            else if (err.response?.status === 409) {
                setErrorDisplay('Username is already taken')
            }

            else {
                setErrorDisplay('Registration failed')
            }
            

        }

    }

    return (
    <>
        {successDisplay ? (
            <section>
                <h1> Hurray!! You signed in! </h1>
                <p>
                    <a href="#">Sign In</a>
                </p>
            </section>
        ) : (



        <section>
            <p ref={errorReference} className={errorDisplay ? "errmsg" : "display-none"}> {errorDisplay}</p>

            <form onSubmit={submitFunc}>

                <div className="techbodyparent">
                    <div className="techsidebodyleft"> </div>
                    <div className="techsidebodyright"> </div>
                </div>

                
                <div className="body">
                    <div className = "centercircuitbg">           
                        <div className = "content">
                            <div className = "inputs">
                            
                            <label htmlFor="usernameInputBox"> 
                                Username:
                                <span className = {validUsername ? "valid" : "hide"}> ✔ </span>
                                <span className = {validUsername || !username ? "hide" : "invalid"}> ✘ </span>
                
                                <input 
                                    id="usernameInputBox" 
                                    placeholder="New Username/Email Address"
                                    type="text"
                                    ref={userReference}
                                    autoComplete = "off"
                                    onChange={(e) => setUsername(e.target.value)} required
                                    onFocus = {() => setUsernameFocus(true)}
                                    onBlur={() => setUsernameFocus(false)}

                                />  

                            </label>

                                <p id="usernameNotes" className={!validUsername ? "instructions" : "display-none"}>
                                    Must be 5-30 characters
                                </p>                          
                            </div>

                            <div className = "newinputs">
                            Password:
                                <span className = {validPassword ? "valid" : "hide"}> ✔ </span>
                                <span className = {validPassword || !password ? "hide" : "invalid"}> ✘ </span>

                                <input 
                                    type ="password" 
                                    id="newpwbox" 
                                    placeholder="New Password"
                                    autoComplete = "off"
                                    onChange={(e) => setPassword(e.target.value)} required
                                    onFocus = {() => setPasswordFocus(true)}
                                    onBlur={() => setPasswordFocus(false)}
                                />

                                <p id="passwordNotes" className={!validPassword ? "instructions" : "display-none"}>
                                    Must be 4-12 characters with at least an lowercase letter, an uppercase letter, a digit, and a special character
                                </p>  
                                
                                Matched Password:
                                <span className = {validConfirmPassword ? "valid" : "hide"}> ✔ </span>
                                <span className = {validConfirmPassword || !password ? "hide" : "invalid"}> ✘ </span>

                                <input 
                                    type ="password" 
                                    id="confirmpwbox" 
                                    placeholder="Confirm Password"
                                    autoComplete = "off"
                                    onChange={(e) => setConfirmPassword(e.target.value)} required
                                    onFocus = {() => setConfirmPasswordFocus(true)}
                                    onBlur={() => setConfirmPasswordFocus(false)}
                                />

                                <p id="confirm_passwordNotes" className={!validConfirmPassword ? "instructions" : "display-none"}>
                                    Passwords Must Match
                                </p>  
                            </div>

                            <div className = "memory">
                                <div className = "remember">
                                <input type="checkbox" id="rememberMeBOX"/>
                                <label htmlFor="rememberMe" id="rememberMe"> Remember Me</label>
                                </div>
                            </div>


                            <div className = "register">

                                <button type="submit" disabled={!validUsername || !validPassword || !validConfirmPassword ? true : false} id="logbutton"> Register</button>

                            </div>

                            <p className="have">Have an Account?</p>
                            <Link to= "/login" id="loginhere">Log in here</Link>
                        </div>
                    </div>
                </div>
            </form>
        </section>

        )}
    </>

    )
}

export default Register