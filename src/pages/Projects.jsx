import { useEffect } from "react"

import NavBarNoInfo from '../components/NavBarNoInfo.jsx'

import '../styles/Projects.css'
import { IoAddCircle } from "react-icons/io5";
import ZoomableCard from "../components/ZoomableCard.jsx";

import "../styles/Projects.css"
import { useNavigate } from "react-router-dom";

// USE ZUSTAND
const projects = [
    {   
        id: "1",
        title: "Gabriel's Mansion",
        owner: "Engr. Gabriel Gavez",
        text: "This is a test",
        progress: "50"
    },

    {   
        id: "2",
        title: "Richmond's Playground",
        owner: "Mr. Richmond Gatchalian",
        text: "This is a test",
        progress: "10"
    },
    

    {   
        id: "3",
        title: "Rotting Palace",
        owner: "Mrs. Trevor Macapagal",
        text: "This is a test",
        progress: "20"
    },
    

    {   
        id: "4",
        title: "Castle",
        owner: "Mr. Aldrin Enriquez",
        text: "This is a test",
        progress: "5"
    }
];

function Projects() {

    const navigate = useNavigate();

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