import { useEffect } from "react"

import NavBarNoInfo from '../../components/NavBarNoInfo.jsx'

import { IoAddCircle } from "react-icons/io5";
import ZoomableCard from "../../components/ZoomableCard.jsx";
import { useNavigate } from "react-router-dom";

import useStore from "../../store/Store.jsx"

import "../../styles/Projects.css"

function Projects() {
    const navigate = useNavigate();

    const projects = useStore((state) => state.projects);

    useEffect(() => {
        // THIS IS WHERE THE DATA GETS RETRIEVED
    }, []);


    return (
        <div className="projects">
            <NavBarNoInfo />  
            
            <div className="background" />

            <div className="title">Your Projects</div>

            <div className="content">

                {projects.map((project, idx) => {
                    return (
                        <ZoomableCard project={project} key={idx} />
                    );
                })}

                {/* only display after an initial one */}
                <div>
                    <IoAddCircle size={50} className="add-btn" onClick={(e) => {
                        navigate("/projects/upload")
                    }}/>
                </div>

            </div>

        </div>
    )
}

export default Projects