import "../sectionTwo/sectionTwo.scss";
import AddIcon from '@mui/icons-material/Add';
import "./sectionTree.scss"
import card3 from "../../../../assets/img/section/2-blok/card3.png"
import card4 from "../../../../assets/img/section/2-blok/card4.png"
import card5 from "../../../../assets/img/section/2-blok/card5.png"
import card6 from "../../../../assets/img/section/2-blok/card6.png"

function SectionTree(){
    return(
        <ul className="sectionTwo__list">
            <li className="SectionTree__item">
            
                 <span>
                 <AddIcon  className='AddIcon'/>
                    <img src={card3} alt="" />
                 </span>
                 <h3>Складной нож SQ01-B</h3>
                 <p>850 р.</p>
            </li>
            <li className="SectionTree__item">
            
                 <span>
                 <AddIcon  className='AddIcon'/>
                    <img src={card4} alt="" />
                 </span>
                 <h3>Складной нож SQ01-B</h3>
                 <p>850 р.</p>
            </li>
            <li className="SectionTree__item1">
            
                
                    <img src={card5} alt="" />
               

            </li>
            <li className="SectionTree__item">
            
                 <span>
                 <AddIcon  className='AddIcon'/>
                    <img src={card6} alt="" />
                 </span>
                 <h3>Складной нож SQ01-B</h3>
                 <p>850 р.</p>
            </li>
        </ul>
    )
}

export default SectionTree;