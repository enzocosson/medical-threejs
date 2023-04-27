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
gltfLoader.load("./molecule_opaque.gltf", (gltf) => {
  gltf.scene.scale.set(0.9, 0.9, 0.9);
  gltf.scene.position.set(-2, 0, -15);
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
gltfLoader.load("./molecule_opaque.gltf", (gltf2) => {
  gltf2.scene.scale.set(1.1, 1.1, 1.1);
  gltf2.scene.position.set(13, 8, -60);
  gltf2.scene.rotation.set(-0.7, -0.5, 2.9);
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
          x: mouseY * 0.1,
          y: mouseX * 0.1,
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

// Objects
gltfLoader.load("./molecule_opaque.gltf", (gltf3) => {
  gltf3.scene.scale.set(1.1, 1.1, 1.1);
  gltf3.scene.position.set(40, -20, -120);
  gltf3.scene.rotation.set(-0.7, -0.5, 2.7);
  gltf3.scene.opacity = "1";
  scene.add(gltf3.scene);

  const molecule = gui.addFolder("molecule3");
  molecule.add(gltf3.scene.position, "x", -10, 10).step(0.1);
  molecule.add(gltf3.scene.position, "y", -10, 10).step(0.1);
  molecule.add(gltf3.scene.position, "z", -10, 10).step(0.1);
  molecule.add(gltf3.scene.rotation, "x", -10, 10).step(0.1);
  molecule.add(gltf3.scene.rotation, "y", -10, 10).step(0.1);
  molecule.add(gltf3.scene.rotation, "z", -10, 10).step(0.1);

  // loadedCount++;
  // activateLoader();

  function animationMouseMove3() {
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
        gsap.to(gltf3.scene.rotation, {
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
  animationMouseMove3();
});

// Objects
gltfLoader.load("./molecule_opaque.gltf", (gltf4) => {
  gltf4.scene.scale.set(1, 1, 1);
  gltf4.scene.position.set(-45, 30, -250);
  gltf4.scene.rotation.set(0.22, 5, 3);
  gltf4.scene.opacity = "1";
  scene.add(gltf4.scene);

  const molecule = gui.addFolder("molecule4");
  molecule.add(gltf4.scene.position, "x", -10, 10).step(0.1);
  molecule.add(gltf4.scene.position, "y", -10, 10).step(0.1);
  molecule.add(gltf4.scene.position, "z", -10, 10).step(0.1);
  molecule.add(gltf4.scene.rotation, "x", -10, 10).step(0.1);
  molecule.add(gltf4.scene.rotation, "y", -10, 10).step(0.1);
  molecule.add(gltf4.scene.rotation, "z", -10, 10).step(0.1);

  // loadedCount++;
  // activateLoader();

  function animationMouseMove4() {
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
        gsap.to(gltf4.scene.rotation, {
          duration: 1,
          x: mouseY * 0.01,
          y: mouseX * 0.01,
          ease: "power1.out",
        });
        animate = false;
      }

      // Render la scène
      renderer.render(scene, camera);
    }

    update();
  }
  animationMouseMove4();
});

// Objects
gltfLoader.load("./molecule_opaque.gltf", (gltf5) => {
  gltf5.scene.scale.set(1, 1, 1);
  gltf5.scene.position.set(-32, -4, -90);
  gltf5.scene.rotation.set(-1.1, 0.3, 3);
  gltf5.scene.opacity = "1";
  scene.add(gltf5.scene);

  const molecule = gui.addFolder("molecule5");
  molecule.add(gltf5.scene.position, "x", -10, 10).step(0.1);
  molecule.add(gltf5.scene.position, "y", -10, 10).step(0.1);
  molecule.add(gltf5.scene.position, "z", -10, 10).step(0.1);
  molecule.add(gltf5.scene.rotation, "x", -10, 10).step(0.1);
  molecule.add(gltf5.scene.rotation, "y", -10, 10).step(0.1);
  molecule.add(gltf5.scene.rotation, "z", -10, 10).step(0.1);

  // loadedCount++;
  // activateLoader();

  function animationMouseMove5() {
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
        gsap.to(gltf5.scene.rotation, {
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
  animationMouseMove5();
});

// Ambient Light

const pointLight2 = new THREE.AmbientLight(0xffffff, 10);
pointLight2.scale.set(0.3, 0.3, 0.3);
pointLight2.position.x = 0;
pointLight2.position.y = 0;
pointLight2.position.z = 5;
pointLight2.intensity = 0.6;
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

gsap.to(camera, {
  far: 10001,
  duration: 1, // durée de l'animation
  onUpdate: function () {
    camera.updateProjectionMatrix(); // mise à jour de la projection de la caméra pendant l'animation
  },
});
let mouseX = 0;
let mouseY = 0;

// Événement pour la souris
window.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

  // Animation de la position de la caméra avec GSAP
  gsap.to(camera.position, {
    x: mouseX * 0.2,
    y: mouseY * 0.2,
    ease: "Power1.easeOut",
  });
});

// Fonction d'animation
function animate() {
  requestAnimationFrame(animate);
}

animate();

// Variables globales ---------------------------------------------------------

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
