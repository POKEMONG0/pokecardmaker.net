import { css, styled } from '@css';

export const Wrapper = styled('div')<{ $hasMove2: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.2em;

  ${({ $hasMove2 }) =>
    !$hasMove2 &&
    css`
      margin: auto 0;
    `}
`;

export const TitleBar = styled('div')`
  display: flex;
  width: 94.6%;
  margin-left: 2.2%;
  align-items: flex-end;
  gap: 0.5em;
`;

export const TextContainer = styled('div')`
  padding: 0 3.5%;
`;
