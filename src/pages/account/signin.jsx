import {useState, useContext} from 'react';
import {AuthContext} from '../../contexts/auth'
import styles from './styles.module.scss';
import ActivityIndicator from 'react-activity-indicator';
import { useRouter } from 'next/router';

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext)
  const router = useRouter()
  
  function handleLogin() {
    signIn(email, password);
  }

  function handleClick() {
    router.push('/account/signup');
  }

  return (
    <div className={styles.containerLogin}>

      <div className={styles.formGroup}>
        <label>
          Email
          <br/><input className={styles.input}
          name="email"
          placeholder='Digite seu E-mail'
          value={email}
          type="email"
          onChange={e => setEmail(e.target.value)} />
        </label>
      </div>

      <div className={styles.formGroup}>
        <label>
          Senha
          <br/><input className={styles.input}
          name="password"
          placeholder='Digite sua senha'
          value={password}
          type="password"
          onChange={(e => setPassword(e.target.value))}
           />
        </label>
      </div>

      <button className={styles.submitButton} type="submit" onClick={handleLogin} >
        {loadingAuth ? (
          <ActivityIndicator number={7} duration={200} activeColor="#FFF" borderWidth={2} borderRadius="40%" diameter={15}/>
        ) : (
          <text className={styles.submitText}>Acessar</text>
        )}
      </button>

      <button className={styles.cadButton} onClick={handleClick}>
        <p className={styles.cadText}>Cadastre-se</p>
      </button>

    </div>
  )
}
