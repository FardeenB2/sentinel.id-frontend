import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import settingssentlogo from "../assets/sentlogo.png";



function Settings() {

    const [menuToggle, setMenuToggle] = useState(false);    //by nature of useState, setMenuToggle is the function that affects menuToggle variable (which is originally set to false)

    const shiftMenuToggle=()=>{                         //We must make another function that calls the above function and utilizes the variable in some way. Then we can call this function outside.
        setMenuToggle(!menuToggle);
    }

    const [highlightActive, setHighlightActive] = useState('users');


        
    



    return (
    <>
        <div className="settingsContent">
            <div className="settingsTopNav">
                <Link to="/">
                    <img src= {settingssentlogo} alt="sentinel logo" id="settingssentlogo"/>
                </Link>
                <h1 id="SettingsHeaderTitle"> Settings </h1>
            </div>

            <ul className = "settingsSecondNav">
                <li 
                    style={{
                        color: highlightActive == 'users'? 'rgb(117, 117, 117)' : 'rgb(170, 170, 170)',
                        cursor: 'pointer',
                        textDecoration: highlightActive == 'users'? 'overline' : 'none'
                    }}

                    onClick = {() => {
                        shiftMenuToggle();
                        setHighlightActive('users'); 
                    }}
                > 
                    Users 
                </li>

                <li 
                    style={{
                        color: highlightActive == 'presets'? 'rgb(117, 117, 117)' : 'rgb(170, 170, 170)',
                        cursor: 'pointer',
                        textDecoration: highlightActive == 'presets'? 'overline' : 'none'
                    }}
                    onClick = {() => {
                        shiftMenuToggle();
                        setHighlightActive('presets'); 
                    }}
                > 
                    Presets 
                </li>                
                <li className="settingvr1"></li>

            </ul>

            

            <hr className="settinghr1"></hr>

            <div className={highlightActive?"settingsSecondNavExpanded" : "settingsSecondNav"}>   {/*if the menuToggle is true, we use the expanded SecondNav class, otherwise just the regular secondNav class*/}

            </div>

        </div>




    </>

    )
}

export default Settings
