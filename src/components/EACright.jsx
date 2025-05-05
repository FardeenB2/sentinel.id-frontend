import { Link } from 'react-router-dom';
import React, {useState} from 'react';


function EmailAddressConfirmationRight () {

    return (
    <>
        <div className = "EmailAddressConfirmationRight">
            <h2 className="EAChead"> Verify through Email Address </h2>
            <h3 className ="EACheadinside">This is the Verification Email that will send to the user's email address if they wish to reset their password.</h3>
            <hr className="EAChr1"></hr>
            <p className="EACmessage">  Hello [User], 
                <br />
                <br /> You are being asked to verify your email address before email address/password reset. Click this link to verify 
                    <br /> [Link]
                    <br />
                    If you didn't wish to verify your email address or reset your email address/password, ignore this message. 
                    <br />
                    <br />
                    from,
                    <br />
                    Sentinel.ID Team
            </p>





        </div>
    
    
    
    
    </>

    )
}

export default EmailAddressConfirmationRight