import Image from "next/image";
import skillStyle from "../styles/Skills.module.scss";
import react from "../public/skills/React.png";
import git from "../public/skills/Git.png";
import css from "../public/skills/Css.png";
import django from "../public/skills/Django.png";
import flask from "../public/skills/flask.png";
import html from "../public/skills/html.png";
import javascript from "../public/skills/javascript-escudo.png";
import mongodb from "../public/skills/MongoDB.png";
import nodejs from "../public/skills/nodejs.png";
import postgres from "../public/skills/postgresql.png";
import python from "../public/skills/python.png";
import typescript from "../public/skills/typescript.png";
import express from "../public/skills/expressjs.png";
import nextjs from "../public/skills/nextjs.png";

const skills = [
   { img: html, alt: "Html" },
   { img: css, alt: "Css" },
   { img: javascript, alt: "Javascript" },
   { img: typescript, alt: "Typescript" },
   { img: react, alt: "React" },
   { img: nextjs, alt: "NextJs" },
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
