import Image from "next/image";
import skillStyle from "../styles/Skills.module.scss";

const skills = [
   { img: "/html.png", alt: "Html" },
   { img: "/Css.png", alt: "Css" },
   { img: "/javascript-escudo.png", alt: "Javascript" },
   { img: "/typescript.png", alt: "Typescript" },
   { img: "/React.png", alt: "React" },
   { img: "/nextjs.png", alt: "NextJs" },
   { img: "/python.png", alt: "Python" },
   { img: "/Git.png", alt: "Git" },
   { img: "/Django.png", alt: "Django" },
   { img: "/flask.png", alt: "Flask" },
   { img: "/nodejs.png", alt: "NodeJS" },
   { img: "/postgresql.png", alt: "PostgreSQL" },
   { img: "/MongoDB.png", alt: "MongoDB" },
   { img: "/expressjs.png", alt: "ExpressJS" },
];

const Skills = () => {
   return (
      <div className={skillStyle.main}>
         <p>CONOCIMIENTOS</p>
         <div className={skillStyle.track}>
            {skills.map((obj, index) => (
               <div className={skillStyle.imageContainer} key={index}>
                  <Image src={obj.img} alt={obj.alt} />
               </div>
            ))}
            {skills.map((obj, index) => (
               <div className={skillStyle.imageContainer} key={index}>
                  <Image src={obj.img} alt={obj.alt} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Skills;
