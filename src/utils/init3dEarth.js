import * as THREE from 'three';
import textureImg from '../components/Earth/textureImg.jpg';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const init3dEarth = (containerRef) => {
    let isMouseDown = false;
    const scene = new THREE.Scene();
    const w = containerRef.current.clientWidth;
    const h = containerRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(w, h);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(textureImg);
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    
    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        if (!isMouseDown) {
            earth.rotation.y += 0.0005;
        }
        renderer.render(scene, camera);
    }

    const onWindowResize = () => {
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    }

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousedown', () => isMouseDown = true );
    window.addEventListener('mouseup', () => isMouseDown = false );

    animate();
}