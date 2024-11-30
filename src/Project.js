import cppImage from './img/c-.png';  // Import de l'image
import csharpImage from './img/c-sharp.png';  // Import de l'image
import unityImage from './img/unity.png';  // Import de l'image
import makeItBlueImage from './img/make_it_blu.webp';  // Import de l'image
import unevenImage from './img/uneven.png';  // Import de l'image
import demineurImage from './img/demineur.png';  // Import de l'image
import directImage from './img/Space.png';  // Import de l'image
const Project = () => {
    return (
    <div>
      <div className='m-4 mb-8'>
      <h1 className="text-4xl font-bold font-sans m-8">Mes projets</h1>
      </div>
      <div className=' flex justify-center   m-2 mb-8'>
        <div className='border-[1px] p-2  border-gray-600 w-[90%] rounded-lg '>
        <h2 className="font-bold  m-2 text-2xl">Make It Blue</h2>
        <img className="mx-auto  rounded-lg m-4"src= {makeItBlueImage} alt="logo C#" />
          <p className="font-body m-2">
          J'ai eu l'opportunité de travailler avec le groupe Océano, qui regroupe notamment le Musée océanographique de Monaco et l'Aquarium de Paris. Leur objectif : créer une communauté en ligne dédiée à la protection des océans.
          Pendant trois mois, j'ai travaillé aux côtés de quatre autres développeurs et de huit artistes pour concevoir un prototype d'une <b>application web</b> gamifiée sur <b>3dverse</b>, un nouveau moteur de rendu. Ce projet m'a permis de développer des solutions innovantes tout en contribuant à une cause environnementale essentielle.</p>
        </div>      
      </div>
      <div className=' flex justify-center  m-2 mb-8'>
      
        <div className='border-[1px] p-2  border-gray-600 w-[90%] rounded-lg '>
        <h2 className="font-bold  m-2 text-2xl">Uneven</h2>
        <img className="mx-auto  rounded-lg m-4"src= {unevenImage} alt="logo C#" />
          
          <p className="font-body m-2">
          Dans le cadre de mes études, j'ai été l'un des porteurs du projet <b>Uneven</b>, un jeu d'exploration et d'aventure développé sur <b>Unity</b>, réalisé sur une période de 5 mois avec une équipe de 5 autres développeurs. 
          Ce projet visait à offrir une expérience immersive, où les joueurs peuvent explorer différents environnements.
          J'ai travaillé sur plusieurs aspects du jeu, notamment le <b>level design</b> ainsi que la création de <b>mécaniques de jeu</b>. 
          Ce projet m'a permis de mettre en pratique mes compétences en développement tout en collaborant avec une équipe sur un projet de longue durée.</p>
        </div>
        
        
      </div>
      <div className=' flex justify-center  m-2 mb-8'>
        <div className='border-[1px] p-2  border-gray-600 w-[90%] rounded-lg '>
        <h2 className="font-bold  m-2 text-2xl">DirectX12 Moteur de Jeu</h2>
        <img className="mx-auto  rounded-lg m-4"src= {directImage} alt="image de direct X" />
          <p className="font-body m-2">
          Dans le cadre d’un projet en groupe de 4 personnes, nous avons conçu un moteur de jeu en <b>C++</b> à partir de zéro en utilisant <b>DirectX 12</b>, sur une période de 3 semaines. Pour structurer notre moteur, nous avons implémenté un système <b>Entity-Component</b> (ECS).
          Une fois le moteur développé, nous avons conçu un jeu exploitant ses fonctionnalités. Cette expérience m’a permis de renforcer mes compétences en C++, d’approfondir ma compréhension des architectures logicielles dans les moteurs de jeu, et de relever les défis techniques liés à la programmation graphique avec DirectX 12.</p>
        </div>
        
        
      </div>
      
    </div>
    );
};
export default Project;