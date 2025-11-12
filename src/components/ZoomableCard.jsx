import { useState } from "react";

function ZoomableCard({ project }, key) {
    const [ active, setActive ] = useState(false);

    return (
        <>
            <div 
                key={key}
                className={`project ${active ? "active" : ""}`}
                onClick={() => setActive(true)}
            >
                <div>
                    {project.id} | {project.text}
                </div>
                
                <h5>{project.title}</h5>

                <h5>{project.owner}</h5>

                <meter id={key} value={`${project.progress}`} />
            </div>

            {active && (
                <div className="overlay" onClick={() => setActive(false)}>
                    <button className="close-btn" onClick={() => setActive(false)}>X</button>
                </div>
            )}
        </>
    )
}

export default ZoomableCard