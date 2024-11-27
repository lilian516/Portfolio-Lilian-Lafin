import cppImage from './img/c-.png';  // Import de l'image
import csharpImage from './img/c-sharp.png';  // Import de l'image
import unityImage from './img/unity.png';  // Import de l'image
import javaImage from './img/js.png';  // Import de l'image
import gestionImage from './img/gestionR.png';  // Import de l'image
import teamImage from './img/gestion.jpg';  // Import de l'image
const Compet = () => {
    return (
    <div>
      <div className='m-8 mb-12'>
      <h1 className="text-4xl font-bold font-sans ">Mes compétences</h1>
      </div>
      
      <div className=' flex justify-center space-x-16 m-4'>
      
        <div className=' group my-custom-hover'>
          <img className="w-16 h-16 mx-auto "src= {csharpImage} alt="logo C#" />
          <h2 className="title-compet ">Développeur C#</h2>
          <p className="para-compet">
          Je possède des compétences en C#, que j'ai mises en pratique en développant plusieurs jeux vidéo.</p>
        </div>
        <div className='group my-custom-hover'>
          <img className="w-16 h-16 mx-auto "src= {cppImage} alt="logo cpp" />
          <h2 className="title-compet">Développeur C++</h2>
          <p className="para-compet">
          Je maîtrise le C++, un langage qui m'a permis de réaliser différents projets.
          Ces expériences m'ont appris l'optimisation et la rigueur.</p>
        </div>
        
      </div>
      <div className=' flex justify-center space-x-16 m-4'>
        <div className=' group my-custom-hover'>
          <img className="w-16 h-16 mx-auto "src= {unityImage} alt="logo C#" />
          <h2 className="title-compet">Unity</h2>
          <p className="para-compet">
          Je maîtrise Unity, un moteur que j'ai utilisé pour concevoir plusieurs jeux vidéo. 
          Cela m'a permis de donner vie à des projets plus ambitieux.</p>
        </div>
        <div className='group my-custom-hover'>
          <img className="w-16 h-16 mx-auto "src= {javaImage} alt="logo cpp" />
          <h2 className="title-compet">Javascript</h2>
          <p className="para-compet">
          Je possède des compétences en JavaScript, que j'ai utilisées avec React et Node.js 
          pour développer des applications web dynamiques et performantes.</p>
        </div>
      </div>
      <div className=' flex justify-center space-x-16 m-4'>
        <div className=' group my-custom-hover'>
          <img className="w-16 h-16 mx-auto "src= {teamImage} alt="logo C#" />
          <h2 className="title-compet">Travail en équipe</h2>
          <p className="para-compet">
            Avec les nombreux projets de groupe sur lesquels j'ai travaillé, j'ai développé de solides compétences en collaboration et en communication. 
          </p>
        </div>
        <div className='group my-custom-hover'>
          <img className="w-16 h-16 mx-auto "src= {gestionImage} alt="logo cpp" />
          <h2 className="title-compet">Gestion de projet</h2>
          <p className="para-compet">
          En travaillant sur de nombreux projets d'équipe, 
          j'ai développé une réelle aptitude à gérer efficacement les différentes étapes de réalisation.</p>
        </div>
      </div>
    </div>
    );
};
export default Compet;