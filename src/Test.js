import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import myImage from './img/texturelow.jpg';
import myImage2 from './img/lowtext2.jpg';
import myImage3 from './img/texturebleu.jpg';
import myImageCube from './img/textPlanet.jpg'
import { gsap } from 'gsap';
import Pres from './Pres'
import Compet from './Compet'
import Project from './Project'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const SimpleScene = () => {

  const [showComponent, setShowComponent] = useState(false);
  const [isClickedPres, setIsClickedPres] = useState(false); // État pour gérer la taille de la scène
  const [isClickedCompet, setIsClickedCompet] = useState(false); // État pour gérer la taille de la scène
  const [isClickedProject, setIsClickedProject] = useState(false); // État pour gérer la taille de la scène
  const [isScreenBig, setScreenBig] = useState(true);
  const [isStart, setStart] = useState(false); // État pour gérer la taille de la scène
  const mountRef = useRef(null);
  
  useEffect(() => {
    // Créer la scène
    var resizePlanet = 0;
    const scene = new THREE.Scene();

    const manager = new THREE.LoadingManager();

    const pointA = { x: -1.5, y: 1, z: 0 };
    const pointB = { x: 1, y: 1, z: 0 }; 
    // Cette fonction sera appelée une fois que tout est chargé
    manager.onLoad = function () {
    console.log('Toutes les ressources sont chargées');
    circleBlue.scale.set(0,0,0);
    circleRed.scale.set(0,0,0);
    circle.scale.set(0,0,0);
    //cube.scale.set(0,0,0);
    //cube.position.set(pointA.x,pointA.y,pointA.z);
    //scene.add(cube);
    scene.add(circleBlue);
    scene.add(circleRed);
    scene.add(circle);
    
    };

    setTimeout(() => {
      cube.userData.isAnimating = true;
      gsap.to(cube.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2, // Durée de l'animation en secondes
        ease: 'elastic.out(1, 0.3)', // Effet élastique
        onComplete: () => {
          cube.userData.isAnimating = false; // Animation terminée
        },
      });
      
    }, 1000);
    setTimeout(() => {
      circleRed.userData.isAnimating = true;
      gsap.to(circleRed.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2, // Durée de l'animation en secondes
        ease: 'elastic.out(1, 0.3)', // Effet élastique
        onComplete: () => {
          circleRed.userData.isAnimating = false; // Animation terminée
        },
      });
      
    }, 1000);
    setTimeout(() => {
      circle.userData.isAnimating = true;
      gsap.to(circle.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2, // Durée de l'animation en secondes
        ease: 'elastic.out(1, 0.3)', // Effet élastique
        onComplete: () => {
          circle.userData.isAnimating = false; // Animation terminée
          setStart(true);
        },
      });
    }, 2000);
    setTimeout(() => {
      circleBlue.userData.isAnimating = true;
      gsap.to(circleBlue.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 2, // Durée de l'animation en secondes
        ease: 'elastic.out(1, 0.3)', // Effet élastique
        onComplete: () => {
          circleBlue.userData.isAnimating = false; // Animation terminée
          
        },
      });


    }, 3000);


    

    
    
    
    
    // Créer la caméra
    const camera = new THREE.PerspectiveCamera(75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000 );
    camera.position.set(0,0,2); 
    
   
    var width = window.innerWidth;
    var height = window.innerHeight * 0.9999;
    // Variables pour la gestion de la souris et du raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();


    //couleur
    const White = 0xffffff;
    const Blue = 0x0077ff;
    const Red = 0xff0000;
    const Yellow = 0xffff00;
    const Orange = 0xffa500;
    const PerfectRed = 0xffc500;
    const PerfectBlue = 0x00b6ff;
    const BlueFonce = 0x186193;
    const LumBlue = 0x0791f1;
    const LumBlueTerre = 0x0000ff;
    const marron = 0xD2B48C;
    

    // Charger la texture
    const textureLoader = new THREE.TextureLoader(manager);
    const texture = textureLoader.load(myImage); // Spécifie le chemin vers ton image
    const texture2 = textureLoader.load(myImage2);
    const texture3 = textureLoader.load(myImage3);
    const texture4 = textureLoader.load(myImageCube);

    // Créer un matériau avec la texture
    const materialText = new THREE.MeshToonMaterial({ map: texture });
    const materialRed = new THREE.MeshToonMaterial({ map: texture2 });
    const materialBlue = new THREE.MeshToonMaterial({ map: texture3 });
    const materialCube = new THREE.MeshToonMaterial({ map: texture4 });
    const material = new THREE.MeshToonMaterial({color: 0xff6666 })

    const light = new THREE.PointLight(White,1);
    const light4 = new THREE.PointLight(Red,3);
    const light3 = new THREE.PointLight(Blue,3);
    const light2 = new THREE.AmbientLight(LumBlue,2);
    const geometry = new THREE.CapsuleGeometry( 0.5, 0.5, 4,8 );
    const geometryCube = new THREE.BoxGeometry(0.2,0.2,0.2);
    const geometry2 = new THREE.SphereGeometry(0.5);
    const geometry3 = new THREE.SphereGeometry(0.15);
    scene.background = new THREE.Color(BlueFonce);

    
    const circleBlue = new THREE.Mesh(geometry2, materialBlue);
    const circleRed = new THREE.Mesh(geometry2, materialRed);
    const circle = new THREE.Mesh(geometry2,materialText );
    const cube = new THREE.Mesh(geometry3,materialCube );
    
    circleBlue.userData.isAnimating = true;
    circleRed.userData.isAnimating = true;
    circle.userData.isAnimating = true;
    cube.userData.isAnimating = true;
    //cube.material.color.set(PerfectRed);
    // Créer le renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height ); // Taille du rendu
    
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    
    circleBlue.scale.set(0,0,0);
    
    
    
    scene.add(light);
    scene.add(light2);
    scene.add(light3);
    scene.add(light4);

    light.position.set(0,0,2);
    light3.position.set(1.5,0,2);
    light4.position.set(-1.5,0,2);
    circleBlue.position.set(1.5,0,0);
    circleRed.position.set(-1.5,0,0);
    //cube.position.set(1,0,0);
    
    const objectsBlue = [];
    objectsBlue.push(circleBlue);
    const objectsRed = [];
    objectsRed.push(circleRed);
    const objectsWhite = [];
    objectsWhite.push(circle);
    const objectsVaisseau = [];
    objectsVaisseau.push(cube);


    function onMouseOver(object) {
      //gsap.killTweensOf(object.scale);

      if (!object.userData.isAnimating) {
        object.userData.isAnimating = true;
        gsap.to(object.scale, {
          x: 1.2,
          y: 1.2,
          z: 1.2,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            object.userData.isAnimating = false; // Animation terminée
          },
        });
      }
    }
    function onMouseOut(object) {
      if (!object.userData.isAnimating) {
        object.userData.isAnimating = true;
        gsap.to(object.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            object.userData.isAnimating = false; // Animation terminée
          },
        });
      }
    }
        // Fonction pour déplacer la caméra de façon fluide
        function moveCameraSmooth(newPosition) {
          gsap.to(camera.position, {
              x: newPosition.x,
              y: newPosition.y,
              z: newPosition.z,
              duration: 1.5, // Durée de l'animation en secondes
              ease: "power1.inOut" // Type de transition
          });
        }

    const resizeBig = ()=>{
      
      width = window.innerWidth; // 50% ou 100% de la largeur
      height = window.innerHeight * 0.9999; // Hauteur de 100%   
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    const resize = () =>{
      width = window.innerWidth * 0.5; // 50% ou 100% de la largeur
      height = window.innerHeight * 0.9999; // Hauteur de 100%   
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    const handleResize = () =>{
      width = window.innerWidth;
       // 50% ou 100% de la largeur
      height = window.innerHeight * 0.9999; // Hauteur de 100%   
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    // Fonction d'animation pour rendre la scène
    const animate = () => {
      requestAnimationFrame(animate);


      raycaster.setFromCamera(mouse, camera);

      document.body.style.cursor = 'auto';
      
      // Vérifier les objets que le rayon croise
      const intersects = raycaster.intersectObject(circleBlue);
      const intersectsRed = raycaster.intersectObject(circleRed);
      const intersectsWhite = raycaster.intersectObject(circle);
      const intersectsVaisseau = raycaster.intersectObject(cube);
      
      // Si l'objet est survolé, changer la couleur
      if (intersects.length > 0) {
          intersects[0].object.material.color.set(PerfectBlue);
          //intersects[0].object.scale.set(1.05,1.05,1.05) // Changer la couleur en bleu
          onMouseOver(circleBlue);
          document.body.style.cursor = 'pointer';  
      } else {
        circleBlue.material.color.set(White); // Remettre la couleur d'origine (blanc)
        onMouseOut(circleBlue);
        
        //circleBlue.scale.set(1,1,1)
      }
      if (intersectsRed.length > 0) {
        intersectsRed[0].object.material.color.set(PerfectRed); // Changer la couleur en bleu
        onMouseOver(circleRed);
        document.body.style.cursor = 'pointer'; 
        //intersectsRed[0].object.scale.set(1.05,1.05,1.05)
      } else {
        circleRed.material.color.set(White);
        onMouseOut(circleRed);
         
         // Remettre la couleur d'origine (blanc)
        //circleRed.scale.set(resizePlanet,resizePlanet,resizePlanet)
      }
      if (intersectsWhite.length > 0) {
        intersectsWhite[0].object.material.color.set(marron); // Changer la couleur en bleu
        onMouseOver(circle);
        document.body.style.cursor = 'pointer'; 
        //intersectsWhite[0].object.scale.set(1.05,1.05,1.05)
      } else {
        circle.material.color.set(White); // Remettre la couleur d'origine (blanc)
        onMouseOut(circle);
        
        //circle.scale.set(1,1,1)
      }
      if (intersectsVaisseau.length > 0) {
        //intersectsVaisseau[0].object.material.color.set(marron); // Changer la couleur en bleu
        onMouseOver(cube);
        document.body.style.cursor = 'pointer'; 
        //intersectsWhite[0].object.scale.set(1.05,1.05,1.05)
      } else {
        cube.material.color.set(White); // Remettre la couleur d'origine (blanc)
        onMouseOut(cube);
        
        //circle.scale.set(1,1,1)
      }

      // Mettre à jour le raycaster en fonction de la position de la souris
      
      
      circleBlue.rotation.y += 0.01;
      circle.rotation.y += 0.01;
      circleRed.rotation.y += 0.01;
      cube.rotation.y += 0.01;
      //circle.rotation.z += 0.01;
      renderer.render(scene, camera); // Rendre la scène avec la caméra
    };
    animate();


      // Détecter le clic sur un objet
  

    window.addEventListener('mousemove', (event) => {
      // Convertir les coordonnées de la souris en valeurs de -1 à 1
      mouse.x = (event.clientX / width) * 2 - 1;
      mouse.y = -(event.clientY / height) * 2 + 1;
      

      
  });

  window.addEventListener('mousedown', (event) => {

    
    // Mettre à jour le raycaster en fonction de la position de la souris
    raycaster.setFromCamera(mouse, camera);
    
    
    // Vérifier les objets avec lesquels le rayon croise
    const intersectsBlue = raycaster.intersectObjects(objectsBlue);
    const intersectsRed = raycaster.intersectObjects(objectsRed);
    const intersectsWhite = raycaster.intersectObjects(objectsWhite);
    const intersectsVaisseau = raycaster.intersectObjects(objectsVaisseau);

    // Si un objet est cliqué, déclencher une action (changer la couleur en vert ici)
    if (intersectsBlue.length > 0) {
      moveCameraSmooth({ x: 1.5, y: 0, z: 1.5 });
      resize();
      setIsClickedCompet(false);
      setIsClickedPres(false);
      setIsClickedProject(true);
      setScreenBig(false);
      scene.add(cube);
      cube.position.set(2,-0.5,0);
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      if (mediaQuery.matches) {
        
      }
      else{
        handleResize();
      } 
      if (mountRef.current.classList.contains('md:w-1/2')) {

        
      }
        //   console.log('La div contient la classe.');
        // }
      // 
      // else{
      //   
      // }
      //
      //camera.position.set(1.5,0,1.5);
    }
    if (intersectsWhite.length > 0) {
      moveCameraSmooth({ x: 0, y: 0, z: 1.5 });
      resize();
      setIsClickedPres(false);
      setIsClickedCompet(true);
      setIsClickedProject(false);
      setScreenBig(false);
      
      cube.position.set(-0.5,-0.5,0);
      scene.add(cube);
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      if (mediaQuery.matches) {
        
      }
      else{
        handleResize();
      }
      //camera.position.set(0,0,1.5);
    }
    if (intersectsRed.length > 0) {
      moveCameraSmooth({ x: -1.5, y: 0, z: 1.5 });
      resize();
      setIsClickedPres(true);
      setIsClickedCompet(false);
      setIsClickedProject(false);
      setScreenBig(false);
      
      cube.position.set(-2,-0.5,0);
      scene.add(cube);
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      if (mediaQuery.matches) {
        
      }
      else{
        handleResize();
      }
      //handleResize();
      
      //camera.position.set(-1.5,0,1.5);  
    }
    if (intersectsVaisseau.length > 0) {
      scene.remove(cube);
      moveCameraSmooth({ x: 0, y: 0, z: 2 });
      resizeBig();
      setIsClickedPres(false);
      setIsClickedCompet(false);
      setIsClickedProject(false);
      setScreenBig(true);
      //camera.position.set(-1.5,0,1.5);  
    }
  });


  window.addEventListener('resize', handleResize);
    // Nettoyage lorsque le composant est démonté
    return () => {
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);


  // Fonction pour ajuster la taille du renderer lors du changement de taille de la fenêtre ou du conteneur
  

  return <div className="flex flex-col md:flex-row">
          
          <div ref={mountRef} className={`${
      isClickedPres || isClickedCompet || isClickedProject ? 'w-full test md:w-1/2' : 'w-full'
    } h-screen overflow-hidden transition-all duration-500`} />
         {/* Texte superposé */}
         {isScreenBig && isStart &&(
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  pointer-events-none">
          <p className='font-medium font-sans text-3xl'>Lilian Lafin <br></br>Portfolio</p>
          
        </div>
      )}

        {isClickedCompet && (<div className="w-full md:w-1/2 h-screen overflow-y-scroll">
           <Compet/>
         </div>
       )}
        {isClickedPres && (<div className="w-full md:w-1/2 h-screen overflow-y-scroll" >
            <Pres/>
          </div>
        )}
        {isClickedProject && (<div className="w-full md:w-1/2 h-screen overflow-y-scroll">
           <Project/>
         </div>
        )}
        </div>


        
      
      
        
  //
};



export default SimpleScene;