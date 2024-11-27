// ThreeScene.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Création de la scène, de la caméra et du rendu
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Fond bleu ciel

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(1, 2, 5);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lumière pour la teinte
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 3, 1);
    scene.add(light);

    // Ajout d'un cube avec une teinte bleu ciel
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({
      color: 0xff0000, // Bleu ciel
      emissive: 0x3333, // Pas d'émission lumineuse
      metalness: 0.1, // Très peu métallique
      roughness: 0.7, // Surface légèrement rugueuse pour ne pas être trop brillante
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(1,1,1);
    scene.add(cube);

    // La caméra regarde vers le cube
    camera.lookAt(cube.position);

    // Fonction pour déplacer le cube en fonction des touches
    
  
    // Raycaster et vector pour capturer la position de la souris
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Fonction pour détecter le clic
    const onMouseClick = (event) => {
      // Calculer la position de la souris en coordonnées normalisées (-1 à +1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Mettre à jour le raycaster en fonction de la position de la souris et de la caméra
      raycaster.setFromCamera(mouse, camera);

      // Vérifier les objets intersectés
      const intersects = raycaster.intersectObjects(scene.children);

      if (intersects.length > 0) {
        console.log('Cube cliqué !');
        // On peut ici déclencher des actions spécifiques lorsque l'objet est cliqué
        intersects[0].object.material.color.set(0x87CEEB); // Changer la couleur du cube au rouge
      }
    };

    // Écouter les événements de clic
    window.addEventListener('click', onMouseClick);

    

    // Animation du cube
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.y += 0.02;
      renderer.render(scene, camera);
    };

    animate();

    // Nettoyage lors du démontage du composant
    return () => {
      // Supprimer l'écouteur
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeScene;
