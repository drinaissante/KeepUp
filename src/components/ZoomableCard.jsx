import { useState } from "react";

function ZoomableCard({ project }, key) {
    const [ active, setActive ] = useState(false);
    const [ closing, setClosing ] = useState(false);

    const handleOpen = () => {
        setActive(true);
        setClosing(false);
    }

    const handleClose = (e) => {
        e.stopPropagation();
        setClosing(true);

        setTimeout(() => {
            setActive(false);
            setClosing(false);
        }, 500);
    }

    return (
        <>
            <div 
                key={key}
                className={`project ${active ? "active" : ""} ${closing ? "closing" : "" }`}
                onClick={handleOpen}
            >
                <div>
                    {project.id} | {project.text}
                </div>
                
                <h5>{project.title}</h5>

                <h5>{project.owner}</h5>

                <meter id={key} value={`${project.progress}`} />
            </div>

            {active && (
                <div className={`overlay ${closing ? "closing" : ""} `}onClick={handleClose}>
                    <button className="close-btn" onClick={handleClose}>X</button>
                </div>
            )}
        </>
    )
}

export default ZoomableCard