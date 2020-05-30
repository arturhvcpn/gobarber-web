import React from 'react';
import { FiMail, FiLock,FiUser, FiArrowLeft} from 'react-icons/fi';

import { Container, Content, Background } from './styles'
import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
  <Container>
    <Background/>
      < Content>
      <img src={logoImg} alt="GoBarber"/>

      <form>
        <h1>Faça seu Cadastro</h1>

        <Input icon={FiUser} name= "name" placeholder="Name"/>
        <Input icon={FiMail} name= "email" placeholder="E-mail"/>

        <Input icon={FiLock} name= "password" type="password" placeholder="Senha"/>

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft/>
        Voltar para Logon
        </a>

      </Content>
  </Container>

);

export default SignIn;
