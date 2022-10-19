import "./sectionTwo.scss";
import  imgBack from "../../../../assets/img/section/2-blok/Rectangle 33.png";

function SectionTwo({restApi}){
    console.log(restApi);
    return(
        <section className="sectionTwo">
           <span className="sectionTwo__bg">
                <img src={imgBack} alt="" />
           </span>

           <ul className="sectionTwo__list">
            {
                restApi.map((element,index)=>{
                    return(
                        <li key={index} className="sectionTwo__item">
                            <img src={element.img} alt="logo" />
                            <h2>{element.title}</h2>
                            <p>{element.text}</p>
                        </li>
                    )
                })
            }
           </ul>

        </section>
    )
}

export default SectionTwo;