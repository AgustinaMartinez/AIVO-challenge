import NavSideDrawer from './NavSideDrawer';
import { BackdropStyled } from './sideDrawer.styled';

const SideDrawer = ({ click, sideDraweOpen }) => {
  return (
    <>
      <NavSideDrawer show={sideDraweOpen} setShow={click}/>
      {sideDraweOpen && (<BackdropStyled onClick={click} />)}
    </>
  );
};

export default SideDrawer;
