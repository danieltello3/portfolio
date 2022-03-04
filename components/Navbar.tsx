import Link from "next/link";
import { useState } from "react";
import navStyles from "../styles/Navbar.module.scss";

const Navbar = () => {
   const [hamOpen, setHamOpen] = useState(false);
   const handleHamburguer = () => {
      setHamOpen(!hamOpen);
   };

   const handleMenu = () => {
      setHamOpen(false);
   };
   return (
      <nav className={navStyles.navbar}>
         <div
            className={navStyles.Hamburguer}
            style={hamOpen ? { position: "fixed" } : { position: "absolute" }}
            onClick={handleHamburguer}>
            <div
               className={
                  hamOpen
                     ? `${navStyles.Hamburguer__line} ${navStyles.openHam}`
                     : navStyles.Hamburguer__line
               }></div>
         </div>
         <div
            className={
               hamOpen
                  ? `${navStyles.Links} ${navStyles.open}`
                  : navStyles.Links
            }>
            <li className={navStyles.Links__Item}>
               <Link href="/">
                  <a
                     className={navStyles.Links__Item__Text}
                     onClick={handleMenu}>
                     Inicio
                  </a>
               </Link>
               <div className={navStyles.Links__Item__underline}></div>
            </li>
            <li className={navStyles.Links__Item}>
               <Link href="/proyectos">
                  <a
                     className={navStyles.Links__Item__Text}
                     onClick={handleMenu}>
                     Proyectos
                  </a>
               </Link>
               <div className={navStyles.Links__Item__underline}></div>
            </li>
            <li className={navStyles.Links__Item}>
               <Link href="/fotos">
                  <a
                     className={navStyles.Links__Item__Text}
                     onClick={handleMenu}>
                     Fotos
                  </a>
               </Link>
               <div className={navStyles.Links__Item__underline}></div>
            </li>
            <li className={navStyles.Links__Item}>
               <Link href="/contacto">
                  <a
                     className={navStyles.Links__Item__Text}
                     onClick={handleMenu}>
                     Contacto
                  </a>
               </Link>
               <div className={navStyles.Links__Item__underline}></div>
            </li>
            <li className={navStyles.Links__ItemCta}>
               <Link href="/CV_DANIELTELLO.pdf">
                  <a
                     className={navStyles.Links__ItemCta__Text}
                     onClick={handleMenu}
                     target="_blank">
                     CV
                  </a>
               </Link>
            </li>
         </div>
      </nav>
   );
};

export default Navbar;
