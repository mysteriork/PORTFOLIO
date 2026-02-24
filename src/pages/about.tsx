import "../portfolio.css"
import profile from "../assets/rkimgone.png"
import github from "../assets/github.png"
import lin from "../assets/linkedin.png"
import { data, skills } from "../data/education"

function About() {
    return (<>

        <div>
            <div id="AboutPage">
                <aside className="aside flex">
                    <section className="secone">
                        <img src={profile} alt="profile-image" className="profile" />
                        <article className="abt">
                            <h3>Rachit Kumar</h3>
                            <p>Full-Stack Developer with a Security-Aware Engineering Mindset</p>
                        </article>

                    </section>
                    <section className="sectwo">
                        <article className="a1">
                            <p>(+91) 9358974425</p>
                            <p>callmerachit145@gmail.com</p>
                        </article>
                        <article className="links">
                            <span className="linkicon">
                                <a href="https://github.com/mysteriork" target="_blank"><img src={github} alt="github.png" /></a>
                            </span>
                            <span className="linkicon">
                                <a href="https://www.linkedin.com/in/rachit-rk/" target="_blank"><img src={lin} alt="linkedin.png" /></a>
                            </span>

                        </article>
                        <article className="a2">
                            <h4>Projects</h4>
                            <ul>
                                <li>DeepGuard
                                </li>
                                <li>Blackhole</li>
                                <li>MiniLinkedIn</li>
                                <li>D-Logger</li>
                                <li>Leakscan</li>
                                <li>Keylogger</li>
                            </ul>
                        </article>
                        <article className="a3">
                            <button className="resbtn">
                                <a href="/Resume.pdf" download target="_blank" >Download Resume</a>
                            </button>

                        </article>
                    </section>
                </aside>
                <main className="main">
                    <section>

                    </section>
                    <section>
                        {data && data[0] && (<div className="education">
                            <h2 >{data[0].title}</h2>
                            <article className="edu">
                                <ul>
                                    <li>{data[0].college}</li>
                                    <li>{data[0].major}</li>
                                    <li>{data[0].special}</li>
                                    <li>Duration: {data[0].cdate}</li>
                                    <li>CGPA: {data[0].cgpa}</li>
                                </ul>
                                <em style={{ color: "lightgreen" }} >( I am Currently in Final year )</em>
                            </article>
                            <article className="edu skills">
                                <h2>TECHNICAL SKILLS</h2>
                                <section className="skill">
                                    <h3>Core Languages</h3>
                                    <p>{skills.core}</p>
                                </section><section className="skill">
                                    <h3>Frontend</h3>
                                    <p>{skills.frontend}</p>
                                </section><section className="skill">
                                    <h3>Backend</h3>
                                    <p>{skills.backend}</p>
                                </section><section className="skill">
                                    <h3>Tools and Platforms</h3>
                                    <p>{skills.tools}</p>
                                </section>

                                <section className="skill">
                                    <h3>Concepts</h3>
                                    <p>{skills.Concepts}</p>
                                </section>
                                <section className="skill">
                                    <h3>Cyber Security</h3>
                                    <p>{skills.Cyber}</p>
                                </section>
                            </article>
                            <article className="edu1 flex" style={{ gap: "20px", flexDirection: "column" }}>
                                <h3>System Design Mindset</h3>
                                <p>{data[1].Approach}</p>
                                <h3>Security-First Perspective</h3>
                                <p>{data[1].Awareness}</p>
                                <h3>Vision</h3>
                                <p>{data[1].Direction}</p>
                                <h3>Focus</h3>
                                <p>{data[1].Focus}</p>
                                <br />
                                <div className="end"><p>{`" ${data[1].end} "`}</p></div>

                            </article>

                        </div>)}
                    </section>
                </main>
            </div>
        </div>
    </>)
}

export default About;