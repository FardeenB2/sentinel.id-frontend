import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import passwordicon from "../assets/password.svg";
import mobileicon from "../assets/mobile.svg";
import sendicon from "../assets/send.svg";
import emailicon from "../assets/email.svg";
import mfaicon from "../assets/mfa.svg";

import EmailAddressConfirmationRight from "./EACright";
import PasswordResetRight from "./PRright";
import SwitchEmailAddressRight from "./SWAright";
import MultiFactorAuthenticationRight from "./MFAright";
import MobileVerificationRight from "./MVright";




function Presets() {

    const [toggle, setToggle] = useState('emailAddressConfirm');


    return (
    <>

        <div className = "overallPresetsTemplate">
            

            <div className = "PresetsLeft">

                {/*------------Line-Break-for-ease------------------*/}
                    <div className="flexleft"
                        style={{
                            backgroundColor: toggle === 'emailAddressConfirm'? 'rgb(146, 222, 255)' : 'rgb(39, 39, 39)'
                        }}


                        onClick = {() =>{
                            setToggle('emailAddressConfirm');
                        }}
                    >
                        <img src={sendicon} alt="send icon" id="preseticon"
                            style={{
                                filter: toggle === 'emailAddressConfirm'? 'brightness(0.5) sepia(100%) hue-rotate(230deg)' : ''
                            }}
                        />
                        <div id="EmailAddressConfirmation"
                            style={{
                                color: toggle === 'emailAddressConfirm'?'rgb(46, 46, 156)' : 'rgb(189, 189, 189)'
                            }}

                        >
                            Email Address Confirmation</div>
                    </div>

                {/*------------Line-Break-for-ease------------------*/}


                    <div className="flexleft"
                        style={{
                            backgroundColor: toggle === 'passwordReset'? 'rgb(146, 222, 255)' : 'rgb(39, 39, 39)'
                        }}
                        onClick = {() =>{
                            setToggle('passwordReset');
                        }}
                    >

                        <img src={passwordicon} alt="send icon" id="preseticon"
                            style={{
                                filter: toggle === 'passwordReset'? 'brightness(0.5) sepia(100%) hue-rotate(230deg)' : ''
                            }}
                        />

                        <div id="PasswordReset"
                        
                        style={{
                            color: toggle === 'passwordReset'?'rgb(46, 46, 156)' : 'rgb(189, 189, 189)'
                        }}

 
                        >
                            Reset Password</div>
                    </div>

                {/*------------Line-Break-for-ease------------------*/}


                    <div className="flexleft"
                        style={{
                            backgroundColor: toggle === 'switchEmailAddress'? 'rgb(146, 222, 255)' : 'rgb(39, 39, 39)'
                        }}
                        onClick = {() =>{
                            setToggle('switchEmailAddress');
                        }}
                    >

                        <img src={emailicon} alt="send icon" id="preseticon"
                            style={{
                                filter: toggle === 'switchEmailAddress'? 'brightness(0.5) sepia(100%) hue-rotate(230deg)' : ''
                            }}
                        />

                    <div id="SwitchEmailAddress"
                    
                        style={{
                            color: toggle === 'switchEmailAddress'?'rgb(46, 46, 156)' : 'rgb(189, 189, 189)'
                        }}

                        >
                            Switch Email Address</div>
                    </div>

                {/*------------Line-Break-for-ease------------------*/}


                    <div className="flexleft"
                        style={{
                            backgroundColor: toggle === 'mfa'? 'rgb(146, 222, 255)' : 'rgb(39, 39, 39)'
                        }}
                        onClick = {() =>{
                            setToggle('mfa');
                        }} 
                    >

                        <img src={mfaicon} alt="send icon" id="preseticon"
                            style={{
                                filter: toggle === 'mfa'? 'brightness(0.5) sepia(100%) hue-rotate(230deg)' : ''
                            }}
                        />

                    <div id="MultiFactorAuthentication"
                        
                        style={{
                            color: toggle === 'mfa'?'rgb(46, 46, 156)' : 'rgb(189, 189, 189)'
                        }}
                        > 
 
                        
                            Multi-Factor Authentication</div>
                    </div>

                {/*------------Line-Break-for-ease------------------*/}


                    <div className="flexleft"
                        style={{
                            backgroundColor: toggle === 'mobileVerify'? 'rgb(146, 222, 255)' : 'rgb(39, 39, 39)'
                        }}
                        onClick = {() =>{
                            setToggle('mobileVerify');
                        }}  
                    >

                        <img src={mobileicon} alt="send icon" id="preseticon"
                            style={{
                                filter: toggle === 'mobileVerify'? 'brightness(0.5) sepia(100%) hue-rotate(230deg)' : ''
                            }}
                        />
                        
                    <div id="MobileVerification"                         
                        style={{
                            color: toggle === 'mobileVerify'?'rgb(46, 46, 156)' : 'rgb(189, 189, 189)'
                        }}

                        >
                            Mobile Verification</div>
                    </div>

                {/*------------Line-Break-for-ease------------------*/}

            </div>




            <div className = "PresetsRight">
                {toggle === 'emailAddressConfirm' && <EmailAddressConfirmationRight />}
                {toggle === 'passwordReset' && <PasswordResetRight />}
                {toggle === 'switchEmailAddress' && <SwitchEmailAddressRight />}
                {toggle === 'mfa' && <MultiFactorAuthenticationRight />}
                {toggle === 'mobileVerify' && <MobileVerificationRight />}
            </div>

        </div>





    </>

    )
}

export default Presets