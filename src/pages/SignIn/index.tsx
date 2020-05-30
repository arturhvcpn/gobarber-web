import React from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import {Container, Content, Background} from './styles'
import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
  <Container>
    < Content>
    <img src={logoImg} alt="GoBarber"/>

    <form>
      <h1>Faca seu logon</h1>

      <Input icon={FiMail} name= "email" placeholder="E-mail"/>

      <Input icon={FiLock} name= "password" type="password" placeholder="Senha"/>

      <Button type="submit">Entrar</Button>

      <a href="forgot">Esqueci minha senha</a>
    </form>

    <a href="login">
      <FiLogIn/>
      Criar Conta
      </a>

    </Content>
    <Background/>
  </Container>

);

export default SignIn;
