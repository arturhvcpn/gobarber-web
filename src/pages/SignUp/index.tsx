import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock,FiUser, FiArrowLeft} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import api from '../../services/api';

import { useToast } from '../../hooks/toast' ;

import getValidationErrors from '../../utils/getValidationErros';

import { Container, Content, AnimationContainer,  Background } from './styles'
import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

interface SignUpFormData{
  name:string;
  email:string;
  password:string;
}

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback( async (data: SignUpFormData) =>{
    try {

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string().required('E-mail Obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'Mínimo de 6 caracteres'),
      });

      await schema.validate(data,{
        abortEarly:false,
      });

      await api.post('/users',data);

      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro Realizado',
        description: 'Você já pode fazer seu logon no GoBarber!',
      });

    } catch (err) {
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
      addToast({
        type: 'error',
        title: 'Erro na Cadastro',
        description: 'Ocorreu um erro ao realizar o cadastro, tente novamente.',
      });
    }

  },[addToast, history]);
  return(
    <Container>
    <Background/>
      <Content>
        <AnimationContainer>
        <img src={logoImg} alt="GoBarber"/>

        <Form ref={formRef}onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input icon={FiUser} name= "name" placeholder="Name"/>
          <Input icon={FiMail} name= "email" placeholder="E-mail"/>

          <Input icon={FiLock} name= "password" type="password" placeholder="Senha"/>

          <Button type="submit">Cadastrar</Button>
        </Form>

          <Link to="/">
            <FiArrowLeft/>
            Voltar para Logon
          </Link>
        </AnimationContainer>
      </Content>
  </Container>
  );
}

export default SignUp;
