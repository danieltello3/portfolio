import Proyecto from "../components/Proyecto";
import img from "../assets/images/mejores-practicas-diseno-web-es-1024x512.jpg";
import styles from "../styles/Proyects.module.scss";
import Layout from "../components/Layout";
const Proyectos = () => {
   return (
      <Layout title="Proyectos">
         <div className={styles.main}>
            <div className={styles.title}>
               <p>PROYECTOS</p>
               <div></div>
            </div>
            <Proyecto img={img} />
            <Proyecto img={img} />
            <Proyecto img={img} />
         </div>
      </Layout>
   );
};

export default Proyectos;
