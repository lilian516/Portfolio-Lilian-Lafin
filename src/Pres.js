import myImage from './img/link.png';  // Import de l'image
import mailImage from './img/email.png';  // Import de l'image
import lilianImage from './img/lilian.jpg';  // Import de l'image

const Pres = () => {
    return (
      <div  className='m-4'>

        <h1 className="text-4xl font-bold font-sans m-8">A propos de moi</h1>
        <img className="w-48 h-48 mx-auto rounded-lg m-8"src= {lilianImage} alt="lien linkedin Lilian Lafin" />
        
        
        <p className=" m-4 mb-8 font-body">En tant que développeur, j'ai toujours voulu comprendre comment fonctionnaient les applications, les jeux vidéo et les logiciels que j'utilisais au quotidien.
          Cette curiosité m'a naturellement conduit à explorer des langages comme <b>C++</b> et <b>C#</b>.
          <br></br>Grâce à ces compétences, j'ai eu l'opportunité de travailler sur des projets variés, notamment avec <b>Unity</b>, où j'ai développé plusieurs jeux vidéo.
          Ces différentes expériences m'ont appris à allier créativité et technique.
          Pour moi, coder, c'est transformer une idée en quelque chose de concret. </p>
          <a href="${process.env.PUBLIC_URL}/Lilian Lafin - CV.pdf" download="Lilian Lafin - CV.pdf" className=' font-bold rounded-full p-4 bg-blue-500 text-white hover:bg-black transition duration-300 font-body'>Télécharger mon CV</a>
        <div className=' flex justify-center space-x-16 m-8 mt-12'>
          <div className='border-[1px] border-gray-600 w-[40%] rounded-lg hover:border-blue-500 cursor-pointer transition duration-300'>
            <img className="m-2 mb-2 w-8 h-8 mx-auto cursor-pointer"src= {mailImage} alt="lien linkedin Lilian Lafin" />
            <h2 className="font-bold font-sans">EMail</h2>
            <p className="font-body ">lilian.lafin@gmail.com</p>
          </div>
          
          <div className='border-[1px] border-gray-600 w-[40%] rounded-lg hover:border-blue-500 cursor-pointer transition duration-300'>
            <a href="https://fr.linkedin.com/in/lilian-lafin-8031a6254?trk=public_post_main-feed-card_reshare-text" target="_blank" rel="noopener noreferrer">
              <img className="m-2 mb-2 w-8 h-8 mx-auto cursor-pointer"src= {myImage} alt="lien linkedin Lilian Lafin" />
              <h2 className="font-bold font-sans">Linkedin</h2>
              <p className="font-body">Lilian Lafin</p>
            </a>
          </div>
          
          

        </div>
        
      </div>
    );
};
export default Pres;
  