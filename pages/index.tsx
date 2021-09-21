import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import avatar from "../assets/images/Memoji_laptop.png";
import Skills from "../components/Skills";
import Proyecto from "../components/Proyecto";
import axios from "axios";
import { IImage, TProyecto } from "../types";
import Link from "next/link";
import Layout from "../components/Layout";

export const getStaticProps: GetStaticProps = async () => {
   const res = await axios.get(
      `${process.env.BACKEND_URL}/images/612d8e9128bfb31428f5d1da`
   );
   const imageData: IImage = await res.data.content;
   const resProject = await axios.get(
      `${process.env.BACKEND_URL}/project/61492fe151b479001660236c`
   );
   const projectData: TProyecto = resProject.data.content;
   return {
      props: { imageData, projectData },
   };
};

const Home = ({
   imageData,
   projectData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <Layout title="Inicio">
         <div className={styles.container}>
            <main className={styles.main}>
               <div className={styles.presentation}>
                  <div className={styles.about}>
                     <h4>Hola, Soy</h4>
                     <h3>Daniel Tello</h3>
                     <h6>Web Developer</h6>
                     <p>
                        Apasionado a la tecnología, con muchas ganas de ampliar
                        mi conocimiento y experiencia en el desarrollo web. Me
                        gusta tomar fotos, así que comparto por aquí algunas de
                        mis mejores fotos.
                     </p>
                  </div>
                  <div className={styles.image}>
                     <Image src={avatar} layout="responsive"></Image>
                  </div>
               </div>
               <Skills />
               <div className={styles.titulo}>
                  <p>PROYECTOS</p>
                  <div></div>
               </div>
               <div className={styles.projects}>
                  <Proyecto
                     image={projectData.image}
                     title={projectData.title}
                     description={projectData.description}
                     link={projectData.link}
                     githubLinks={projectData.githubLinks}
                  />
                  <Link href="/proyectos">
                     <a className={styles.links}>
                        <svg
                           version="1.1"
                           id="Capa_1"
                           x="0px"
                           y="0px"
                           viewBox="0 0 512.002 512.002">
                           <g>
                              <g>
                                 <path
                                    d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105
			L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
			l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"
                                 />
                              </g>
                           </g>
                        </svg>
                     </a>
                  </Link>
               </div>

               <div className={styles.titulo}>
                  <p>FOTOS</p>
                  <div></div>
               </div>
               <div className={styles.fotos}>
                  <Image
                     src={imageData.url}
                     width={imageData.width * 400}
                     height={imageData.height * 400}
                  />
                  <Link href="/fotos">
                     <a className={styles.links}>
                        <svg
                           version="1.1"
                           id="Capa_1"
                           x="0px"
                           y="0px"
                           viewBox="0 0 512.002 512.002">
                           <g>
                              <g>
                                 <path
                                    d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105
			L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
			l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"
                                 />
                              </g>
                           </g>
                        </svg>
                     </a>
                  </Link>
               </div>
            </main>
         </div>
      </Layout>
   );
};

export default Home;
