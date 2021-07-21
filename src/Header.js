import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  justify-content: space-around;

  a {
    font-size: 36px;
    text-decoration: none;
    color: lightsteelblue;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="">titan</Link>
      <Link to="orbit">orbit</Link>
      <Link to="data">data</Link>
      <Link to="info">info</Link>
    </StyledHeader>
  );
};

export default Header;
