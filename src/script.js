import * as THREE from "three";
import * as dat from "dat.gui";
import gsap from "gsap";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import "./assets/styles/main.scss";

// Debug
const gui = new dat.GUI();

const gltfLoader = new GLTFLoader();
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// let loadedCount = 0;
// const expectedLoadCount = 1;

// function activateLoader() {
//   if (loadedCount === expectedLoadCount) {
//     const loader = document.querySelector(".loader");
//     loader.classList.add("loader__active");
//   }
// }

// Objects
gltfLoader.load("./molecule.gltf", (gltf) => {
  gltf.scene.scale.set(1.1, 1.1, 1.1);
  gltf.scene.position.set(-2, 0, -20);
  gltf.scene.rotation.set(0, 0, 0);
  gltf.scene.opacity = "1";
  scene.add(gltf.scene);

  const molecule = gui.addFolder("molecule");
  molecule.add(gltf.scene.position, "x", -10, 10).step(0.1);
  molecule.add(gltf.scene.position, "y", -10, 10).step(0.1);
  molecule.add(gltf.scene.position, "z", -10, 10).step(0.1);
  molecule.add(gltf.scene.rotation, "x", -10, 10).step(0.1);
  molecule.add(gltf.scene.rotation, "y", -10, 10).step(0.1);
  molecule.add(gltf.scene.rotation, "z", -10, 10).step(0.1);

  // loadedCount++;
  // activateLoader();

  function animationMouseMove() {
    // Ajouter un écouteur d'événement pour la souris
    window.addEventListener("mousemove", onMouseMove, false);

    let mouseX = 0;
    let mouseY = 0;
    let animate = true;

    function onMouseMove(event) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
      animate = true;
    }

    document.addEventListener("mousemove", onMouseMove, false);

    function update() {
      requestAnimationFrame(update);

      if (animate) {
        gsap.to(gltf.scene.rotation, {
          duration: 1,
          x: mouseY * 0.2,
          y: mouseX * 0.2,
          ease: "power1.out",
        });
        animate = false;
      }

      // Render la scène
      renderer.render(scene, camera);
    }

    update();
  }
  animationMouseMove();
});

// Objects
gltfLoader.load("./molecule.gltf", (gltf2) => {
  gltf2.scene.scale.set(1.1, 1.1, 1.1);
  gltf2.scene.position.set(10, 8, -60);
  gltf2.scene.rotation.set(0.5, -1.3, 2.9);
  gltf2.scene.opacity = "1";
  scene.add(gltf2.scene);

  const molecule = gui.addFolder("molecule2");
  molecule.add(gltf2.scene.position, "x", -10, 10).step(0.1);
  molecule.add(gltf2.scene.position, "y", -10, 10).step(0.1);
  molecule.add(gltf2.scene.position, "z", -10, 10).step(0.1);
  molecule.add(gltf2.scene.rotation, "x", -10, 10).step(0.1);
  molecule.add(gltf2.scene.rotation, "y", -10, 10).step(0.1);
  molecule.add(gltf2.scene.rotation, "z", -10, 10).step(0.1);

  // loadedCount++;
  // activateLoader();

  function animationMouseMove2() {
    // Ajouter un écouteur d'événement pour la souris
    window.addEventListener("mousemove", onMouseMove, false);

    let mouseX = 0;
    let mouseY = 0;
    let animate = true;

    function onMouseMove(event) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
      animate = true;
    }

    document.addEventListener("mousemove", onMouseMove, false);

    function update() {
      requestAnimationFrame(update);

      if (animate) {
        gsap.to(gltf2.scene.rotation, {
          duration: 1,
          x: mouseY * 0.05,
          y: mouseX * 0.05,
          ease: "power1.out",
        });
        animate = false;
      }

      // Render la scène
      renderer.render(scene, camera);
    }

    update();
  }
  animationMouseMove2();
});

// Ambient Light

const pointLight2 = new THREE.AmbientLight(0xffffff, 10);
pointLight2.scale.set(0.3, 0.3, 0.3);
pointLight2.position.x = 0;
pointLight2.position.y = 0;
pointLight2.position.z = 5;
pointLight2.intensity = 0.4;
scene.add(pointLight2);

const light2 = gui.addFolder("AmbientLight");

light2.add(pointLight2.position, "x").min(-10).max(10).step(0.1);
light2.add(pointLight2.position, "y").min(-10).max(10).step(0.1);
light2.add(pointLight2.position, "z").min(-50).max(10).step(0.1);
light2.add(pointLight2, "intensity").min(-10).max(100).step(0.1);

const light2Color = {
  color: 0xffffff,
};

light2.addColor(light2Color, "color").onChange(() => {
  light2Color.color.set(light2Color.color);
});
const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 2);
scene.add(pointLightHelper2);

// Lights

const pointLight = new THREE.PointLight(0xffffff, 10);
pointLight.scale.set(0.3, 0.3, 0.3);
pointLight.position.x = 0;
pointLight.position.y = 0;
pointLight.position.z = 5;
pointLight.intensity = 15;
scene.add(pointLight);

const light1 = gui.addFolder("pointLight");

light1.add(pointLight.position, "x").min(-10).max(10).step(0.1);
light1.add(pointLight.position, "y").min(-10).max(10).step(0.1);
light1.add(pointLight.position, "z").min(-50).max(10).step(0.1);
light1.add(pointLight, "intensity").min(-10).max(100).step(0.1);

const light1Color = {
  color: 0xffffff,
};

light1.addColor(light1Color, "color").onChange(() => {
  pointLight.color.set(light1Color.color);
});
const pointLightHelper = new THREE.PointLightHelper(pointLight, 2);
scene.add(pointLightHelper);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  28,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 0;

camera.rotation.x = 0;
camera.rotation.y = 0;
camera.rotation.z = 0;

camera.far = 10000;

scene.add(camera);

const cameraSettings = gui.addFolder("camera");
gui.add(camera.position, "x", -10, 10).step(0.1);
gui.add(camera.position, "y", -10, 10).step(0.1);
gui.add(camera.position, "z", -10, 10).step(0.1);
gui.add(camera.rotation, "x", -10, 10).step(0.1);
gui.add(camera.rotation, "y", -10, 10).step(0.1);
gui.add(camera.rotation, "z", -10, 10).step(0.1);
gui.add({ distance: camera.far }, "distance", 0, 10000).onChange((value) => {
  camera.far = value;
  camera.updateProjectionMatrix();
});

gui
  .add(camera, "fov", 50, 150)
  .name("Focal Length")
  .onChange(() => {
    camera.updateProjectionMatrix();
  });

// Variables globales
let mouseX = 0;
let mouseY = 0;

// Initialisation du renderer
const webglRenderer = new THREE.WebGLRenderer({ antialias: true });
webglRenderer.setSize(window.innerWidth, window.innerHeight);
webglRenderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(webglRenderer.domElement);

// Événement pour la souris
window.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Fonction d'animation
function animate() {
  requestAnimationFrame(animate);

  // Ajoutez ici la rotation de la caméra en fonction de la position de la souris
  camera.position.x = mouseY * 0.02;
  camera.position.y = mouseX * 0.02;

  // Utilisez GSAP pour ajouter un easing à la rotation de la caméra
  gsap.to(camera.rotation, {
    duration: 1,
    x: mouseY * 0.02,
    y: mouseX * 0.02,

    ease: "power2.out",
  });

  webglRenderer.render(scene, camera);
}

animate();

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 3;
/**
 * Animate
 */

const tick = () => {
  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
