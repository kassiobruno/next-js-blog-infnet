import React, { useState, useContext} from 'react';
import { AuthContext } from '../../contexts/auth';
import styles from './styles.module.scss';
import { ActivityIndicator } from 'react-activity-indicator';
import { useRouter } from 'next/router';

export default function SignUp() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signUp, loadingAuth} = useContext(AuthContext);
  const router = useRouter();

  function handleSignUp() {
    signUp(email, password, nome);
  }

  function handleClick() {
    router.push('/posts');
  }

  return (
    <div className={styles.containerLogin}>

      <div className={styles.formGroup}>
        <label>
          Nome
          <br/>
          <input className={styles.input}
            name="nome"
            placeholder='Digite seu nome'
            value={nome}
            type="text"
            onChange={e => setNome(e.target.value)}          
          />
        </label>
      </div>

      <div className={styles.formGroup}>
        <label>
          Email
          <br/>
          <input className={styles.input}
            name="email"
            placeholder='Digite seu E-mail'
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)} 
          />
        </label>
      </div>

      <div className={styles.formGroup}>
        <label>
          Senha
          <br/>
          <input className={styles.input}
            name="password"
            placeholder='Digite sua senha'
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}          
          />
        </label>
      </div>

      <button className={styles.submitButton} type="submit" onClick={()=> {handleSignUp(); handleClick();}}>
        {loadingAuth ? (
          <ActivityIndicator number={7} duration={200} activeColor="#FFF" borderWidth={2} borderRadius="40%" diameter={15} />
        ) : (
          <p className={styles.submitText}>Cadastrar</p>
        )}
      </button>

    </div>
  )
}
