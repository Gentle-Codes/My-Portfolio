import "./About.css"

export default function () {
    return (
        <>
        
        <section id="about">
        <div className="about-w">  
                <h3 style={{margin: `0 0 35px 0`, padding: `35px 0`}} >About me</h3>
            <div className="about">
                <img 
                src="https://i.postimg.cc/HnB99L1Z/photo-2026-04-20-16-10-25.jpg"
                alt="my-picture"
                />
                <p>
                    I’m Adeyemi Awotunde, a web developer who loves turning complicated 
                    stuff into clear, simple solutions. I’m good at mixing logic with visual 
                    design to craft interfaces that aren’t just functional but also fun and engaging.
                    <br />
                    I started out in civil engineering, where every detail counts, so I understand the 
                    importance of building a solid structure that looks good and serves its purpose. 
                    That’s what I aim for in web development. I don’t just create good looking UI, I build 
                    with intention, making sure it’s useful for everyone, whether they’re young or old, 
                    educated or not.
                    <br />
                    When I’m not coding, I’m probably playing (eFootball), which is what I do for fun. 
                    I also love reading books I believe that "through information, knowledge grows." 
                    Most of all, I’m a big fan of good music; it’s like my therapy.
                </p>
            </div>
        </div>
        </section>
        </>
    )
}