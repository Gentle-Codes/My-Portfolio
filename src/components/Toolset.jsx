import "./Toolset.css"

export default function Toolset () {
    return(
        <>
        <div className="Tool-wrapper">
            <h3 style={{textAlign: `center`, padding: `60px 0 25px 0`}} >Toolset</h3>
        
            <div className="Tool">
                <div className="Toolbox">
                    <i class="ri-javascript-line"></i>
                </div>

                <div className="Toolbox">
                    <i className="ri-html5-line"></i>
                </div>

                <div className="Toolbox">
                    <i className="ri-css3-line"></i>
                </div>

                <div className="Toolbox">
                    <i className="ri-reactjs-line"></i>
                </div>

                <div className="ToolB">
                    <p>Building great things with these tools, while learning more amazing tools.</p>
                </div>
            </div>
        </div>
        </>
    )
}