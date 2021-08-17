import Link from "next/link";
import navStyles from "../styles/Navbar.module.scss";

const Navbar = () => {
   return (
      <div className={navStyles.navbar}>
         <li className={navStyles.navbar__Item}>
            <Link href="/">
               <a className={navStyles.navbar__Item__Text}>Inicio</a>
            </Link>
            <div className={navStyles.navbar__Item__underline}></div>
         </li>
         <li className={navStyles.navbar__Item}>
            <Link href="/proyectos">
               <a className={navStyles.navbar__Item__Text}>Proyectos</a>
            </Link>
            <div className={navStyles.navbar__Item__underline}></div>
         </li>
         <li className={navStyles.navbar__Item}>
            <Link href="/fotos">
               <a className={navStyles.navbar__Item__Text}>Fotos</a>
            </Link>
            <div className={navStyles.navbar__Item__underline}></div>
         </li>
         <li className={navStyles.navbar__Item}>
            <Link href="/contacto">
               <a className={navStyles.navbar__Item__Text}>Contacto</a>
            </Link>
            <div className={navStyles.navbar__Item__underline}></div>
         </li>
      </div>
   );
};

export default Navbar;
