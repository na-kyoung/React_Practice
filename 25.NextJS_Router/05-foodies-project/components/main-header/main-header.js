import Link from "next/link";
import Image from "next/image";

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import NavLink from "./nav-link";

export default function MainHeader(){
  console.log('MainHeader');

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        {/* <img src={logoImg.src}/> */}
        <Image src={logoImg} alt="A plate with food on it" priority />
        Next Level Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
            {/* <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link> */}
          </li>
          <li>
          <NavLink href="/community">Foodies Community</NavLink>
            {/* <Link href="/community" className={path === '/community' ? classes.active : undefined}>Foodies Community</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}