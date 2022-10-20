import "./MainPageSection.scss";
// api
import MainPageSection1Api from "../../../api/MainPageSection1-api.js";
import restApi from "../../../api/MainPageSection2-api";
import restApiOne from "../../../api/MainPageSection2-api";
// componmnets
import SectionOne  from "./sectionOne/SectionOne.jsx";
import SectionTwo from "./sectionTwo/SectionTwo";
import SectionTree from "./SectionTree/SectionTree.jsx";
import SectionFor from "./sectionFor/SectionFor.jsx";
import MainPageSectionNew from "../MainPageSectionNew/MainPageSectionNew.jsx"

function MainPageSection(){
    const styles =  {
        opacity: 0.1,
        border: '1px solid #FFFFFF',
        backgroundColor:"white",
        height:"1px",
        marginTop:"30px"
    }
    return(
        <section className="section">
            <div className="container">
              <SectionOne props={MainPageSection1Api} />
              <SectionTwo  />
              <SectionTree />
              <SectionFor />
             
            </div>
            <hr style={styles} />
              <div className="container">
              <MainPageSectionNew />
              </div>
        </section>
    )
}

export default MainPageSection;