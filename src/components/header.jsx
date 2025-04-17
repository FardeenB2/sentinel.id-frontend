import settingslogo from "../assets/settingslogo.png";
import sentlogo from "../assets/sentlogo.png";
import { Link } from 'react-router-dom';


function Header() {

  return (
    <>

     <div className="headerbody">
        <div className="uppersection">

        <Link to="/Settings">
          <img src= {settingslogo} alt="settings logo" id="settingslogo"/>
        </Link>
        </div>

        <div className="titleBlock">
          <Link to="/">
            <img src= {sentlogo} alt="sentinel logo" id="sentlogo"/>
          </Link>
          <h1 className="title"> Sentinel.ID </h1>
        </div>
      </div>


  </>

  )
  
}

export default Header
