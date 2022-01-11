import { LoginButton } from '../../components';
import { LoginContainerStyled, SpanStyled, PStyled } from './login.styled';

const Login = () => {
  return (
    <LoginContainerStyled>
      <div>
        <h1>Welcome to <SpanStyled>AIVO</SpanStyled> Streaming App</h1>
        <PStyled>Please, log in into the application</PStyled>
      </div>
      <LoginButton />
    </LoginContainerStyled>
  )
}

export default Login;
