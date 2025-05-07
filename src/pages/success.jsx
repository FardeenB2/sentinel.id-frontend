import { Link } from 'react-router-dom';


function Success() {

    const originalApp = () => {
        window.location.assign("http://localhost:3000/")
      }

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
                <h1 className="titleSuccess"> Success!</h1>
              </div>

              

              <h3 className="prompt"> You have successfully been validated.
                <br/> You may choose to redirect back to the original application,
                <br/> or modify your security features by clicking the settings option.
                
              </h3>


              <div className = "register">
                <input type="button"  id="logbutton" value="Redirect Back To App" onClick={originalApp}/>
              </div>


            </div> 
          </div>
        </div>
  </>

    )
}

export default Success