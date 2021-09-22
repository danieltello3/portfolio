import Head from "next/head";
import React from "react";
import layoutStyle from "../styles/Layout.module.scss";

const Layout = ({
   children,
   title,
}: {
   children: React.ReactNode;
   title: string;
}) => {
   return (
      <div className={layoutStyle.container}>
         <Head>
            <title>Daniel Tello | {title}</title>
            <meta
               name="description"
               content="Portafolio personal, desarrollo web y fotografía"
            />
            <link rel="icon" href="/favicon_dt.ico" />
            <meta name="theme-color" content="#333333" />
            <meta property="og:image" content="/OG-portfolio.png" />
            <meta name="og:title" content="Daniel Tello | Portafolio" />
            <meta name="twitter:card" content="summary_large_image" />
         </Head>
         {children}
      </div>
   );
};

export default Layout;
