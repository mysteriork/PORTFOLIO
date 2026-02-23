import "../portfolio.css"
import linkedinpic from "../assets/linkedin.png"
import gitpic from "../assets/github.png"
import email from "../assets/gmail.png"
import phone from "../assets/telephone.png"

function Footer() {

    const linkedin = "https://www.linkedin.com/in/rachit-rk/"
    const github = "https://github.com/mysteriork?tab=repositories"
    return (
        <div id='Footermain'>
            <div id='footer'>
                <section className="foot">
                    <article className="a1">
                        <h3>RK@portfolio:~$ whoami</h3>
                        <h4>Rachit Kumar</h4>
                        <h4>Full-stack Developer : Mern-stack</h4>
                        <h4>Security-aware Engineer</h4>
                    </article>
                    <article className="a1">
                        <h3>RK@portfolio:~$ projects</h3>
                        <h4>→ DeepGuard</h4>
                        <h4>→ Blackhole</h4>
                        <h4>→ MiniLinkedIn</h4>
                        <h4>→ D-Logger</h4>
                        <h4>→ Leakscan</h4>
                        <h4>→ Keylogger</h4>
                        <br />
                        <h3>RK@portfolio:~$ _</h3>

                    </article>
                </section>
                <section className="foot">
                    <a href="/about">About</a>
                    <a href="/project">Projects</a>
                    <a href="/">Home</a>
                    <article className='footerbase'>
                        <p><img src={phone} alt="phone.png" />  (+91) 9358974425</p>
                        <p><img src={email} alt="email.png" /> callmerachit145@gmail.com</p>

                        <article>
                            <p><a href={github} target='_blank'>Github</a><img src={gitpic} alt="github.png" /></p>
                            <p><a href={linkedin} target='_blank'>LinkedIn</a><img src={linkedinpic} alt="linkedin.png" /></p>

                            <a href="/Resume.pdf" download target="_blank"  className='foot-btn'>Download Resume</a>

                        </article>

                    </article>
                </section>
            </div>


        </div>
    )
}

export default Footer
