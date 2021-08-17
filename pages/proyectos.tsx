import { CSSProperties } from "react";
import Proyecto from "../components/Proyecto";
import img from "../assets/images/mejores-practicas-diseno-web-es-1024x512.jpg";
const Proyectos = () => {
   const styles: CSSProperties = {
      margin: "50px 0",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      width: "90%",
   };

   return (
      <div style={styles}>
         <Proyecto img={img} />
         <Proyecto img={img} />
         <Proyecto img={img} />
      </div>
   );
};

export default Proyectos;
