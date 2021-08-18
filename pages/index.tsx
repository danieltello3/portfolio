import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import avatar from "../assets/images/Memoji_laptop.png";
import { useEffect, useState } from "react";
import Skills from "../components/Skills";

const Home: NextPage = () => {
   //const [matchs, setMatchs] = useState(true);

   //  useEffect(() => {
   //     const handler = (e: any) => setMatchs(e.matches);
   //     window
   //        .matchMedia("(min-width: 600px)")
   //        .addEventListener("change", handler);
   //  }, []);

   return (
      <div className={styles.container}>
         <Head>
            <title>Daniel Tello | Portafolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon_dt.ico" />
         </Head>

         <main className={styles.main}>
            <div className={styles.presentation}>
               <div className={styles.about}>
                  <h4>Hola, Soy</h4>
                  <h3>Daniel Tello</h3>
                  <h6>Backend Developer</h6>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                     aliquam, purus sit amet luctus venenatis, lectus magna
                     fringilla urna, porttitor rhoncus dolor purus non enim
                     praesent elementum.
                  </p>
               </div>
               <div className={styles.image}>
                  <Image src={avatar} layout="responsive"></Image>
               </div>
            </div>
            <div className={styles.skills}></div>
            <Skills />
            <div className={styles.titulo}>
               <p>PROYECTOS</p>
               <div></div>
            </div>
            <div className={styles.titulo}>
               <p>FOTOS</p>
               <div></div>
            </div>
         </main>
      </div>
   );
};

export default Home;
