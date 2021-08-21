import skillStyle from "../styles/Skills.module.scss";
import react from "../assets/images/skills/React.png";
import git from "../assets/images/skills/Git.png";
import css from "../assets/images/skills/Css.png";
import django from "../assets/images/skills/Django.png";
import flask from "../assets/images/skills/flask.png";
import html from "../assets/images/skills/html.png";
import javascript from "../assets/images/skills/javascript-escudo.png";
import mongodb from "../assets/images/skills/MongoDB.png";
import nodejs from "../assets/images/skills/nodejs.png";
import postgres from "../assets/images/skills/postgresql.png";
import python from "../assets/images/skills/python.png";
import typescript from "../assets/images/skills/typescript.png";
import express from "../assets/images/skills/expressjs.png";
import Image from "next/image";

const skills = [
   { img: html, alt: "Html" },
   { img: css, alt: "Css" },
   { img: javascript, alt: "Javascript" },
   { img: typescript, alt: "Typescript" },
   { img: react, alt: "React" },
   { img: python, alt: "Python" },
   { img: git, alt: "Git" },
   { img: django, alt: "Django" },
   { img: flask, alt: "Flask" },
   { img: nodejs, alt: "NodeJS" },
   { img: postgres, alt: "PostgreSQL" },
   { img: mongodb, alt: "MongoDB" },
   { img: express, alt: "ExpressJS" },
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
