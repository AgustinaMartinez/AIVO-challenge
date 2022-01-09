import { Footer, Header } from '../components';
import { ChildrenLayoutStyled } from './layout.styled';

const Layout = ({ children }) => (
  <>
    <Header />
    <ChildrenLayoutStyled>
      { children  }
    </ChildrenLayoutStyled>
    <Footer />
  </>
);

export default Layout;
