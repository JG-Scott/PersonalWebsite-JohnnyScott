import '../styles/style.css'

import * as THREE from '../../node_modules/three';
import {GLTFLoader} from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';


import {OrbitControls} from '../../node_modules/three/examples/jsm/controls/OrbitControls'


//console.log("this si playing");


// first section
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

const topSection = document.querySelector('#topSection');

renderer.domElement.setAttribute('class', 'canvas');
renderer.domElement.removeAttribute('style');
topSection.appendChild(renderer.domElement)


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.maxPolarAngle = 1.8;
controls.minPolarAngle = 1.3;
controls.enablePan = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  controls.enableRotate = false;
}
console.log(window.navigator.userAgent);
//controls.maxAzimuthAngle = .5;
//controls.minAzimuthAngle = -.5;


const loader = new GLTFLoader();



 var uniforms = {
    u_helmet_texture: { value: null }
  };





//room
var room = new THREE.Object3D();
loader.load('/static/Models/websiteRoom.gltf', (model) => {
  room = model.scene;
  room.traverse( function ( child ) {
            if ( child.isMesh ) {
        
              child.castShadow = true;
              child.receiveShadow = true;
            }
         } );
  scene.add(room);
});

const ambientLight = new THREE.AmbientLight(0xffffff, .3); 
var spotLight = new THREE.SpotLight( 0xffffff, .7 );
spotLight.position.set( 0, 3.5, -1 );
spotLight.angle = (Math.PI/2)*.8;
spotLight.penumbra = 1;
spotLight.decay = 0.1;
spotLight.distance = 2000;
spotLight.shadow.bias = -0.01;
spotLight.castShadow = true;
scene.add( spotLight );

spotLight.target.position.set(10, -1000, -50);
scene.add( spotLight.target );


// var lightHelper = new THREE.SpotLightHelper( spotLight );
// scene.add( lightHelper );

scene.add(ambientLight, spotLight);

var spotlight2 = new THREE.SpotLight(0xfffffff, 0.6);
spotlight2.position.set(0,-4,-1);
spotlight2.angle = (Math.PI/2);
spotlight2.penumbra = 1;
spotlight2.distance = 2000;
spotlight2.target.position.set(0,100,0);



 //var lightHelper = new THREE.SpotLightHelper( spotlight2 );
 //scene.add(lightHelper);
scene.add( spotlight2);
scene.add(spotlight2.target);


camera.position.set(0,0,6);

controls.autoRotate = true;

let i = 0;
function animate() {
  requestAnimationFrame(animate);
controls.update();
  room.position.y = -4;
  i+=0.01;

  renderer.render(scene, camera);
}

animate();
