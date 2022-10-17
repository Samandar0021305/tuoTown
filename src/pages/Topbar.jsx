import "./Topbar.scss";

// img
import navIcon from "../assets/icon/navbar-icon/navbar-icon.png";

function Topbar(){
    
    const imgStyle = {
        cursor:'pointer',
        display:'flex'
    }
         

    return(
        <nav  className="navbar">
          <div className="container">
              <ul className="navbar__list">
                <li>
                   <img  style={imgStyle} src={navIcon} alt="" />
                </li>
              </ul>

          </div>
        </nav>
    )
}

export default Topbar;