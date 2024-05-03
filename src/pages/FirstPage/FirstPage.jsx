// import { Container, Title, StyledImage } from './FirstPage.styled';
import { Container} from './FirstPage.styled';
// import example from '../../assets/example.png';

import ScreensPage from '../../components/ScreensPage/ScreensPage';

const FirstPage = () => {
  return (
    <Container>
      <ScreensPage></ScreensPage>
      {/* <Title>First Page</Title>
      <StyledImage src={example} alt="Example" /> */}
    </Container>
  );
};

export default FirstPage;
