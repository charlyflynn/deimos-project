import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="">Home</Link>
      <Link to="data">Data</Link>
      <Link to="info">Info</Link>
    </StyledHeader>
  );
};

export default Header;
