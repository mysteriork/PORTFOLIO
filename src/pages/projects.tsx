import { data } from "../data/Data"
import "../portfolio.css"
import github from "../assets/github.png"
import live from "../assets/flash.png"

function Project() {
    return (
        <div id='ProjectPage'>
            <div className="projectSec container flex">
                <h1>Top Projects </h1>
                <div className="projects">
                    {data && data.map((item: any, id) => (
                        <article className='project' key={id}>
                            <h2>{item.title}</h2>
                            <h3>Description</h3>
                            <p>{item.brief}</p>
                            <h3>Objective</h3>
                            <p>{item.objective}</p>
                            <h3>Approach</h3>
                            <p>{item.approach}</p>
                            <h3>Impact</h3>
                            <p>{item.impact}</p>
                            <h3>Tech Skills</h3>
                            <p className='tech'>{item.Tech_stack}</p>
                            <h3>Explore More</h3>
                            <section className='demo-btn-sec'>
                                <div className='demo-btn'>
                                    <a href={item.Explore_More.Github} target='_blank'>Github </a><img src={github} alt="github.png" />
                                </div>
                                <div className='demo-btn'>
                                    <a href={item.Explore_More.Live_Demo || null} target='_blank'>Live Demo</a><img src={live} alt="live.png" />
                                </div>


                            </section>

                        </article>
                    ))

                    }
                </div>
            </div>

        </div>
    )
}

export default Project;

