import "./Topbar.scss";
import "./toogle.scss";

import { Link } from "react-router-dom";

// img
import navIcon from "../assets/icon/navbar-icon/navbar-icon.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import navIconImg from "../assets/icon/navbar-icon/navIconImg.png";
import Shop from "../assets/icon/navbar-icon/Shop.png";
import Mail from "../assets/icon/navbar-icon/mail.png";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from "react";

function Topbar(){

    const [toogleClass, SettoogleClass] = useState('toogle__box');    
    const [linkClas,setlinkClass] = useState('linkflex');

    const imgStyle = {
        cursor:'pointer',
        display:'flex',
        color:"white"
    }

    let openToogle = ()=>{
      setlinkClass('linkflex')
        SettoogleClass('toogle__box')
    }


    // if(toogleClass == 'toogle__box'){
    //     setlinkClass('linkflex') 
    // }else if(toogleClass == 'toogle'){
    //     setlinkClass('openflex')
    // }
         

    return(
       <>
        <nav  className="navbar">
          <div className="container navbar__box">
              <ul className="navbar__list">
                <li>
                   <img onClick={()=>{
                    SettoogleClass('toogle')
                    setlinkClass('openflex')
                   }} style={imgStyle} src={navIcon} alt="" />
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
                    <a className="navbar__link" href="tel:8 981 120-11-17">8 981 120-11-17</a>
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


        






         <div className={toogleClass}>
          <ChevronLeftIcon  onClick={openToogle} className="toogle__ChevronLeftIcon" />
            <ul className="toogle__list">
                 <li>
                  <p>
                    <Link className={linkClas}   to='/news' >
                       Новости
                    </Link>
                     </p>
                 </li>
                 <li>
                  <p> 
                    <Link className={linkClas} to='/news'>О компании</Link>
                  </p>
                 </li>
                 <li>
                  <p>
                     <Link className={linkClas} to='/news'>
                  Контакты
                  </Link></p>
                 </li>
                 <li>
                  <p> <Link className={linkClas} to='/news'> Как проехать</Link></p>
                 </li>
            </ul>
         </div>

        </>
    )
}

export default Topbar;