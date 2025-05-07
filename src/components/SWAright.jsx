import { Link } from 'react-router-dom';
import React, {useState} from 'react';

function SwitchEmailAddressRight () {

    return (
    <>
        <div className = "switchEmailAddressRight">
            <h2 className="SWAhead"> Change Email Address </h2>
            <hr className="SWAhr1"></hr>
            <p className="SWAmessage"> 
                <br /> If you wish to change your email address,  
                    <br /> type your current email and password to get a verification link with the next steps:
                    <br />
                    <div className = "SWArightInputs">
                        <input id="SWArightusernameInputBox" placeholder="Username/Email Address"/>  
                    </div>

                    <Link to= "/login">
                        <button type="button" id="SWArightlogbutton"> Send </button> 
                    </Link> 
            </p>

        </div>
    
    </>

    )
}

export default SwitchEmailAddressRight