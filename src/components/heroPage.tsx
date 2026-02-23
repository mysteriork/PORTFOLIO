import "../portfolio.css"
import profilePic from "../assets/rkimgone.png"
import { useNavigate } from "react-router-dom"
import Arrow from "../assets/arrow.png"
import pdf from "../assets/resume.png"
import github from "../assets/github.png"
import lin from "../assets/linkedin.png"
import Footer from "./footer"

function Hero() {

    const navigate = useNavigate()
    return (<>
        <div id="HeroBody" >
            <main className="container HeroMain">
                <div className="hero container">
                    <section className="profile-sec flex">
                        <h1 className="heading">WELCOME TO RK'S SPACE !!!</h1>
                        <article className="profile-pic-sec">
                            <img src={profilePic} alt="profile-pic" className="picture" />
                        </article>
                        <h2 className="titlename">Rachit Kumar</h2>

                    </section>

                    <div className="about-sec flex">
                        <article className="main-line flex">
                            <h3>Full-Stack Developer with a Security-Aware Engineering Mindset
                            </h3><em>"Building secure, analyzable, and maintainable systems"</em>
                        </article>
                        <br />
                        <article className="main-para flex"><p>Hi, I’m a <strong style={{ color: "skyblue" }}>Full-stack Developer</strong> who enjoys building complete, thoughtful web applications—from clean user interfaces to reliable backend systems. Alongside full-stack development, I have a strong interest in <strong style={{ color: "skyblue" }}>Cyber Forensics and Security</strong>, which naturally shapes how I think about system design, data handling, and reliability. </p><h3>This portfolio is a collection of work that reflects both what I build and how I think as an engineer.</h3></article>
                        <br />
                        <div id="mainBtn">
                            <article className="links">
                                <button className="btn"><img src={github} alt="github.png" /><a href="https://github.com/mysteriork" target="_blank">Github</a></button><button className="btn"><img src={lin} alt="linkedin.png" /><a href="https://www.linkedin.com/in/rachit-rk/" target="_blank">LinkedIn</a></button>
                            </article>
                            <button onClick={() => navigate("/about")} className="about-btn flex">More about me <img src={Arrow} alt="arrow-img" /></button>
                            <button className="resbtn">
                                <a href="/Resume.pdf" download target="_blank" >Download Resume</a><img src={pdf} alt="resume.png" className="res-img" />
                            </button>
                        </div>


                    </div>
                </div>
            </main>

            <br />
            <Footer />
        </div>
    </>)
}

export default Hero;