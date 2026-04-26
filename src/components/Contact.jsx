import "./Contact.css"

export default function Contact () {
    return (
        <>
        <section id="contact">
            <div className="contact">
                    <h2>Let's build something great together and solve modern problems.</h2>
                    <p>Open to entry-level frontend development roles, internship and solid collaboration.</p>
                <div className="contact-l">
                    <a href="mailto:ade1903yemi@gmail.com?subject=Hello Adeyemi" style={{backgroundColor: `#fff`, color: `#000`, textDecoration: `none`, padding: `7px 23px`, borderRadius: `30px`}}> <i class="ri-mail-line"></i> Send a mail</a>
                    <a href="https://www.linkedin.com/in/adeyemi-awotunde-096534309?utm_source=share_via&utm_content=profile&utm_medium=member_ios" style={{background: `transparent`, color: `#fff`, textDecoration: `none`, padding: `7px 23px`, borderRadius: `30px`, border: `1px solid #fff`}}><i class="ri-linkedin-fill"></i> Linkedin</a>
                    <a href="https://x.com/_gentle__soul?s=21" style={{background: `transparent`, color: `#fff`, textDecoration: `none`, padding: `7px 23px`, borderRadius: `30px`, border: `1px solid #fff`}}> <i class="ri-twitter-x-fill"></i> 'twitter'</a>
                </div>
            </div>
        </section>
        </>
    )
}