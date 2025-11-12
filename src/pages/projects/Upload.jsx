import NavBarNoInfo from "../../components/NavBarNoInfo.jsx"
import useStore from "../../store/Store.jsx";

import "../../styles/Upload.css"

function Upload() {
    const projects = useStore((state) => state.projects);
    const addProject = useStore((state) => state.addProject);

    return (
        <div className="upload">
            <NavBarNoInfo />

            <div className="background" />

            <div className="upload-content">
                <div className="buttons">
                    <button>
                        Upload 3D Model of Construction Site
                    </button>

                    <button>
                        Upload GPS
                    </button>

                    <button>
                        Start
                    </button>
                </div>

                <div className="preview">
                    asd
                </div>
            </div>

        </div>
    )
}

export default Upload