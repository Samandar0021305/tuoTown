import "./sectionOne.scss";


function SectionOne({props}){
    
    return(
        <ul className="sectionOne">
            {
                props.map((element,index)=>{
                    return(
                        <li key={index}>
                            <img src={element.img} alt="logo" />
                            <h2>{element.text}</h2>
                        </li>
                    )
                })
            }      
        </ul>
    )
}


export default SectionOne;