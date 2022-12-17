import {useState, useContext} from 'react';
import {AuthContext} from '../../contexts/auth';
import {Input, Label} from 'reactstrap';
import { ContainerLogin, FormGroup, SubmitButton, SubmitText, CadButton, CadText } from './styles';
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
    router.push('/signup');
  }

  return (
    <ContainerLogin>

      <FormGroup>
        <Label>
          Email
          <Input
          name="email"
          placeholder='Digite seu E-mail'
          value={email}
          type="email"
          onChange={e => setEmail(e.target.value)} />
        </Label>
      </FormGroup>

      <FormGroup>
        <Label>
          Senha
          <Input
          name="password"
          placeholder='Digite sua senha'
          value={password}
          type="password"
          onChange={(e => setPassword(e.target.value))}
           />
        </Label>
      </FormGroup>

      <SubmitButton type="submit" onClick={handleLogin}>
        {loadingAuth ? (
          <ActivityIndicator number={4} duration={200} activeColor="#0070bf" borderWidth={2} borderRadius="50%" diameter={25} />
        ) : (
          <SubmitText>Acessar</SubmitText>
        )}
      </SubmitButton>

      <CadButton onClick={handleClick}>
        <CadText>Cadastre-se</CadText>
      </CadButton>

    </ContainerLogin>
  )
}
