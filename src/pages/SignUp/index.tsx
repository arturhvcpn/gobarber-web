import React, { useCallback } from 'react';
import { FiMail, FiLock,FiUser, FiArrowLeft} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Content, Background } from './styles'
import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback( async (data:object) =>{
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string().required('E-mail Obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'Mínimo de 6 caracteres'),
      });

      await schema.validate(data,{
      abortEarly:false,
    });

    } catch (error) {
      console.log(error);
    }
  },[]);
  return(
    <Container>
    <Background/>
      < Content>
      <img src={logoImg} alt="GoBarber"/>

      <Form onSubmit={handleSubmit}>
        <h1>Faça seu Cadastro</h1>

        <Input icon={FiUser} name= "name" placeholder="Name"/>
        <Input icon={FiMail} name= "email" placeholder="E-mail"/>

        <Input icon={FiLock} name= "password" type="password" placeholder="Senha"/>

        <Button type="submit">Cadastrar</Button>
      </Form>

      <a href="login">
        <FiArrowLeft/>
        Voltar para Logon
        </a>

      </Content>
  </Container>
  );
}


export default SignUp;
