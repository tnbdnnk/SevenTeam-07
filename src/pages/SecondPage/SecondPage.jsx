import { Container, Block, Title, StyledLink } from './SecondPage.styled';
import Sidebar from '../../components/Sidebar/Sidebar'

const SecondPage = () => {
  return (
    <Container>
      <Block>
        <Title>Second Page</Title>
        <Sidebar />
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default SecondPage;
