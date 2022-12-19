import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import styles from './styles.module.scss';

export default function Logo() {
  return (
    <header className={styles.headerContainer}>
      <Image src={logo} alt="Logo" width={299} height={85}/>    
    </header>
  )
}
