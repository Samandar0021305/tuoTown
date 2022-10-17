import "./Topbar.scss";

// img
import navIcon from "../assets/icon/navbar-icon/navbar-icon.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import navIconImg from "../assets/icon/navbar-icon/navIconImg.png";

function Topbar(){
    
    const imgStyle = {
        cursor:'pointer',
        display:'flex'
    }
         

    return(
        <nav  className="navbar">
          <div className="container navbar__box">
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

          <img src={navIconImg} style={imgStyle} alt="navbar logo" />

          </div>
        </nav>
    )
}

export default Topbar;