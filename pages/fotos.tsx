import Image from "next/image";
import Masonry from "react-masonry-component";
import { GetStaticProps } from "next";
import axios from "axios";
import photoStyles from "../styles/Photos.module.scss";
import { IImage } from "../types";
import Layout from "../components/Layout";

export const getStaticProps: GetStaticProps = async () => {
   const res = await axios.get(`${process.env.BACKEND_URL}/images`);
   const data = await res.data.content;
   data.sort((a: IImage, b: IImage) => {
      if (a.date < b.date) {
         return 1;
      } else {
         return -1;
      }
   });
   return {
      props: { data },
      revalidate: 604800,
   };
};

const Fotos = ({ data }: { data: Array<IImage> }) => {
   return (
      <Layout title="Fotos">
         <div className={photoStyles.main}>
            <div className={photoStyles.title}>
               <p>FOTOS</p>
               <div></div>
            </div>
            <div className={photoStyles.gallery}>
               <Masonry
                  options={{
                     transitionDuration: 0,
                     gutter: 6,
                  }}>
                  {data.map((foto) => (
                     <div className={photoStyles.photoHolder} key={foto._id}>
                        <Image
                           src={foto.url}
                           width={
                              foto.width > 4
                                 ? foto.width * 150
                                 : foto.width * 300
                           }
                           height={
                              foto.height > 4
                                 ? foto.height * 150
                                 : foto.height * 300
                           }
                           alt={foto.name}
                        />
                        <div className={photoStyles.info}>
                           <p>{`${foto.location} - ${foto.date}`}</p>
                        </div>
                     </div>
                  ))}
               </Masonry>
            </div>
         </div>
      </Layout>
   );
};

export default Fotos;
