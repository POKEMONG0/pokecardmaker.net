import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { MoveDescriptionText } from './styles';

const Move1Description: FC = () => {
  const { move2 } = useCardOptions();
  const { movesOutline, movesTextColor } = useCardStyles();

  return (
    <MoveDescriptionText $outline={movesOutline} $color={movesTextColor}>
      {move2?.description}
    </MoveDescriptionText>
  );
};

export default Move1Description;