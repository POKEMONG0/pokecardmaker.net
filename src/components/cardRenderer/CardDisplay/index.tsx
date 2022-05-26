import { baseFontSize, cardImgAspect, cardImgWidth } from '@constants';
import { FC, useMemo } from 'react';
import { useElementSize } from 'usehooks-ts';
import CardImage from '../components/CardImage';
import Name from '../components/Name';
import SvgHelpers from '../components/SvgHelpers';
import { CardContainer } from './styles';

const CardDisplay: FC = () => {
  const [squareRef, { width }] = useElementSize();

  // TODO: This crashes often when resizing, maybe make a new useElementSize hook
  // TODO: Debounce this
  const fontSize = useMemo<number>(
    () => (width ? width / (cardImgWidth / baseFontSize) : baseFontSize),
    [width],
  );

  // TODO: Debounce this
  const height = useMemo<number>(() => width * cardImgAspect, [width]);

  return (
    <CardContainer
      id="card"
      $fontSize={fontSize}
      $height={height}
      ref={squareRef}
    >
      <SvgHelpers />
      <Name />
      <CardImage />
    </CardContainer>
  );
};

export default CardDisplay;