import Image from "next/image";
import skillStyle from "../styles/Skills.module.scss";
import react from "public/React.png";
import git from "public/Git.png";
import css from "public/Css.png";
import django from "public/Django.png";
import flask from "public/flask.png";
import html from "public/html.png";
import javascript from "public/javascript-escudo.png";
import mongodb from "../public/MongoDB.png";
import nodejs from "public/nodejs.png";
import postgres from "public/postgresql.png";
import python from "public/python.png";
import typescript from "public/typescript.png";
import express from "public/expressjs.png";

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
