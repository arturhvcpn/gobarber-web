import React, {useRef, useCallback} from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErros';
import {Container, Content, Background} from './styles'
import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data:object) =>{
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail Obrigatório'),
        password: Yup.string().required('Senha Obrigatória'),
      });

      await schema.validate(data,{
        abortEarly:false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  },[]);

  return (
  <Container>
    <Content>
    <img src={logoImg} alt="GoBarber"/>

    <Form ref={formRef} onSubmit={handleSubmit}>
      <h1>Faça seu logon</h1>

      <Input icon={FiMail} name= "email" placeholder="E-mail"/>

      <Input icon={FiLock} name= "password" type="password" placeholder="Senha"/>

      <Button type="submit">Entrar</Button>

      <a href="forgot">Esqueci minha senha</a>
    </Form>

    <a href="login">
      <FiLogIn/>
      Criar Conta
      </a>

    </Content>
    <Background/>
  </Container>
  );
}

export default SignIn;
