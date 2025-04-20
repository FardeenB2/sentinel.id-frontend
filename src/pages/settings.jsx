import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import settingssentlogo from "../assets/sentlogo.png";
import Presets from "../components/presets.jsx";
import Users from "../components/users.jsx";





function Settings() {

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
                        color: highlightActive === 'users'? 'rgb(232, 186, 255)' : 'rgb(170, 170, 170)',
                        cursor: 'pointer',
                        textDecoration: highlightActive === 'users'? 'overline' : 'none'
                    }}

                    onClick = {() => {
                        setHighlightActive('users'); 
                    }}
                > 
                    Users 
                </li>

                <li 
                    style={{
                        color: highlightActive === 'presets'? 'rgb(232, 186, 255)' : 'rgb(170, 170, 170)',
                        cursor: 'pointer',
                        textDecoration: highlightActive === 'presets'? 'overline' : 'none'
                    }}
                    onClick = {() => {
                        setHighlightActive('presets'); 
                    }}
                > 
                    Presets 
                </li>                
                <li className="settingvr1"></li>

            </ul>

            

            <hr className="settinghr1"></hr>

            <div className={highlightActive === 'presets'? "presetsExpanded" : "usersExpanded"}>   {/*if the highlightActive is true, we use the expanded SecondNav class, otherwise just the regular secondNav class*/}
                {highlightActive === 'users' && <Users />}
                {highlightActive === 'presets' && <Presets />}
                    
            </div>

        </div>




    </>

    )
}

export default Settings
