import useCardLogic from 'src/features/cardEditor/cardLogic/useCardLogic';
import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
import useCardDebug from 'src/features/cardEditor/debug/hooks/useCardDebug';
import useBase64Img from '@hooks/useBase64Img';
import { FC } from 'react';
import { StyledImg, Wrapper } from './styles';

const PrevolveImg: FC = () => {
  const { hasPrevolve } = useCardLogic();
  const { prevolveImgSrc } = useCardOptions();
  const { prevolveImgSrc: debugImgSrc } = useCardDebug();
  const src = useBase64Img(prevolveImgSrc ?? debugImgSrc);

  if (!hasPrevolve || !src) return null;

  return (
    <Wrapper>
      <StyledImg src={src} alt="" />
    </Wrapper>
  );
};

export default PrevolveImg;
