import { Link } from 'react-router-dom';


function Forgotpw() {

    return (
    <>


        <div className="techbodyparent">
            <div className="techsidebodyleft"> </div>
            <div className="techsidebodyright"> </div>
        </div>


        <div className="body">
          <div className = "centercircuitbg"> 
            <div className="content">
         
              <div className="titleBlockfpw">
                <h1 className="title"> Forgot Your Password?</h1>
              </div>

              

              <h3 className="prompt"> Enter the email address you'd like your password reset details to be sent to: </h3>


              <div className = "inputs">
                  <input id="usernameInputBox" placeholder="Username/Email Address"/>  
              </div>


              <div className = "register">
                  <button type="button" id="logbutton">Confirm</button>
              </div>

              <Link to= "/login" id="goBack">Go Back</Link>



            </div>
          </div> 
        </div>
  </>

    )
}

export default Forgotpw