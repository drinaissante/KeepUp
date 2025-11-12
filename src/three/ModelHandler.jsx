import * as THREE from 'three'
import { STLLoader } from 'three/addons/loaders/STLLoader.js'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

export default function Handle({path}) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({antialias: true});

    renderer.setSize(600, 400);
    const container = document.getElementsByClassName('preview')[0];
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambient);
    const controls = new OrbitControls(camera, renderer.domElement);

    const loader = new STLLoader();
    loader.load(path, (geometry) => {
        const material = new THREE.MeshNormalMaterial();
        const mesh = new THREE.Mesh(geometry, material);

        // remove old meshes
        scene.children.forEach(obj => {
            if (obj instanceof THREE.Mesh) scene.remove(obj);
        });

        scene.add(mesh);

        // compute bounding box
        geometry.computeBoundingBox();
        const box = geometry.boundingBox;
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);

        // recenter mesh
        mesh.position.sub(center);

        // adjust camera distance
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

        camera.position.set(0, 0, cameraZ * 3); // back up a bit
        camera.lookAt(0, 0, 0);

        // update controls target
        controls.target.set(0, 0, 0);
        controls.update();
    });



    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}