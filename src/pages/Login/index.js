import { Button } from '../../components';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginContainerStyled, SpanStyled, PStyled } from './login.styled';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <LoginContainerStyled>
      <div>
        <h1>Welcome to <SpanStyled>AIVO</SpanStyled> Streaming App</h1>
        <PStyled>Please, log in into the application</PStyled>
      </div>
      <Button
        id='login'
        type='secondary'
        title='Login'
        width='100%'
        onClick={() => loginWithRedirect()}
      />
    </LoginContainerStyled>
  );
};

export default Login;
