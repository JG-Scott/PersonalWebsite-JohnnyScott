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

topSection.appendChild(renderer.domElement)


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.maxPolarAngle = 1.8;
controls.minPolarAngle = 1.3;
//controls.maxAzimuthAngle = .5;
//controls.minAzimuthAngle = -.5;


const loader = new GLTFLoader();



 var uniforms = {
    u_helmet_texture: { value: null }
  };





//room
var room = new THREE.Object3D();
loader.load('/static/Models/websiteRoomClosed.gltf', (model) => {
  room = model.scene;
  room.traverse( function ( child ) {
            if ( child.isMesh ) {
            //     uniforms.u_helmet_texture.value = child.material.map;
            //     console.log(uniforms.u_helmet_texture);
            //     child.material = new THREE.ShaderMaterial({
            //                       uniforms: {
            //                         u_helmet_texture: {
            //                           value: texture1
            //                         },
            //                       },
            //                       vertexShader: document.getElementById('vertexShader').textContent,
            //                       fragmentShader: document.getElementById('fragmentShader').textContent,
            //                     });
              child.castShadow = true;
              child.receiveShadow = true;
            }
         } );
  scene.add(room);
});

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); 
var spotLight = new THREE.SpotLight( 0xffffff, .75 );
spotLight.position.set( 0, 4, 0 );
spotLight.angle = 1;
spotLight.penumbra = .5
spotLight.decay = 1;
spotLight.distance = 2000;
spotLight.shadow.bias = -0.01;
spotLight.castShadow = true;
scene.add( spotLight );

spotLight.target.position.set(10, -1000, -50);
scene.add( spotLight.target );


//var lightHelper = new THREE.SpotLightHelper( spotLight );
//scene.add( lightHelper );

scene.add(ambientLight, spotLight);

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



//room




// var lightHelper2 = new THREE.SpotLightHelper( spotLight2 );


























// ////------- SCENE AND RENDERING AND CAMERA ------ /////


// function onWindowResize() {

//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize( window.innerWidth, window.innerHeight );

// }

// window.addEventListener( 'resize', onWindowResize, false );

// const scene = new THREE.Scene();

// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector('#bg'),
// });

// renderer.gammaOutput = true;
// renderer.gammaFactor = 2.2;
// renderer.shadowMap.enabled = true;

// const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);


// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(document.body.getBoundingClientRect().top * -0.05);
// camera.position.setX(0);
// camera.position.setY(0);

// renderer.render(scene, camera);




// function moveCamera() {
//   const t = document.body.getBoundingClientRect().top;
//   room.rotation.x = t*-0.001;
//   room.rotation.z = t*-0.001;

//   if(t <= -657) {
//     spotLight.intensity = 0;
//   } else {
//     spotLight.intensity = 1;
//   }
//   camera.position.z = t * -0.08;
//   console.log(t)
// }
// document.body.onscroll = moveCamera



// ///////////////////////////////////////////////////////////////









// ////------- MODEL LOADING ------ /////

// const loader = new GLTFLoader();
// let mixer;

// //room
// var room = new THREE.Object3D();
// loader.load('./Models/websiteRoom.gltf', (model) => {
//   // const clips = model.animations.find((clip) => clip.name == 'run');
//   // mixer  = new THREE.AnimationMixer(model.scene);

//   // mixer.clipAction(clips).play();
//   room = model.scene;
//   room.rotateY(1.5708);
//   room.position.setX(0.6)
//   room.position.setZ(-10)
//   room.position.setY(-4.5)
//   room.traverse( function ( child ) {

//             if ( child.isMesh ) {

//                 child.castShadow = true;
//                 child.receiveShadow = true;

//             }
//          } );
//   scene.add(room);
// });



// //about me
// var johnnyStatue = new THREE.Object3D();
// loader.load('./Models/johnnyModelv1.gltf', (model) => {
//   // const clips = model.animations.find((clip) => clip.name == 'run');
//   // mixer  = new THREE.AnimationMixer(model.scene);

//   // mixer.clipAction(clips).play();
//   johnnyStatue = model.scene;
//   johnnyStatue.rotateY(-2.7);
//   johnnyStatue.position.setX(70)
//   johnnyStatue.position.setZ(120)
//   johnnyStatue.position.setY(-13)
//   johnnyStatue.traverse( function ( child ) {

//             if ( child.isMesh ) {

//                 child.castShadow = true;
//                 child.receiveShadow = true;

//             }
//          } );
//   scene.add(johnnyStatue);
// });





// //minermen
// var miner = new THREE.Object3D();
// loader.load('./Models/minermen.gltf', (model) => {
//   // const clips = model.animations.find((clip) => clip.name == 'run');
//   // mixer  = new THREE.AnimationMixer(model.scene);

