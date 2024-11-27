
import * as THREE from "three";


class ThreeApp {
    // Le constructeur est une méthode spéciale pour initialiser l'objet
    constructor() {
        
      
      // Création de la scène, de la caméra et du rendu
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.scene.background = new THREE.Color(0x87CEEB); // Fond bleu
      this.camera.position.set(0, 2, 2);

      // Lumière pour la teinte
      this.light = new THREE.DirectionalLight(0xffffff, 2);
      this.light.position.set(5, 5, 5);
      this.scene.add(this.light);

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      
    }

    Initialize(){
      
    }

}
export default ThreeApp;

