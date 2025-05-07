import { Link } from 'react-router-dom';
import React, {useState} from 'react';


function PasswordResetRight () {

    return (
    <>
        <div className = "passwordResetRight">
            <h2 className="PRhead"> Password Reset </h2>
            <hr className="PRhr1"></hr>
            <p className="PRmessage"> 
                <br /> If you forgot your password or wish to reset it,  
                    <br /> type in your email to receive a verification link with the next steps:
                    <br />
                    <div className = "PRrightInputs">
                        <input id="PRrightusernameInputBox" placeholder="Username/Email Address"/>  
                    </div>

                    <Link to= "/login">
                        <button type="button" id="PRrightlogbutton"> Send </button> 
                    </Link> 
            </p>





        </div>
    
    </>

    )
}

export default PasswordResetRight