import { useState } from "react";
import NavBarNoInfo from "../../components/NavBarNoInfo.jsx"
import useStore from "../../store/Store.jsx";

import "../../styles/Upload.css"
import Handle from "../../three/ModelHandler.jsx";

function Upload() {
    const [ model, setModel ] = useState(null);
    const [ gps, setGPS ] = useState(null);

    const projects = useStore((state) => state.projects);
    const addProject = useStore((state) => state.addProject);

    async function handleUpload(type) {
        if (type === "3d") {
            // 3D

            try {
                const [ fileHandle ] = await window.showOpenFilePicker({
                    multiple: false,
                    types: [
                        {
                            description: "STL Files",
                            accept: {
                                 'model/stl': [".stl"],
                                 "application/sla": [".stl"]
                            }
                        }
                    ]
                });


                const file = await fileHandle.getFile();
                setModel(URL.createObjectURL(file));
            } catch (error) {
                console.error(error);
            }
        } else if (type === "gps") {
            // GPS

            try {
                const [ fileHandle ] = await window.showOpenFilePicker({
                    multiple: false,
                    types: [
                        {
                            description: "GPS / Satellite Data",
                            accept: {
                                 'application/gpx+xml': [".gpx"],
                                 "application/vnd.google-earth.kml+xml": [".kml"],
                                 "text/csv": [".csv"],
                                 "application/rinex": [".obs", ".nav"]
                            }
                        }
                    ]
                });

                const file = await fileHandle.getFile();
                console.log(file);

                setGPS(file);
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleStart = (e) => {
        addProject({
            id: projects.length + 1,
            title: "Title",
            owner: "Engr. Gabriel",
            text: "Small Description",
            progress: "0",
            model: model,
            gps: gps,
        });
    }

    return (
        <div className="upload">
            <NavBarNoInfo />

            <div className="background" />

            <div className="upload-content">
                <div className="buttons">
                    <button onClick={(e) => handleUpload("3d")}>
                        Upload 3D Model of Construction Site
                    </button>

                    {model && (
                            <Handle path={model} />
                    )}

                    <button onClick={(e) => handleUpload("gps")}> 
                        Upload GPS
                    </button>

                    <button onClick={handleStart}>
                        Start
                    </button>
                </div>

                <div className="preview">
                </div>
            </div>

        </div>
    )
}

export default Upload