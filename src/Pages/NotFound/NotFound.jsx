import  NotFound from '../NotFound-1.png';
import { Wrapper, ImageError } from './NotFoundStyled';

const PageNotFound = () => {
  return (
    <Wrapper>
      <ImageError src={NotFound} width="350" alt="Page-Not-Found" />
    </Wrapper>
  );
};

export default PageNotFound;