import React from  'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toast';
import { Container} from './styles';
import Toast from './Toast';
interface ToastContainerProps{
  messages: ToastMessage[];
}

const ToastContainer:React.FC<ToastContainerProps> = ({ messages }) =>{
  const messageWithTransitions = useTransition(
      messages,
      message => message.id,
      {
        from: {right:'-120%', opacity:0, transform:'translate3d(0,-40%,0)'},
        enter: {right:'0%',opacity:1,transform:'translate3d(0,0%,0)'},
        leave: {right:'-120%',opacity:0,transform:'translate3d(0,-40%,0)'},
      }
     );

  return (
    <Container>
      {messageWithTransitions.map(({item, props, key}) => (
          <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
