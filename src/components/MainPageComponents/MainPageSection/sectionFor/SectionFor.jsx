import "./SectionFor.scss"
import "../sectionTwo/sectionTwo.scss";
import AddIcon from '@mui/icons-material/Add';
// import "./sectionTree.scss"
import card3 from "../../../../assets/img/section/2-blok/card3.png"
import card4 from "../../../../assets/img/section/2-blok/card4.png"
import card5 from "../../../../assets/img/section/2-blok/card1.png"
import card6 from "../../../../assets/img/section/2-blok/card6.png"
function SectionFor(){
    return(
        <div className="sectionFor">
           <div>
           <h2 className="sectionFor__title">Узнавайте первым о новинках и новостях</h2>
            <input  className="sectionFor__input"  placeholder="Ваш e-mail" type="text" />
           </div>
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
            
            <span>
                 <AddIcon  className='AddIcon'/>
                    <img src={card5} alt="" />
                 </span>
                 <h3>Складной нож SQ01-B</h3>
                 <p>850 р.</p>
         

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
        </div>
    )
}

export default SectionFor;