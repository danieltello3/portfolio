import { GetStaticProps } from "next";
import axios from "axios";
import Proyecto from "../components/Proyecto";
import styles from "../styles/Proyects.module.scss";
import Layout from "../components/Layout";
import { TProyecto } from "../types";

export const getStaticProps: GetStaticProps = async () => {
   const res = await axios.get(`${process.env.BACKEND_URL}/projects`);
   const data = await res.data.content;

   return {
      props: { data },
      revalidate: 604800,
   };
};

const Proyectos = ({ data }: { data: Array<TProyecto> }) => {
   return (
      <Layout title="Proyectos">
         <div className={styles.main}>
            <div className={styles.title}>
               <p>PROYECTOS</p>
               <div></div>
            </div>
            {data.map((project) => (
               <Proyecto
                  key={project._id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  githubLinks={project.githubLinks}
               />
            ))}
         </div>
      </Layout>
   );
};

export default Proyectos;
