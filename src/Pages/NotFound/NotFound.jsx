import { NotFound } from '../NotFound.jpg';
import { Wrapper, ImageError } from './NotFoundStyled';

const NotFound = () => {
  return (
    <Wrapper>
      <ImageError src={NotFound} width="350" alt="Not-Found" />
    </Wrapper>
  );
};

export default NotFound;