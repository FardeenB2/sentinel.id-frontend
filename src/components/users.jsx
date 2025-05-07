import { Link } from 'react-router-dom';


function Users() {

    const changeActiveStatusText = () => {
        document.getElementById("appUserStatusButton").innerHTML = "Deactivated";
    } 

    return (
    <>

        <div id="appName"> Application: 
            <br />www.todo.com 
        </div>

        <div className = "overallUsersTemplate">
            <div className="userz" id="appUserName"> | Username|  </div>
            <div className="userz" id="appUserEmail"> | Email Address | </div>
            <div className="userz" id="appUserID"> | User ID | </div>
            <div className="userz" id="appUserStatus"> | Activation Status | </div>
        </div>

        <div className = "AddedUsersTemplate">
            <div className="userzz" id="appUserName"> Franklin_Thompson  </div>
            <div className="userzz" id="appUserEmail"> FranklinWins@gmail.com </div>
            <div className="userzz" id="appUserID"> 1238796470 </div>
            <div className="appUserStatusButton" onClick={changeActiveStatusText} id="appUserStatusButton"> Active </div>
        </div>





    </>

    )


}

export default Users