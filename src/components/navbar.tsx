import { useNavigate } from "react-router-dom"
import "../portfolio.css"
import icon from "../assets/icon.png"
function Navbar() {

    const navigate = useNavigate()

    return (<div>
        <div id="Header" className="flex">
            <div className="flex head">
                <span className="LogoName">
                    <strong className="Tname" onClick={() => navigate("/")}>Rachit ./dev</strong>
                </span>
                <section className="NavSec flex">
                    <button className="btn" onClick={() => navigate("/about")}>About me</button>
                    <button className="btn" onClick={() => navigate("/project")}>Projects</button>
                </section>

            </div>
            <div className="icon">
                <img src={icon} alt="Active-icon" />
            </div>
        </div>
    </div>)
}

export default Navbar