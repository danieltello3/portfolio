import Image from "next/image";
import skillStyle from "../styles/Skills.module.scss";

const skills = [
   { img: "/skills/html.png", alt: "Html" },
   { img: "/skills/Css.png", alt: "Css" },
   { img: "/skills/javascript-escudo.png", alt: "Javascript" },
   { img: "/skills/typescript.png", alt: "Typescript" },
   { img: "/skills/React.png", alt: "React" },
   { img: "/skills/nextjs.png", alt: "NextJs" },
   { img: "/skills/python.png", alt: "Python" },
   { img: "/skills/Git.png", alt: "Git" },
   { img: "/skills/Django.png", alt: "Django" },
   { img: "/skills/flask.png", alt: "Flask" },
   { img: "/skills/nodejs.png", alt: "NodeJS" },
   { img: "/skills/postgresql.png", alt: "PostgreSQL" },
   { img: "/skills/MongoDB.png", alt: "MongoDB" },
   { img: "/skills/expressjs.png", alt: "ExpressJS" },
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
