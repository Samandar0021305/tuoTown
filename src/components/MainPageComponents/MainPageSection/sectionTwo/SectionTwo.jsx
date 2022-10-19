import "./sectionTwo.scss";
import  imgBack from "../../../../assets/img/section/2-blok/Rectangle 33.png";
import card1 from "../../../../assets/img/section/2-blok/card1.png"
import card2 from "../../../../assets/img/section/2-blok/card2.png"
import card3 from "../../../../assets/img/section/2-blok/card3.png"
import card4 from "../../../../assets/img/section/2-blok/card4.png"
import card5 from "../../../../assets/img/section/2-blok/card5.png"
import card6 from "../../../../assets/img/section/2-blok/card6.png"

import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";


function SectionTwo(){

    return(
        <section className="sectionTwo">
          
          <div className="sectionTwo__topbar">
          <span className="sectionTwo__bg">
                <img src={imgBack} alt="" />
           </span>
            <ul className="sectionTwo__list">
              <li>
                 <span>
                 <AddIcon  className='AddIcon'/>
                    <img src={card1} alt="" />
                 </span>
                 <h3>Складной нож SQ01-B</h3>
                 <p>850 р.</p>
              </li>
              <li>
                 <span >
                    <AddIcon   className='AddIcon' />
                    <img src={card2} alt="" />
                 </span>
                 <h3>Складной нож JJ001-TUO-B</h3>
                 <p>12 850 р.</p>
              </li>
            </ul>
          </div>
               
           

        </section>
    )
}

export default SectionTwo;