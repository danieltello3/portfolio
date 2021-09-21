import Image from "next/image";
import proyectStyle from "../styles/Proyect.module.scss";
import { TProyecto } from "../types";

const Proyecto = (props: TProyecto) => {
   const { image, title, description, link, githubLinks } = props;

   return (
      <div className={proyectStyle.main}>
         <div className={proyectStyle.barra}></div>
         <div className={proyectStyle.mainbody}>
            <div className={proyectStyle.info}>
               <div className={proyectStyle.content}>
                  <h5>{title}</h5>
                  <p>{description}</p>
               </div>
               <div className={proyectStyle.links}>
                  {link && (
                     <div className={proyectStyle.links__externalLink}>
                        <svg version="1.1" viewBox="0 0 512 512">
                           <g>
                              <g>
                                 <path
                                    d="M488.727,0H302.545c-12.853,0-23.273,10.42-23.273,23.273c0,12.853,10.42,23.273,23.273,23.273h129.997L192.999,286.09
			c-9.089,9.089-9.089,23.823,0,32.912c4.543,4.544,10.499,6.816,16.455,6.816c5.956,0,11.913-2.271,16.457-6.817L465.455,79.458
			v129.997c0,12.853,10.42,23.273,23.273,23.273c12.853,0,23.273-10.42,23.273-23.273V23.273C512,10.42,501.58,0,488.727,0z"
                                 />
                              </g>
                           </g>
                           <g>
                              <g>
                                 <path
                                    d="M395.636,232.727c-12.853,0-23.273,10.42-23.273,23.273v209.455H46.545V139.636H256c12.853,0,23.273-10.42,23.273-23.273
			S268.853,93.091,256,93.091H23.273C10.42,93.091,0,103.511,0,116.364v372.364C0,501.58,10.42,512,23.273,512h372.364
			c12.853,0,23.273-10.42,23.273-23.273V256C418.909,243.147,408.489,232.727,395.636,232.727z"
                                 />
                              </g>
                           </g>
                        </svg>
                        <a href={link} target="_blank" rel="noreferrer">
                           website
                        </a>
                     </div>
                  )}

                  {githubLinks?.frontend && (
                     <div className={proyectStyle.links__github}>
                        <svg
                           viewBox="0 0 16 16"
                           version="1.1"
                           aria-hidden="true">
                           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        <a
                           href={githubLinks.frontend}
                           target="_blank"
                           rel="noreferrer">
                           frontend
                        </a>
                     </div>
                  )}

                  {githubLinks?.backend && (
                     <div className={proyectStyle.links__github}>
                        <svg
                           viewBox="0 0 16 16"
                           version="1.1"
                           aria-hidden="true">
                           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        <a
                           href={githubLinks.backend}
                           target="_blank"
                           rel="noreferrer">
                           backend
                        </a>
                     </div>
                  )}
               </div>
            </div>
            <div className={proyectStyle.imageContainer}>
               <Image
                  src={image.url}
                  alt={image.name}
                  layout="intrinsic"
                  width="380.6"
                  height="190.2"
                  className={proyectStyle.image}
               />
            </div>
         </div>
      </div>
   );
};

export default Proyecto;
