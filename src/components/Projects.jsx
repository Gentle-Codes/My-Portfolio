import "./Projects.css"

export default function Projects () {
    return(
    <>
    <section id="projects">
    <div className="project-wrapper">
            <h3 style={{margin: `0 auto`, padding: `45px 0`}}>Featured Project</h3>
        
        <div className="project">
            <div className="project-card">
                    <img 
                        src="https://i.postimg.cc/1RFMtk3Z/Screenshot-2026-04-18-162412.png"
                        alt="solar system project"
                    />
                    <h4> <a href="https://group-6-capstone-project.vercel.app/" target="_blank" rel="noopener noreferrer">Planetary-Fact</a> </h4>
                    <p>Planetary Fact is a data-driven solar system project designed to present comparative details, highlighting the unique characteristics of each planet through visual comparisons.</p>
            </div>

            <div className="project-card">
                    <img 
                        src="https://i.postimg.cc/SxQ3706r/Screenshot-2026-04-20-144638.png"
                        alt="img2"
                    />
                    <h4> <a href="https://yemivalpresent.netlify.app/" target="_blank" rel="noopener noreferrer">MyValPresent</a> </h4>
                    <p>MyValPresent is a website created to celebrate friends and family during the seasons of love, such as Valentine's Day. It also provides an opportunity for me to share a brief introduction about myself.</p>
            </div>

            {/*<div className="project-card">
                    <img 
                        src="https://i.postimg.cc/rsvQ0TGz/Screenshot_2026_03_15_121238.png"
                        alt="img3"
                    />
                   <h4> <a href="#1"> link-3</a> </h4>
                    <p>are you here, i am here.</p>
            </div>*/}
        </div>
    </div>
    </section>
    </>
    );
}