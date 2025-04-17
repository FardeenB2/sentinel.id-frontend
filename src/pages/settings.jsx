import { Link } from 'react-router-dom';
import settingslogo from "../assets/settingslogo.png";
import profile from "../assets/profile.svg";
import lock from "../assets/lock.svg";


function Settings() {
    return (
    <>

    

    <div className="body">
        <img src= {settingslogo} alt="settings logo" id="settingslogo"/>
        <h1 id="sentinelid_settings"> Sentinel.ID User Settings</h1>


        <img src= {profile} alt="profile logo" id="profilelogo"/>
        <h2 id="Profile"> Profile</h2>

        <img src= {lock} alt="lock logo" id="locklogo"/>
        <h2 id="Security"> Security </h2>


    </div>

    </>

    )
}

export default Settings
