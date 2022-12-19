import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import { AuthContext } from '../../contexts/auth';

import {ActiveLink} from '../ActiveLink';
import { useContext } from 'react';

export default function Header(){
  const {user, signOut}:any = useContext(AuthContext);
  
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

        </nav>

        <a className={styles.readyButton} type="button">Bem vindo(a) {user && user.nome}</a>
        <a  className={styles.readyButton} type="button" onClick={signOut}>Sair</a>

      </div>
    </header>
  )
}