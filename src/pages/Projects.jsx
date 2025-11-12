import { useEffect } from "react"

import NavBarNoInfo from '../components/NavBarNoInfo.jsx'

import '../styles/Projects.css'
import { IoAddCircle } from "react-icons/io5";

// USE ZUSTAND
const projects = [
    {   
        id: "1",
        owner: "Gabriel",
        text: "This is a test",
        progress: "50"
    },

    {   
        id: "2",
        owner: "Richmond",
        text: "This is a test",
        progress: "50"
    },
    

    {   
        id: "3",
        owner: "Trevor",
        text: "This is a test",
        progress: "50"
    },
    

    {   
        id: "4",
        owner: "Aldrin",
        text: "This is a test",
        progress: "50"
    }
];

function Projects() {

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
                    <div className="project" key={idx}>
                            <div>
                                {project.id} | {project.text}
                            </div>

                            <h5>{project.owner}</h5>

                            <meter id={idx} value={project.progress} min="0" max="
                            100" />
                        </div>
                    );
                })}

                {/* only display after an initial one */}
                <div>
                    <IoAddCircle size={50} className="add-btn"/>
                </div>

            </div>

        </div>
    )
}

export default Projects