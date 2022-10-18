import "./MainPageSection.scss";
// api
import MainPageSection1Api from "../../../api/MainPageSection1-api.js";

// componmnets
import SectionOne  from "./sectionOne/SectionOne.jsx";
function MainPageSection(){
    return(
        <section className="section">
            <div className="container">
              <SectionOne props={MainPageSection1Api} />
            </div>
        </section>
    )
}

export default MainPageSection;