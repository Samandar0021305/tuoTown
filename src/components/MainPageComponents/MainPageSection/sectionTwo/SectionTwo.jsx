import "./sectionTwo.scss";
import  imgBack from "../../../../assets/img/section/2-blok/Rectangle 33.png";

function SectionTwo({restApi}){
    console.log(restApi);
    return(
        <section className="sectionTwo">
           <span className="sectionTwo__bg">
                <img src={imgBack} alt="" />
           </span>
        </section>
    )
}

export default SectionTwo;