//   // mixer.clipAction(clips).play();
//   miner = model.scene;
//   miner.rotateY(.97);
//   miner.position.setX(3)
//   miner.position.setZ(225)
//   miner.position.setY(0)
//   miner.traverse( function ( child ) {

//             if ( child.isMesh ) {

//                 child.castShadow = true;
//                 child.receiveShadow = true;

//             }
//          } );
//   scene.add(miner);
// });

// const geometry = new THREE.SphereGeometry(10, 24, 24);
// const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
// const star = new THREE.Mesh(geometry, material);
// star.receiveShadow = true;
// star.position.setX(3);
// star.position.setZ(225);
// star.position.setY(-10);
// scene.add(star)




// ///////////////////////////////////////////////////////////////





















// ////------- LIGHTING ------ /////


//     var ambientLight = new THREE.AmbientLight( 0xffffff, .3 );
//     scene.add( ambientLight );


//     // Room Spotlight
//     var spotLight = new THREE.SpotLight( 0xffffff, 1 );
//     spotLight.position.set( 8, 4, -7 );
//     spotLight.angle = 1;
//     spotLight.penumbra = .5
//     spotLight.decay = 1;
//     spotLight.distance = 2000;
//     spotLight.shadow.bias = -0.01;

//     spotLight.castShadow = true;
//     scene.add( spotLight );

//     spotLight.target.position.set(10, -1000, -50);
//     scene.add( spotLight.target );

  
//     //var lightHelper = new THREE.SpotLightHelper( spotLight );
//     //scene.add( lightHelper );



//     //statueSpotlight spotlight
//     var statueSpotlight = new THREE.SpotLight( 0xffffff, 1 );
//     statueSpotlight.position.set( 68, 40, 140 );
//     statueSpotlight.angle = 1;
//     statueSpotlight.penumbra = .5
//     statueSpotlight.decay = 1;
//     statueSpotlight.distance = 2000;
//     statueSpotlight.shadow.bias = -0.01;

//     statueSpotlight.castShadow = true;
//     scene.add( statueSpotlight );

//     statueSpotlight.target.position.set(10, -1000, -50);
//     scene.add( statueSpotlight.target );

  
//     var lightHelpers = new THREE.SpotLightHelper( statueSpotlight );
//     //scene.add( lightHelpers );





//     //miner spotlight
//     var minerLight = new THREE.SpotLight( 0xffffff, 1 );
//     minerLight.position.set( 5, 4, 225 );
//     minerLight.angle = 1;
//     minerLight.penumbra = .5
//     minerLight.decay = 1;
//     minerLight.distance = 2000;
//     minerLight.shadow.bias = -0.01;

//     minerLight.castShadow = true;
//     scene.add( minerLight );

//     minerLight.target.position.set(10, -1000, -50);
//     scene.add( minerLight.target );

  
//     var lightHelper = new THREE.SpotLightHelper( minerLight );
//     //scene.add( lightHelper );



// ///////////////////////////////////////////////////////////////











// ////------- RAYCAST AND ONCLICK ROTATION ------ /////

// // const raycaster = new THREE.Raycaster();
// // const mouse = new THREE.Vector2();

// // function onMouseMove( event ) {

// // 	// calculate mouse position in normalized device coordinates
// // 	// (-1 to +1) for both components

// // 	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
// // 	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

// // }




// // window.addEventListener( 'mousemove', onMouseMove, false );
// // ///
// // var selectedObject;
// // var clickDown = false;
// // window.addEventListener("click", (event) => {
// //   clickDown = !clickDown;
// //   console.log(clickDown)
// // })


// // let onetime = true;
// // const clock = new THREE.Clock();
// ///////////////////////////////////////////////////////////////










// ////------- UPDATE LOOP ------ /////
// function animate() {
//   requestAnimationFrame(animate);
//   if(mixer) {
//     mixer.update(clock.getDelta());
//   }

//   // console.log(window.innerHeight);
//   // if(window.innerHeight<=900) {
//   //   camera.fov = 100;
//   //   console.log("one hundy");
//   // } else {
//   //       console.log("75");
//   //   camera.fov = 75;
//   // }


//   //statue animation

//     johnnyStatue.rotation.y += 0.01;





//   renderer.render(scene, camera);
// }

// animate();
// ///////////////////////////////////////////////////////////////








// ////------- STARS ------ /////

// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(100));

//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(200).fill().forEach(addStar);
// ///////////////////////////////////////////////////////////////








// ////------- BACKGROUND ------ /////
// const space = new THREE.TextureLoader().load('./Space.jpeg');
// scene.background = space;

// ///////////////////////////////////////////////////////////////