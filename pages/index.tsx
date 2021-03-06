import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Skills from "../components/Skills";
import Proyecto from "../components/Proyecto";
import avatar from "../public/memoji_laptop.png";
import axios from "axios";
import { IImage, TProyecto } from "../types";
import Link from "next/link";
import Layout from "../components/Layout";

export const getStaticProps: GetStaticProps = async () => {
   const res = await axios.get(
      `${process.env.BACKEND_URL}/images/614a81053bd7980016c56fe0`
   );
   const imageData: IImage = await res.data.content;
   const resProject = await axios.get(
      `${process.env.BACKEND_URL}/project/614ad1694837280016ec78be`
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
                        En busca de ampliar mi conocimiento y experiencia en el
                        desarrollo web.
                        <br />
                        Curioso por blockchain, cryptos, WEB3.0
                        <br /> Editor, diseñador y fotográfo por pasión. <br />
                        Uno de mis pasatiempos es tomar fotos, aqui comparto
                        algunas de mis favoritas.
                     </p>
                  </div>
                  <div className={styles.image}>
                     <Image
                        src={avatar}
                        alt="Daniel-picture"
                        layout="responsive"></Image>
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
                     alt={imageData.name}
                     width={imageData.width * 300}
                     height={imageData.height * 300}
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
