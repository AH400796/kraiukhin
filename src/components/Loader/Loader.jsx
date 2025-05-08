import { RotatingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export default function Loader() {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="#bb4646"
        strokeWidth="3"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </Wrapper>
  );
}
