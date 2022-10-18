import Topbar from "../../../pages/Topbar"
import "./MainPageHeader.scss";


function MainPageHeader(){
    return(
        <header className="header">
            <Topbar />
            <div className="header__box container">
                <h2>Исключительное качество без компромиссов</h2>
                <p>Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</p>
                <button>ПОДРОБНЕЕ</button>
            </div>
        </header>
    )
}

export default MainPageHeader