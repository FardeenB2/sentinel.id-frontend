import settingslogo from "../assets/settingslogo.png";
import sentlogo from "../assets/sentlogo.png";
import { Link } from 'react-router-dom';


function Header() {

  return (
    <>
      <div className="uppersection">
      <img src= {settingslogo} alt="settings logo" id="settingslogo"/>
      </div>

      <div className="titleBlock">
        <Link to="/">
          <img src= {sentlogo} alt="sentinel logo" id="sentlogo"/>
        </Link>
        <h1 className="title"> Sentinel.ID </h1>
      </div>


  </>

  )
  
}

export default Header
