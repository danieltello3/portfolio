import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import avatar from "../assets/images/Memoji_laptop.png";
import Skills from "../components/Skills";
import Proyecto from "../components/Proyecto";
import img from "../assets/images/mejores-practicas-diseno-web-es-1024x512.jpg";
import axios from "axios";
import { IImage } from "../types";
import Link from "next/link";
import Layout from "../components/Layout";

export const getStaticProps: GetStaticProps = async () => {
   const res = await axios.get(
      `${process.env.BACKEND_URL}/images/612d8e9128bfb31428f5d1da`
   );
   const data: IImage = await res.data.content;
   return {
      props: { data },
   };
};

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <Layout title="Inicio">
         <div className={styles.container}>
            <main className={styles.main}>
               <div className={styles.presentation}>
                  <div className={styles.about}>
                     <h4>Hola, Soy</h4>
                     <h3>Daniel Tello</h3>
                     <h6>Backend Developer</h6>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enim praesent elementum.
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
                  <Proyecto img={img} />
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
                     src={data.url}
                     width={data.width * 400}
                     height={data.height * 400}
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
