import Image from "next/image";
import photoStyles from "../styles/Photos.module.scss";
import foto1 from "../assets/images/Photos/7.jpg";
import foto3 from "../assets/images/Photos/esta.jpg";
import foto2 from "../assets/images/Photos/esta2.jpg";
import foto4 from "../assets/images/Photos/IMG_5666.jpg";

const listaFotos = [foto1, foto2, foto3, foto4, foto2, foto3, foto4];

const Fotos = () => {
   return (
      <div className={photoStyles.main}>
         <div className={photoStyles.title}>
            <p>FOTOS</p>
            <div></div>
         </div>
         <div className={photoStyles.gallery}>
            {listaFotos.map((foto, index) => (
               <div className={photoStyles.photoHolder} key={index}>
                  <Image src={foto} />
                  <div className={photoStyles.info}>
                     <p>Lima, Perú</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Fotos;
