import "./Topbar.scss";

// img
import navIcon from "../assets/icon/navbar-icon/navbar-icon.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
                <li>
                    <LocationOnIcon  style={{
                        color:"white",
                        width:"30px",
                        height:"30px",
                        cursor:'pointer',
                       display:'flex'
                    }}  />
                </li>
                <li>
                    <a href="tel:8 981 120-11-17">8 981 120-11-17</a>
                </li>
              </ul>

          </div>
        </nav>
    )
}

export default Topbar;