import "./Topbar.scss";

// img
import navIcon from "../assets/icon/navbar-icon/navbar-icon.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import navIconImg from "../assets/icon/navbar-icon/navIconImg.png";
import Shop from "../assets/icon/navbar-icon/Shop.png";
import Mail from "../assets/icon/navbar-icon/mail.png";

function Topbar(){
    
    const imgStyle = {
        cursor:'pointer',
        display:'flex',
        color:"white"
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
         
              <ul className="navbar__topbar__list">
                <li>
                    <img src={Shop}  style={imgStyle} alt="logo" />
                </li>
                <li>
                   <img src={Mail}  style={imgStyle} alt="logo" />
                </li>
                <li>
                  <SearchIcon  style={imgStyle}  />
                </li>
              </ul>

          </div>
        </nav>
    )
}

export default Topbar;