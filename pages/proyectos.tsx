import Proyecto from "../components/Proyecto";
import img from "../assets/images/mejores-practicas-diseno-web-es-1024x512.jpg";
import styles from "../styles/Proyects.module.scss";
const Proyectos = () => {
   return (
      <div className={styles.main}>
         <div className={styles.title}>
            <p>PROYECTOS</p>
            <div></div>
         </div>
         <Proyecto img={img} />
         <Proyecto img={img} />
         <Proyecto img={img} />
      </div>
   );
};

export default Proyectos;
