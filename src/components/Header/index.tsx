import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';

import {ActiveLink} from '../ActiveLink';

export default function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        
        <ActiveLink legacyBehavior href="/" activeClassName={styles.active}>
          <a>
          <Image src={logo} alt="Logo" width={299} height={85}/>
          </a>          
        </ActiveLink>

        <nav>
          <ActiveLink legacyBehavior href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink legacyBehavior href="/posts" activeClassName={styles.active}>
            <a>Conteúdos</a>
          </ActiveLink>

          <ActiveLink legacyBehavior href="/sobre" activeClassName={styles.active}>
            <a>Quem somos?</a>
          </ActiveLink>
        </nav>

        <a className={styles.readyButton} type="button" href="/login">Fazer Login</a>

      </div>
    </header>
  )
}