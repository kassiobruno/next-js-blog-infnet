import styled from 'styled-components';
import {Container, Button} from 'reactstrap';
import {GrBitcoin} from 'react-icons/gr'

export const ContainerLogin = styled(Container)`
  background-color: #212529;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 0 5px 0;
  margin: 5px;
  color: #DCDCDC;
  text-transform: uppercase;
  font-weight: 900;
`;
export const SubmitButton = styled(Button)`
  background-color: #00dcc9;
  width: 20%;
  height: 40px;
  border-radius: 7px;
  margin-top: 10px;
`;

export const SubmitText = styled.text`
  color: #FFF;
  text-transform: uppercase;
  font-weight: 900;
`;

export const CadButton = styled(Button)`
  background-color: #00dcc9;
  width: 20%;
  height: 40px;
  border-radius: 7px;
  margin-top: 20px;
`;

export const CadText = styled.text`
  color: #FFF;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px;
`;

export const Icon = styled(GrBitcoin)`
  color: #00dcc9;
  font-size: 100px;
  padding-bottom: 20px;
`;

export const IconText = styled.text`
  justify-content: center;
  color: #FFF;
  font-weight: 900;
  font-size: 25px;
  padding-bottom: 50px;
`;

export const IconBack = styled(Button)`
  background-color: #C70039;
  width: 60%;
  height: 40px;
  border-radius: 7px;
  margin-top: 10px;
`;

export const BackText = styled.text`
  color: #FFF;
  text-transform: uppercase;
  font-weight: 900;
`;